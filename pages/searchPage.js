import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RkTextInput, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten'
import * as firebase from 'firebase';

class SearchPage extends Component {
    static navigationOptions = {
        title: 'Поиск',
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    name: 'Тит',
                    surname: 'Эверстов',
                    spesialization: 'frontend',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 1,
                    name: 'Кынат',
                    surname: 'Оконешников',
                    spesialization: 'frontend',
                    img: 'https://a.d-cd.net/dedee9as-960.jpg'
                },
                {
                    id: 2,
                    name: 'Петр',
                    surname: 'Васильев',
                    spesialization: 'web-разработчик',
                    img: 'http://i.imgur.com/BtqjsLG.jpg'
                },
                {
                    id: 3,
                    name: 'Айсен',
                    surname: 'Соловьев',
                    spesialization: 'Дизайнер',
                    img: 'http://www.gornovosti.ru/static/images/archive/2506/dr-28.jpg'
                },
                {
                    id: 4,
                    name: 'Надежда',
                    surname: 'Максимова',
                    spesialization: 'Компас',
                    img: 'http://img1.reactor.cc/pics/post/full/%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-%D1%83%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%B0%D1%8F-%D0%BB%D0%B8%D1%81%D0%B0-%D0%9B%D0%B8%D1%81%D0%B0-%D0%A7%D1%83%D1%87%D0%B5%D0%BB%D0%BE-%D0%BB%D0%B8%D1%81%D1%8B-971285.jpeg'
                }
            ],
            search: ""
        }
    }

    keyExtractor = (item, index) => item.id;

    renderHeader = () => {
        return <RkTextInput onChangeText={(text) => { this.setState({ search: text }) }} placeholder="Найти..." style={{ padding: 10 }} label={<Icon name={'ios-search'} />} />
    }

    renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('OtherProfile', {name: item.name, surname: item.surname, img: item.img, spesialization: item.spesialization}) }} underlayColor="transparent">
            <View style={{ marginBottom: 10, flexDirection: "row", borderColor: "grey", borderBottomWidth: 0.5, width: "100%", height: 60 }}>
                <Image style={{ height: 50, width: 50, borderRadius: 25, overflow: "hidden" }} source={{ uri: item.img }} />
                <View style={{ marginLeft: 10, marginBottom: 10, justifyContent: "center" }}>
                    <Text>{item.name + " " + item.surname}</Text>
                    <Text>{item.spesialization}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.data.filter(data => !this.state.search || new RegExp(this.state.search, "i").test(data.name) || new RegExp(this.state.search, "i").test(data.surname) || new RegExp(this.state.search, "i").test(data.spesialization))}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ListHeaderComponent={this.renderHeader}
                containerStyle={{ paddingBottom: 10 }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 0
    },
});

export default SearchPage;