import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';

class CheckPage extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDwqV2DunSWgJIhBA-prQ0H1A_ClFtWUps",
            authDomain: "idea-bag.firebaseapp.com",
            databaseURL: "https://idea-bag.firebaseio.com",
            projectId: "idea-bag",
            storageBucket: "idea-bag.appspot.com",
            messagingSenderId: "183868654064"
        });
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="transparent" onPress={() => { navigate('LoginPage') }}>
                    <Text>go to login page</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CheckPage;