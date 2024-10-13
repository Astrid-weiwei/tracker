import React, { useContext } from 'react';
import { View, Button, StyleSheet, FlatList, Text } from 'react-native';
import { DietContext } from '../context/DietContext';

export default function Diet({ navigation }) {
  const { dietEntries } = useContext(DietContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={dietEntries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Text>{item.calories} Calories</Text>
          </View>
        )}
      />
      <Button
        title="Add Diet Entry"
        onPress={() => navigation.navigate('AddDietEntry')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#dcd' },
  item: {
    padding: 15,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});
