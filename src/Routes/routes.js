import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
    SignSwitchNavigator,
    UserSwitchNavigator,
    DirectorSwitchNavigator,
} from './navigators';

selectBottomMenu = (isSigned, personality) => {
    if (isSigned && personality === 'director') {
        return 'Director';
    }

    if (isSigned) {
        return 'User';
    }

    return 'Sign';
};

navigation = (isSigned, personality) =>
    createSwitchNavigator(
        {
            Sign: SignSwitchNavigator,
            User: UserSwitchNavigator,
            Director: DirectorSwitchNavigator,
        },
        {
            initialRouteName: selectBottomMenu(isSigned, personality),
        }
    );

export default (isSigned = false, personality = 'user') =>
    createAppContainer(navigation(isSigned, personality));
