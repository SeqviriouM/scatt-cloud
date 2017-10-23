import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

const render = () => {
    debugger;
    ReactDOM.render((
        <AppContainer>
            <div>Element</div>
        </AppContainer>
    ), document.getElementById('root'));
};

render();

if (module.hot) {
    module.hot.accept();
    render();
}