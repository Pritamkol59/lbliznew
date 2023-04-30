import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import Images from '../theams/Images';
import Colors from '../theams/Colors';
import Icons from '../theams/Icon';


// const Freegrediantview = () => {
//   const refId = 'ydhgdfhgdgdgdgseygtxsdegsedtsedt';
//   const truncatedRefId = refId.substring(0, 14) + '...';
//   return (
//      <View style={styles.container}>
//       <LinearGradient
//         colors={['#fbd309', '#f5f175']}
//         style={styles.background}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 1}}
//       >
//         <View style={styles.row}>

//         <Image source={Images.freecardtemplate1} resizeMode='stretch' style={styles.img}/>

//         <View style={{ flexDirection:'column',marginLeft:normalize(15), }}>

//           <Text style={styles.txt}>Name:- Chandan Roy </Text>
//           <Text style={styles.txt}>Mobile No:-9876543210 </Text>
//             <Text style={styles.txt}>
//       Refid:-{truncatedRefId}
//     </Text>


//         </View>

//           </View>

//           <View style={{ flexDirection:'column'}}>
//             <TouchableOpacity>
// <Image source={Icons.pencil} resizeMode='stretch' style={styles.icon}/>
//       </TouchableOpacity>    
//             <TouchableOpacity>
// <Image source={Icons.printer} resizeMode='stretch' style={styles.icon}/>
//       </TouchableOpacity>    
//     </View>
//       </LinearGradient>
//     </View>
//   )
// }


const Freegrediantview = ({ name, mobileNo, refId }) => {
  const truncatedRefId = refId.substring(0, 14) + '...';
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fbd309', '#f5f175']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.row}>
          <Image source={Images.freecardtemplate1} resizeMode='stretch' style={styles.img} />
          <View style={{ flexDirection: 'column', marginLeft: normalize(15) }}>
            <Text style={styles.txt}>Name:- {name} </Text>
            <Text style={styles.txt}>Mobile No:-{mobileNo} </Text>
            <Text style={styles.txt}>Refid:-{truncatedRefId}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity>
            <Image source={Icons.pencil} resizeMode='stretch' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.printer} resizeMode='stretch' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
     
    </View>
  );
};

export default Freegrediantview

const styles = StyleSheet.create({

     background: {
         marginVertical:normalize(10),
   height:normalize(125),
elevation:3,
borderRadius:12,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:normalize(16),
  },

  row:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:normalize(16),
  },

  img:{
    height:normalize(75),
    width:normalize(75),
  },
  txt:{
  color:Colors.black,
  fontWeight:'700',
  fontSize:normalize(16),
  marginVertical:normalize(5),
  },

  icon:{
    height:normalize(20),
    width:normalize(20),
    marginVertical:normalize(18)
  }
})

