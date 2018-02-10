import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, Image, Dimensions } from 'react-native';
import { RkCard, RkButton, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';

const window = Dimensions.get('window');

class ProfileEditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            specialization: "",
            about: ""
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ height: "auto" }}>
                <View style={styles.profileHeader}>
                    <Image style={{ marginLeft: 10, height: 90, width: 90, borderRadius: 45 }} source={{ uri: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg' }} />
                    <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14 }}>My name, my surname</Text>
                        <Text style={{ fontSize: 14 }}>My specialization</Text>
                    </View>
                </View>
                <RkTextInput
                    rkType='rounded'
                    onChangeText={(text) => { this.setState({ name: text }) }}
                    placeholder='Имя'
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
                    onChangeText={(text) => { this.setState({ surname: text }) }}
                    placeholder='Фаиилия'
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
                    onChangeText={(text) => { this.setState({ specialization: text }) }}
                    placeholder='Специальность'
                    inputStyle={{
                        backgroundColor: 'transparent',
                        color: 'black',
                    }}
                    caretHidden={true}
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
                    }}
                    caretHidden={true}
                    autoCorrect={false}
                    style={{ height: 400 }}
                />
            </View>
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
        marginTop: 25
    }
});

export default ProfileEditPage;