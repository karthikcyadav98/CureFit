import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Animated} from 'react-native';
import Header from './Header';
import ProductSlider from './ProductSlider';
import Details from './Details';
import AddButton from './AddButton';
import SizeModal from './SizeModal';

const ProductDet = ({navigation}) => {
  const [state, setState] = useState({
    scrollY: new Animated.Value(0),
  });
  const [modalVis, setModalVis] = useState(false);

  if (state.scrollY !== undefined) {
    var headMov = state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -150, -150],
    });
  }

  const handleModalVis = () => {
    setModalVis(true);
  };

  const onModalClose = () => {
    setModalVis(false);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: state.scrollY}},
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        showsVerticalScrollIndicator={false}>
        <ProductSlider />

        <Details headMov={headMov} />
      </Animated.ScrollView>

      <AddButton handleModalVis={handleModalVis} />

      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <SizeModal
          handleModalVis={handleModalVis}
          onClose={onModalClose}
          visible={modalVis}
        />
      </View>
    </View>
  );
};

export default ProductDet;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
