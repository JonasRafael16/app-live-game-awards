import React from "react";
import { View, Text, StyleSheet } from "react-native";


export function WinnerScreen() {

  return (
    <View style={styles.container}>
      <Text>WinnerScreen!</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});