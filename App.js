import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [price, setPrice] = React.useState(null);
  const [discount, setDiscount] = React.useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        setText={setPrice}
        value={price}
        placeholder="Enter Original Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        setText={setDiscount}
        value={discount}
        placeholder="Enter Discount Percentage"
        keyboardType="numeric"
      />
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
    padding : 3,
    borderWidth: 1,
  },
});
