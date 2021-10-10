import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => (
  <View style={styles.item}>
    <View style={styles.itemLeft}>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
    <View style={styles.circle} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "85%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
