import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/Home';
import AddCredential from '../pages/AddCredential';
import Success from '../pages/Success';

function selectInitialRoute(isFirstTime) {
    if (isFirstTime) return 'Home';

    return 'Success';
}

function navigation(isFirstTime) {
    return createSwitchNavigator(
        {
            Home: Home,
            AddCredential: AddCredential,
            Success: Success,
        },
        {
            initialRouteName: selectInitialRoute(isFirstTime),
        }
    );
}

export default (isFirstTime = false) =>
    createAppContainer(navigation(isFirstTime));
