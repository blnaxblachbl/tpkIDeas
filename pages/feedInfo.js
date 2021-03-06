import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, Image, SectionList, ImageBackground, Dimensions } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';

const window = Dimensions.get('window');

class FeedInfo extends Component {
    static navigationOptions = {
        title: 'Новость'
    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { params } = this.props.navigation.state
        return (
            <ScrollView style={styles.content}>
                <View style={{ alignItems: "center" }}>
                    <Image source={{ uri: params.img }} resizeMode="cover" style={{ width: window.width, height: window.height/2.5 }} />
                    <Text style={{ padding: 10, width: "100%"}}>{params.name}</Text>
                    <Text style={{ padding: 10, width: "100%" }}>{params.footer}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default FeedInfo;