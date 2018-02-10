import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, ScrollView } from 'react-native';
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
            password: "",
            scrollPadding: 0
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
            <ScrollView contentContainerStyle={{ paddingBottom: this.state.scrollPadding, alignItems: "center", justifyContent: "center" }} style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ login: text }) }}
                        placeholder='Почта'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        autoFocus={true}
                        caretHidden={true}
                        autoCorrect={false}
                        style={{ height: 50 }}
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
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
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
                    />
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 10, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { this.login() }}>
                        Войти
                        </RkButton>
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 20, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { navigate('Registration') }}>
                        Зарегистрироваться
                        </RkButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        width: "80%"
    },
});

export default LoginPage;