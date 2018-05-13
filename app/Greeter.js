//Greeter,js
import React, {Component} from 'react';

import Toggle from './Toggle';
import Popper from './Popper';
import Plist from './Plist';

import config from './config.json';

import styles from './Greeter.css';//导入

class Greeter extends Component{

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    let greeting = null;

    if (isLoggedIn) {
      greeting =  <h1>{config.greetTextUser}</h1>
    } else {
      greeting = <h1>{config.greetTextGuest}</h1>
    }

    const numbers = [1, 2, 3, 4, 5];

    return (
      <div className={styles.root}>
        {greeting}
        <br />

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <br />

        <Toggle />
        <br /><br />

        <Popper />
        <br />

        <Plist numbers={numbers} />
        <br />
      </div>
    );
  }
}

export default Greeter
