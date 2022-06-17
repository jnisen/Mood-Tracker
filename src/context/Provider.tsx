import React, { useState, useEffect, useCallback } from 'react';
import { createContext } from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'my-app-data';

type AppContextTypes = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const AppContext = createContext<AppContextTypes>({
  moodList: [],
  handleSelectMood: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, { mood, timestamp: Date.now() }];
      setAppData({ moods: newValue });
      return newValue;
    });
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
