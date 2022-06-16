import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../context/Provider';
import MoodPicker from '../components/MoodPicker';

const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pick your Mood</Text>
      <MoodPicker onSelect={appContext.handleSelectMood} />
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Home;
