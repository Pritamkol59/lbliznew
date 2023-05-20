import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Image, FlatList } from 'react-native';
import Header_Top from '../components/Header_Top';
import FullScreenChz from 'react-native-fullscreen-chz';
import { useNavigation } from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import normalize from 'react-native-normalize';
import FreecardData from '../utils/FreecardData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Create_Free_Card = () => {
  const navigation = useNavigation();

  function handleScreenTouch() {
    console.log('Screen was touched!');

    if (Platform.OS === 'android') {
      FullScreenChz.enable();
    }
  }

  function navi(id) {
    const card = id;
    console.log(card);
    navigation.push('Free_Card_Form',{paramKey:card});
  }

  return (
    <View style={styles.container}>
      <Header_Top back='Freepluse' name1='Freecard' name2='Freelink' />
      <Text style={styles.hdrtext}> Select A Card</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
          <FlatList
            style={{ marginBottom: normalize(100), paddingHorizontal: normalize(8), marginLeft: normalize(-5.1) }}
            data={FreecardData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navi(item.titel)}>
                <Image source={item.img} resizeMode='stretch' style={styles.img} />
                {/* <Text>{item.titel}</Text> */}
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </TouchableWithoutFeedback>
      </ScrollView>
      <ButtonTab />
    </View>
  );
};

export default Create_Free_Card;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.gray,
  },
  contan: {
    marginTop: windowHeight / 4,
    // paddingHorizontal: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: normalize(180),
    width: '100%',
  },
  hdrtext: {
    color: Colors.white,
    marginVertical: normalize(26),
    textAlign: 'center',
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
});
