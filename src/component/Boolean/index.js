
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop, preventDefault } from '../../utils';

import './index.scss';



class Boolean extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        className: PropTypes.string
    };
    static defaultProps = {
        onChange: noop,
        getRef: noop,
        value: '',
        className: ''
    };

    onChange = (e, value) => {
        preventDefault(e);
        const { onChange } = this.props;
        const event = { ...e, value, component: this };
        onChange(event, value, value);
    };
    handleSelectTrue = (e) => {
        this.onChange(e, true);
    };
    handleSelectFalse = (e) => {
        this.onChange(e, false);
    };

    render() {
        const {
            value, name, className
        } = this.props;
        return (
            <div
                key={name}
                className={`tree-input-item-boolean ${className}`}
            >
                <div
                    className={value === true ? 'tree-input-boolean-active' : ''}
                    onClick={this.handleSelectTrue}
                >TRUE</div>
                <div
                    className={value === false ? 'tree-input-boolean-active' : ''}
                    onClick={this.handleSelectFalse}
                >FALSE</div>
            </div>
        );
    }
}


export default Boolean;
