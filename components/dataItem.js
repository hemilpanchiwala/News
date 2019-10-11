import React, {Component} from 'react';
import {Text, ToastAndroid} from 'react-native';
import {ListItem, Left, Thumbnail, Right, Button, Body} from 'native-base';
import Time from './time';


export default class DataItem extends Component{
    constructor(props) {
      super(props)

        this.state = {
            data: props.data
        }

    };

    onHandlePress = () => {
        const {url, title} = this.state.data
        this.props.onPress({url, title})

    }

    render() {
        return(
            <ListItem thumbnail>
                <Left>
                    <Thumbnail circular source={{uri: this.state.data.urlToImage != null ? this.state.data.urlToImage : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'}} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.state.data.title}</Text>
                    <Text numberOfLines={2}>{this.state.data.source.name}</Text>
                    {/* <Text>Date and Time: {this.state.data.publishedAt}</Text> */}
                    <Time time={this.state.data.publishedAt} />
                </Body>
                <Right>
                    <Button transparent onPress={this.onHandlePress}>
                        <Text>Click</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
    
}