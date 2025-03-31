import React from "react";
import { View, Text } from "react-native";

export default function Stack2() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Stack2</Text>
    </View>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

  