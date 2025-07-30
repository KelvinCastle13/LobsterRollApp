import React, { useState } from 'react';
import { 
  View, 
  Text,  
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  Modal,
  Alert, 
} from 'react-native';
import { Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Image, Dimensions} from 'react-native';
import { useFonts, Chewy_400Regular as ChewyRegular } from '@expo-google-fonts/chewy';

export default function App() {
  const [type, setType] = useState('size');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const {width} = Dimensions.get('window');
  const [fontsLoaded] = useFonts({
    Chewy: ChewyRegular,
  });

  if (!fontsLoaded) {
    return <Text style={{ textAlign: 'center', marginTop: 100 }}>Loading Fonts...</Text>;
  }

  const convertValue = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    let converted;
    switch (type) {
    case 'size':
      converted = value * 0.16;
      setResult(`${converted.toFixed(2)} Lobster Roll`);
      break;
    case 'weight':
      converted = value * 4;
      setResult(`${converted.toFixed(2)} Lobster Roll`);
      break;
    case 'price':
      converted = value * .0313;
      setResult(`${converted.toFixed(2)} Lobster Roll`);
      break;
    default:
      setResult(null);
    }
  };

  return (

    <View style={styles.page}>
      <Image
        source={{ uri: 'https://previews.123rf.com/images/gigidigidesign/gigidigidesign2504/gigidigidesign250451168/244821326-illustration-of-a-hot-dog-with-lobster-vegetables-and-eggs-on-a-white-background.jpg' }}
        style={styles.topImage}
        resizeMode="contain"
      />

      <View style={styles.container}>
        <Text style={styles.title}>Lobster Roll Converter</Text>

        <Text style={styles.label}>Choose type:</Text>
        <Picker
          selectedValue={type}
          style={styles.picker}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Size (Inches to Lobster Roll)" value="size" />
          <Picker.Item label="Weight (lb to lobster roll)" value="weight" />
          <Picker.Item label="Price (USD to lobster roll)" value="price" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Enter value"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Button title="How many Lobster Rolls?" onPress={convertValue} />

        {result && <Text style={styles.result}>Result: {result}</Text>}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fbfcf6',
  },
  topImage: {
    width: 400,
    height: 200, // adjust as needed
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fbfcf6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontFamily: 'Chewy',
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: '#fbfcf6',
    height: 55,
    marginBottom: 16,
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
});
