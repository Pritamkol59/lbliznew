import { View, Text,ScrollView,Dimensions,TouchableWithoutFeedback,StyleSheet, } from 'react-native'
import React from 'react'
import Header_Top from '../components/Header_Top'
import FullScreenChz from 'react-native-fullscreen-chz';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import Pluse from '../components/Pluse';
const windowWidth = Dimensions.get('window').width;

const Premiumcard = () => {
  function handleScreenTouch() {
        console.log('Screen was touched!');
      
        if (Platform.OS === 'android') {
          FullScreenChz.enable();
        }
      }
      const navigation = useNavigation();
  return (
  <View style={styles.container}>
     <Header_Top back='Home' name1='Premiumcard' name2='Premiumlink'/>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
            <View>

              
     </View>
     </TouchableWithoutFeedback>
     </ScrollView>
     <Pluse/>
     <ButtonTab/>
    </View>
  )
}

export default Premiumcard

const styles = StyleSheet.create({

   container:{
        height:"100%",
        backgroundColor:Colors.gray,
    },
})