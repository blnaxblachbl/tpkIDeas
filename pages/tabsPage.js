import React, { Component } from 'react';
import { Tabs } from "../routes/tabNavigator";
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

class TabsPage extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: (
                <Image resizeMode="contain" style={{ height: 30, width: "50%", alignSelf: 'center' }} source={require("../assets/Logo.png")} />
            ),
            headerTitleStyle: {
                alignSelf: "center"
            },
            headerLeft: (
                <Icon name="search" style={{ marginLeft: 15 }} size={30} color={"black"} onPress={() => params.handleSearch()} />
            ),
            headerRight: (
                //<Icon name="plus" style={{ marginRight: 15 }} size={30} color={"black"} onPress={() => params.handleAdd()} />
                <View style={{ marginRight: 15, backgroundColor: "transparent", width: 30}} />
            )
        }
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