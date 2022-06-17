import React from 'react';
import { ImageBackground, StyleSheet, Text, Image } from 'react-native';
import { useAppContext } from '../context/Provider';
import MoodPicker from '../components/MoodPicker';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
      {/* <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
      <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}> */}
      <Text style={styles.heading}>Pick your Mood</Text>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
});

export default Home;
