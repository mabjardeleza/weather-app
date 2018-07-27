import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { TouchableModal } from '../../global/components/Modal';
import Card from '../../global/components/Card';
import CardColumn from '../../global/components/Card/CardColumn';
import CardSection from '../../global/components/Card/CardSection';
import COLORS from '../../global/styles';
import RadioButtonOnIcon from '../../images/radio-button-on.png';
import RadioButtonOffIcon from '../../images/radio-button-off.png';

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#000',
    paddingBottom: 20,
  },
  labelStyle: {
    fontSize: 18,
    lineHeight: 18,
    color: '#000',
  },
  buttonContainerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  iconStyle: {
    alignSelf: 'center',
    height: 25,
    width: 25,
    tintColor: COLORS.skyBlue,
  },
});

const UnitModal = (props) => {
  const {
    visible,
    onPress,
    unit,
    closeModal,
  } = props;
  return (
    <TouchableModal
      visible={visible}
      closeModal={closeModal}
      height={180}
    >
      <Text style={styles.headerTextStyle}>Temperature Unit</Text>
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.buttonStyle}
        activeOpacity={1}
        onPress={() => onPress('Metric')}
      >
        <Card>
          <CardColumn>
            <CardSection>
              <Text style={styles.labelStyle}>Metric</Text>
              <Image source={unit === 'Metric' ? RadioButtonOnIcon : RadioButtonOffIcon} style={styles.iconStyle} />
            </CardSection>
          </CardColumn>
        </Card>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.buttonStyle}
        activeOpacity={1}
        onPress={() => onPress('Imperial')}
      >
        <Card>
          <CardColumn>
            <CardSection>
              <Text style={styles.labelStyle}>Imperial</Text>
              <Image source={unit === 'Imperial' ? RadioButtonOnIcon : RadioButtonOffIcon} style={styles.iconStyle} />
            </CardSection>
          </CardColumn>
        </Card>
      </TouchableHighlight>
    </TouchableModal>
  );
};

UnitModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UnitModal;
