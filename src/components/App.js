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
                    left
                    width = { '50%' }
                    height = { '100%' }
                    bgColor = { '#FFFAF0' }
                >
                    <h3 className='title_child_comp'>Children element</h3>
                </Slidepanel>
            </div>
        );
    }
}


