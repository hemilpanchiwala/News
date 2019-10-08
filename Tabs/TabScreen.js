import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header, Left, Right, Body, Tab, Tabs, Title} from 'native-base';
import Tab3 from './Tab3';
import Tab2 from './Tab2';
import Tab1 from './Tab1';

export default class TabScreen extends Component {

    render() {
        return (
            <Container>
                <Header hasTabs style={styles.header}>
                    <Left />
                    <Body>
                        <Text style={styles.heading}>Newss</Text>
                    </Body>
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} 
                    activeTabStyle={{backgroundColor: '#009387'}} 
                    textStyle={{color: 'white'}}
                    activeTextStyle={{color: 'white'}}
                    heading="Tab3">
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
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35
    },
    header: {
        backgroundColor: '#009387'
    }
})