import React, {component} from 'react'

class PlistItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const value = this.props.value;
        const index = this.props.index;

        console.log('PlistItem Index=' + index + ', value=' + value);

        return(
            <li>{value}</li>
        );
    }
}

export default PlistItem