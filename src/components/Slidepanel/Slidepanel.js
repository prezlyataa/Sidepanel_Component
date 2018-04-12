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
            bgColor,
            children,
            setWrapperRef
        } = this.props;

        const CN = cx(
            "slidepanel",
            {"right": right},
            {"left": left},
            {"top": top},
            {"bottom": bottom}
        );

        const PanelStyle = {
            width: width,
            height: height,
            backgroundColor: bgColor
        };

        if(!isPanelOpen) { return null; }

        return (
            <div
                className = "slidepanel_wrapper"
            >
                <div
                    className={cx(CN)} style={PanelStyle}
                    ref = { setWrapperRef }
                >
                    <div className="wrapp_close_btn">
                        <div
                            className="btn_close_panel"
                            onClick = { closePanel }
                        />
                    </div>
                    {children}
                </div>
            </div>
        )
    }
}