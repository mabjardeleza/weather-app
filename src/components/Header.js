import React from 'react';
import { Text, View, Image } from 'react-native';
import SunIcon from '../images/sun-icon.png'; 

const Header = (props) => {
    const { 
        iconStyle, 
        viewStyle,
        textStyle 
    } = styles;

    return (
        <View style={viewStyle}>
            <Image source={SunIcon} style={iconStyle} />
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    iconStyle: {
        height: 30,        
        marginRight: 10,
        width: 30
    },    
    textStyle: {
        color: '#F8F8F8',
        fontFamily: 'Pacifico',
        fontSize: 25,
        lineHeight: 25,
        paddingTop: 12        
    },
    viewStyle: {
        alignItems: 'flex-start',
        backgroundColor: '#03B3E4',
        elevation: 5,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        height: 60,
        justifyContent: 'flex-start',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9        
    }
};

export default Header;
