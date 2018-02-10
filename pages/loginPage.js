import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'
import * as firebase from 'firebase';

class LoginPage extends Component {
    static navigationOptions = {
        title: 'Авторизация',
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
            this.props.navigation.navigate('Tabs')
            /*
            firebase.auth().signInWithEmailAndPassword(this.state.login, this.state.password)
                .fetch((data) => {
                    alert(JSON.stringify(data))
                })
                .catch(function (error) {
                    console.log(error);
                })
                */

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
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
                <RkAvoidKeyboard style={styles.container}>
                    <View style={{ width: "80%" }}>
                        <RkTextInput
                            rkType='rounded'
                            onChangeText={(text) => { this.setState({ login: text }) }}
                            placeholder='Почта'
                            inputStyle={{
                                backgroundColor: 'transparent',
                                color: 'black',
                            }}
                            caretHidden={true}
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
                            caretHidden={true}
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
                    <View style={{ height: 30 }} />
                </RkAvoidKeyboard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default LoginPage;