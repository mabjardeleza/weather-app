import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SettingsListItem from './ListItem';

class SettingsList extends Component {
  static keyExtractor(item) {
    return item.header;
  }

  static renderItem({ item }) {
    const { onPress, header, subText } = item;
    return (
      <SettingsListItem
        onPress={onPress}
        header={header}
        subText={subText}
      />
    );
  }

  render() {
    const { list } = this.props;
    return (
      <FlatList
        data={list}
        renderItem={SettingsList.renderItem}
        keyExtractor={SettingsList.keyExtractor}
      />
    );
  }
}

SettingsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
  })).isRequired,
};
export default SettingsList;
