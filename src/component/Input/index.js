
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { noop, types, typesMap } from '../../utils';

import './index.scss';



class Input extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(types),
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };
    static defaultProps = {
        type: typesMap.STRING,
        onChange: noop,
        onPressEnter: noop,
        getRef: noop,
        value: ''
    };

    onChange = (e, value) => {
        const { onChange } = this.props;
        const formated = this.format(value);
        const event = { ...e, value: formated, component: this };
        onChange(event, formated);
    };
    format = (value) => {

    };
    render() {
        const { value, name, type } = this.props;
        return (
            <div className="input-item">
                <span>{name}</span>
                <input
                    type="text"
                    value={value}
                    placeholder={`${name}: ${type}`}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}


export default Input;
