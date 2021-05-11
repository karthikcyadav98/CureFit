import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {prodetData} from '../../common/StaticData';

const SizeChart = () => {
  const avaArr = prodetData.avaSize.split(',');

  return (
    <View>
      <View style={styles.sizeView}>
        <Text style={styles.sizeText}>Size</Text>
        <Text style={styles.sizeText}>GUIDE</Text>
      </View>

      <View style={{marginTop: 10}}>
        <View style={styles.row}>
          {avaArr.map(item => (
            <View style={styles.sizeItemView}>
              <Text style={styles.sizeItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
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
});
