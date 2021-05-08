import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import Header from './src/Components/Header';

const DAYS = 6;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
});
