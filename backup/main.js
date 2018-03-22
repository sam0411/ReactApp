import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App_Render from './App_Render.jsx';
import App_Stateful from './App_Stateful.jsx';
import App_State from './App_State.jsx';
import App_Prop from './App_Prop.jsx';
import App_State_Prop from './App_State_Prop.jsx';
import App_Prop_Validation from './App_Prop_Validation.jsx';
import App_SetState from './App_SetState.jsx';
import App_Forceupdate from './App_Forceupdate.jsx';
import App_FindDomNode from './App_FindDomNode.jsx';
import App_Lifecycle from './App_Lifecycle.jsx';
import App_Form from './App_Form.jsx';
import App_Formchild from './App_Formchild.jsx';
import App_Event from './App_Event.jsx';
import App_Eventparent from './App_Eventparent.jsx';
import App_Refs from './App_Refs.jsx';
import App_Keys from './App_Keys.jsx';
import App_Animation from './App_Animation.jsx';

ReactDOM.render(<App_Render />, document.getElementById('app_render'));

ReactDOM.render(<App_Stateful />, document.getElementById('app_stateful'));

ReactDOM.render(<App_State />, document.getElementById('app_state'));

ReactDOM.render(<App_Prop headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('app_prop'));

ReactDOM.render(<App_Prop />, document.getElementById('app_prop_default'));

ReactDOM.render(<App_State_Prop />, document.getElementById('app_state_prop'));

ReactDOM.render(<App_Prop_Validation />, document.getElementById('app_prop_validation'));

ReactDOM.render(<App_SetState />, document.getElementById('app_setstate'));

ReactDOM.render(<App_Forceupdate />, document.getElementById('app_forceupdate'));

ReactDOM.render(<App_FindDomNode />, document.getElementById('app_finddomnode'));

ReactDOM.render(<App_Lifecycle />, document.getElementById('app_lifecycle'));
setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app_lifecycle'));}, 10000);

ReactDOM.render(<App_Form />, document.getElementById('app_form'));

ReactDOM.render(<App_Formchild />, document.getElementById('app_formchild'));

ReactDOM.render(<App_Event />, document.getElementById('app_event'));

ReactDOM.render(<App_Eventparent />, document.getElementById('app_eventparent'));

ReactDOM.render(<App_Refs />, document.getElementById('app_refs'));

ReactDOM.render(<App_Keys />, document.getElementById('app_keys'));

ReactDOM.render(<App_Animation />, document.getElementById('app_animation'));