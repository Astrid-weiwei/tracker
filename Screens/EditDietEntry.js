import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DietContext } from '../contexts/DietContext';

export default function EditDiet({ route, navigation }) {
  const { updateDietEntry, deleteDietEntry } = useContext(DietContext);
  const { entry } = route.params;
  const [data, setData] = useState({ ...entry });

  const handleSave = () => {
    Alert.alert('Important', 'Are you sure you want to save these changes?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await updateDietEntry(data.id, data);
          navigation.goBack();
      }},
    ]);
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await deleteDietEntry(data.id);
          navigation.goBack();
      }},
    ]);
  };

  return (
    <View>
      <TextInput
        placeholder="Description"
        value={data.description}
        onChangeText={(text) => setData({ ...data, description: text })}
      />
      <TextInput
        placeholder="Calories"
        keyboardType="numeric"
        value={String(data.calories)}
        onChangeText={(text) => setData({ ...data, calories: Number(text) })}
      />
      <TextInput
        placeholder="Date"
        value={data.date}
        onChangeText={(text) => setData({ ...data, date: text })}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
}
