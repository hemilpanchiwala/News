import React, {Component} from 'react';
import {Text, View} from 'react-native'
var moment = require('moment')

export default class time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time
  }

  render() {
    let time = moment(this.date).fromNow()
    return (
      <View>
        <Text> {time} </Text>
      </View>
    );
  }
}
