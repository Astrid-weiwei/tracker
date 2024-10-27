import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from './Screens/ActivitiesList';
import AddActivity from './Screens/AddActivity';
import Diet from './Screens/DietList';
import AddDietEntry from './Screens/AddDiet';
import Settings from './Screens/Settings';
import { ActivitiesProvider } from './contexts/ActivitiesContext';
import { DietProvider } from './contexts/DietContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Button, View } from 'react-native';
import EditActivity from './Screens/EditActivity';
import EditDietEntry from './Screens/EditDietEntry';
import ActivitiesList from './Screens/ActivitiesList'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivitiesScreen"
        component={ActivitiesList} 
        options={({ navigation }) => ({
          title: 'Activities',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="#fff"
                onPress={() => navigation.navigate('AddActivity')}
                style={{ marginRight: 15 }}
              />
              <Ionicons
                name="walk"
                size={24}
                color="#fff"
                onPress={() => console.log('Navigate to Special Activities')}
              />
            </View>
          ),
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen name="AddActivity" component={AddActivity} />
      <Stack.Screen name="EditActivity" component={EditActivity} />
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
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="#fff"
                onPress={() => navigation.navigate('AddDietEntry')}
                style={{ marginRight: 15 }}
              />
              <Ionicons
                name="fast-food"
                size={24}
                color="#fff"
                onPress={() => console.log('Navigate to Special Diet Entries')}
              />
            </View>
          ),
          headerStyle: { backgroundColor: '#4c669f' },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen name="AddDietEntry" component={AddDietEntry} />
      <Stack.Screen name="EditDietEntry" component={EditDietEntry} />
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
                  tabBarLabel: 'Activities',
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="walk" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="DietTab"
                component={DietStack}
                options={{
                  tabBarLabel: 'Diet',
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
