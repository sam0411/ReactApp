import React, {Component} from 'react';

class BoilingTemperatureInput extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      //this.setState({temperature: e.target.value});
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {

      const temperature = this.props.temperature;
      const scale = this.props.scale;

      return (

        <fieldset>
          <legend>Enter temperature in {scale}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
}

export default BoilingTemperatureInput;