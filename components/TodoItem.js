import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function TodoItem({ item, presHandler }) {
  return (
    <TouchableOpacity onPress={() => presHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 14,
    marginTop: 14,
    borderColor: "#bbb",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
