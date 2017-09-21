import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Twitcher from './twitcher';
import './channels.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Twitcher />, document.getElementById('root'));
registerServiceWorker();
