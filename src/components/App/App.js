import React, {Component} from 'react';
import classNames from 'classnames';

import './App.scss';

export default class Application extends Component {
    render() {
        return (
            <div className={classNames('application')}>
                Application
            </div>
        )
    }
};