import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';

const window = Dimensions.get('window');

class OtherProfilePage extends Component {
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
            ],
            profilrHeaderHeight: 300,
            profileContent: "Обо мне лофытвлофытволфытволфытвдлтфылвдфыдвьфылвьфывьфылдвaskdmaskldmaskdmasmdasmkdmkaslmdaskmdkasmldaslkdmaskldmaskldmlasmdlasmdasmdamsdlmaslaksmdьфыдлвьфыдлвьфылдвьдфыльвдфыьвдфыьвдфьльфыв флыдьвдфыьвлфыьв ьфлвьфы львфьы лвьфдылв",
            contentFullVisible: true
        };
    }

    componentDidMount() {
        if (this.state.profileContent.length > 150) {
            this.setState({ contentFullVisible: false })
        } else {
            this.setState({ contentFullVisible: true })
        }
    }

    fullContent = () => {
        if (this.state.profileContent.length > 150) {
            this.setState({ contentFullVisible: !this.state.contentFullVisible })
        }
    }

    renderHeader = () => {
        const { params } = this.props.navigation.state
        return (
            <View style={{ height: "auto" }}>
                <View style={styles.profileHeader}>
                    <Image style={{ marginLeft: 0, height: 90, width: 90, borderRadius: 45 }} source={{ uri: params.img }} />
                    <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14 }}>{params.surname + " " + params.name}</Text>
                        <Text style={{ fontSize: 14 }}>{params.spesialization}</Text>
                        <RkButton rkType='outline' style={{ height: 30, marginTop: 10, backgroundColor: 'transparent', width: '90%', borderColor: 'black', borderRadius: 30 }} contentStyle={{ color: 'black' }} onPress={() => { }}>
                            Связаться
                        </RkButton>

                    </View>
                </View>
                <Text style={{ margin: 10, fontSize: 14, paddingTop: 25, fontWeight: "bold" }}>Обо мне</Text>
                <Text onPress={() => { this.fullContent() }} style={{ margin: 10, fontSize: 14 }}>{!this.state.contentFullVisible ? this.state.profileContent.slice(0, 150) + " [Еще...]" : this.state.profileContent}</Text>
                <Text style={{ margin: 10, fontSize: 14, fontWeight: "bold" }}>Мои идеи</Text>
            </View>
        )
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.props.navigation.navigate("IdeaInfo", { img: item.img, name: item.header, content: item.content }) }}>
            <RkCard style={{ marginBottom: 10, height: window.height / 3, justifyContent: 'space-between', borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground style={{ justifyContent: 'space-between', height: window.height / 3, borderRadius: 20, overflow: 'hidden' }} source={{ uri: item.img }}>
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
            <FlatList
                style={styles.container}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
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

export default OtherProfilePage;