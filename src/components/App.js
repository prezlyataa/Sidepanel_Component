import React, { Component } from 'react';
import './App.scss';
import { Slidepanel } from './Slidepanel/';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPanelOpen: false
        };

        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
    }

    openPanel() {
        this.setState({ isPanelOpen: true });
    }

    closePanel() {
        this.setState({ isPanelOpen: false });
    }

    render() {
        const { isPanelOpen } = this.state;

        return (
            <div className="app">
                <div className="container">
                    <button
                        className="btn_open"
                        onClick = {this.openPanel}
                    >
                        Open Sidepanel
                    </button>
                </div>
                <div className="slidepanel_wrapper">
                    <Slidepanel
                        closePanel = { this.closePanel }
                        isPanelOpen = { isPanelOpen }
                    />
                </div>
            </div>
        );
    }
}


