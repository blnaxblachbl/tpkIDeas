import { StackNavigator } from 'react-navigation';

import CheckPage from '../pages/checkPage';
import LoginPage from '../pages/loginPage';
import Tabs from '../pages/tabsPage';

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
    }
}, stackNavigatorConfig);
