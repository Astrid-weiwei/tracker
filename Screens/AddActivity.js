import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivitiesContext } from '../context/ActivitiesContext';

export default function AddActivity({ navigation }) {
  const { addActivity } = useContext(ActivitiesContext);
  const [activityType, setActivityType] = useState(null);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (!activityType || !duration || isNaN(duration) || duration <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid activity details.');
      return;
    }

    const newActivity = {
      type: activityType,
      duration: parseInt(duration),
      date: date.toDateString(),
      special: (activityType === 'Running' || activityType === 'Weights') && duration > 60,
    };

    addActivity(newActivity);
    navigation.goBack();
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Close the picker after selecting
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.label}>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={[
          { label: 'Walking', value: 'Walking' },
          { label: 'Running', value: 'Running' },
          { label: 'Swimming', value: 'Swimming' },
          { label: 'Weights', value: 'Weights' },
          { label: 'Yoga', value: 'Yoga' },
          { label: 'Cycling', value: 'Cycling' },
          { label: 'Hiking', value: 'Hiking' },
        ]}
        setOpen={setOpen}
        setValue={setActivityType}
        style={styles.dropdown}
      />

      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Date *</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          value={date.toDateString()}
          editable={false}
          pointerEvents="none" // Prevents editing the text directly
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onDateChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6e6fa',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  dropdown: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});