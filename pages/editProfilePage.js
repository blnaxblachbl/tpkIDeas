import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, Image, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { RkCard, RkButton, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import { ImagePicker } from 'expo';
import firebase from 'firebase';
import 'firebase/firestore'

const window = Dimensions.get('window');

class ProfileEditPage extends Component {
    static navigationOptions = {
        title: 'Редактирование профиля'
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            specialization: "",
            about: "",
            img: " ",
            status: "",
            loading: false,
            info: null,
            isImagePicked: false,
            loading: false,
            base64: ''
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state
        this.setState({
            name: params.name,
            surname: params.surname,
            specialization: params.specialization.toString(),
            about: params.about,
            status: params.status,
            img: params.img,
            isImagePicked: false
        })

    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        if (!result.cancelled) {
            this.setState({ img: result.uri, isImagePicked: true, base64: result.base64 });
            //alert(JSON.stringify(this.state.base64))
        } else {
            alert("error")
        }
    }

    setUserData = async () => {
        try {
            let data = {
                name: this.state.name,
                surname: this.state.surname,
                status: this.state.status,
                spels: [this.state.specialization]
            }
            let uid = await AsyncStorage.getItem('uid');
            let db = firebase.firestore()
            await db.collection("users").doc(uid).set(data, { merge: true })
            this.setState({ loading: false });
            alert("ok")
        } catch (err) {
            this.setState({ loading: false });
            this.error = 'Произошла неизвестная ошибка. Попробуйте заново'
            console.error(err)
        }
    }

    setUserPhoto = async () => {
        this.setState({ loading: true });
        try {
            let uid = await AsyncStorage.getItem('uid');
            let storageRef = firebase.storage().ref()
            let photoRef = storageRef.child(uid + '/avatar.jpg')
            const url = await photoRef.putString(this.state.base64, 'base64');
            let db = firebase.firestore()
            await db.collection("users").doc(uid).set({ photo: url.downloadURL }, { merge: true })
            this.setUserData();
        } catch (err) {
            this.error = 'Произошла неизвестная ошибка. Попробуйте заново'
            console.error(err)
        }
    }

    save = () => {
        if (this.state.isImagePicked) {
            this.setUserPhoto();
        } else {
            this.setState({ loading: true });
            this.setUserData();
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 10, paddingBottom: 80 }}>
                <TouchableHighlight onPress={() => { this.pickImage() }} underlayColor="transparent">
                    <View style={styles.profileHeader}>
                        <Image style={{ height: 90, width: 90, borderRadius: 45 }} source={{ uri: this.state.img }} />
                        <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14 }}>Изменить фото профиля</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ name: text }) }}
                    placeholder='Имя'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                    }}
                    autoCorrect={false}
                    value={this.state.name}
                    style={{ height: 50 }}
                />
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ surname: text }) }}
                    placeholder='Фаиилия'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                    }}
                    autoCorrect={false}
                    value={this.state.surname}
                    style={{ height: 50 }}
                />
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ specialization: text }) }}
                    placeholder='Специальность'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                    }}
                    value={this.state.specialization}
                    autoCorrect={false}
                    style={{ height: 50 }}
                />
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ status: text }) }}
                    placeholder='Статус'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                    }}
                    value={this.state.status}
                    autoCorrect={false}
                    style={{ height: 50 }}
                />
                <Text style={{ margin: 10, fontSize: 14, paddingTop: 25, fontWeight: "bold" }}>Обо мне</Text>
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ about: text }) }}
                    placeholder='Обо мне'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        height: "auto",
                    }}
                    value={this.state.about}
                    multiline={true}
                    style={{ borderRadius: 15, borderWidth: 0.3, borderBottomWidth: 0.3 }}
                />
                <RkButton rkType='outline' style={{ height: 50, marginTop: 20, marginBottom: 20, backgroundColor: 'transparent', width: '100%', borderColor: 'red', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { this.save() }}>
                    Сохранить изменения
                </RkButton>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        paddingBottom: 50
    },
    profileHeader: {
        backgroundColor: '#fff',
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-around',
        marginTop: 25,
        marginBottom: 25
    }
});

export default ProfileEditPage;