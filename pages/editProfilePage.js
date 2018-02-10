import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, Image, Dimensions, ScrollView } from 'react-native';
import { RkCard, RkButton, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import { ImagePicker } from 'expo';

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
            img: " "
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state
        this.setState({
            name: params.name,
            surname: params.surname,
            specialization: params.specialization,
            about: params.about,
            img: params.img
        })
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ img: result.uri });
        } else {
            alert("error")
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
                <RkButton rkType='outline' style={{ height: 50, marginTop: 20, marginBottom: 20, backgroundColor: 'transparent', width: '100%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { }}>
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