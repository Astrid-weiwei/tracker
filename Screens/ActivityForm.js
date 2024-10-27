// screens/ActivityForm.js
import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Alert, Text, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../contexts/ActivitiesContext';
import Button from '../components/Button';

export default function ActivityForm({ route, navigation }) {
  const { addActivity, updateActivity, deleteActivity } = useContext(ActivitiesContext);
  const isEditMode = route.params?.activity;
  const initialActivity = isEditMode ? route.params.activity : {
    name: '',
    duration: '',
    date: new Date().toISOString().split('T')[0],
    isSpecial: false
  };
  const [activity, setActivity] = useState(initialActivity);

  const handleSave = async () => {
    if (!activity.name || !activity.duration) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }
    if (isEditMode) {
      await updateActivity(activity.id, activity);
    } else {
      await addActivity(activity);
    }
    navigation.goBack();
  };

  const handleDelete = async () => {
    await deleteActivity(activity.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activity Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter activity name"
        value={activity.name}
        onChangeText={(text) => setActivity({ ...activity, name: text })}
      />
      <Text style={styles.label}>Duration (min)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter duration in minutes"
        keyboardType="numeric"
        value={String(activity.duration)}
        onChangeText={(text) => setActivity({ ...activity, duration: Number(text) })}
      />
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date"
        value={activity.date}
        onChangeText={(text) => setActivity({ ...activity, date: text })}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} color="#5cb85c" />
        {isEditMode && <Button title="Delete" onPress={handleDelete} color="#d9534f" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#d6cce5',
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#4c669f',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: '#4c669f',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
