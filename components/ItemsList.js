
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ItemsList = ({ data, type }) => {
  const { themeStyles } = useTheme(); // Access theme styles

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={[
            styles.item,
            { backgroundColor: themeStyles.itemColor }, // Apply theme color
          ]}
        >
          <Text style={[styles.text, { color: themeStyles.textColor }]}>
            {item.name || item.type}
          </Text>
          <Text style={[styles.text, { color: themeStyles.textColor }]}>
            {item.date}
          </Text>
          <Text style={[styles.text, { color: themeStyles.textColor }]}>
            {type === 'diet' ? `${item.value} cal` : `${item.duration} min`}
          </Text>
          {item.special && (
            <Text style={[styles.specialText, { color: 'orange' }]}>
              ⚠️ Special
            </Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  specialText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ItemsList;
