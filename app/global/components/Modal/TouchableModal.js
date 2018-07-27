import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../../styles';

const styles = StyleSheet.create({
  cardSectionStyle: {
    backgroundColor: COLORS.white,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '80%',
    padding: 20,
    borderRadius: 3,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const TouchableModal = (props) => {
  const {
    children,
    visible,
    closeModal,
    height,
  } = props;

  const customHeightStyle = {
    height,
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.containerStyle}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[styles.cardSectionStyle, customHeightStyle]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

TouchableModal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  height: PropTypes.number,
};

TouchableModal.defaultProps = {
  height: 250,
};

export default TouchableModal;
