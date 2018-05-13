// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件
import './main_scss.scss';//使用require导入scss文件

render(
    <Greeter isLoggedIn={true} />,
    document.getElementById('root')
);