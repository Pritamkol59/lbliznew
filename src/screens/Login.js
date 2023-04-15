import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Colors from '../theams/Colors';
import Images from '../theams/Images';
import normalize from 'react-native-normalize';
import Mytext from '../components/Mytext';
import {TextInput} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  return (
    <View style={styles.contaner}>
      <Image
        source={Images.login}
        resizeMode="stretch"
        style={styles.loginimg}
      />
      <View style={styles.textwrapper}>
        <Mytext style={styles.h1}>Welcome Back</Mytext>
      </View>

      <Image source={Images.font} resizeMode="cover" style={styles.middle} />

      <Mytext style={styles.smalltxt}>Enter Your Phone No :</Mytext>

      <TextInput style={styles.textinput} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contaner: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  loginimg: {
    height: normalize(300),
    width: windowWidth,
  },
  textwrapper: {
    paddingHorizontal: normalize(20),
    position: 'absolute',
    left: 0,
    right: 0,
    top: normalize(100),
  },
  h1: {
    fontSize: normalize(28),
    fontWeight: '600',
  },
  middle: {
    height: normalize(250),
    width: normalize(350),
    marginTop: normalize(-10),
  },
  smalltxt: {
    fontSize: normalize(14.6),
    marginVertical: normalize(25),
    paddingHorizontal: normalize(26),
  },

  textinput: {
    height: normalize(50),
    width: '80%',
    borderColor: Colors.texinputclr,
    borderRadius: 8,
    borderWidth: 0.5,
    padding: normalize(5),
    color: '#000',
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
});
