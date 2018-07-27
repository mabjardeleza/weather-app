import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { forecastList, settings } from '../actions';
import Header from '../components/Header';
import Settings from '../components/Settings';

class SettingsPage extends Component {
  constructor(props) {
    super(props);

    const {
      settings: {
        location: {
          city,
          country,
        },
      },
    } = this.props;

    this.state = {
      visibleLocationModal: false,
      visibleUnitModal: false,
      countryInput: country,
      cityInput: city,
      hasError: false,
    };

    this.toggleUnitModal = this.toggleUnitModal.bind(this);
    this.toggleLocationModal = this.toggleLocationModal.bind(this);
    this.handleUnitPress = this.handleUnitPress.bind(this);
    this.onChangeCityText = this.onChangeCityText.bind(this);
    this.onChangeCountryText = this.onChangeCountryText.bind(this);
    this.onLocationSubmit = this.onLocationSubmit.bind(this);
    this.prepareSettingsList = this.prepareSettingsList.bind(this);
    this.updateError = this.updateError.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      forecastRequest: {
        loading,
        error,
      },
    } = this.props;

    // Infer a successful API call
    if (!loading
      && loading !== prevProps.forecastRequest.loading
      && !error) {
      this.toggleLocationModal();
    }

    if (error && error !== prevProps.forecastRequest.error) {
      this.updateError();
    }
  }

  onChangeCityText(text) {
    this.setState({
      cityInput: text,
    });
  }

  onChangeCountryText(text) {
    this.setState({
      countryInput: text,
    });
  }

  onLocationSubmit() {
    const { requestForecast } = this.props;
    const { cityInput, countryInput } = this.state;
    requestForecast(cityInput, countryInput);
  }

  updateError() {
    this.setState({
      hasError: true,
    });
  }

  toggleUnitModal() {
    const { visibleUnitModal } = this.state;
    this.setState({
      visibleUnitModal: !visibleUnitModal,
    });
  }

  toggleLocationModal() {
    const { visibleLocationModal } = this.state;
    const {
      settings: {
        location: {
          city,
          country,
        },
      },
    } = this.props;
    this.setState({
      visibleLocationModal: !visibleLocationModal,
      countryInput: country,
      cityInput: city,
      hasError: false,
    });
  }

  handleUnitPress(unit) {
    const { setTemperature } = this.props;
    setTemperature(unit);
  }

  prepareSettingsList() {
    const {
      settings: {
        location: {
          city,
          country,
        },
        temperature: {
          unit,
        },
      },
    } = this.props;
    return [
      {
        onPress: this.toggleLocationModal,
        header: 'Location',
        subText: `${city}, ${country}`,
      },
      {
        onPress: this.toggleUnitModal,
        header: 'Unit',
        subText: unit,
      },
    ];
  }

  render() {
    const {
      settings: {
        temperature: {
          unit,
        },
      },
      forecastRequest: {
        loading,
      },
    } = this.props;
    const {
      visibleLocationModal,
      visibleUnitModal,
      countryInput,
      cityInput,
      hasError,
    } = this.state;
    const settingsList = this.prepareSettingsList();
    return (
      <Settings
        visibleLocationModal={visibleLocationModal}
        visibleUnitModal={visibleUnitModal}
        toggleLocationModal={this.toggleLocationModal}
        toggleUnitModal={this.toggleUnitModal}
        handleUnitPress={this.handleUnitPress}
        onChangeCityText={this.onChangeCityText}
        onChangeCountryText={this.onChangeCountryText}
        onLocationSubmit={this.onLocationSubmit}
        countryInput={countryInput}
        cityInput={cityInput}
        settingsList={settingsList}
        unit={unit}
        loading={loading}
        error={hasError}
      />
    );
  }
}

SettingsPage.navigationOptions = ({ navigation }) => ({
  header: (<Header headerText="Settings" routeName={navigation.state.routeName} onBackButtonPress={() => navigation.goBack()} onSettingsButtonPress={() => navigation.navigate('Settings')} />),
});

SettingsPage.propTypes = {
  settings: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    temperature: PropTypes.shape({
      unit: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  forecastRequest: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
  setTemperature: PropTypes.func.isRequired,
  requestForecast: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  settings: state.settings,
  forecastRequest: {
    loading: state.forecastList.loading,
    error: state.forecastList.error,
  },
});

const mapDispatchToProps = {
  requestForecast: forecastList.request,
  setTemperature: settings.setTemperature,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
