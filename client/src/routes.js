import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

// PÁRGINAS

import Intro from '~/pages/Intro';
import Main from '~/pages/Main';
import Register from '~/pages/Register';
import Menu from '~/pages/Menu';
import MyEvents from '~/pages/MyEvents';
import Profile from '~/pages/Profile';
import Category from '~/pages/Category';
import Event from '~/pages/Event';
import CreateEvent from '~/pages/MyEvents/CreateEvent';

// BOTTOM TAB NAVIGATOR
// Navegação entre abas

const Tabs = createAppContainer(createBottomTabNavigator(
  {

    // Página do Feed Principal
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Destaques",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon style={{ marginTop: 5 }} name="explore" size={25} color={tintColor} />
        }
      })
    },

    // Página dos Meus Eventos (Criados e Participando)
    MyEvents: {
      screen: MyEvents,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Meus Eventos",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon style={{ marginTop: 5 }} name="add-circle-outline" size={25} color={tintColor} />
        }
      })
    },

    // Página de Perfil
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Peril",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon style={{ marginTop: 5 }} name="account-circle" size={25} color={tintColor} />
        }
      })
    },
  }
  
  ,

  {
    initialRouteName: "Menu",
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

// STACK NAVIGATION
// Navegação entre páginas

const Stack = createAppContainer(createStackNavigator(

  {
    // Página de Introdução - OK
    Intro: { screen: Intro, navigationOptions: { header: null } },

    // Página de Login
    Main: { screen: Main, navigationOptions: { header: null } },

    // Página de Cadastro
    Register: { screen: Register, navigationOptions: { header: null } },

    // Abas da aplicação
    Tabs: { screen: Tabs, navigationOptions: { header: null } },

    // Página para visualizar uma categoria
    Category: { screen: Category, navigationOptions: { header: null } },

    // Página para visualizar um evento específico
    Event: { screen: Event, navigationOptions: { header: null } },

    // Página de criação de eventos
    CreateEvent: { screen: CreateEvent, navigationOptions: { header: null } },
  }

  ,

  { initialRouteName: "Intro" }

));


export default Stack;
