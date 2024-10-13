// import React, { useState, useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   TouchableOpacity,
//   Platform,
//   StyleSheet,
//   KeyboardAvoidingView,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { DietContext } from '../context/DietContext';

// export default function AddDietEntry({ navigation }) {
//   const { addDietEntry } = useContext(DietContext);
//   const [description, setDescription] = useState('');
//   const [calories, setCalories] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleSave = () => {
//     if (!description || !calories || isNaN(calories) || calories <= 0) {
//       Alert.alert('Invalid Input', 'Please provide valid diet details.');
//       return;
//     }

//     const newEntry = {
//       description,
//       calories: parseInt(calories),
//       date: date.toDateString(),
//       special: parseInt(calories) > 800, // Mark special if calories > 800
//     };

//     addDietEntry(newEntry); // Add the entry to context
//     navigation.goBack(); // Navigate back to the previous screen
//   };

//   const onDateChange = (event, selectedDate) => {
//     setShowDatePicker(false);
//     if (selectedDate) setDate(selectedDate);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <Text style={styles.label}>Description *</Text>
//       <TextInput
//         style={styles.input}
//         value={description}
//         onChangeText={setDescription}
//       />

//       <Text style={styles.label}>Calories *</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={calories}
//         onChangeText={setCalories}
//       />

//       <Text style={styles.label}>Date *</Text>
//       <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//         <TextInput
//           style={styles.input}
//           value={date.toDateString()}
//           editable={false}
//         />
//       </TouchableOpacity>

//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'inline' : 'default'}
//           onChange={onDateChange}
//         />
//       )}

//       <View style={styles.buttonContainer}>
//         <Button title="Cancel" onPress={() => navigation.goBack()} />
//         <Button title="Save" onPress={handleSave} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#e6e6fa',
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DietContext } from '../context/DietContext';

export default function AddDietEntry({ navigation }) {
  const { addDietEntry } = useContext(DietContext);
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (!description || !calories || isNaN(calories) || calories <= 0) {
      Alert.alert('Invalid Input', 'Please provide valid diet details.');
      return;
    }

    const newEntry = {
      description,
      calories: parseInt(calories),
      date: date.toDateString(),
      special: parseInt(calories) > 800, // Mark special if calories > 800
    };

    addDietEntry(newEntry); // Add the entry to context
    navigation.goBack(); // Navigate back to the previous screen
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Hide the picker after selection
    if (selectedDate) setDate(selectedDate); // Update the selected date
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.label}>Description *</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Calories *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <Text style={styles.label}>Date *</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          value={date.toDateString()}
          editable={false} // Prevent direct editing
          pointerEvents="none" // Prevent tap events on text input
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});


