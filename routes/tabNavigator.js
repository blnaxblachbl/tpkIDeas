import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Feed from '../pages/feedPage'
import Ideas from '../pages/ideasPage'
import Profile from '../pages/profilePage'
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedStack = StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            header: null
        }
    }
})

const IdeasStack = StackNavigator({
    Ideas: {
        screen: Ideas,
        navigationOptions: {
            header: null
        }
    }
})

const ProfileStack = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    }
})

export const Tabs = TabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="newspaper-o" size={25} color={tintColor} />
            ),
        },
    },
    Ideas: {
        screen: IdeasStack,
        navigationOptions: {
            tabBarLabel: 'Ideas',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="lightbulb-o" size={25} color={tintColor} />
            ),
        },
    },
    Profile: {
        screen: ProfileStack,
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