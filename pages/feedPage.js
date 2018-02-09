import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    header: 'lol',
                    content: 'lol',
                    footer: 'lol',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 1,
                    header: 'lol',
                    content: 'lol',
                    footer: 'lol',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 2,
                    header: 'lol',
                    content: 'lol',
                    footer: 'lol',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                },
                {
                    id: 3,
                    header: 'lol',
                    content: 'lol',
                    footer: 'lol',
                    img: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg'
                }
            ]
        };
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <RkCard style={{ marginBottom: 10 }}>
            <View rkCardHeader>
                <Text>{item.header}</Text>
            </View>
            <Image rkCardImg source={{ uri: item.img }} />
            <View rkCardContent>
                <Text>{item.content}</Text>
            </View>
            <View rkCardFooter>
                <Text>{item.footer}</Text>
            </View>
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