import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { toggleTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
