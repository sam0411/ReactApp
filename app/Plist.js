import React, {component} from 'react'

import PlistItem from './Plistitem';

class Plist extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;

        //object id property, map index property
        const listItems = numbers.map((number, index) =>
            <PlistItem id={index} value={number} />
        );

        return(
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default Plist