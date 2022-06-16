import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Analytics;
