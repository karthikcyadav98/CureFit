import React from 'react';
import {
  Modal,
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import SizeChart from './SizeChart';
import AddButton from './AddButton';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SizeModal = ({visible, onClose, handleModalVis}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}>
      <TouchableWithoutFeedback onPress={() => onClose()}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => handleModalVis()}>
            <View style={styles.modalView}>
              <SizeChart />

              <AddButton handleModalVis={handleModalVis} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SizeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000033',
  },
  modalView: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 25,
    height: 250,
  },
});
