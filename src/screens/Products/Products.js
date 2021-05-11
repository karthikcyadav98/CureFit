import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import ProductList from './ProductList';

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ProductList navigation={navigation} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
