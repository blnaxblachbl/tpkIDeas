import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'

class LoginPage extends Component {
    static navigationOptions = {
        title: 'This is login page',
    }

    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
    }

    login = () => {
        if (this.state.login && this.state.password){
            this.props.navigation.navigate('Tabs')
        }else{
            Alert.alert(
                "IdeaBug",
                "Заполните все поля",
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
            )
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <RkAvoidKeyboard style={styles.container}>
                <View style={{ width: "75%" }}>
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ login: text }) }}
                        placeholder='Email'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                    />
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Password'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <RkButton style={{ marginTop: 15, width: "75%", backgroundColor: 'red' }} contentStyle={{ color: 'white' }} onPress={() => { this.login() }}>
                    Sing in
                </RkButton>
                <RkButton style={{ marginTop: 15, width: "75%", backgroundColor: 'red' }} contentStyle={{ color: 'white' }} onPress={() => { navigate('Registration') }}>
                    Sing up
                </RkButton>
            </RkAvoidKeyboard>
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

export default LoginPage;