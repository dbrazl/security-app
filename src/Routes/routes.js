import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Success from '../pages/Success';
import AddCrendential from '../pages/AddCrendential';
import TutorialPage1 from '../pages/Tutorial/Page1';
import TutorialPage2 from '../pages/Tutorial/Page2';

function selectInitialRoute(isFirstTime) {
    if (isFirstTime) return 'Home';

    return 'TutorialPage1';
}

function navigation(isFirstTime) {
    return createSwitchNavigator(
        {
            Home: Home,
            Settings: Settings,
            Success: Success,
            AddCrendential: AddCrendential,
            TutorialPage1: TutorialPage1,
            TutorialPage2: TutorialPage2,
        },
        {
            initialRouteName: selectInitialRoute(isFirstTime),
        }
    );
}

export default (isFirstTime = false) =>
    createAppContainer(navigation(isFirstTime));
