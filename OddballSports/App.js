import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator, StackActions, NavigationActions } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ABCMenuScreen from "./src/screens/ABCMenuScreen";
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RunGameScreen from "./src/screens/RunGameScreen";
import RefereeMenuScreen from "./src/screens/RefereeMenuScreen";
import NewGameScreen from "./src/screens/NewGameScreen";
import FindGameScreen from "./src/screens/FindGameScreen";
import TabBar from './src/components/TabBar';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    ABCMenu: {
      screen: ABCMenuScreen,
      navigationOptions: ({navigation}) => ({
        title: 'American Bocce Co'
      }),
    },
    RefereeMenu: {
      screen: RefereeMenuScreen,
      navigationOptions: ({navigation}) => ({
        title: 'ABC Referee'
      }),
    },
    RunGame: {
      screen: RunGameScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Run Game'
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42619b',
      },
      headerTintColor: '#fff',
      title: 'Home',

    },
  }
);

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingsScreen,
    params: { value: true },
    // navigationOptions: navigation => {
    //   if(navigation.navigation.state.routeName === "Setting"){
    //     console.log('on view setting screen');
    //   }
    //   return {
    //     title: 'Setting',
    //     headerTintColor: '#fff',
    //     headerStyle: {
    //       backgroundColor: '#0091EA',
    //     },
    //   };
    // },
    navigationOptions: navigation => {
      if(navigation.navigation.state.routeName === "Setting"){
      }
      return {
        title: 'Setting',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#42619b',
        },
      };
    },

  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: navigation => {
      return {
        title: 'Profile',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#42619b',
        },
      };
    },
  }
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15 }}>HOME</Text>,
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="home" size={40} color={tabInfo.focused ? '#42619b' : '#E1E3DB'}/>
          )
        }
      }
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15 }}>SETTING</Text>,
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="setting" size={40} color={tabInfo.focused ? '#42619b' : '#E1E3DB'}/>
          )
        }
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15 }}>PROFILE</Text>,
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="profile" size={40} color={tabInfo.focused ? '#42619b' : '#E1E3DB'}/>
          )
        }
      }
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    tabBarOptions: {
      tabFeatured: 'Insert',
      backgroundFeaturedIcon: '#FFF',
      activeFeaturedTintColor: '#FFF',
      inactiveFeatureTintColor: '#E1E3DB',
      showLabel: true,
      backgroundColor: 'yellow',
      activeTintColor: '#42619b',
      inactiveTintColor: '#E1E3DB',
      style: {
        height: 110,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F2F3EF',
      },
      tabStyle: {},
    }
  }
);


export default createAppContainer(App);

