import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>        
            {props.children}
        </View>
    );
};

const styles = {    
    containerStyle: {
        alignItems: 'stretch',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'flex-start'
    }
};

export default Card;
