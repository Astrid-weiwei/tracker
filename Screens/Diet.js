import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { DietContext } from '../context/DietContext';
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../context/styles';

export default function DietScreen() {
  const { dietEntries } = useContext(DietContext); // Access diet entries from context
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <FlatList
        data={dietEntries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: themeStyles.itemColor }]}>
            <Text style={{ color: themeStyles.textColor }}>{item.name}</Text>
            <Text style={{ color: themeStyles.textColor }}>{item.date}</Text>
            <Text style={{ color: themeStyles.textColor }}>{item.value} cal</Text>
            {item.special && (
              <Ionicons name="warning" size={24} color="orange" style={{ marginLeft: 10 }} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: commonStyles.padding,
  },
  item: {
    padding: commonStyles.padding,
    marginVertical: 8,
    borderRadius: commonStyles.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});