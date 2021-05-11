import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BottomText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={{marginTop: 10}}>
        <Text style={styles.perText}>PERFORMANCE SPORTSWEAR</Text>
        <Text style={styles.subText}>FOR THE EVERYDAY ATHLETE</Text>
      </View>
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  container: {padding: 15, marginTop: 50, marginBottom: 50},
  line: {width: 50, backgroundColor: '#00AAE8', height: 5},
  perText: {fontWeight: 'bold', fontSize: 40, color: '#666'},
  subText: {fontWeight: 'bold', color: '#aaa', marginTop: 20},
});
