import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ActivitiesContext } from '../contexts/ActivitiesContext';

export default function EditActivity({ route, navigation }) {
  const { updateActivity, deleteActivity } = useContext(ActivitiesContext);
  const { activity } = route.params;
  const [data, setData] = useState({ ...activity });

  const handleSave = () => {
    Alert.alert('Important', 'Are you sure you want to save these changes?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await updateActivity(data.id, data);
          navigation.goBack();
      }},
    ]);
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await deleteActivity(data.id);
          navigation.goBack();
      }},
    ]);
  };

  return (
    <View>
      <TextInput value={data.name} onChangeText={(text) => setData({ ...data, name: text })} />
      <TextInput value={String(data.duration)} onChangeText={(text) => setData({ ...data, duration: Number(text) })} />
      <Button title="Save" onPress={handleSave} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
}

