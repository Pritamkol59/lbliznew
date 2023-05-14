import { StyleSheet, Text, View ,Image, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import Colors from '../theams/Colors'
import {useNavigation} from '@react-navigation/native';
import Icons from '../theams/Icon';
const windowWidth = Dimensions.get('window').width;
const Header_Top = (props) => {
     const navigation = useNavigation();
  return (
    <View style={styles.row}>
        <TouchableOpacity  onPress={() => navigation.replace(props.back)}>
        <View style={styles.contain}>
      <Image source={Icons.back} resizeMode='stretch' style={styles.icon}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.replace(props.name1)}>
      <View style={styles.contain}>
      <Text style={styles.txt}>{props.name1}</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.replace(props.name2)}>
      <View style={styles.contain1}>
      <Text style={styles.txt}>{props.name2}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Header_Top

const styles = StyleSheet.create({
row:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:normalize(8),
    backgroundColor:Colors.purpul,
    height:normalize(50),
    justifyContent:'space-between',
},

icon:{
    height:normalize(25),
    width:normalize(50),
    
   
},
contain:{
width:windowWidth/3.2,
borderRightWidth:1,
height:'100%',
alignItems:'center',
justifyContent:'center'

},
contain1:{
width:windowWidth/3.5,

height:'100%',
alignItems:'center',
justifyContent:'center'

},
txt:{
    color:Colors.white,
    fontSize:normalize(16),
    fontWeight:'bold'
}

})