import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [inputSpeed, setInputSpeed] = useState('');
  const [outputSpeed, setOutputSpeed] = useState('');
  const [fromSpeed, setFromSpeed] = useState('km/h');
  const [toSpeed, setToSpeed] = useState('mph');

  const convertSpeed = () => {
    if (inputSpeed) {
      let result;
      if (fromSpeed === 'km/h' && toSpeed === 'mph') {
        result = parseFloat(inputSpeed) / 1.609;
      } else if (fromSpeed === 'mph' && toSpeed === 'km/h') {
        result = parseFloat(inputSpeed) * 1.609;
      } else {
        result = inputSpeed;
      }
      setOutputSpeed(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speed Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Input speed"
        value={inputSpeed}
        onChangeText={(text) => setInputSpeed(text)}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Text>From: </Text>
        <Picker
          selectedValue={fromSpeed}
          style={styles.picker}
          onValueChange={(itemValue) => setFromSpeed(itemValue)}>
          <Picker.Item label="km/h" value="km/h" />
          <Picker.Item label="mph" value="mph" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>To: </Text>
        <Picker
          selectedValue={toSpeed}
          style={styles.picker}
          onValueChange={(itemValue) => setToSpeed(itemValue)}>
          <Picker.Item label="km/h" value="km/h" />
          <Picker.Item label="mph" value="mph" />
        </Picker>
      </View>
      <TouchableOpacity onPress={convertSpeed} style={styles.button}>
        <Text style={styles.buttonText}>Convert Speed</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Result: {outputSpeed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
});
