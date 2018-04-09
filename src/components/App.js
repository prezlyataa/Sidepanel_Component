import React, { Component } from 'react';
import './App.scss';
import { Sidepanel } from './Sidepanel/';

export class App extends Component  {
  render() {
    return (
        <div className="app">
            <div className="container">
                <button className="btn_open">Open Sidepanel</button>
                <Sidepanel/>
            </div>
        </div>
    );
  }
}


