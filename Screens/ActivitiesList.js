import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ActivitiesContext } from '../contexts/ActivitiesContext';

export default function ActivitiesList({ navigation }) {
  const { activities } = useContext(ActivitiesContext);

  // Helper function to format the date
  const formatDate = (date) => {
    // Check if date has seconds and nanoseconds properties
    if (date && date.seconds !== undefined && date.nanoseconds !== undefined) {
      // Convert Firestore timestamp to JavaScript Date
      return new Date(date.seconds * 1000).toDateString();
    } else if (date instanceof Date) {
      // If it's already a JavaScript Date, format it
      return date.toDateString();
    }
    return ''; // Return empty string if date is invalid
  };

  return (
    <View style={styles.container}>
      {activities.map((activity) => (
        <TouchableOpacity
          key={activity.id}
          style={styles.activityContainer}
          onPress={() => navigation.navigate('EditActivity', { activity })}
        >
          <Text style={styles.activityName}>{activity.name}</Text>
          <Text style={styles.activityDate}>{formatDate(activity.date)}</Text>
          <Text style={styles.activityDuration}>{activity.duration} min</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#d6cce5',
  },
  activityContainer: {
    backgroundColor: '#4c669f',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  activityDate: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  activityDuration: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
});
