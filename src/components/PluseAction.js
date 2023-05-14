import { View, Text,ScrollView,Alert,Dimensions,TouchableWithoutFeedback,StyleSheet,TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import Colors from '../theams/Colors'
import {useNavigation} from '@react-navigation/native';

const PluseAction = (props) => {
    const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity  onPress={() => navigation.replace(props.name1)} style={styles.btn}>
          <Text style={styles.txt}>{props.name1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace(props.name1)} style={styles.btn}>
          <Text style={styles.txt}>{props.name2}</Text>
      </TouchableOpacity>

     {props.name3? <TouchableOpacity onPress={() => navigation.replace(props.name3)} style={styles.btn}>
          <Text style={styles.txt}>{props.name3}</Text>
      </TouchableOpacity>:null}
     {props.name4? <TouchableOpacity onPress={() => navigation.replace(props.name4)} style={styles.btn}>
          <Text style={styles.txt}>{props.name4}</Text>
      </TouchableOpacity>:null}
      
    
    </>
  )
}

export default PluseAction

const styles = StyleSheet.create({
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