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
import React, {useState, useRef} from 'react';
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

const Otp = () => {
  const navigation = useNavigation();

  const bjp = () => {
    const Otp = `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`;
    console.log(Otp);
  };

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');

  const [touch, settouch] = useState(1);
  handleTouch = () => {};
  otpfunction = () => {
    if (
      pin1 == '' ||
      pin2 == '' ||
      pin3 == '' ||
      pin4 == '' ||
      pin5 == '' ||
      pin6 == ''
    ) {
      showErrorAlert('Please enter otp');
    } else {
    }
  };

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
              <Mytext style={styles.h1}>OTP Verification</Mytext>
            </View>

            <Image
              source={Images.verified}
              resizeMode="cover"
              style={styles.middle}
            />

            <Mytext style={styles.smalltxt}>Enter OTP </Mytext>

            <View style={styles.otpInputs}>
              <TextInput
                placeholderTextColor={Colors.lightgray}
                onFocus={() => settouch(1)}
                style={{textAlign: 'center', width: '15%'}}
                placeholder="_"
                caretHidden={true}
                ref={inputRef1}
                value={pin1}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin1(val);
                  if (!pin1.length > 0) {
                    inputRef2.current.focus();
                  }
                }}
                fontSize={normalize(20)}
                borderWidth={1}
                borderRadius={10}
                color={Colors.black}
                height={normalize(50)}
                width={normalize(50)}
                borderColor={touch == 1 ? Colors.black : Colors.lightgray}
              />
              <TextInput
                placeholderTextColor={Colors.lightgray}
                onFocus={() => settouch(2)}
                caretHidden={true}
                textAlign="center"
                placeholder="_"
                ref={inputRef2}
                value={pin2}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin2(val);
                  if (!pin2.length > 0) {
                    inputRef3.current.focus();
                  } else {
                    inputRef1.current.focus();
                  }
                }}
                borderWidth={1}
                borderRadius={10}
                borderColor={
                  touch == 2 ? Colors.primaryColor : Colors.lightgray
                }
                color={Colors.placeholder}
                height={normalize(50)}
                width={normalize(50)}
                fontSize={normalize(20)}
              />
              <TextInput
                placeholderTextColor={Colors.lightgray}
                borderColor={touch == 3 ? Colors.black : Colors.lightgray}
                onFocus={() => settouch(3)}
                caretHidden={true}
                textAlign="center"
                placeholder="_"
                ref={inputRef3}
                value={pin3}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin3(val);
                  if (!pin3.length > 0) {
                    inputRef4.current.focus();
                  } else {
                    inputRef2.current.focus();
                  }
                }}
                borderWidth={1}
                borderRadius={10}
                color={Colors.placeholder}
                height={normalize(50)}
                width={normalize(50)}
                fontSize={normalize(20)}
              />
              <TextInput
                placeholderTextColor={Colors.lightgray}
                borderColor={touch == 4 ? Colors.black : Colors.lightgray}
                onFocus={() => settouch(4)}
                caretHidden={true}
                textAlign="center"
                placeholder="_"
                ref={inputRef4}
                value={pin4}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin4(val);
                  if (!pin4.length > 0) {
                    inputRef5.current.focus();
                  } else {
                    inputRef3.current.focus();
                  }
                }}
                borderWidth={1}
                borderRadius={10}
                color={Colors.placeholder}
                height={normalize(50)}
                width={normalize(50)}
                fontSize={normalize(20)}
              />
              <TextInput
                placeholderTextColor={Colors.lightgray}
                borderColor={touch == 5 ? Colors.black : Colors.lightgray}
                onFocus={() => settouch(5)}
                caretHidden={true}
                textAlign="center"
                placeholder="_"
                ref={inputRef5}
                value={pin5}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin5(val);
                  if (!pin5.length > 0) {
                    inputRef6.current.focus();
                  } else {
                    inputRef4.current.focus();
                  }
                }}
                borderWidth={1}
                borderRadius={10}
                color={Colors.placeholder}
                height={normalize(50)}
                width={normalize(50)}
                fontSize={normalize(20)}
              />
              <TextInput
                placeholderTextColor={Colors.lightgray}
                borderColor={touch == 6 ? Colors.black : Colors.lightgray}
                onFocus={() => settouch(6)}
                caretHidden={true}
                textAlign="center"
                placeholder="_"
                ref={inputRef6}
                value={pin6}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={val => {
                  setPin6(val);
                  if (!pin6.length > 0) {
                    inputRef6.current.focus();
                  } else {
                    inputRef5.current.focus();
                  }
                }}
                borderWidth={1}
                borderRadius={10}
                color={Colors.placeholder}
                height={normalize(50)}
                width={normalize(50)}
                fontSize={normalize(20)}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={bjp}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <KeyboardSpacer topSpacing={0} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default Otp;

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
    top: normalize(140),
  },
  h1: {
    fontSize: normalize(28),
    fontWeight: '600',
    color: '#3D3939',
  },
  middle: {
    height: normalize(280),
    width: normalize(350),
    marginTop: normalize(-28),
    alignSelf: 'center',
  },
  smalltxt: {
    fontSize: normalize(14.6),
    marginVertical: normalize(25),
    paddingHorizontal: normalize(26),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  otpInputs: {
    flexDirection: 'row',
    height: normalize(50),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(16),
    marginBottom: normalize(16),
    paddingHorizontal: normalize(32),
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
