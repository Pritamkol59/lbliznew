import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import normalize from 'react-native-normalize';
import Colors from '../theams/Colors';

const PDFPreview = ({ pdfFilePath }) => {
  return (
    <View style={styles.container}>
      <Pdf source={{ uri: `file://${pdfFilePath}` }} style={styles.pdf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
  },
  pdf: {
    flex: 1,
  },
});

export default PDFPreview;
