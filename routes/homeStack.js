import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                // headerStyle: { backgroundColor: '#ee3' }
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#ee3' }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#3ee', height: 60 }
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;
