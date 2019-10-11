import React, { Component } from 'react';
import { View, Text, Dimensions, Modal, StyleSheet, ToastAndroid, Share } from 'react-native';
import {WebView} from 'react-native-webview';
import { Container, Header, Content, List, ListItem, Thumbnail, Left,  Body, Right, Button, Icon } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 200;
const webViewWidth = Dimensions.get('window').width;

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onHandleClose = () => {
      return this.props.onClose()
  }

  onHandleShare = () => {
      
  }

  onError = () => {
      return ToastAndroid.show('Error', ToastAndroid.SHORT)
  }

  render() {
      const {showModal, articleData} = this.props
      const {url} = articleData
      console.log(url)
    if(url != undefined){
        return (
            <View>
              <Modal
                  animationType="slide"
                  transparent
                  visible={showModal}
                  onRequestClose={this.onHandleClose}>
      
                      <Container style={{margin: 15, marginBottom: 0, backgroundColor: 'white'}}>
                          <Header style={{backgroundColor: '#009387'}}>
                              <Left>
                                  <Button onPress={this.onHandleClose}>
                                      <Icon name='close' style={{color: 'white', fontSize: 12}}/>
                                  </Button>
                              </Left>
                              <Body>
                                  <Text numberOfLines={2} style={{fontWeight: 'bold'}}>{articleData.title}</Text>
                              </Body>
                              <Right>
                                  <Button onPress={this.onHandleShare}>
                                      <Icon name='share' style={{color: 'white', fontSize: 12}} />
                                  </Button>
                              </Right>
                          </Header>
                          <Content style={{height: webViewHeight}}>
                          <View style={{flex: 1, flexDirection:'column'}}>
                            <WebView source={{uri: url}} 
                                startInLoadingState={true}
                                style={{width:webViewWidth-20, height:webViewHeight,justifyContent: "center", marginTop: 20}}
                                 />
                        </View>
                          </Content>
                      </Container>
      
                  </Modal>
            </View>
          );
    }else{
        return null;
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    web: {
        marginTop: 20,
        maxHeight: 200,
        width: 320,
        flex: 1
      }
})
