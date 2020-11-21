import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Success from '../pages/Success';
import AddCrendential from '../pages/AddCrendential';

function selectInitialRoute(isFirstTime) {
    if (isFirstTime) return 'Home';

    return 'Home';
}

function navigation(isFirstTime) {
    return createSwitchNavigator(
        {
            Home: Home,
            Settings: Settings,
            Success: Success,
            AddCrendential: AddCrendential,
        },
        {
            initialRouteName: selectInitialRoute(isFirstTime),
        }
    );
}

export default (isFirstTime = false) =>
    createAppContainer(navigation(isFirstTime));
