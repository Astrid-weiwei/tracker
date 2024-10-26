import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DietContext } from '../context/DietContext';
import { useTheme } from '../context/ThemeContext';
import ItemsList from '../components/ItemsList';

export default function DietScreen() {
  const { dietEntries } = useContext(DietContext);
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <ItemsList data={dietEntries} type="diet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
