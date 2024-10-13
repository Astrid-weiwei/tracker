import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';

export default function Activities({ navigation }) {
  const { activities } = useContext(ActivitiesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.type}</Text>
            <Text>{item.date}</Text>
            <Text>{item.duration} min</Text>
          </View>
        )}
      />
      <Button
        title="Add Activity"
        onPress={() => navigation.navigate('AddActivity')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});
