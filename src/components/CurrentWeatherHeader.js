import React from 'react';
import { Text, View, Image } from 'react-native';

const CurrentWeatherHeader = (props) => {
    const { 
        iconStyle, 
        headerViewStyle, 
        subViewStyle, 
        dateTextStyle,
        locationTextStyle,
        dateLocationViewStyle,
        mainTextStyle,
        predictionTextStyle, 
        subTextStyle, 
        mainViewStyle 
    } = styles;    

    return (
        <View style={headerViewStyle}>
            <View style={dateLocationViewStyle}>
                <Text style={dateTextStyle}>{props.forecast.label}</Text>
                <Text style={locationTextStyle}>{props.city}, {props.country}</Text>
            </View>
            <View style={mainViewStyle}>
                <Text style={mainTextStyle}>{props.forecast.max_temp}°</Text>
                <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${props.forecast.weather.icon}.png` }} style={iconStyle} />
            </View>
            <View style={subViewStyle}>
                <Text style={subTextStyle}>{props.forecast.min_temp}°</Text>            
                <Text style={predictionTextStyle}>{props.forecast.weather.description}</Text>
            </View>
        </View>
    );
};

const styles = {
    iconStyle: {
        alignSelf: 'center',
        height: 100,
        width: 100,
    },
    dateTextStyle: {
        color: '#F8F8F8', 
        fontSize: 22        
    },
    predictionTextStyle: {
        alignSelf: 'center',
        color: '#F8F8F8',
        fontSize: 18       
    },
    locationTextStyle: {
        color: '#F8F8F8',   
        fontSize: 14        
    },
    mainTextStyle: {
        alignSelf: 'center',
        color: '#F8F8F8',
        fontSize: 80,
        fontWeight: '100'
    },
    subTextStyle: {
        alignSelf: 'center',
        color: '#F8F8F8',        
        fontSize: 40        
    },
    mainViewStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',        
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    subViewStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',        
        justifyContent: 'space-between',
        paddingHorizontal: 10     
    },
    headerViewStyle: {
        backgroundColor: '#03B3E4',
        flexDirection: 'column',
        justifyContent: 'center',      
        height: 240,
        paddingLeft: 50,
        paddingRight: 10  
    },
    dateLocationViewStyle: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',        
        justifyContent: 'center',
        paddingHorizontal: 10      
    },
};

export default CurrentWeatherHeader;
