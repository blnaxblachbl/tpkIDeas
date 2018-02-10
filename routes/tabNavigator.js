import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../pages/feedPage'
import Ideas from '../pages/ideasPage'
import Profile from '../pages/profilePage'
import OtherProfile from '../pages/otherProfilePage'
import FeedInfo from '../pages/feedInfo'
import IdeaInfo from '../pages/ideaInfo'

const FeedStack = StackNavigator({
    FeedStackFeed: {
        screen: Feed
    },
    FeedStackProfile: {
        screen: Profile
    },
    FeedStackFeedInfo: {
        screen: FeedInfo
    }
})

const IdeasStack = StackNavigator({
    IdeasStackIdeas: {
        screen: Ideas
    },
    IdeasStackProfile: {
        screen: Profile
    },
    IdeasStackIdeaInfo: {
        screen: IdeaInfo
    }
})

const ProfileStack = StackNavigator({
    ProfileStackProfile: {
        screen: Profile
    },
    ProfileStackOtherProfile: {
        screen: OtherProfile
    },
    ProfileStackIdeaInfo: {
        screen: IdeaInfo
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
                <Icon name="user-circle-o" size={23} color={tintColor} />
            ),
        },
    },
},
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            inactiveTintColor: "#babdc2",
            activeTintColor: "#000",
            style: {
                backgroundColor: "#f8f8f8",
                justifyContent: "center"
            },
            indicatorStyle: {
                height: 0
            }
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false
    }
);