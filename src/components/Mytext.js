import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../theams/Fonts';

const Mytext = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={[styles.defaultStyle, props.style]}>
      {props.children}
    </Text>
  );
};

export default Mytext;

const styles = StyleSheet.create({
  defaultStyle: {
    color: '#000',
  },
});
