import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, Image, Dimensions, AsyncStorage } from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import firebase from 'firebase';
import 'firebase/firestore'

const window = Dimensions.get('window');

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: (
                <Image resizeMode="contain" style={{ height: 30, width: "50%", alignSelf: 'center' }} source={require("../assets/Logo.png")} />
            ),
            headerTitleStyle: {
                alignSelf: "center"
            },
            headerLeft: (
                <Icon name="search" style={{ marginLeft: 15 }} size={30} color={"black"} onPress={() => params.handleSearch()} />
            ),
            headerRight: (
                //<Icon name="plus" style={{ marginRight: 15 }} size={30} color={"black"} onPress={() => params.handleAdd()} />
                <View style={{ marginRight: 15, backgroundColor: "transparent", width: 30 }} />
            )
        }
    }

    search = () => {
        const { navigate } = this.props.navigation;
        navigate('Search')
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    header: 'Idea name',
                    content: 'Idea content',
                    footer: 'Idea footer',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 1,
                    header: 'Idea name',
                    content: 'Idea contentlol',
                    footer: 'Idea footer',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 2,
                    header: 'Idea name',
                    content: 'Idea content',
                    footer: 'Idea footer',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 3,
                    header: 'Idea name',
                    content: 'Idea content',
                    footer: 'Idea footer',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                }
            ],
            profilrHeaderHeight: 300,
            about: "Обо мне лофытвлофытволфытволфытвдлтфылвдфыдвьфылвьфывьфылдвaskdmaskldmaskdmasmdasmkdmkaslmdaskmdkasmldaslkdmaskldmaskldmlasmdlasmdasmdamsdlmaslaksmdьфыдлвьфыдлвьфылдвьдфыльвдфыьвдфыьвдфьльфыв флыдьвдфыьвлфыьв ьфлвьфы львфьы лвьфдылв",
            contentFullVisible: true,
            name: "My name",
            surname: "My surname",
            specialization: "My specialization",
            status: "",
            about: "",
            photo: ""
        };
    }

    componentDidMount() {
        if (this.state.about.length > 150) {
            this.setState({ contentFullVisible: false })
        } else {
            this.setState({ contentFullVisible: true })
        }
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
        AsyncStorage.getItem('uid')
            .then((uid)=>{
                if (uid != null) {
                    firebase.firestore().collection("users").doc(uid).get()
                    .then((data)=>{
                        let json = data.data()
                        this.setState({
                            name: json.name,
                            surname: json.surname,
                            specialization: json.spels,
                            status: json.status,
                            about: json.about,
                            photo: json.photo,
                        })
                    })
                }
            })
    }

    fullContent = () => {
        if (this.state.about.length > 150) {
            this.setState({ contentFullVisible: !this.state.contentFullVisible })
        }
    }

    renderHeader = () => {
        return (
            <View style={{ height: "auto" }}>
                <View style={styles.profileHeader}>
                    <Image style={{ marginLeft: 10, height: 90, width: 90, borderRadius: 45 }} source={{ uri: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg' }} />
                    <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14 }}>{this.state.name + " " + this.state.surname}</Text>
                        <Text style={{ fontSize: 14 }}>{this.state.specialization}</Text>
                        <RkButton rkType='outline' onPress={() => { this.props.navigation.navigate('EditProfile',{img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg', name: this.state.name, surname: this.state.surname, about: this.state.about, specialization: this.state.specialization}) }} style={{ height: 30, marginTop: 10, backgroundColor: 'transparent', width: '90%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }}>
                            Редактировать
                        </RkButton>
                    </View>
                </View>
                <Text style={{ margin: 10, fontSize: 14, paddingTop: 25, fontWeight: "bold" }}>Обо мне</Text>
                <Text onPress={() => { this.fullContent() }} style={{ margin: 10, fontSize: 14 }}>{!this.state.contentFullVisible ? this.state.about.slice(0, 150) + " [Еще...]" : this.state.about}</Text>
                <Text style={{ margin: 10, fontSize: 14, fontWeight: "bold" }}>Мои идеи</Text>
            </View>
        )
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("IdeaInfoTab", { img: item.img, name: item.header, content: item.content }) }}>
            <RkCard style={{ marginBottom: 10, height: window.height / 3, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: window.height / 3, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.img }}>
                    <View style={{ flexDirection: 'column' }} rkCardHeader>
                        <Text style={{ color: 'white', fontSize: 20 }}>{item.header}</Text>
                        <Text style={{ color: 'white', fontSize: 30 }}>{item.content}</Text>
                    </View>
                    <View rkCardFooter>
                        <Text style={{ color: 'white', fontSize: 17 }}>{item.footer}</Text>
                    </View>
                </ImageBackground>
            </RkCard>
        </TouchableHighlight>
    );

    render() {
        const { navigate } = this.props.navigation
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderItem}
                ccontentContainerStyle={{ marginBottom: 50 }}
            />
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

export default ProfilePage;