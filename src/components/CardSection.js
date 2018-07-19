import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>        
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
};

export default CardSection;
