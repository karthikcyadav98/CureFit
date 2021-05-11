import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {browseData} from '../../common/StaticData';

const Browsepro = ({navigation}) => {
  const handleTouch = () => {
    navigation.navigate('Products');
  };

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.row}>
          {browseData.map(item => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item.key}
              onPress={() => handleTouch()}
              style={styles.browseItemView}>
              <Image style={styles.browseItemImg} source={{uri: item.src}} />
              <Text style={styles.browseItemText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Browsepro;

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  browseItemImg: {width: 75, height: 75},
  browseItemView: {padding: 10, justifyContent: 'center', alignItems: 'center'},
  browseItemText: {color: '#000'},
});
