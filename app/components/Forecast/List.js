import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ForecastListItem from './ListItem';

class ForecastList extends Component {
  static keyExtractor(item) {
    return item.label;
  }

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    const { navigateToDetailsPage } = this.props;
    return (
      <ForecastListItem
        details={item}
        navigateToDetailsPage={() => navigateToDetailsPage(ForecastList.keyExtractor(item))}
      />
    );
  }

  render() {
    const { details } = this.props;
    return (
      <FlatList
        data={details}
        renderItem={this.renderItem}
        keyExtractor={ForecastList.keyExtractor}
      />
    );
  }
}

ForecastList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  navigateToDetailsPage: PropTypes.func.isRequired,
};
export default ForecastList;
