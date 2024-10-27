import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DietContext } from '../contexts/DietContext';

export default function AddDiet({ navigation }) {
  const { addDietEntry } = useContext(DietContext);
  const [diet, setDiet] = useState({
    description: '',
    calories: '',
    date: new Date().toISOString().split('T')[0],  // Defaults to today's date
    isSpecial: false
  });

  const handleSave = async () => {
    if (!diet.description || !diet.calories) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    Alert.alert('Add Diet Entry', 'Are you sure you want to add this diet entry?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await addDietEntry(diet);
          navigation.goBack();
      }},
    ]);
  };

  return (
    <View>
      <TextInput
        placeholder="Description"
        value={diet.description}
        onChangeText={(text) => setDiet({ ...diet, description: text })}
      />
      <TextInput
        placeholder="Calories"
        keyboardType="numeric"
        value={diet.calories}
        onChangeText={(text) => setDiet({ ...diet, calories: Number(text) })}
      />
      <TextInput
        placeholder="Date"
        value={diet.date}
        onChangeText={(text) => setDiet({ ...diet, date: text })}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
