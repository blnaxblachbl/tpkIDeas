import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, ImageBackground } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    header: 'Стартап дня',
                    content: 'Встречайте приложение на IOS',
                    footer: 'История создание нашего стартапа',
                    img: 'http://www.mobiloitte.com/blog/wp-content/uploads/2017/02/startup.jpg'
                },
                {
                    id: 1,
                    header: 'Стартап дня',
                    content: 'Встречайте приложение на IOS',
                    footer: 'История создание нашего стартапа',
                    img: 'http://www.mobiloitte.com/blog/wp-content/uploads/2017/02/startup.jpg'
                },
                {
                    id: 2,
                    header: 'Стартап дня',
                    content: 'Встречайте приложение на IOS',
                    footer: 'История создание нашего стартапа',
                    img: 'http://www.mobiloitte.com/blog/wp-content/uploads/2017/02/startup.jpg'
                },
                {
                    id: 3,
                    header: 'Стартап дня',
                    content: 'Встречайте приложение на IOS',
                    footer: 'История создание нашего стартапа',
                    img: 'http://www.mobiloitte.com/blog/wp-content/uploads/2017/02/startup.jpg'
                }
            ]
        };
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <RkCard style={{ marginBottom: 10, height: 350, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden'}}>
            <ImageBackground style={{ justifyContent: 'space-between', height: 350,  borderRadius: 20, overflow: 'hidden'}} source={{ uri: item.img }}>
                <View style={{ flexDirection: 'column' }} rkCardHeader>
                    <Text style={{ color: 'white', fontSize: 20 }}>{item.header}</Text>
                    <Text style={{ color: 'white', fontSize: 30  }}>{item.content}</Text>
                </View>
                <View rkCardFooter>
                    <Text style={{ color: 'white', fontSize: 17 }}>{item.footer}</Text>
                </View>
            </ImageBackground>
        </RkCard>
    );

    render() {
        const { navigate } = this.props.navigation
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
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