import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ButtonPoints = ({data}) => {
  return (
    <FlatList
      keyExtractor={item => item.key}
      data={data}
      renderItem={({item}) => (
        <View style={styles.fetView}>
          <Icon size={22} name="dot-single" />
          <Text
            style={[
              styles.fetDesc,
              {
                color: item.isImp === 'T' ? '#000' : '#444',
                fontWeight: item.isImp === 'T' ? 'bold' : 'normal',
              },
            ]}>
            {item.desc}
          </Text>
        </View>
      )}
    />
  );
};

export default ButtonPoints;

const styles = StyleSheet.create({
  fetView: {marginTop: 10, paddingRight: 20, flexDirection: 'row'},
  fetDesc: {
    fontSize: 18,
  },
});
