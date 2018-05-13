import React, {component} from 'react'

import PlistItem from './PlistItem';

class Plist extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;

        //object id property, map index property
        const listItems = numbers.map((number, index) =>
            <PlistItem key={index} value={number} index={index} />
        );

        return(
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default Plist