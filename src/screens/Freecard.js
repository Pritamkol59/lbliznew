import { View, Text,ScrollView,Alert,Dimensions,TouchableWithoutFeedback,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Header_Top from '../components/Header_Top'
import FullScreenChz from 'react-native-fullscreen-chz';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import Freegrediantview from '../components/Freegrediantview';
import Pluse from '../components/Pluse';
import normalize from 'react-native-normalize'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icons from '../theams/Icon';
const windowWidth = Dimensions.get('window').width;
const Freecard = () => {
   function handleScreenTouch() {
        console.log('Screen was touched!');
      
        if (Platform.OS === 'android') {
          FullScreenChz.enable();
        }
      }
      const navigation = useNavigation();
      const data = [
        { id: '1', name: 'Chandan Roy', mobileNo: '9876543210', refId: 'ydhgdfhgdgdgdgseygtxsdegsedtsedt' },
        { id: '2', name: 'Chandan Roy', mobileNo: '9876543210', refId: 'ydhgdfhgdgdgdgseygtxsdegsedtsedt' },
        { id: '3', name: 'Chandan Roy', mobileNo: '9876543210', refId: 'ydhgdfhgdgdgdgseygtxsdegsedtsedt' },
        { id: '4', name: 'Chandan Roy', mobileNo: '9876543210', refId: 'ydhgdfhgdgdgdgseygtxsdegsedtsedt' },
        { id: '5', name: 'Chandan Roy', mobileNo: '9876543210', refId: 'ydhgdfhgdgdgdgseygtxsdegsedtsedt' },
        // Add more items here
      ];
       const [listData, setData] = useState(data);
      
  return (
    <View style={styles.container}>
     <Header_Top back='Home' name1='Freecard' name2='Freelink'/>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
            <View style={styles.contan}>
<SwipeListView
  data={listData}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Freegrediantview name={item.name} mobileNo={item.mobileNo} refId={item.refId} />}
  renderHiddenItem={(data, rowMap) => (
 <TouchableOpacity onPress={() => {
                  Alert.alert(
                    'Delete item',
                    'Are you sure you want to delete this item?',
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel'
                      },
                      {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () => {
                          // Delete the item and close the row
                          const newData = [...listData];
                          newData.splice(data.index, 1);
                          setData(newData);
                          rowMap[data.item.id]?.closeRow();
                        }
                      }
                    ]
                  );
                }}>
      <View style={styles.rowBack}>
         <Image source={Icons.delete} resizeMode='stretch' style={styles.icon} />
      </View>
    </TouchableOpacity>
  )}
  // leftOpenValue={normalize(75)} // Width of the left hidden item
  rightOpenValue={-normalize(75)} // Width of the right hidden item
/>
 <View style={{  marginVertical:normalize(80), }}></View>
     </View>
     </TouchableWithoutFeedback>
     </ScrollView>
     <Pluse name="Freepluse"/>
     <ButtonTab/>
    </View>
  )
}

export default Freecard;

const styles = StyleSheet.create({
 container:{
        height:"100%",
        backgroundColor:Colors.gray,
    },

    contan:{
      paddingHorizontal:normalize(8),
    },

     rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal:normalize(16),
    height:normalize(125),
    marginVertical:normalize(10),
    borderRadius:15,
  },
  deleteText: {
    color: 'white',
  },

  icon:{
    height:normalize(28),
    width:normalize(28),
    tintColor:Colors.white,
    // marginVertical:normalize(18)
  }
})