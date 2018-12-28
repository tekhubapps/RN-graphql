'use strict';

import React, { PureComponent } from 'react';
import { 
  View, 
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import TitleBar from './childcomponents/TitleBar';
import PropTypes from 'prop-types'; 
import LoadingScreen from './childcomponents/LoadingScreen';
import MovieRow from './childcomponents/MovieRow';
import {Actions} from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSelectedMovie } from '../actions/MoviesListActions';


import { graphql } from 'react-apollo';
import { RedditQuery } from '../util/Queries';

class MoviesListScreen extends PureComponent {

  //Validstes the props with the types 
  static propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,

    setSelectedMovie: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  /**
   * Renders the row of the ist 
   */
  _renderItem = (rowData) => {
    return(
      <MovieRow 
        movie={rowData}
        onListSeleted={(selectedMovie) => {
          this.props.setSelectedMovie(selectedMovie);
          Actions.movieDetailScreen();
        }}
      />
    );
  }

  /**
   * Renders the list of movies
   */
  _renderList() {
    const { loading } = this.props.data;
    if (loading) {
      return(
        <LoadingScreen
          isLoading={loading}
          message={'No Movies'}
        />
      );
    } else {

      const { reddit : { subreddit: { newListings  }}} = this.props.data;
      return(
        <View style={{flex: 1}}>
          <View style={{height: 30,backgroundColor: '#7B7B7B', alignContent:'center', justifyContent:'center', marginBottom: 10}}>
            <Text style={{marginLeft: 10, fontSize:18, fontWeight: 'bold', color:'white'}}>{'All Movies'}</Text>
          </View>
          <FlatList
            data={newListings}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
          />
        </View>
            
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "white"/>
        <TitleBar title={'Movies'} />
        {this._renderList()}
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
  return {};
};
    
/**
   * Maps the actions of the component as props of this component
   * @param {*} dispatch Dispatch is to call the actions
   */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    setSelectedMovie,
  }, dispatch);
};
  
const MoviesListScreenWithGraphQL = graphql(RedditQuery)(MoviesListScreen);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListScreenWithGraphQL);