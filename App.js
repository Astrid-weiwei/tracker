import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import AddActivity from './Screens/AddActivity';
import Settings from './Screens/Settings';
import { ActivitiesProvider } from './context/ActivitiesContext';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ActivityStack() {
  return (
    <Stack.Navigator>
      {/* Use a unique name for the stack screen */}
      <Stack.Screen name="ActivitiesScreen" component={Activities} />
      <Stack.Screen name="AddActivity" component={AddActivity} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ActivitiesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* Use a unique name for the tab */}
          <Tab.Screen
            name="ActivitiesTab"
            component={ActivityStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="walk" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Diet"
            component={Diet}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="fast-food" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ActivitiesProvider>
  );
}

export default App;
