import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from './variables/colors';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import List from './pages/List';
import DrinkDetails from './pages/DrinkDetails';
import Drinks from './pages/Drinks';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Search from './pages/Search';

function DrinkRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkGreen,
          borderBottomColor: colors.beige,
          borderBottomWidth: 0.2,
        },
        headerTintColor: '#fff',
      }}>
      <AppStack.Screen name="List" component={List} />
      <AppStack.Screen name="Drinks" component={Drinks} />
      <AppStack.Screen name="DrinkDetails" component={DrinkDetails} />
    </AppStack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'DrinkRoutes':
                iconName = 'local-bar';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Favorites':
                iconName = 'favorite';
                break;
              default:
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.green,
          inactiveTintColor: '#333',
          showLabel: false,
          activeBackgroundColor: '#f4f4f4',
          adaptive: true,
          tabStyle: {
            borderRadius: 10,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="DrinkRoutes" component={DrinkRoutes} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
