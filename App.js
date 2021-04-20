import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';


export default function App() {
  
  const checkPrice = (text) => {
    if (text > 0 || text == "") {
      setPrice(text);
    }
  }
  
  const checkDiscount = (text) => {
    if (text >= 0 && text <= 100) {
      setDiscount(text);
    }
  }

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => checkPrice(text)}
        value={price}
        placeholder="Enter Original Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => checkDiscount(text)}
        value={discount}
        placeholder="Enter Discount Percentage"
        keyboardType="numeric"
      />

      <Text style={styles.textStyle}>You Save: {parseFloat((discount / 100 * price)).toFixed(2)}</Text>
      <Text style={styles.textStyle}>Final Price: {parseFloat(price - (discount / 100) * price).toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81a4fc',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 220,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 12,
    padding: 5,
    borderWidth: 2,
    borderColor: 'white',
    color: 'black',
    backgroundColor: '#90affc'
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 10
  }, 
  textStyle : {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'

  }
});
