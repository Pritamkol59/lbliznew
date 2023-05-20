import { View, Text, ScrollView, Alert, Dimensions, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header_Top from '../components/Header_Top';
import FullScreenChz from 'react-native-fullscreen-chz';
import { useNavigation } from '@react-navigation/native';
import Colors from '../theams/Colors';
import ButtonTab from '../components/ButtonTab';
import Freegrediantview from '../components/Freegrediantview';
import Pluse from '../components/Pluse';
import normalize from 'react-native-normalize';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icons from '../theams/Icon';

const windowWidth = Dimensions.get('window').width;

const Freecard = () => {
  const [listData, setListData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        const contacts = JSON.parse(storedContacts);
        setListData(contacts.reverse());
        console.log(storedContacts); // <-- Make sure you receive the expected data here
      }
    } catch (error) {
      console.log('Error loading contacts:', error);
    }
  };

  const deleteContact = (id) => {
    Alert.alert(
      'Delete item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedContacts = listData.filter((item) => item.id !== id);
            setListData(updatedContacts);
            saveContacts(updatedContacts);
          },
        },
      ]
    );
  };

  const saveContacts = async (updatedContacts) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
    } catch (error) {
      console.log('Error saving contacts:', error);
    }
  };

  function handleScreenTouch() {
    console.log('Screen was touched!');

    if (Platform.OS === 'android') {
      FullScreenChz.enable();
      setSelectedItems([]);
    }
  }

 const handleItemPress = (id) => {
  if (selectedItems.includes(id)) {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((itemId) => itemId !== id)
    );
  } else {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
  }
};

useEffect(() => {
  console.log('Selected Items:', selectedItems);
}, [selectedItems]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header_Top back="Home" name1="Freecard" name2="Freelink" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleScreenTouch}>
          <View style={styles.contan}>
            {listData.length === 0 ? (
              <Text style={styles.noDataText}>No Data Found</Text>
            ) : (
              <SwipeListView
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity  onPress={() => handleItemPress(item.id)}>
                    <Freegrediantview name={item.name} mobileNo={item.phn} refId={item.id} card={item.cardname}
                     select={selectedItems.includes(item.id) ? 'selected' : null}
                    />
                  </TouchableOpacity>
                )}
                renderHiddenItem={(data, rowMap) => (
                  <TouchableOpacity onPress={() => deleteContact(data.item.id)}>
                    <View style={styles.rowBack}>
                      <Image source={Icons.delete} resizeMode="stretch" style={styles.icon} />
                    </View>
                  </TouchableOpacity>
                )}
                rightOpenValue={-normalize(75)} // Width of the right hidden item
              />
            )}
            <View style={{ marginVertical: normalize(80) }}></View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <Pluse name="Freepluse" />
      <ButtonTab />
    </View>
  );
};

export default Freecard;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.gray,
  },

  contan: {
    paddingHorizontal: normalize(8),
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: normalize(16),
    height: normalize(125),
    marginVertical: normalize(10),
    borderRadius: 15,
  },

  icon: {
    height: normalize(28),
    width: normalize(28),
    tintColor: Colors.white,
  },

  noDataText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    color: Colors.white,
    textAlign: 'center',
    marginTop: normalize(20),
  },

  itemContainer: {
    // Add your regular item container styles here
  },
  selectedItemContainer: {
    backgroundColor: Colors.purpul, // Change the background color to purple for selected items
  },
});
