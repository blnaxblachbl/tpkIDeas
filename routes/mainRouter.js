import { StackNavigator } from 'react-navigation';

import CheckPage from '../pages/checkPage';
import LoginPage from '../pages/loginPage';
import Tabs from '../pages/tabsPage';
import Registration from '../pages/registrationPage';
import Search from '../pages/searchPage';
import AddIdea from '../pages/addIdeaPage';

const stackNavigatorConfig = {
    initialRouteName: 'CheckPage',
};

export default StackNavigator({
    CheckPage: {
        screen: CheckPage,
    },
    LoginPage: {
        screen: LoginPage,
    },
    Tabs: {
        screen: Tabs
    },
    Registration: {
        screen: Registration
    },
    Search: {
        screen: Search
    },
    AddIdea: {
        screen: AddIdea
    }
}, stackNavigatorConfig);
