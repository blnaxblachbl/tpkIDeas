import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class ProfilePage extends Component {
    static navigationOptions = {
        title: 'This is profile page',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="transparent" onPress={() => { navigate('LoginPage') }}>
                    <Text>profile page</Text>
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

export default ProfilePage;