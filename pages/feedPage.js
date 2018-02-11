import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SectionList, ImageBackground, Dimensions } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as firebase from 'firebase';
import 'firebase/firestore'

const window = Dimensions.get('window');

class FeedPage extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            sectionData: [],
            refreshing: false
        }
    }

    keyExtractor = (item, index) => item.id;

    componentDidMount() {
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
        this.getFeeds();
    }

    search = () => {
        const { navigate } = this.props.navigation;
        navigate('Search')
    }

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("FeedStackFeedInfo", { img: item.image, name: item.title, footer: item.description }) }}>
            <RkCard style={{ marginBottom: 10, height: window.height / 1.7, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: window.height / 1.7, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.image }}>
                    <View style={{ flexDirection: 'column' }} rkCardHeader>
                        <Text style={{ color: 'white', fontSize: 20 }}>Новость дня</Text>
                        <Text style={{ color: 'white', fontSize: 30 }}>{item.title}</Text>
                    </View>
                    <View rkCardFooter>
                        <Text style={{ color: 'white', fontSize: 17 }}>{item.description}</Text>
                    </View>
                </ImageBackground>
            </RkCard>
        </TouchableHighlight>
    );

    getFeeds = async () => {
        this.setState({ sectionData: [], refreshing: true })
        try {
            let arr = []
            let db = firebase.firestore()
            const querySnapshot = await db.collection("news").get()
            querySnapshot.forEach((doc) => {
                arr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            this.state.sectionData.push({
                section: "Сегодня",
                data: arr
            })
            this.setState({ sectionData: this.state.sectionData, refreshing: false })
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
            <SectionList
                stickySectionHeadersEnabled={true}
                style={styles.container}
                sections={this.state.sectionData}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                onRefresh={this.getFeeds}
                refreshing={this.state.refreshing}
                renderItem={this.renderItem}
                renderSectionHeader={
                    ({ section }) => <Text style={{ fontSize: 30 }}>{section.section}</Text>
                }
                containerStyle={{ paddingBottom: 10 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default FeedPage;