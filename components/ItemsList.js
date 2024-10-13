import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const ItemsList = ({ items, type }) => (
  <FlatList
    data={items}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.date}</Text>
        <Text style={styles.text}>{item.duration} min</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4c669f',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  text: {
    color: 'white',
  },
});

export default ItemsList;
