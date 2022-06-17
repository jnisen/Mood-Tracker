import React from 'react';
import { View } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../context/Provider';

const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </View>
  );
};

export default Home;
