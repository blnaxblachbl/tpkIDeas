import { StackNavigator } from 'react-navigation';

import CheckPage from '../pages/checkPage';
import LoginPage from '../pages/loginPage';
import TabNavigator from '../pages/shop';

const stackNavigatorConfig = {
    initialRouteName: 'HomePage',
};

export default StackNavigator({
    CheckPage: {
        screen: CheckPage,
    },
    LoginPage: {
        screen: LoginPage,
    },
    TabNavigator: {
        screen: TabNavigator,
    }
}, stackNavigatorConfig);
