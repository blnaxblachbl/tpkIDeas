import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'
import firebase from 'firebase';
import 'firebase/firestore'


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
            confitm: "",
            scrollPadding: 0,
            email: '',
        }
    }

    registration = () => {
        if (this.state.name && this.state.surname && this.state.password && this.state.confitm) {
            if (this.state.password == this.state.confitm) {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((data) => {
                        let db = firebase.firestore()
                        db.collection("users").doc(data.uid).set({
                            name: this.state.name,
                            surname: this.state.surname,
                            username: this.state.email.split('@')[0]
                        }).then((res) => {
                            AsyncStorage.setItem('uid', data.uid )
                            .then(()=>{
                                this.props.navigation.navigate('Tabs')
                            })
                        })
                    })
                    .catch(function (error) {
                        alert(JSON.stringify(error))
                    })
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
            <ScrollView contentContainerStyle={{ paddingBottom: this.state.scrollPadding, alignItems: "center" }} style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder='Почта'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
                        style={{ height: 50 }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ name: text }) }}
                        placeholder='Имя'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ surname: text }) }}
                        placeholder='Фамилия'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
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
                        style={{ height: 50 }}
                        secureTextEntry={true}
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
                    />
                    <RkTextInput
                        rkType='rounded'
                        onChangeText={(text) => { this.setState({ confitm: text }) }}
                        placeholder='Подтвердите пароль'
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        style={{ height: 50 }}
                        secureTextEntry={true}
                        onFocus={() => { this.setState({ scrollPadding: 250 }) }}
                        onBlur={() => { this.setState({ scrollPadding: 0 }) }}
                    />
                    <RkButton rkType='outline' style={{ height: 50, marginTop: 10, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { this.registration() }}>
                        Зарегистрироваться
                    </RkButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: window.height,
        width: "80%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RegistrationPage;