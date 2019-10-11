import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Container, Header, Left, Right, Body, Tab, Tabs, Title} from 'native-base';
import Tab3 from './Tab3';
import Tab2 from './Tab2';
import Tab1 from './Tab1';

export default class TabScreen extends Component {

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <Text style={styles.heading}>News</Text>
                </View>
                <Tabs>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="General">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="Sports">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="Technology">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    header: {
        padding: 20,
        backgroundColor: '#009387'
    }
})