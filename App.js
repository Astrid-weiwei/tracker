import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from './Screens/Activities';
import AddActivity from './Screens/AddActivity';
import Diet from './Screens/Diet';
import AddDietEntry from './Screens/AddDiet'; 
import Settings from './Screens/Settings';
import { ActivitiesProvider } from './context/ActivitiesContext';
import { DietProvider } from './context/DietContext';
import { ThemeProvider } from './context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivitiesScreen"
        component={Activities}
        options={({ navigation }) => ({
          title: 'Activities',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddActivity')}
              title="Add"
              color="#fff"
            />
          ),
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
          headerRightContainerStyle: { marginRight: 15 },
        })}
      />
      <Stack.Screen
        name="AddActivity"
        component={AddActivity}
        options={{
          title: 'Add Activity',
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}


function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DietScreen"
        component={Diet}
        options={({ navigation }) => ({
          title: 'Diet',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddDietEntry')}
              title="Add"
              color="#fff"
            />
          ),
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
          headerRightContainerStyle: { marginRight: 15 },
        })}
      />
      <Stack.Screen
        name="AddDietEntry"
        component={AddDietEntry} 
        options={{
          title: 'Add Diet Entry',
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ActivitiesProvider>
        <DietProvider>
          <NavigationContainer>
            <Tab.Navigator>
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
                name="DietTab"
                component={DietStack}
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
        </DietProvider>
      </ActivitiesProvider>
    </ThemeProvider>
  );
}
