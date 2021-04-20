import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Enter Original Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDiscount}
        value={discount}
        placeholder="Enter Discount Percentage"
        keyboardType="numeric"
      />
      <Text>You Save: {(discount/100) * price}</Text>
      <Text>Final Price: {price - (discount/100) * price}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    padding: 3,
    borderWidth: 1,
  },
});
