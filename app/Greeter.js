//Greeter,js
import React, {Component} from 'react';

import Toggle from './Toggle';
import Popper from './Popper';

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
    return (
      <div className={styles.root}>
        <h1>{config.greetText}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Toggle />
        <Popper />
      </div>
    );
  }
}

export default Greeter
