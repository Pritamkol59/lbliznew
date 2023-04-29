import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../theams/Colors'
import normalize from 'react-native-normalize'
import Icons from '../theams/Icon'
import {useNavigation} from '@react-navigation/native';

const ButtonTab = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.bttab}>
      <TouchableOpacity onPress={() => navigation.replace('Home')}>
      <Image source={Icons.Home} resizeMode='stretch'style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Icons.Offer} resizeMode='stretch'style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Icons.Help} resizeMode='stretch'style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Icons.Noti} resizeMode='stretch'style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Icons.User} resizeMode='stretch'style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonTab

const styles = StyleSheet.create({

    bttab:{
        position:'absolute',
        bottom:0,
        
        flexDirection:'row',
        width:'90%',
        backgroundColor:Colors.purpul,
        paddingHorizontal:normalize(16),
        height:normalize(60),
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center',
        // borderWidth:1,
        borderRadius:50,
        
    },
    icon:{
        height:normalize(50),
        width: normalize(50),
    }
    
})