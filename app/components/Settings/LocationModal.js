import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Spinner from '../../global/components/Spinner';
import { TouchableModal } from '../../global/components/Modal';
import COLORS from '../../global/styles';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#000',
  },
  labelStyle: {
    fontSize: 14,
    lineHeight: 14,
  },
  buttonContainerStyle: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  buttonStyle: {
    fontSize: 14,
    color: COLORS.skyBlue,
    paddingLeft: 20,
  },
  inputStyle: {
    fontSize: 16,
    width: '100%',
    color: COLORS.gray,
    lineHeight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomColor: COLORS.skyBlue,
  },
  formInputStyle: {
    width: '100%',
  },
  errorStyle: {
    color: COLORS.red,
  },
});

const LocationModal = (props) => {
  const {
    visible,
    closeModal,
    onLocationSubmit,
    onChangeCityText,
    onChangeCountryText,
    city,
    country,
    error,
    loading,
  } = props;
  const errorMessage = error ? 'Sorry, we could not find location.' : '';
  return (
    <TouchableModal
      visible={visible}
      closeModal={closeModal}
      height={250}
    >
      <Text style={styles.textStyle}>Change Location</Text>
      <View style={styles.formInputStyle}>
        <Text style={styles.labelStyle}>City</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => onChangeCityText(text)}
          value={city}
          underlineColorAndroid="transparent"
          selectionColor={COLORS.skyBlue}
        />
        <Text style={styles.labelStyle}>Country Code</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => onChangeCountryText(text)}
          value={country}
          underlineColorAndroid="transparent"
        />
        <Text style={styles.errorStyle}>{errorMessage}</Text>
        <Spinner size="small" visible={loading} />
      </View>
      <View style={styles.buttonContainerStyle}>
        <TouchableOpacity
          onPress={closeModal}
        >
          <Text style={styles.buttonStyle}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onLocationSubmit}
        >
          <Text style={styles.buttonStyle}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </TouchableModal>
  );
};

LocationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onLocationSubmit: PropTypes.func.isRequired,
  onChangeCityText: PropTypes.func.isRequired,
  onChangeCountryText: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LocationModal;
