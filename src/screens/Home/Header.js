import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({navigation}) => {
  return (
    <SafeAreaView style={styles.headerView}>
      <Text style={styles.headerText}>.fit store</Text>
      <Icon name="shoppingcart" color="#333" size={30} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  headerText: {color: '#333', fontWeight: 'bold', fontSize: 30},
});
