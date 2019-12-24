import IconFeather from 'react-native-vector-icons/Feather';

export const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#ffa944',
    inactiveTintColor: '#626262',
    style: {
        backgroundColor: '#fff',
        height: 50,
    },
    showLabel: false,
};

export const deliveryNavigateOption = {
    tabBarIcon: ({ tintColor }) => (
        <IconFeather name="file-text" size={32} color={tintColor} />
    ),
};
