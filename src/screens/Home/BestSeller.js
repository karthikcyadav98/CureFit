import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {bestSeller} from '../../common/StaticData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Dimensions.get('window').width;

const BestSeller = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('ProductDet');
  };

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleTouch()}
            style={styles.headerView}>
            <Text style={styles.headerText}>Best Sellers</Text>
            <Text style={styles.seeText}>
              SEE ALL{'   '} <Icon name="arrow-right" />
            </Text>
          </TouchableOpacity>

          {bestSeller.map(item => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleTouch()}
              style={styles.touchView}
              key={item.key}>
              <Image style={styles.img} source={{uri: item.src}} />

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
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  headerView: {
    padding: 20,
    marginTop: 50,
    width: WIDTH * 0.45,
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 50,
    fontSize: 30,
  },
  seeText: {fontWeight: 'bold', color: '#000', fontSize: 16},
  row: {flexDirection: 'row'},
  touchView: {padding: 10, width: WIDTH * 0.45},
  img: {
    width: WIDTH * 0.4,
    height: WIDTH * 0.6,
    borderRadius: 10,
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
  desc: {
    color: '#888',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disPrice: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  actPrice: {
    marginLeft: 5,
    color: '#888',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  disPre: {
    color: '#ED407D',
    fontSize: 16,
  },
});
