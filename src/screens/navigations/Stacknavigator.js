import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import Splash from '../Splash';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullScreenChz from 'react-native-fullscreen-chz';
import Login from '../Login';
import Otp from '../Otp';
import Home from '../Home';
import Freecard from '../Freecard';
import Premiumcard from '../Premiumcard';
import Users from '../Users';
import Freepluse from '../Freepluse';
import Create_Free_Card from '../Create_Free_Card';
import Free_Card_Form from '../Free_Card_Form';


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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Freecard" component={Freecard} />
        <Stack.Screen name="Premiumcard" component={Premiumcard} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Freepluse" component={Freepluse} />
        <Stack.Screen name="Create_Free_Card" component={Create_Free_Card} />
        <Stack.Screen name="Free_Card_Form" component={Free_Card_Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
