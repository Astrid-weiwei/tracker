import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DietContext } from '../contexts/DietContext';

export default function DietList({ navigation }) {
  const { dietEntries } = useContext(DietContext);

  return (
    <View>
      {dietEntries.map((entry) => (
        <TouchableOpacity
          key={entry.id}
          onPress={() => navigation.navigate('EditDietEntry', { entry })}
        >
          <Text>{entry.description}</Text>
          <Text>Calories: {entry.calories}</Text>
          <Text>Date: {entry.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
