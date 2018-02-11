import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, Image, Dimensions, AsyncStorage } from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import firebase from 'firebase';
import 'firebase/firestore'
import HTML from 'react-native-render-html';

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
            data: [],
            profilrHeaderHeight: 300,
            about: "",
            contentFullVisible: true,
            name: "",
            surname: "",
            specialization: "",
            status: "",
            photo: "",
            refreshing: false
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
        this.getMyData()
    }

    getMyData = () => {
        AsyncStorage.getItem('uid')
            .then((uid) => {
                this.setState({ refreshing: true })
                if (uid != null) {
                    firebase.firestore().collection("users").doc(uid).get()
                        .then((data) => {
                            let json = data.data()
                            this.setState({
                                name: json.name,
                                surname: json.surname,
                                specialization: json.spels,
                                status: json.status,
                                about: json.about,
                                photo: json.photo != undefined ? json.photo : 'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg',
                            })
                        })
                    this.getMyIdeas()
                }
            })
    }

    getMyIdeas = async () => {
        try {
            this.setState({
                data: []
            })
            let id = await AsyncStorage.getItem('uid');
            let db = firebase.firestore()
            let ideas = []
            let querySnapshot = await db.collection("projects").where("uid", "==", id).get()
            querySnapshot.forEach((doc) => {
                ideas.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            this.setState({
                data: ideas
            })
            ideas = [];
            this.setState({ refreshing: false })
        } catch (err) {
            alert(err)
            this.setState({ refreshing: false })
            return false
        }
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
                    <Image style={{ marginLeft: 10, height: 90, width: 90, borderRadius: 45 }} source={{ uri: this.state.photo }} />
                    <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14 }}>{this.state.name + " " + this.state.surname}</Text>
                        <Text style={{ fontSize: 14 }}>{this.state.specialization}</Text>
                        <Text style={{ fontSize: 14 }}>{this.state.status}</Text>
                        <RkButton rkType='outline' onPress={() => { this.props.navigation.navigate('EditProfile', { img: this.state.photo, name: this.state.name, surname: this.state.surname, about: this.state.about, specialization: this.state.specialization, status: this.state.status }) }} style={{ height: 30, marginTop: 10, backgroundColor: 'transparent', width: '90%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }}>
                            Редактировать
                        </RkButton>
                    </View>
                </View>
                <Text style={{ margin: 10, fontSize: 14, paddingTop: 25, fontWeight: "bold" }}>Обо мне</Text>
                {this.htmlRed()}
                <Text style={{ margin: 10, fontSize: 14, fontWeight: "bold" }}>{this.state.data.length != 0 ? "Мои идеи" : " "}</Text>
            </View>
        )
    }

    htmlRed = () => {
        if (this.state.about) {
            return (
                <HTML html={this.state.about} imagesMaxWidth={window.width} />
            )
        } else {
            return <Text style={{ marginLeft: 10 }}>Пока нет</Text>
        }
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("IdeaInfoTab", { img: item.image, name: item.title, comments: item.comments, content: item.description, team: item.team }) }}>
            <RkCard style={{ marginBottom: 10, height: window.height / 3, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: window.height / 3, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.image }}>
                    <View style={{ flexDirection: 'column' }} rkCardHeader>
                        <Text style={{ color: 'white', fontSize: 20 }}>{item.title}</Text>
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
                onRefresh={this.getMyData}
                refreshing={this.state.refreshing}
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