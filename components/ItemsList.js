// Components/ItemsList.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ItemsList({ data, type }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          {item.warning && <AntDesign name="warning" size={24} color="yellow" />}
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.value}>{item.value} {type === 'diet' ? 'cal' : 'min'}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5c4b82',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  itemText: { color: 'white', fontSize: 20 },
  date: { color: 'white' },
  value: { color: 'white' },
  separator: { height: 5, backgroundColor: '#dcd' },
});
