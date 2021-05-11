import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {prodetImg} from '../../common/StaticData';
import {FlatListSlider} from 'react-native-flatlist-slider';

const WIDTH = Dimensions.get('window').width;

const ProductSlider = () => {
  return (
    <View style={{width: WIDTH * 1.2}}>
      <FlatListSlider
        onPress={() => console.log('pressed')}
        timer={5000}
        separatorWidth={10}
        width={WIDTH}
        indicatorActiveWidth={30}
        height={WIDTH * 1.2}
        indicator={false}
        animation={true}
        autoscroll={true}
        data={prodetImg}
      />
    </View>
  );
};

export default ProductSlider;
