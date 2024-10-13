// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivitiesScreen from './Screens/ActivitiesScreen';
import DietScreen from './Screens/DietScreen';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Activities') {
              iconName = focused ? 'directions-run' : 'run-circle';
              return <MaterialIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Diet') {
              iconName = focused ? 'fastfood' : 'restaurant';
              return <MaterialIcons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#4b2a82' },
          headerStyle: { backgroundColor: '#4b2a82' },
          headerTintColor: 'white',
        })}
      >
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Diet" component={DietScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
