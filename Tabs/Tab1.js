import React, { Component } from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left,  Body, Right, Button } from 'native-base';
import * as Font from 'expo-font';

export default class Tab1 extends Component {
  render() {
    return (
      <Container>
          <Content>
              <List>
                  <ListItem thumbnail>
                    <Left>
                        <Thumbnail circular source={{uri: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'}} />
                    </Left>
                    <Body>
                        <Text>Hemil</Text>
                        <Text numberOfLines={1}>Its time to build</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => ToastAndroid.show('Welcome to the new world', ToastAndroid.SHORT)}>
                            <Text>Click</Text>
                        </Button>
                    </Right>
                  </ListItem>
              </List>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#009387'
    }
})