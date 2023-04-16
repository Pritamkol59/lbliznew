import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Colors from '../theams/Colors';
import Images from '../theams/Images';
import normalize from 'react-native-normalize';
import Mytext from '../components/Mytext';
import {TextInput} from 'react-native-gesture-handler';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import FullScreenChz from 'react-native-fullscreen-chz';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

function handleScreenTouch() {
  console.log('Screen was touched!');

  if (Platform.OS === 'android') {
    FullScreenChz.enable();
  }
}

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contaner}>
      <ScrollView style={styles.panel} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
          <View>
            <Image
              source={Images.login}
              resizeMode="stretch"
              style={styles.loginimg}
            />
            <View style={styles.textwrapper}>
              <Mytext style={styles.h1}>Welcome Back</Mytext>
            </View>

            <Image
              source={Images.font}
              resizeMode="cover"
              style={styles.middle}
            />

            <Mytext style={styles.smalltxt}>Enter Your Phone No </Mytext>

            <TextInput
              style={styles.textinput}
              placeholder="Enter Phone no"
              placeholderTextColor={Colors.gray}
              keyboardType="number-pad"
              maxLength={10}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('Otp')}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <KeyboardSpacer topSpacing={0} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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
    color: '#3D3939',
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
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textinput: {
    height: normalize(50),
    width: '80%',
    borderColor: Colors.gray,
    borderRadius: 50,
    borderWidth: 1,
    padding: normalize(15),
    color: '#000',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginBottom: normalize(15),
  },

  button: {
    backgroundColor: Colors.purpul,
    marginTop: Platform.OS === 'android' ? normalize(25) : normalize(20),
    height: normalize(50),
    width: '80%',

    borderRadius: 50,
    marginBottom: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: normalize(100),
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
});
