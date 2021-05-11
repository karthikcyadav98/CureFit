import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {categorydata} from '../../common/StaticData';

const WIDTH = Dimensions.get('window').width;

const Category = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('Products');
  };

  return (
    <View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 20}}>Shop by Category</Text>
      </View>

      <FlatList
        keyExtractor={item => item.key}
        data={categorydata}
        numColumns="3"
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleTouch()}
            style={styles.ItemView}>
            <Image style={styles.Image} source={{uri: item.src}} />
            <Text style={styles.ItemText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  ItemView: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {width: WIDTH * 0.255, height: WIDTH * 0.25},
  ItemText: {marginTop: 5, color: '#000', fontWeight: 'bold'},
});
