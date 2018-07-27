import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import Card from '../../global/components/Card';
import CardColumn from '../../global/components/Card/CardColumn';
import CardSection from '../../global/components/Card/CardSection';
import COLORS from '../../global/styles';

const styles = StyleSheet.create({
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    color: COLORS.gray,
  },
  buttonStyle: {
    backgroundColor: COLORS.offWhite,
  },
});

const SettingsListItem = (props) => {
  const {
    onPress,
    header,
    subText,
  } = props;

  return (
    <TouchableHighlight
      underlayColor={COLORS.lightGray}
      style={styles.buttonStyle}
      activeOpacity={1}
      onPress={onPress}
    >
      <Card>
        <CardColumn>
          <CardSection>
            <Text style={styles.headerTextStyle}>{header}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.subTextStyle}>
              {subText}
            </Text>
          </CardSection>
        </CardColumn>
      </Card>
    </TouchableHighlight>
  );
};

SettingsListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default SettingsListItem;
