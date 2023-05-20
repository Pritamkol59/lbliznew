import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Dimensions, Image, FlatList } from 'react-native';
import Header_Top from '../components/Header_Top';
import FullScreenChz from 'react-native-fullscreen-chz';
import { useNavigation } from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import normalize from 'react-native-normalize';
import Freecardfrom from '../components/Freecardfrom';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Free_Card_Form = ({route}) => {
    const navigation = useNavigation();

    const number= route.params.paramKey ;

//  const card= route.params.paramKey ;
    // const { title } = route.params.title; // Access the passed parameter (title)

    console.log(number);
    function handleScreenTouch() {
        console.log('Screen was touched!');
    
        if (Platform.OS === 'android') {
          FullScreenChz.enable();
        }
      }

  return (
     <View style={styles.container}>
      <Header_Top back='Create_Free_Card' name1='Freecard' name2='Freelink' />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
            <View>
              <Freecardfrom cardcolor={number}/>
                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
                <ButtonTab />
    </View>
  )
}

export default Free_Card_Form

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: Colors.gray,
      },
      contan: {
       marginTop:windowHeight/4,
        paddingHorizontal: normalize(8),
        justifyContent: 'center',
        alignItems: 'center',
      },
})