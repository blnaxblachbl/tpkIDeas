import React, { Component } from 'react';
import { Tabs } from "../routes/tabNavigator";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class TabsPage extends Component {
    static navigationOptions = {
        title: '',
        headerLeft: null
    }

    render() {
        return (
            <Tabs />
        );
    }
}

export default TabsPage;