import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu';
import Intro from '~/pages/Intro';
import Profile from '~/pages/Profile';
import Category from '~/pages/Category';
import Event from '~/pages/Event';
import MyEvents from '~/pages/MyEvents';
import CreateEvent from '~/pages/MyEvents/CreateEvent';

const Tabs = createAppContainer(createBottomTabNavigator(
    { 
        Menu: {
          screen: Menu,
          navigationOptions:({navigation}) => ({
            tabBarLabel:"Destaques",
            tabBarIcon:({focused, tintColor}) => {
              return <Icon style={{marginTop: 5}} name="explore" size={25} color={tintColor}/>
            }
          })
        },   

        MyEvents: { screen: MyEvents,
          navigationOptions:({navigation}) => ({
            tabBarLabel:"Meus Eventos",
            tabBarIcon:({focused, tintColor}) => {
              return <Icon style={{marginTop: 5}} name="add-circle-outline" size={25} color={tintColor}/>
            }
          })
        },

        Profile: {screen: Profile,
          navigationOptions:({navigation}) => ({
            tabBarLabel:"Peril",
            tabBarIcon:({focused, tintColor}) => {
              return <Icon style={{marginTop: 5}} name="account-circle" size={25} color={tintColor}/>
            }
          })
        },
    }, 
    {
        initialRouteName: "MyEvents",
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'skyblue',
            labelStyle: {
              fontSize: 10,
              fontWeight: "bold"
            },
            style: {
              backgroundColor: '#00A1D7',
            },
          }
    }
))

const Stack = createAppContainer(createStackNavigator(
    
    { 
        Intro: {screen: Intro, navigationOptions: {header: null}},
        Main: {screen: Main, navigationOptions: { header: null }},

        Tabs: {screen: Tabs, navigationOptions: {header: null}},

        Category: {screen: Category, navigationOptions: { header: null }},
        Event: {screen: Event, navigationOptions: { header: null }},
        CreateEvent: {screen: CreateEvent, navigationOptions: { header: null }},
    } 
    
    , 
    
    { initialRouteName: "CreateEvent" }

));


export default Stack;
