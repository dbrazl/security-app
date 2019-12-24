import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { deliveryNavigateOption, tabBarOptions } from './options';

import SignIn from '../pages/SignIn';

export const SignSwitchNavigator = createSwitchNavigator({
    SignIn,
});

export const UserSwitchNavigator = createBottomTabNavigator(
    {
        SignIn,
        // Delivery: {
        //     screen: productNavigate(),
        //     navigationOptions: deliveryNavigateOption,
        // },
        // NewRequest,
        // Profile,
    },
    {
        tabBarOptions,
    }
);

export const DirectorSwitchNavigator = createBottomTabNavigator(
    {
        SignIn,
        // Delivery: {
        //     screen: productNavigate(),
        //     navigationOptions: deliveryNavigateOption,
        // },
        // NewRequest,
        // Profile,
    },
    {
        tabBarOptions,
    }
);

productNavigate = () => {
    return createSwitchNavigator({
        // Delivery,
        // Product,
    });
};
