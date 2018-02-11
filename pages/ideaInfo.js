import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, Image, SectionList, ImageBackground, Dimensions, FlatList } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import HTML from 'react-native-render-html';


const window = Dimensions.get('window');

class IdeaInfo extends Component {
    static navigationOptions = {
        title: 'Идея'
    }
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            messages: [],
        }
    }

    keyExtractor = (item, index) => item.id;

    renderUsers = ({ item }) => (
        <Image source={{ uri: item.photo }} style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 5, marginRight: 5 }} />
    );

    renderComments = ({ item }) => (
        <View style={{ paddingBottom: 5, paddingTop: 5, flexDirection: "row", borderColor: "grey", borderBottomWidth: 0.5, width: "100%" }}>
            <Image style={{ height: 50, width: 50, borderRadius: 25, overflow: "hidden" }} source={{ uri: item.photo }} />
            <View style={{ marginLeft: 10, marginBottom: 15, justifyContent: "center", width: "100%" }}>
                <Text>{item.username}</Text>
                <Text style={{ fontWeight: "bold", width: "100%", height: "auto", minHeight: 10 }}>{item.text}</Text>
            </View>
        </View>
    )

    render() {
        const { params } = this.props.navigation.state
        return (
            <ScrollView style={styles.content}>
                <View style={{ alignItems: "center", backgroundColor: "#fff" }}>
                    <Image source={{ uri: params.img }} resizeMode="cover" style={{ width: window.width, height: window.height / 2.5 }} />
                    <Text style={{ padding: 10, width: "100%", fontSize: 22 }}>{params.name}</Text>
                    <HTML html={params.content} imagesMaxWidth={window.width-10} />
                    <Text style={{ padding: 10, width: "100%", fontWeight: "bold", fontSize: 22 }}>Участники</Text>
                    <View style={{ height: 60, width: window.width, alignItems: "center" }}>
                        <FlatList
                            horizontal={true}
                            style={styles.flatContainer}
                            data={params.team}
                            extraData={this.state}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderUsers}
                            containerStyle={{ height: 50 }}
                            contentContainerStyle={{ height: 50 }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <Text style={{ padding: 10, width: "100%", fontWeight: "bold", fontSize: 22 }}>Комментарии</Text>
                    <View style={{ padding: 10, width: window.width }}>
                        <FlatList
                            style={styles.commentsFlatContainer}
                            data={params.comments}
                            extraData={this.state}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderComments}
                            containerStyle={{ paddingBottom: 10 }}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatContainer: {
        padding: 5,
        backgroundColor: '#fff',
        height: 50
    },
    commentsFlatContainer: {
        padding: 5,
        backgroundColor: '#fff',
    }
});

export default IdeaInfo;