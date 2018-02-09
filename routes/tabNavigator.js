import React from 'react';
import { TabNavigator } from 'react-navigation';
import Feed from '../pages/feedPage'
import Ideas from '../pages/ideasPage'
import Profile from '../pages/profilePage'
import Icon from 'react-native-vector-icons/FontAwesome';

export const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="newspaper-o" size={25} color={tintColor} />
            ),
        },
    },
    Ideas: {
        screen: Ideas,
        navigationOptions: {
            tabBarLabel: 'Ideas',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="lightbulb-o" size={25} color={tintColor} />
            ),
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user-circle-o" size={25} color={tintColor} />
            ),
        },
    },
},
    {
        tabBarPosition: 'bottom',
    }
);