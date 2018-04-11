import React, { Component } from 'react';
import cx from 'classnames';
import './Slidepanel.scss';

export class Slidepanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            isPanelOpen,
            closePanel,
            right,
            left,
            top,
            bottom,
            width,
            height,
            bgColor
        } = this.props;

        const CN = cx(
            'slidepanel',
            {'right': right},
            {'left': left},
            {'top': top},
            {'bottom': bottom}
        );

        const PanelStyle = {
            width: width,
            height: height,
            backgroundColor: bgColor
        };

        if(!isPanelOpen) { return null; }

        return (
            <div className={cx(CN)} style={PanelStyle}>
                <h4>Slide panel</h4>
                <p>Content</p>
                <button onClick = { closePanel }>Close panel</button>
            </div>
        )
    }
}