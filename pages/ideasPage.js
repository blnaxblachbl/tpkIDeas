import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ImageBackground, ScrollView, Image } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/EvilIcons';

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
            ]
        };
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("IdeasStackIdeaInfo", { img: item.img, name: item.header, content: item.content }) }}>
            <RkCard style={{ margin: 5, height: 150, width: 200, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: 150, width: 200, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.img }}>
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
            <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Интересное</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Свежее</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Дизайн</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Игры</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ marginLeft: 10, fontSize: 30, color: '#000' }}>Бизнес</Text>
                <FlatList
                    horizontal={true}
                    style={styles.container}
                    data={this.state.data}
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