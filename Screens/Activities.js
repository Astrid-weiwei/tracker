import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import commonStyles from '../context/styles';

export default function Activities({ navigation }) {
  const { activities } = useContext(ActivitiesContext);
  const { themeStyles } = useTheme();

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: themeStyles.itemColor }]}>
      <Text style={[styles.text, { color: themeStyles.textColor }]}>{item.type}</Text>
      <Text style={[styles.text, { color: themeStyles.textColor }]}>{item.date}</Text>
      <Text style={[styles.text, { color: themeStyles.textColor }]}>{item.duration} min</Text>
      {item.special && (
        <Ionicons name="warning" size={20} color="yellow" style={styles.icon} />
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.addButtonContainer}>
        <Ionicons
          name="add"
          size={30}
          color="white"
          onPress={() => navigation.navigate('AddActivity')}
        />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   item: {
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   text: {
//     fontSize: 16,
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   addButtonContainer: {
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#4c669f',
//     borderRadius: 50,
//     padding: 10,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: commonStyles.padding,
  },
  item: {
    padding: commonStyles.padding,
    marginVertical: 8,
    borderRadius: commonStyles.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});