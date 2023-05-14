import { View, Text,ScrollView,Alert,Dimensions,TouchableWithoutFeedback,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Header_Top from '../components/Header_Top'
import FullScreenChz from 'react-native-fullscreen-chz';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import normalize from 'react-native-normalize'
import PDF from 'react-native-pdf';
import RNFS from 'react-native-fs';
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

      const invoice = {
  id: 123,
  date: '2023-04-25',
  customer: 'John Smith',
  items: [
    { description: 'Item 1', price: 10 },
    { description: 'Item 2', price: 15 },
    { description: 'Item 3', price: 20 },
  ],
};

      const generateAndDownloadInvoice = async (invoice) => {
  try {
    const path = RNFS.DocumentDirectoryPath + `/invoice_${invoice.id}.pdf`;
    const options = {
      // Modify these options to customize the PDF layout
      format: 'A4',
      orientation: 'portrait',
    };
    const pdf = await PDF.createPDF(
      <View>
        <Text style={styles.title}>Invoice #{invoice.id}</Text>
        <Text style={styles.subtitle}>Date: {invoice.date}</Text>
        <Text style={styles.subtitle}>Customer: {invoice.customer}</Text>
        <View style={styles.items}>
          {invoice.items.map((item) => (
            <View style={styles.item} key={item.description}>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.total}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>
            {invoice.items.reduce((acc, item) => acc + item.price, 0)}
          </Text>
        </View>
      </View>,
      options,
    );
 try {
  await RNFS.writeFile(path, pdf, 'base64');
  await RNFS.downloadFile({
    fromUrl: `file://${path}`,
    toFile: `${RNFS.DownloadDirectoryPath}/invoice_${invoice.id}.pdf`,
  }).promise.then(() => {
    console.log('Downloaded');
  });
} catch (error) {
  console.log(error);
}
  } catch (error) {
    console.error(error);
  }
};
  return (
    <View style={styles.container}>
      <Header_Top back='Freecard' name1='Freecard' name2='Freelink'/>
       <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback  onPress={handleScreenTouch}>
            <View style={styles.contan}>
      <TouchableOpacity onPress={() => generateAndDownloadInvoice(invoice)} style={styles.btn}>
          <Text style={styles.txt}>genpdf</Text>
      </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
       <ButtonTab/>
    </View>
  )
}

export default Create_Free_Card

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


     btn:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        height:normalize(50),
        borderRadius:10,
        backgroundColor:Colors.purpul,
        marginVertical:normalize(15),

    },
    txt:{
        textAlign:'center',
        fontWeight:'bold',
        color:Colors.white,
        fontSize:normalize(18)
    }
})