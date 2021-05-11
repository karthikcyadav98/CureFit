import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';

const WIDTH = Dimensions.get('window').width;

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerView}>
          <View style={styles.row}>
            <Icon
              onPress={() => navigation.goBack()}
              size={25}
              color="#ED407D"
              name="chevron-left"
            />
            <Text style={styles.headerText}>Products</Text>
          </View>

          <View>
            <AntIcon name="shoppingcart" color="#333" size={30} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {padding: 15, flexDirection: 'row'},
  row: {flexDirection: 'row', alignItems: 'center'},
  headerView: {
    width: WIDTH * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {marginLeft: 20, color: '#000', fontSize: 25},
});
