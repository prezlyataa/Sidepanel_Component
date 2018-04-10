import React, { Component } from 'react';
import './Slidepanel.scss';

export class Slidepanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isPanelOpen, closePanel } = this.props;

        if(!isPanelOpen) {
            return null;
        }

        return (
            <div className='slidepanel'>
                <h4 className='slidepanel_title'>Slide panel</h4>
                <p className='slidepanel_content'>Content</p>
                <button onClick = {closePanel}>Close panel</button>
            </div>
        )
    }
}