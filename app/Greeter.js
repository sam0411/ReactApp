//Greeter,js
import React, {Component} from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Toggle from './Toggle';
import Popper from './Popper';
import Plist from './Plist';
import Pclock from './Pclock';
import NameForm from './NameForm';
import BoilingCalculator from './BoilingCalculator';


import ToDoListApp from './todos/ToDoListApp';


import config from './config.json';

import styles from './Greeter.css';//导入

class Greeter extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    //redux store
    const store = createStore(rootReducer);

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

        <Pclock />
        <br />

        <Toggle />
        <br /><br />

        <Popper />
        <br />

        <Plist numbers={numbers} />
        <br />

        <NameForm />
        <br />
        
        <BoilingCalculator />
        <br />
        <br />
        <br />
        <br />

        <Provider store={store}>
          <ToDoListApp />
        </Provider>

      </div>
    );
  }
}

export default Greeter
