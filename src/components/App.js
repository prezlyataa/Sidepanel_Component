import React, { Component } from 'react';
import { Slidepanel } from './Slidepanel/';
import './App.scss';

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
                <Slidepanel
                    closePanel = { this.closePanel }
                    isPanelOpen = { isPanelOpen }
                    bottom
                    width = { '100%' }
                    height = { '50%' }
                    bgColor = { '#0077b2' }
                />
            </div>
        );
    }
}


