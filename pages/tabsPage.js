import React, { Component } from 'react';
import { Tabs } from "../routes/tabNavigator";
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

class TabsPage extends Component {

    static navigationOptions = {
        header: null
    }
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
    }

    add = () => {
        const { navigate } = this.props.navigation;
        navigate('AddIdea')
    }

    search = () => {
        const { navigate } = this.props.navigation;
        navigate('Search')
    }

    render() {
        return (
            <Tabs />
        );
    }
}

export default TabsPage;