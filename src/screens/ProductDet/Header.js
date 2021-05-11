import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Icon
          onPress={() => navigation.goBack()}
          size={25}
          color="#ED407D"
          name="chevron-left"
        />
        <AntIcon name="shoppingcart" color="#333" size={30} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
