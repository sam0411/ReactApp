import React, {Component} from 'react';

import BoilingVerdict from './BoilingVerdict';
import BoilingTemperatureInput from './BoilingTemperatureInput';

import BoilingScale from './BoilingScale.json';

class BoilingCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

        this.state = {temperature: '0', scale: BoilingScale.celsius};
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {

        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;

        return rounded.toString();
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: BoilingScale.celsius, temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: BoilingScale.fahrenheit, temperature});
    }

    render() {

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === BoilingScale.fahrenheit ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === BoilingScale.celsius ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        
        return (
            <div>
                <fieldset>
                    <BoilingTemperatureInput 
                        scale={BoilingScale.celsius} 
                        temperature={celsius} 
                        onTemperatureChange={this.handleCelsiusChange}
                    />

                    <BoilingTemperatureInput 
                        scale={BoilingScale.fahrenheit} 
                        temperature={fahrenheit} 
                        onTemperatureChange={this.handleCelsiusChange}
                    />

                    <BoilingVerdict temperature={parseFloat(temperature)} />
                </fieldset>
            </div>
        );
    }
}

export default BoilingCalculator;