import React, {component} from 'react'

class PlistItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.id;
        const value = this.props.value;

        return(
            <li key={id}>
                'id=' {id}
                ' - '
                'Value=' {value}
            </li>
        );
    }
}

export default PlistItem