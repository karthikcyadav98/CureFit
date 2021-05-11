import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {aws_url} from '../../common/StaticData';
import Icon from 'react-native-vector-icons/AntDesign';

const WIDTH = Dimensions.get('window').width;

const JustLanuched = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('Products');
  };

  return (
    <View style={styles.center}>
      <ImageBackground
        source={{uri: aws_url + 'poster1.png'}}
        imageStyle={styles.backImage}
        style={styles.backImageWdt}>
        <TouchableWithoutFeedback onPress={() => handleTouch()}>
          <View style={{padding: 15}}>
            <View style={styles.justView}>
              <Text style={styles.justText}>Just Launched</Text>
            </View>

            <View style={styles.buyView}>
              <Text style={styles.buy1Text}>SUMMER WORKOUT ESSENTIALS</Text>

              <Text style={[styles.buy2Text, {fontWeight: 'bold'}]}>
                Tshirts, Joggers & more!
              </Text>

              <Text style={styles.buy2Text}>
                BUY NOW <Icon name="right" />
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default JustLanuched;

const styles = StyleSheet.create({
  center: {justifyContent: 'center', alignItems: 'center'},
  container: {flex: 1, backgroundColor: '#fff'},
  backImage: {borderRadius: 10},
  backImageWdt: {
    width: WIDTH * 0.93,
    height: WIDTH * 1.2,
  },
  justText: {color: '#fff', fontSize: 15, fontWeight: 'bold'},
  justView: {
    justifyContent: 'flex-start',
    height: '40%',
    alignItems: 'flex-start',
  },
  buyView: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buy1Text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  buy2Text: {color: '#fff', marginTop: 15},
});
