import { TabNavigator } from 'react-navigation';
import Feed from '../pages/feedPage'
import Ideas from '../pages/ideasPage'
import Profile from '../pages/profilePage'

export const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
        },
    },
    Ideas: {
        screen: Ideas,
        navigationOptions: {
            tabBarLabel: 'Ideas',
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
        },
    },
},
{
    tabBarPosition: 'bottom',
}
);