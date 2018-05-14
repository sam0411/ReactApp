import React, {Component} from 'react';

class BoilingVerdict extends Component {

    constructor(props) {
      super(props);
    }

    render() {

        const temperature = this.props.temperature;

        let result = 'not boiling';

        if(temperature >= 100) {
            result = 'is boiling';
        }

        return(
            <div>
                <p>{result}</p>
            </div>
        );
    }
}

export default BoilingVerdict;