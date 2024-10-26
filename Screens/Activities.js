import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';
import { useTheme } from '../context/ThemeContext';
import ItemsList from '../components/ItemsList';

export default function Activities({ navigation }) {
  const { activities } = useContext(ActivitiesContext);
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <ItemsList data={activities} type="activities" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
