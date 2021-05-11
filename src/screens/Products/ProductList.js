import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {productData} from '../../common/StaticData';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto';
import ProductItem from './ProductItem';

const WIDTH = Dimensions.get('window').width;

const ProductList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns="2"
        keyExtractor={item => item.key}
        data={productData}
        renderItem={({item}) => (
          <ProductItem navigation={navigation} item={item} />
        )}
      />
      <FAB
        style={styles.fab}
        color="#fff"
        label="FILTERS"
        icon={() => (
          <Icon color="#fff" style={styles.filterIcon} name="equalizer" />
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {padding: 15, marginBottom: Platform.OS === 'ios' ? 90 : 0},
  row: {flexDirection: 'row', alignItems: 'center'},
  fab: {
    height: 40,
    padding: -10,
    backgroundColor: '#3A88FF',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: 16,
    right: WIDTH * 0.3,
    bottom: 40,
  },
  filterIcon: {marginTop: 5, marginLeft: 10},
});
