import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CurrentWeatherHeader from './CurrentWeatherHeader';
import ForecastList from './ForecastList';
import Days from './Days.js';
import Months from './Months.js';

class Forecast extends Component {
    constructor() {
        super(); 
        this.state = {
            city: '',
            country: '',
            currentDay: {
                weather: {}
            },
            forecasts: []
        };
    }

    componentWillMount() {
        axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Adelaide&country=AU&key=dde8d8f055f74bc39f253757d643b379')
        .then(res => {
            const country = res.data.country_code;
            const city = res.data.city_name;
            let forecasts = res.data.data;
            forecasts.forEach((forecast, index) => {    
                forecasts[index].label = this.getLabel(forecast.valid_date, index);
            });
            const currentDay = forecasts[0];
            forecasts = forecasts.slice(1);

            this.setState({ city, country, currentDay, forecasts });
        });
    }

    getLabel(date, index) {
        if (index === 1) {
            return 'Tomorrow';
        }

        const dateObject = new Date(date);
        const weekday = Days[dateObject.getDay()];
        const month = Months[dateObject.getMonth()];
        const day = dateObject.getDate();              

        if (index === 0) {
            return `Today, ${month} ${day}`;
        } 
        if (index < 6) {                    
            return weekday;
        }

        const shortenedMonth = month.substr(0, 3);                    
        const shortenedWeekday = weekday.substr(0, 3);
        return `${shortenedWeekday} ${shortenedMonth} ${day}`;        
    }

    render() {
        return (
            <ScrollView>
                <CurrentWeatherHeader 
                    country={this.state.country} 
                    city={this.state.city} 
                    forecast={this.state.currentDay}
                />
                <ForecastList details={this.state.forecasts} />            
            </ScrollView>
        );
    }
}

export default Forecast;
