import { StyleSheet, Text, View, TextInput, ScrollView,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../theams/Colors';
import normalize from 'react-native-normalize';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Freecardfrom = (props) => {

  

  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    co: '',
    phn: '',
    add1: '',
    add2: '',
    ps: '',
    po: '',
    district: '',
    state: '',
    pin: '',
    Landmark: '',
    cardname:props.cardcolor
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    console.log(props);
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    } catch (error) {
      console.log('Error loading contacts:', error);
    }
  };

  const saveContacts = async (updatedContacts) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
      Alert.alert('Success', 'data saved successfully!');
    } catch (error) {
      console.log('Error saving contacts:', error);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (formData.name.trim() === '' || formData.phn.trim() === '' || formData.add1.trim() === '' || formData.ps.trim() === '' || formData.po.trim() === '' || formData.district.trim() === '' || formData.state.trim() === '' || formData.pin.trim() === '') {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    // Create new contact object
    const newContact = {
      id: generateUniqueId(),
      name: formData.name,
      co: formData.co,
      phn: formData.phn,
      add1: formData.add1,
      add2: formData.add2,
      ps: formData.ps,
      po: formData.po,
      district: formData.district,
      state: formData.state,
      pin: formData.pin,
      Landmark: formData.Landmark,
      cardname:props.cardcolor
    };

    // Update contacts array
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);

    // Save updated contacts to AsyncStorage
    saveContacts(updatedContacts);

    // Clear form data
    setFormData({
      name: '',
      co: '',
      phn: '',
      add1: '',
      add2: '',
      ps: '',
      po: '',
      district: '',
      state: '',
      pin: '',
      Landmark: '',
    });

    // Other logic for form submission
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shipment Details</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.plainText}>Customer Full Name *</Text>

        <TextInput
          style={styles.input}
          value={formData.name}
          placeholder=""
          onChangeText={(value) => handleChange('name', value)}
        />

        <Text style={styles.plainText}>Care-off(C/o)</Text>

        <TextInput
          style={styles.input}
          value={formData.co}
          placeholder=""
          onChangeText={(value) => handleChange('co', value)}
        />

        <Text style={styles.plainText}>Customer Phone-no*</Text>

        <TextInput
          style={styles.input}
          value={formData.phn}
          placeholder=""
          onChangeText={(value) => handleChange('phn', value)}
          keyboardType="number-pad"
           maxLength={10}
        />

        <Text style={styles.plainText}>Customer Address-1*</Text>

        <TextInput
          style={styles.input}
          value={formData.add1}
          placeholder=""
          onChangeText={(value) => handleChange('add1', value)}
          maxLength={50}
        />

        <Text style={styles.plainText}>Customer Address-2</Text>

        <TextInput
          style={styles.input}
          value={formData.add2}
          placeholder=""
          onChangeText={(value) => handleChange('add2', value)}
          maxLength={70}
        />

        <Text style={styles.plainText}>Customer's Police Stations*</Text>

        <TextInput
          style={styles.input}
          value={formData.ps}
          placeholder=""
          onChangeText={(value) => handleChange('ps', value)}
          maxLength={100}
        />

        <Text style={styles.plainText}>Customer's Post-Office*</Text>

        <TextInput
          style={styles.input}
          value={formData.po}
          placeholder=""
          onChangeText={(value) => handleChange('po', value)}
          maxLength={100}
        />

        <Text style={styles.plainText}>Customer's District*</Text>

        <TextInput
          style={styles.input}
          value={formData.district}
          placeholder=""
          onChangeText={(value) => handleChange('district', value)}
          maxLength={100}
        />

        <Text style={styles.plainText}>Customer's State*</Text>

        <TextInput
          style={styles.input}
          value={formData.state}
          placeholder=""
          onChangeText={(value) => handleChange('state', value)}
          maxLength={100}
        />

        <Text style={styles.plainText}>Customer's Pin-Code*</Text>

        <TextInput
          style={styles.input}
          value={formData.pin}
          placeholder=""
          onChangeText={(value) => handleChange('pin', value)}
          keyboardType="number-pad"
          maxLength={10}
        />

        <Text style={styles.plainText}>Customer's Landmark</Text>

        <TextInput
          style={styles.input}
          value={formData.Landmark}
          placeholder=""
          onChangeText={(value) => handleChange('Landmark', value)}
          maxLength={100}
        />

        <View style={styles.submitBtn} onTouchEnd={handleSubmit}>
          <Text style={styles.textBtn}>Submit</Text>
        </View>
        <KeyboardSpacer />
        <View style={{ marginVertical: normalize(30) }}></View>
      </ScrollView>
    </View>
  );
};

export default Freecardfrom;

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor: Colors.white,
    paddingHorizontal: normalize(8),
    marginHorizontal: normalize(8),
    borderRadius: 8,
    paddingVertical: normalize(10),
  },
  headerText: {
    textAlign: 'center',
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: Colors.black,
    paddingVertical: normalize(10),
  },
  plainText: {
    fontSize: normalize(18),
    color: Colors.black,
    marginVertical: normalize(15),
    fontWeight: 'bold',
    paddingHorizontal: normalize(8),
  },
  input: {
    borderRadius: normalize(9),
    borderWidth: 1,
    color: Colors.black,
    borderColor: Colors.purpul,
    paddingHorizontal: normalize(8),
    marginVertical: normalize(5),
  },
  submitBtn: {
    borderRadius: normalize(9),
    borderWidth: 1,
    borderColor: Colors.purpul,
    paddingHorizontal: normalize(8),
    marginVertical: normalize(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.purpul,
    height: normalize(50),
  },
  textBtn: {
    fontSize: normalize(23),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
