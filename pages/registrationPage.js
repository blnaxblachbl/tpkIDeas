import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'

class RegistrationPage extends Component {
    static navigationOptions = {
        title: 'This is registration page',
    }

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            password: "",
            confitm: ""
        }
    }

    registration = () => {
        if (this.state.name && this.state.surname && this.state.password && this.state.confitm) {
            if (this.state.password == this.state.confitm) {
                this.props.navigation.navigate('Tabs')
            } else {
                Alert.alert(
                    "IdeaBug",
                    "Подтвердите пароль",
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                )
            }
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
            <RkAvoidKeyboard style={styles.container}>
                <View style={{ width: "75%" }}>
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ name: text }) }}
                        placeholder='Email'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                    />
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ surname: text }) }}
                        placeholder='Name'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                    />
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Surname'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                    />
                    <RkTextInput
                        onChangeText={(text) => { this.setState({ confitm: text }) }}
                        placeholder='Password'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                        secureTextEntry={true}
                    />
                    <RkTextInput
                        placeholder='Confitm password'
                        inputStyle={{
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <RkButton style={{ marginTop: 15, width: "75%", backgroundColor: 'red' }} contentStyle={{ color: 'white' }} onPress={() => { this.registration() }}>
                    Зарегистрироваться 
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

export default RegistrationPage;