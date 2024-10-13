// Screens/DietScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ItemsList from '../components/ItemsList';

export default function DietScreen() {
  const [diet, setDiet] = useState([
    { id: 1, name: 'Breakfast', date: 'Tue Sep 17 2024', value: 500, warning: false },
    { id: 2, name: 'Lunch', date: 'Wed Sep 25 2024', value: 900, warning: true },
  ]);

  return (
    <View style={styles.container}>
      <ItemsList data={diet} type="diet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#dcd' },
});
