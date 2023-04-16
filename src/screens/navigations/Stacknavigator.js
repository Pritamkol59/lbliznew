import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import Splash from '../Splash';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullScreenChz from 'react-native-fullscreen-chz';
import Login from '../Login';
import Otp from '../Otp';

const Stacknavigator = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    handleScreenTouch();
  }, []);

  function handleScreenTouch() {
    console.log('Screen was touched!');

    if (Platform.OS === 'android') {
      FullScreenChz.enable();
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
