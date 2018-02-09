import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class LoginPage extends Component {
    static navigationOptions = {
        title: 'This is login page',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="transparent" onPress={() => {navigate('Tabs')}}>
                    <Text>go to tab navigator</Text>
                </TouchableHighlight>
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

export default LoginPage;