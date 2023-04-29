import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import { SliderBox } from "react-native-image-slider-box";
import Images from '../theams/Images';

const Imageslider = () => {
  return (
    <View style={styles.contener}>
     <SliderBox
  
  images={ [
   Images.slider1,
   Images.slider2,
   Images.slider3,
   Images.slider4,
   Images.slider5,
   // Network image
             // Local image

     
  ]}
  sliderBoxHeight={150}
  
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={10}

  
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'stretch'}
 
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 15,   width: '90%',}}
  imageLoadingColor="#2196F3"
/>
</View>
  )
}

export default Imageslider

const styles = StyleSheet.create({
    contener:{
        marginVertical:normalize(15),
       
       marginLeft:'-4.1%'
    }

})