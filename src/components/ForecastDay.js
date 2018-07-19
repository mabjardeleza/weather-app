import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardColumn from './CardColumn';
import CardSection from './CardSection';

const ForecastDay = (props) => {
    const { 
        iconStyle,
        headerTextStyle, 
        subTextStyle 
    } = styles;

    return (
        <Card>
            <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${props.details.weather.icon}.png` }} style={iconStyle} />
            <CardColumn>
                <CardSection>        
                    <Text style={headerTextStyle}>{props.details.label}</Text>
                    <Text style={headerTextStyle}>{props.details.max_temp}°</Text>
                </CardSection>
                <CardSection>
                    <Text style={subTextStyle}>
                        {props.details.weather.description}
                    </Text>            
                    <Text style={subTextStyle}>{props.details.min_temp}°</Text>
                </CardSection>
            </CardColumn>        
        </Card>
    );
};

const styles = {
    iconStyle: {
        alignSelf: 'center',
        height: 35,
        width: 35,
        marginRight: 10
    },    
    headerTextStyle: {      
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    subTextStyle: { 
        alignSelf: 'center',       
        fontSize: 12,
        color: '#222'
    }
};

export default ForecastDay;
