import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SectionList, ImageBackground, Dimensions } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';

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
            sectionData: [
                {
                    title: 'Сегодня',
                    data: [
                        {
                            id: 0,
                            header: 'Стартап дня',
                            content: 'Встречайте приложение на IOS',
                            footer: 'История создание нашего стартапа',
                            img: 'https://medialeaks.ru/wp-content/uploads/2017/02/ad_234085936-419x419.jpg'
                        },
                        {
                            id: 1,
                            header: 'Стартап дня',
                            content: 'Встречайте приложение на IOS',
                            footer: 'История создание нашего стартапа',
                            img: 'https://medialeaks.ru/wp-content/uploads/2017/02/ad_234085936-419x419.jpg'
                        }
                    ]
                },
                {
                    title: '9 февраля',
                    data: [
                        {
                            id: 3,
                            header: 'Стартап дня',
                            content: 'Встречайте приложение на IOS',
                            footer: 'История создание нашего стартапа',
                            img: 'https://medialeaks.ru/wp-content/uploads/2017/02/ad_234085936-419x419.jpg'
                        },
                        {
                            id: 5,
                            header: 'Стартап дня',
                            content: 'Встречайте приложение на IOS',
                            footer: 'История создание нашего стартапа',
                            img: 'https://medialeaks.ru/wp-content/uploads/2017/02/ad_234085936-419x419.jpg'
                        }
                    ]
                }
            ]
        }
    }

    keyExtractor = (item, index) => item.id;

    componentDidMount() {
        this.props.navigation.setParams({
            handleSearch: this.search,
            handleAdd: this.add
        });
    }

    search = () => {
        const { navigate } = this.props.navigation;
        navigate('Search')
    }

    renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => { this.props.navigation.navigate("FeedStackFeedInfo", { img: item.img, name: item.content, footer: item.footer }) }}>
            <RkCard style={{ marginBottom: 10, height: window.height / 1.7, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: window.height / 1.7, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.img }}>
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
            <SectionList
                stickySectionHeadersEnabled={true}
                style={styles.container}
                sections={this.state.sectionData}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                renderSectionHeader={
                    ({ section }) => <Text style={{ fontSize: 30 }}>{section.title}</Text>
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