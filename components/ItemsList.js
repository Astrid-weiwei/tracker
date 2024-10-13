import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; 

const ItemsList = ({ data, type }) => {
  const { isDarkTheme } = useTheme(); 

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={[
            styles.item,
            { backgroundColor: isDarkTheme ? '#444' : '#4c669f' }, // Apply theme
          ]}
        >
          <Text style={[styles.text, { color: isDarkTheme ? '#fff' : '#000' }]}>
            {item.name}
          </Text>
          <Text style={[styles.text, { color: isDarkTheme ? '#fff' : '#000' }]}>
            {item.date}
          </Text>
          <Text style={[styles.text, { color: isDarkTheme ? '#fff' : '#000' }]}>
            {item.value} cal
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default ItemsList;
