import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const RedScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.redScreen} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  redScreen: {
    flex: 1,
    backgroundColor: 'red'
  }
});
export default RedScreen;