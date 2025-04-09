import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.text}>HI</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>HI</Text>
          <Text style={styles.text}>HI</Text>
          <Text style={styles.text}>HI</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "black",
  },
  container2: {
    backgroundColor: "gray",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  input: {
    fontSize: 30,
  },
});
