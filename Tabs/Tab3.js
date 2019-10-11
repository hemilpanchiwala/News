import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet, ToastAndroid, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left,  Body, Right, Button } from 'native-base';
import {getArticles} from '../service/news'
import DataItem from '../components/dataItem'
import Modal from '../components/modal'

export default class Tab3 extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            data: null,
            setModalVisibility: false,
            modalData: {}
        }
    }

    handleOnClickView = (article) => {
        this.setState({
            setModalVisibility: true,
            modalData: article
        })
    }

    handleOnClose = () => {
        this.setState({
            setModalVisibility: false,
            modalData: {}
        })  
    }

    componentDidMount() {
        getArticles('technology').then(data => {
            this.setState({
                isLoading: false,
                data: data
            })
        }, error => {
            Alert.alert('error', 'Something went wrong!!!')
        })
    }

  render() {

    let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      ) : (
        <List
          dataArray={this.state.data}
          renderRow={(item) => {
              return (
                <DataItem key={Math.random().toString(36).substring(7)} onPress={this.handleOnClickView} data={item} />
              )
          }} />
      )

    return (
      <Container>
          <Content>
            {view}
          </Content>
          <Modal 
            showModal={this.state.setModalVisibility}
            articleData={this.state.modalData}
            onClose={this.handleOnClose} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#009387'
    }
})