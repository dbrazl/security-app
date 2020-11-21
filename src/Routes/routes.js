import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/Home';
import AddCredential from '../pages/AddCredential';

function selectInitialRoute(isFirstTime) {
    if (isFirstTime) return 'Home';

    return 'Home';
}

function navigation(isFirstTime) {
    return createSwitchNavigator(
        {
            Home: Home,
            AddCredential: AddCredential,
        },
        {
            initialRouteName: selectInitialRoute(isFirstTime),
        }
    );
}

export default (isFirstTime = false) =>
    createAppContainer(navigation(isFirstTime));
