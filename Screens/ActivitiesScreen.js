// Screens/ActivitiesScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ItemsList from '../components/ItemsList';

export default function ActivitiesScreen() {
  const [activities, setActivities] = useState([
    { id: 1, name: 'Yoga', date: 'Mon Sep 16 2024', value: 60, warning: false },
    { id: 2, name: 'Weights', date: 'Mon Jul 15 2024', value: 120, warning: true },
  ]);

  return (
    <View style={styles.container}>
      <ItemsList data={activities} type="activity" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#dcd' },
});
