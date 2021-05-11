import React from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const AddButton = ({handleModalVis}) => {
  return (
    <TouchableOpacity
      onPress={() => handleModalVis()}
      activeOpacity={0.7}
      style={styles.fab}>
      <Text style={styles.fabText}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  fab: {
    width: WIDTH * 0.9,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#ED407D',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  fabText: {fontWeight: 'bold', color: '#fff', fontSize: 16},
});
