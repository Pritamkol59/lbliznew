import { View, Text,ScrollView,Alert,Dimensions,TouchableWithoutFeedback,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Header_Top from '../components/Header_Top'
import FullScreenChz from 'react-native-fullscreen-chz';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import Freegrediantview from '../components/Freegrediantview';

import normalize from 'react-native-normalize'

import Icons from '../theams/Icon';
import PluseAction from '../components/PluseAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Freepluse = () => {
const navigation = useNavigation();
      function handleScreenTouch() {
        console.log('Screen was touched!');
      
        if (Platform.OS === 'android') {
          FullScreenChz.enable();
        }
      }
  return (
     <View style={styles.container}>
      <Header_Top back='Freecard' name1='Freecard' name2='Freelink'/>
       <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
            <View style={styles.contan}>

                <PluseAction name1={'Create_Free_Card'} name2={'Create_Free_Card_link'}/>

                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
       <ButtonTab/>
    </View>
  )
}

export default Freepluse

const styles = StyleSheet.create({
 container:{
        height:"100%",
        backgroundColor:Colors.gray,
       
        
    },
  contan:{
      paddingHorizontal:normalize(8),
       marginTop:windowHeight/4,
       width:'100%',
      justifyContent:'center',
      alignItems:'center'
      
    },

})