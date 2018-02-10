import React, { Component } from 'react';
import { Tabs } from "../routes/tabNavigator";
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

class TabsPage extends Component {
    static navigationOptions = {
        title: (
            <Image source={require("../assets/Logo.png")}/>
        ),
        headerTitleStyle: {
            alignSelf: "center"
        },
        headerLeft: (
            <Icon name="search" style={{marginLeft: 15}} size={30} color={"black"}/>
        ),
        headerRight: (
            <Icon name="plus" style={{marginRight: 15}} size={30} color={"black"}/>
        )
    }

    render() {
        return (
            <Tabs />
        );
    }
}

export default TabsPage;