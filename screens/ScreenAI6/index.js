import React from "react";
import { View, SafeAreaView, StyleSheet, Button } from "react-native";

const BlueScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.blueScreen} />
      <Button title="Click me" onPress={() => console.log("Button pressed")} />
      <Button title="Red Button" color="red" onPress={() => console.log("Red Button pressed")} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  blueScreen: {
    flex: 1,
    backgroundColor: "blue"
  }
});
export default BlueScreen;