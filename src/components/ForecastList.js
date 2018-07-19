import React from 'react';
import { View } from 'react-native';
import ForecastDay from './ForecastDay';

const ForecastList = (props) => (
    <View>            
        {props.details
            .map((day, index) =>
                <ForecastDay 
                    key={index} 
                    details={day}
                />
            )
        }
    </View>
);

export default ForecastList;
