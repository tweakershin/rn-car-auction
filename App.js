import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VehicleEditorScreen from './src/screens/VehicleEditorScreen';
import ListingEditorScreen from './src/screens/ListingEditorScreen';
import MyVehicleListScreen from './src/screens/MyVehicleListScreen';
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';
import AuctionListScreen from './src/screens/AuctionListScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'tomato',
  },
};


const HomeStack = createStackNavigator(
  {
    Home: MyVehicleListScreen,
    VehicleDetail: VehicleDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const AuctionStack = createStackNavigator(
  {
    AuctionList: AuctionListScreen,
    VehicleDetail: VehicleDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const MainTab = createBottomTabNavigator(
  {
    MyCars: HomeStack,
    Auction: AuctionStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MyCars') {
          iconName = 'ios-car';
        } else if (routeName === 'Auction') {
          iconName = 'ios-trending-up';
        } else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const VehicleEditorStack = createStackNavigator({
  VehicleEditor: VehicleEditorScreen,
});

const ListingEditorStack = createStackNavigator({
  ListingEditor: ListingEditorScreen,
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTab,
    },
    ListingEditorStack,
    VehicleEditorStack,
    Login: LoginScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
