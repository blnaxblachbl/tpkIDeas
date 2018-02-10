import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';

class ProfilePage extends Component {
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

    renderHeader = () => {
        return (
            <View>
                <View style={styles.profileHeader}>
                    <Image style={{ height: 75, width: 75, borderRadius: 35 }} source={{ uri: 'https://pp.userapi.com/c631831/v631831119/3f148/QM5N25RTsTU.jpg' }} />
                    <View>
                        <Text style={{margin: 10, fontSize: 14}}>My name, my surname</Text>
                        <Text style={{margin: 10, fontSize: 14}}>My specialization</Text>
                    </View>
                </View>
                <Text style={{margin: 10, fontSize: 14}}>My ideas</Text>
            </View>
        )
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
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderItem}
                containerStyle={{ marginBottom: 50 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    profileHeader: {
        backgroundColor: '#fff',
        flexDirection: "row",
        width: "100%",
        height: 250,
        justifyContent: 'space-around',

    }
});

export default ProfilePage;