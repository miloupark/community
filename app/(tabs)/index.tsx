import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

export default function HomeScreen() {

  const [text, setText] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>HI</Text>
      </View>
      <TextInput value={text} onChangeText={(value)=> setText(value)}
        style={styles.input}/>
        <Button title="button title" onPress={()=>console.log('pressed!')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  input: {
    fontSize: 30,
  }
});