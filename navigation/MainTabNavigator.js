import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StoreScreen from '../screens/StoreScreen';
import ProductScreen from '../screens/ProductScreen';
import EmployeeScreen from '../screens/EmployeeScreen';

const HomeStack = createStackNavigator({
  Stores: StoreScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Stores',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-locate-outline${focused ? '' : ''}`
          : 'md-locate'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Products: ProductScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
         ? `ios-pricetags${focused ? '' : '-outline'}`
         : 'md-pricetags'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Help: EmployeeScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
         ? `ios-help-circle${focused ? '' : '-outline'}`
         : 'md-help-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
