import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

class CheckPage extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        const { navigate } = this.props.navigation
        firebase.initializeApp({
            apiKey: "AIzaSyDwqV2DunSWgJIhBA-prQ0H1A_ClFtWUps",
            authDomain: "idea-bag.firebaseapp.com",
            databaseURL: "https://idea-bag.firebaseio.com",
            projectId: "idea-bag",
            storageBucket: "idea-bag.appspot.com",
            messagingSenderId: "183868654064",
            debug: true
        }); // инициализация базы данных
        AsyncStorage.getItem('uid')
        .then((data)=>{
            if(data != null) {
                navigate("Tabs")
            } else {
                navigate("LoginPage")
            }
        }) // проверка на авторизацию
    }

    render() {
        return null
    }
}

export default CheckPage;