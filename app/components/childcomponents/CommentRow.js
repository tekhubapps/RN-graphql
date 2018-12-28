'use strict';

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types'; 

/**
 * Renders the comment row ui in the list
 */
export default class CommentRow extends PureComponent {

  //Validstes the props with the types 
  static propTypes = {
    comment: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { body, author: { username }  } = this.props.comment.item;
    return (
      <View style={{padding: 10,flexDirection:'column'}}>
        <View  style={{flex: 1,flexDirection:'column', alignItems:'center'}}>
          <Text style={{color:'white', marginRight: 15, fontSize:16, flex: 1}}>{body}</Text>
        </View>
        <Text style={{color:'white', fontSize:14, textAlign:'right', marginRight: 20, marginTop: 10, fontStyle:'italic'}}>{'Commented by : '} <Text style={{color:'white', fontSize:14, fontWeight:'700'}}>{username}</Text></Text>
        <View style={{marginTop: 10, height: 1, backgroundColor:'#7B7B7B'}} />
      </View>
    );
  }
}
