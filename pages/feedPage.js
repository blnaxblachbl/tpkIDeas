import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SectionList, ImageBackground, Dimensions } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';

const window = Dimensions.get('window');

class FeedPage extends Component {
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

    renderItem = ({ item }) => (
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