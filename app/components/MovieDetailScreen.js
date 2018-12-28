'use strict';

import React, { PureComponent } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import TitleBar from './childcomponents/TitleBar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import CommentRow from './childcomponents/CommentRow';

/**
 * Displayed the detailed info of the comments screen
 */
class MovieDetailScreen extends PureComponent {

    //Validates the props passed to ths component
    static propTypes = {
      selectedMovie: PropTypes.object,
    };

    constructor(props) {
      super(props);
    }

  /**
   * Renders the row of the ist 
   */
  _renderItem = (comment) => {
    return(
      <CommentRow 
        comment={comment}
      />
    );
  }

  /**
   * Renders the list of comments
   */
  _renderList() {
    const { comments } = this.props.selectedMovie.item;
    if (comments.length > 0) {
      return(
        <FlatList
          data={comments}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.body}
          showsVerticalScrollIndicator={false}
        />
      );
     
    } else {
      return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <Text style={{color:'white', fontSize: 16}}>{'No comments found for the movie'}</Text>
        </View>
      );
    }
  }

  render() {
    const { title } = this.props.selectedMovie.item;
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "white"/>
        <TitleBar title={'Movie Info'} isBackButtonNeeded={true}/>

        <View style={{flex: 1,flexDirection:'column'}}>
          <Text style={{fontSize:18, fontWeight:'bold', color:'white', marginTop:10, marginLeft: 10}}>{'Title : '}</Text>
          <Text style={{fontSize:16,  color:'white', marginTop:10, marginLeft: 10}}>{title}</Text>

          <Text style={{fontSize:18, fontWeight:'bold', color:'white', marginTop:20, marginLeft: 10, marginBottom:10}}>{'Comments : '}</Text>
          {this._renderList()}
        </View>
      </View>
    );
  }
}

/**
 * Maps the state of the redux store to props to this component
 * @param {*} state state which is in redux store
 * @param {*} props props of the component
 */
const mapStateToProps = (state, props) => {
  const { selectedMovieState: { selectedMovie }} = state;    
  return {
    selectedMovie,
  };
};
      
/**
     * Maps the actions of the component as props of this component
     * @param {*} dispatch Dispatch is to call the actions
     */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
      
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
  