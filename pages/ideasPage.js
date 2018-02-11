import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, ScrollView, Image, RefreshControl } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as firebase from 'firebase';
import 'firebase/firestore'

class IdeasPage extends Component {

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

    componentDidMount() {
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
        this.getIdeas();
    }

    search = () => {
        const { navigate } = this.props.navigation;
        navigate('Search')
    }

    constructor(props) {
        super(props);
        this.state = {
            interesting: [],
            fresh: [],
            design: [],
            games: [],
            business: [],
            refreshing: false
        };
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("IdeaInfoTab", { img: item.image, name: item.title, comments: item.comments, content: item.description, team: item.team }) }}>
            <RkCard style={{ margin: 5, height: 150, width: 200, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: 150, width: 200, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.image }}>
                    <View style={{ flexDirection: 'column' }} rkCardHeader>
                        <Text style={{ color: 'white', fontSize: 20 }}>{item.title}</Text>
                    </View>
                </ImageBackground>
            </RkCard>
        </TouchableHighlight>
    );

    getIdeas = async () => {
        this.setState({
            games: [],
            business: [],
            design: [],
            fresh: [],
            interesting: [],
            refreshing: true
        })
        try {
            let db = firebase.firestore()
            const querySnapshot = await db.collection("projects").get()
            let arr = null
            querySnapshot.forEach((doc) => {
                arr = {
                    ...doc.data(),
                    id: doc.id
                }
                switch (arr.category) {
                    case "Игры":
                        this.state.games.push(arr)
                        break;
                    case "Сайт":
                        this.state.interesting.push(arr)
                        break;
                    case "Приложение":
                        this.state.fresh.push(arr)
                        break;
                    case "Другое":
                        this.state.business.push(arr)
                        break;
                    default:
                        break;
                }
            })
            this.setState({
                games: this.state.games,
                business: this.state.business,
                design: this.state.design,
                fresh: this.state.fresh,
                interesting: this.state.interesting,
                refreshing: false
            })
            // console.log(JSON.stringify(arr.reverse()))
        } catch (err) {
            this.setState({refreshing: false})
            alert('Произошла неизвестная ошибка. Попробуйте заново');
            console.error(err)
            return false
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <ScrollView
                style={{ backgroundColor: '#fff', flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.getIdeas.bind(this)}
                    />
                }
            >
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Сайт</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.interesting}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Приложения</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.fresh}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Игры</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.games}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Другое</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.business}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#fff'
    },
});

export default IdeasPage;