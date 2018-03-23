
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';



class Tooltip extends Component {
    static propTypes = {
        text: PropTypes.string
    };
    static defaultProps = {
        text: ''
    };

    render() {
        const { text } = this.props;
        return (
            <div
                if={text.trim()}
                className="tree-input-tooltip"
            >
                <span>{text}</span>
                <div className="tree-input-tooltip-arrow"/>
            </div>
        );
    }
}


export default Tooltip;
