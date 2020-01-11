import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import CarScreen from '../screens/CarScreen';
import ControlScreen from '../screens/ControlScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChargeStationScreen from '../screens/ChargeStationScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CarStack = createStackNavigator(
  {
    Car: CarScreen,
  },
  config
);

CarStack.navigationOptions = {
  tabBarLabel: 'Your Car',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-car` : 'md-car'}
    />
  ),
};

CarStack.path = '';

const ControlStack = createStackNavigator(
  {
    Control: ControlScreen,
  },
  config
);

ControlStack.navigationOptions = {
  tabBarLabel: 'Control',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'logo-game-controller-b' : 'logo-game-controller-b'} />
  ),
};

ControlStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

const ChargeStationStack = createStackNavigator(
    {
        ChargeStations: ChargeStationScreen,
    },
    config
);

ChargeStationStack.navigationOptions = {
    tabBarLabel: 'Charge Station',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-flash' : 'md-flash'} />
    ),
};

ChargeStationStack.path = '';

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
    CarStack,
    ControlStack,
    ChargeStationStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
