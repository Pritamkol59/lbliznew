import { StyleSheet, Text, View ,Dimensions,Image, TouchableOpacity,ImageBackground,ScrollView,TouchableWithoutFeedback, } from 'react-native'
import React from 'react'
import Colors from '../theams/Colors'
import Images from '../theams/Images'
import normalize from 'react-native-normalize'
import FullScreenChz from 'react-native-fullscreen-chz';
import Imageslider from '../components/Imageslider'
import VideoPlayer from '../components/VideoPlayer'
import ButtonTab from '../components/ButtonTab'

const windowWidth = Dimensions.get('window').width;

const Home = () => {
    function handleScreenTouch() {
        console.log('Screen was touched!');
      
        if (Platform.OS === 'android') {
          FullScreenChz.enable();
        }
      }
  return (
    <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
            <View>
        <ImageBackground source={Images.hdr} resizeMode='stretch' style={styles.img}>

            <View style={styles.innerview}>
            <View style={{flexDirection:"column"}}>
            <Text style={styles.heading1}>Business Details</Text>
            <Text style={styles.subheading1}>Chandan Roy</Text>
            <Text style={styles.subheading1}>Relliencer</Text>
            <Text style={styles.subheading1}>BD-29,Deshbandhu Nagar,Baguiati,Kolkata-700059</Text>
            

            </View>
            <TouchableOpacity>
            <Image source={Images.usr} resizeMode='stretch' style={styles.uimg}/>
            </TouchableOpacity>
            </View>

            </ImageBackground>


<View style={styles.panel}>


               <Imageslider/> 

               
            <View style={styles.buttonwrapper}>
                <TouchableOpacity >
                   <Image source={Images.fc} resizeMode='stretch' style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity >
                   <Image source={Images.pc} resizeMode='stretch' style={styles.button}/>
                </TouchableOpacity>
                </View>    



<VideoPlayer  videoUri= "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/>






            </View>


            </View>
            </TouchableWithoutFeedback>
            </ScrollView>
            <ButtonTab/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:Colors.gray,
    },
    panel:{
paddingHorizontal:normalize(16),
    },
    img:{
        height:normalize(200),
        width:'100%',
    },

    innerview:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:normalize(18),
        justifyContent:'space-between',
        marginVertical:normalize(25),
    },
    uimg:{

        borderRadius:normalize(50),
        height:normalize(50),
        width:normalize(50),
    },
    heading1:{
color:"#fff",
fontSize:normalize(23),
fontWeight:'600',

    },
    subheading1:{
color:"#fff",
fontWeight:'600',
fontSize:normalize(18),
marginVertical:normalize(5),

    },
    buttonwrapper:{
        marginVertical:normalize(10),
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:normalize(16),
       
        
    },
    button:{
        height:normalize(65),
        width:windowWidth/2.6,
        
        alignItems:"center",
        justifyContent:"center",
},
buttontext:{
    fontSize:normalize(22),
    textAlign:"center",
    fontWeight:"700",
    color:"#fff",
    
}

})