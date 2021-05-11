import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {collection} from '../../common/StaticData';
import {FlatListSlider} from 'react-native-flatlist-slider';

const WIDTH = Dimensions.get('window').width;

const Collection = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('Products');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Collections</Text>
      </View>

      <View style={styles.listView}>
        <FlatListSlider
          onPress={() => handleTouch()}
          timer={5000}
          contentContainerStyle={{padding: 10}}
          separatorWidth={15}
          width={WIDTH * 0.93}
          indicatorActiveWidth={30}
          height={WIDTH * 1.2}
          indicator={true}
          indicatorInActiveColor="#aaa"
          indicatorActiveColor="#000"
          indicatorActiveWidth={8}
          animation={true}
          autoscroll={false}
          data={collection}
        />
      </View>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {height: WIDTH * 1.27},
  headerView: {padding: 15},
  headerText: {fontSize: 20, color: '#000'},
  listView: {justifyContent: 'center', alignItems: 'center'},
});
