import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'
import * as firebase from 'firebase';

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
    }

    login = () => {
        if (this.state.login && this.state.password) {
            firebase.auth().signInWithEmailAndPassword(this.state.login, this.state.password)
                .then((data) => {
                    this.props.navigation.navigate('Tabs')
                })
                .catch(function (error) {
                    alert(JSON.stringify(error))
                })
        } else {
            Alert.alert(
                "IdeaBug",
                "Заполните все поля",
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
            )
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={{ width: "80%" }}>
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ login: text }) }}
                        placeholder='Почта'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        autoFocus={true}
                        autoCorrect={false}
                        style={{ height: 50 }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Пароль'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={{ height: 50 }}
                    />
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 10, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { this.login() }}>
                        Войти
                    </RkButton>
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 20, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { navigate('Registration') }}>
                        Зарегистрироваться
                    </RkButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50
    },
});

export default LoginPage;