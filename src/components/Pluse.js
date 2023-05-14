import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Icons from '../theams/Icon'
import normalize from 'react-native-normalize'

const Pluse = (props) => {
     const navigation = useNavigation();
  return (
    <View style={styles.contaner}>
      <TouchableOpacity onPress={() => navigation.replace(props.name)}>
          <Image source={Icons.plus} resizeMode='stretch' style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Pluse

const styles = StyleSheet.create({
icon:{
    height:normalize(50),
    width:normalize(50),
    
},
contaner:{
    position:'absolute',
    bottom:normalize(130),
    right:normalize(15),
}

})