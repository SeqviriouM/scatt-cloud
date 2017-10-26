import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import classNames from 'classnames';

import TargetPage from 'TargetPage/TargetPage'

import './App.scss';

export default class Application extends Component {
    renderRouter() {
        return (
            <main className={classNames('application', 'main')}>
                <Switch>
                    <Route path="/target" component={TargetPage} />
                </Switch>
            </main>
        );
    }

    render() {
        return (
            <Router>
                <div className={classNames('application')}>
                    Application
                    {this.renderRouter()}
                </div>
            </Router>
        )
    }
};