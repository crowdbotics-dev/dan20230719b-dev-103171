import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const GreenScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Green Screen</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.subtitle}>Enjoy your stay!</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF'
  }
});
export default GreenScreen;