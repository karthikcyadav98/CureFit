import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const ProductItem = ({navigation, item}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDet')}
      activeOpacity={0.8}
      style={styles.itemView}>
      <Image source={{uri: item.src}} style={styles.itemText} />

      <Text style={styles.title}>{item.title}</Text>

      <Text numberOfLines={1} style={styles.desc}>
        {item.desc}
      </Text>

      <View style={styles.price}>
        <View style={styles.row}>
          <Text style={styles.disPrice}>₹{item.disPrice}</Text>
          <Text style={styles.actPrice}>₹{item.price}</Text>
        </View>

        <View>
          <Text style={styles.disPre}>{item.disPer}% Off</Text>
        </View>
      </View>

      <View style={styles.justLaunchedView}>
        <Text>
          <View
            style={[
              styles.textView,
              {
                backgroundColor: item.justLaunched === 'T' ? '#DFE2FA' : '#fff',
              },
            ]}>
            <Text
              style={[
                styles.justText,
                {
                  color: item.justLaunched === 'T' ? '#736CF0' : '#fff',
                },
              ]}>
              Just Launched
            </Text>
          </View>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  itemView: {width: WIDTH * 0.45, margin: 5},
  itemText: {
    width: WIDTH * 0.425,
    borderRadius: 10,
    height: WIDTH * 0.57,
  },
  title: {marginTop: 10, color: '#000', fontSize: 16},
  desc: {
    color: '#888',
  },
  price: {
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disPrice: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  actPrice: {
    marginLeft: 5,
    color: '#888',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  disPre: {
    color: '#ED407D',
    fontSize: 14,
  },
  justLaunchedView: {marginTop: 10, marginBottom: 10},
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
  textView: {
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  justText: {fontSize: 12, fontWeight: 'bold'},
});
