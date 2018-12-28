'use strict';

import React, { PureComponent } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'; 
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Renders the Movie Row UI in the list
 */
export default class MovieRow extends PureComponent {

  //Validstes the props with the types 
  static propTypes = {
    movie: PropTypes.object,

    onListSeleted: PropTypes.func,
  };

  render() {
    return(
      <TouchableOpacity
        onPress={() => {
          this.props.onListSeleted(this.props.movie);
        }}
      >
        <View style={{padding: 10,flexDirection:'column'}}>
          <View  style={{flex: 1,flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'white', marginRight: 15, fontSize:16, flex: 1}}>{this.props.movie.item.title}</Text>
            <Icon name="chevron-right" size={20} style={{color: '#7B7B7B' }} />
          </View>
          <View style={{marginTop: 20, height: 1, backgroundColor:'#7B7B7B'}} />
        </View>
      </TouchableOpacity>
    );
  }
}