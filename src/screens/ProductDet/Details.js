import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {prodetData} from '../../common/StaticData';
import Icon from 'react-native-vector-icons/Entypo';
import ButtonPoints from './ButtonPoints';
import SizeChart from './SizeChart';

const WIDTH = Dimensions.get('window').width;

const Details = ({headMov}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{width: '80%'}}>
          <Text style={styles.title}>{prodetData.title}</Text>
          <Text style={styles.name}>{prodetData.name}</Text>
        </View>

        <View style={{width: '20%'}}>
          <Text style={styles.disPrice}>₹{prodetData.disPrice}</Text>
          <Text style={styles.price}>₹{prodetData.price}</Text>
        </View>
      </View>

      <View style={{marginTop: 15}}>
        <Text style={styles.avaSize}>Available in {prodetData.avaSize}</Text>
      </View>

      <Animated.View
        style={{
          marginTop: 30,
          position: 'relative',
          top: 130,
          transform: [{translateY: headMov}],
        }}>
        <SizeChart />

        <View>
          <Text style={styles.avaQty}>{prodetData.avaQty} left</Text>
        </View>

        <View style={styles.underline} />

        <View style={styles.sizeView}>
          <Text style={styles.location}>
            Select location to check serviceability
          </Text>
          <Text style={styles.select}>SELECT</Text>
        </View>

        <View style={{marginTop: 10}}>
          <ButtonPoints data={prodetData.features} />
        </View>

        <View style={styles.underline} />

        <View>
          <Text style={styles.prodet}>Product Details</Text>
          <ButtonPoints data={prodetData.proDet} />
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.prodet}>Designer's Note</Text>
          <Text style={styles.designNote}>{prodetData.designNote}</Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.prodet}>Fabric</Text>
          <View style={styles.fetView}>
            <Icon size={22} name="dot-single" />
            <Text
              style={[
                styles.fetDesc,
                {
                  color: '#444',
                },
              ]}>
              {prodetData.fabric}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.prodet}>Delivery and Returns</Text>
          <ButtonPoints data={prodetData.delRet} />
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.prodet}>Manufacturing Details</Text>
          <Text style={styles.designNote}>{prodetData.mftDet}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15, paddingBottom: 150},
  row: {flexDirection: 'row'},
  title: {color: '#000', fontSize: 16},
  name: {fontSize: 23, fontWeight: 'bold', color: '#000'},
  disPrice: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  avaSize: {textAlign: 'left', fontSize: 16, color: '#888'},
  sizeView: {flexDirection: 'row', justifyContent: 'space-between'},
  sizeText: {fontWeight: 'bold', fontSize: 18},
  sizeItemView: {
    margin: 10,
    marginLeft: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeItemText: {fontWeight: 'bold', fontSize: 16, color: '#000'},
  avaQty: {color: '#aaa', marginLeft: 10},
  underline: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    width: WIDTH * 0.9,
  },
  location: {
    color: '#888',
    fontSize: 15,
  },
  fetView: {marginTop: 10, flexDirection: 'row'},
  fetDesc: {
    fontSize: 18,
  },
  select: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  prodet: {fontSize: 20, fontWeight: 'bold', color: '#000'},
  designNote: {marginTop: 10, color: '#444', fontSize: 18},
});
