import { Image, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Dimensions } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import Images from '../theams/Images';
import Colors from '../theams/Colors';
import Icons from '../theams/Icon';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';

const Freegrediantview = ({ name, mobileNo, refId, select, card }) => {
  const truncatedRefId = refId.substring(0, 14) + '...';
  const [pdfFilePath, setPdfFilePath] = React.useState(null);

  const generateInvoicePDF = async () => {
    try {
      const htmlContent = generateInvoiceHTML();
      const options = {
        html: htmlContent,
        fileName: 'invoice',
        directory: 'Documents',
      };

      const pdf = await RNHTMLtoPDF.convert(options);
      setPdfFilePath(pdf.filePath);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handlePrintInvoice = async () => {
    const isStoragePermissionGranted = await requestStoragePermission();
    if (!isStoragePermissionGranted) {
      // Display an error message or handle the lack of permission
      return;
    }

    generateInvoicePDF();
  };

  const generateInvoiceHTML = () => {
    // Generate the HTML content for the invoice based on the component's props (name, mobileNo, refId, card)
    // Return the generated HTML content
    return `
      <html>
        <head>
          <style>
            /* Define your invoice styles here */
          </style>
        </head>
        <body>
          <h1>Invoice</h1>
          <p>Name: ${name}</p>
          <p>Mobile No: ${mobileNo}</p>
          <p>Refid: ${refId}</p>
          <p>Card: ${card}</p>
        </body>
      </html>
    `;
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to save the PDF file.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      console.error('Error requesting storage permission:', error);
      return false;
    }
  };

  const renderPDFPreview = () => {
    if (pdfFilePath) {
      return (
        <View style={styles.pdfContainer}>
          <Pdf source={{ uri: `file://${pdfFilePath}` }} style={styles.pdf} />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[select === 'selected' ? '#fa1000' : '#fa7000', '#fff']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.row}>
          <Image source={Images[card]} resizeMode='stretch' style={styles.img} />
          <View style={{ flexDirection: 'column', marginLeft: normalize(15) }}>
            <Text style={styles.txt}>Name: {name}</Text>
            <Text style={styles.txt}>Mobile No: {mobileNo}</Text>
            <Text style={styles.txt}>Refid: {truncatedRefId}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity>
            <Image source={Icons.pencil} resizeMode='stretch' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePrintInvoice}>
            <Image source={Icons.printer} resizeMode='stretch' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {renderPDFPreview()}
    </View>
  );
};

export default Freegrediantview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    marginVertical: normalize(10),
    height: normalize(125),
    elevation: 3,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  img: {
    height: normalize(75),
    width: normalize(75),
  },
  txt: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: normalize(16),
    marginVertical: normalize(5),
  },
  icon: {
    height: normalize(20),
    width: normalize(20),
    marginVertical: normalize(18),
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height - normalize(250), // Adjust the height as needed
    backgroundColor: Colors.white,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
  },
  pdf: {
    flex: 1,
  },
});
