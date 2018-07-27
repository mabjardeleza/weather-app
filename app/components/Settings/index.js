import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SettingsList from './List';
import LocationModal from './LocationModal';
import UnitModal from './UnitModal';

const Settings = (props) => {
  const {
    visibleLocationModal,
    visibleUnitModal,
    toggleLocationModal,
    toggleUnitModal,
    handleUnitPress,
    onChangeCityText,
    onChangeCountryText,
    onLocationSubmit,
    countryInput,
    cityInput,
    settingsList,
    unit,
    loading,
    error,
  } = props;

  return (
    <View>
      <SettingsList
        list={settingsList}
      />
      <LocationModal
        visible={visibleLocationModal}
        onLocationSubmit={onLocationSubmit}
        closeModal={toggleLocationModal}
        onChangeCityText={onChangeCityText}
        onChangeCountryText={onChangeCountryText}
        city={cityInput}
        country={countryInput}
        error={error}
        loading={loading}
      />
      <UnitModal
        visible={visibleUnitModal}
        onPress={handleUnitPress}
        unit={unit}
        closeModal={toggleUnitModal}
      />
    </View>
  );
};

Settings.propTypes = {
  visibleLocationModal: PropTypes.bool.isRequired,
  visibleUnitModal: PropTypes.bool.isRequired,
  toggleLocationModal: PropTypes.func.isRequired,
  toggleUnitModal: PropTypes.func.isRequired,
  handleUnitPress: PropTypes.func.isRequired,
  onChangeCityText: PropTypes.func.isRequired,
  onChangeCountryText: PropTypes.func.isRequired,
  onLocationSubmit: PropTypes.func.isRequired,
  countryInput: PropTypes.string.isRequired,
  cityInput: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  settingsList: PropTypes.arrayOf(PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
  })).isRequired,
};

export default Settings;
