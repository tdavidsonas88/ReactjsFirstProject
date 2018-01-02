import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
 	document.getElementById('root'));
registerServiceWorker();

/**
	The code below refresh the page without reloading it!
*/
if(module.hot){
	module.hot.accept();
}
