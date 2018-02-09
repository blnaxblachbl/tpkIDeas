import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { RkButton } from 'react-native-ui-kitten'

class FeedPage extends Component {
    static navigationOptions = {
        title: 'This is feed page',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="transparent" onPress={() => { navigate('LoginPage') }}>
                    <Text>feed page</Text>
                </TouchableHighlight>
                <RkButton rkType='success'>Accept</RkButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FeedPage;