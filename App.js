import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Task from "./components/Task";
import { NativeBaseProvider, Box } from "native-base";

const Homescreen = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeItem = (index) => {
    let tasksCopy = [...taskItems];
    tasksCopy.splice(index, 1);
    setTaskItems(tasksCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => completeItem(index)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
          <Task text={'Niggagaa'} />
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          onChangeText={(text) => setTask(text)}
          value={task}
          style={styles.input}
          placeholder={"Write a task..."}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <Box style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </Box>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <Homescreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec", // white
    padding: 0,
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderRadius: 60,
    width: "70%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
  },
});

export default App;
