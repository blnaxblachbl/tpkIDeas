import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'

class RegistrationPage extends Component {
    static navigationOptions = {
        title: 'Регистрация',
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
                <View style={{ width: "80%", marginBottom: 30 }}>
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ name: text }) }}
                        placeholder='Почта'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ surname: text }) }}
                        placeholder='Имя'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder='Фамилия'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ confitm: text }) }}
                        placeholder='Пароль'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                        secureTextEntry={true}
                    />
                    <RkTextInput
                        rkType='rounded'
                        placeholder='Подтвердите пароль'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                        secureTextEntry={true}
                    />
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 10, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { this.registration() }}>
                        Зарегистрироваться
                    </RkButton>
                </View>
            </RkAvoidKeyboard>
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

export default RegistrationPage;