import React, { Component } from 'react';
import Details from '../components/Details';

class ForecastDetailsPage extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      navigation,
    } = this.props;
    const forecast = navigation.getParam('forecast', {});
    return (
      <Details forecast={forecast} />
    );
  }
}

export default ForecastDetailsPage;
