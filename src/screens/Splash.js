import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Video from 'react-native-video';
import Videos from '../theams/Icon';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={Videos.Splash}
        resizeMode="cover"
        style={styles.video}
        paused={false}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});
