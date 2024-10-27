import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ActivitiesContext } from '../contexts/ActivitiesContext';

export default function AddActivity({ navigation }) {
  const { addActivity } = useContext(ActivitiesContext);
  const [activity, setActivity] = useState({
    name: '',
    duration: '',
    date: new Date().toISOString().split('T')[0],  // Defaults to today's date
    isSpecial: false
  });

  const handleSave = async () => {
    if (!activity.name || !activity.duration) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    Alert.alert('Add Activity', 'Are you sure you want to add this activity?', [
      { text: 'No' },
      { text: 'Yes', onPress: async () => {
          await addActivity(activity);
          navigation.goBack();
      }},
    ]);
  };

  return (
    <View>
      <TextInput
        placeholder="Activity Name"
        value={activity.name}
        onChangeText={(text) => setActivity({ ...activity, name: text })}
      />
      <TextInput
        placeholder="Duration (min)"
        keyboardType="numeric"
        value={activity.duration}
        onChangeText={(text) => setActivity({ ...activity, duration: Number(text) })}
      />
      <TextInput
        placeholder="Date"
        value={activity.date}
        onChangeText={(text) => setActivity({ ...activity, date: text })}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
