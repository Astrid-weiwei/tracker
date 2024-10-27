import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, CheckBox } from 'react-native';
import { ActivitiesContext } from '../contexts/ActivitiesContext';

export default function AddEditScreen({ route, navigation }) {
  const { addActivity, updateActivity, deleteActivity } = useContext(ActivitiesContext);
  const { item, isEditing } = route.params || {};

  const [activityName, setActivityName] = useState(item?.name || '');
  const [duration, setDuration] = useState(item?.duration || '');
  const [date, setDate] = useState(item?.date || '');
  const [isSpecial, setIsSpecial] = useState(item?.isSpecial || false);

  const handleSave = async () => {
    const activityData = { name: activityName, duration, date, isSpecial };
    if (isEditing && item?.id) {
      await updateActivity(item.id, activityData);
    } else {
      await addActivity(activityData);
    }
    Alert.alert("Important", "Are you sure you want to save these changes?", [
      { text: "No" },
      { text: "Yes", onPress: () => navigation.goBack() },
    ]);
  };

  const handleDelete = async () => {
    if (item?.id) {
      await deleteActivity(item.id);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Activity *</Text>
      <TextInput style={styles.input} value={activityName} onChangeText={setActivityName} />
      
      <Text>Duration (min) *</Text>
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} keyboardType="numeric" />
      
      <Text>Date *</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />
      
      {isEditing && (
        <View style={styles.checkboxContainer}>
          <CheckBox value={isSpecial} onValueChange={setIsSpecial} />
          <Text>Mark as special</Text>
        </View>
      )}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text>Save</Text>
        </TouchableOpacity>
        
        {isEditing && (
          <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
            <Text>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, padding: 10, marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  saveButton: { backgroundColor: 'blue', padding: 10 },
  deleteButton: { backgroundColor: 'red', padding: 10 },
});
