import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/telas/Home';
import Cadastro from './src/telas/Cadastro';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarIconStyle: { display: "none" }
        }}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'lightgray',
          activeBackgroundColor: '#59910A',
          inactiveBackgroundColor: '#59910A',
          labelStyle: {
            fontSize: 16,
            margin: 15
          },
          style: {
            backgroundColor: '#59910A'
          }
        }}>
        <Tab.Screen name="Depósitos" >
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Depósitos"
                component={Home} options={{
                  title: 'Depósitos de Pilhas APP',
                  headerStyle: {
                    backgroundColor: '#59910A',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
                }}
              />
              <SettingsStack.Screen name="Home" component={Home} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Cadastro" >
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen

                name="Cadastro"
                component={Cadastro} options={{
                  title: 'Depósitos de Pilhas APP',
                  headerStyle: {
                    backgroundColor: '#59910A',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
                }}
              />
              <SettingsStack.Screen name="Home" component={Cadastro} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer >
  );
}