import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {workout} from '../../common/StaticData';

const WIDTH = Dimensions.get('window').width;

const HomeWorkout = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('Products');
  };

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Home Workout Equipments</Text>
      </View>

      <View style={styles.imgContainer}>
        <FlatList
          keyExtractor={item => item.key}
          numColumns="2"
          data={workout}
          renderItem={({item}) => (
            <View style={styles.imgView}>
              <TouchableWithoutFeedback onPress={() => handleTouch()}>
                <Image source={{uri: item.src}} style={styles.img} />
              </TouchableWithoutFeedback>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeWorkout;

const styles = StyleSheet.create({
  headerView: {padding: 15, marginTop: 60},
  headerText: {fontSize: 20, color: '#000'},
  imgContainer: {padding: 5},
  imgView: {padding: 10},
  img: {
    width: WIDTH * 0.43,
    borderRadius: 10,
    height: WIDTH * 0.7,
  },
});
