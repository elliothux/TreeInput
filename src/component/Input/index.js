
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop, types, typesMap } from '../../utils';

import './index.scss';



class Input extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(types),
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        className: PropTypes.string
    };
    static defaultProps = {
        type: typesMap.STRING,
        onChange: noop,
        onPressEnter: noop,
        getRef: noop,
        value: '',
        className: ''
    };

    shouldComponentUpdate(nextProps) {
        const { value, name, type, className } = this.props;
        const {
            value: nextValue,
            name: nextName,
            type: nextType,
            className: nextClassName
        } = nextProps;
        return value !== nextValue || name !== nextName ||
            type !== nextType || className !== nextClassName;
    }

    onChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;
        const formated = this.format(value);
        const event = { ...e, value: formated, component: this };
        onChange(event, formated, value);
    };
    format = (value) => {
        return value;
    };
    render() {
        const {
            value, name, type, className
        } = this.props;
        return (
            <input
                type="text"
                className={className}
                value={value}
                placeholder={`${name}: ${type}`}
                onChange={this.onChange}
            />
        )
    }
}


export default Input;
