
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';


const noop = () => {};


class ProtoInput extends Component {
    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };
    static defaultProps = {
        type: 'str',
        getRef: noop,
        onChange: noop,
        onPressEnter: noop,
        defaultValue: ''
    };
    componentWillMount() {
        this.computedValue = this.props.defaultValue;
    }
    componentWillReceiveProps(newProps) {
        const { defaultValue } = newProps;
        if (defaultValue !== this.computedValue) {
            this.computedValue = defaultValue;
        }
    }
    computedValue = '';
    onChange = (e) => {
        const { type } = this.props;
        const isSmallNumber = ['int32', 'sint32', 'sfixed32'].includes(type);
        const isBigNumber = ['double', 'float', 'uint32', 'uint64',
            'int64', 'uint64', 'sint64', 'fixed32', 'fixed64',
            'sfixed64'].includes(type);

        if (isSmallNumber || isBigNumber) {
            const rawValues = e.target.value.split('');
            const validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            if (['double', 'float'].includes(type)) {
                validValues.push('.');
            }
            if (['double', 'float', 'int64', 'sint64', 'fixed32', 'fixed64', 'sfixed64'].includes(type)) {
                validValues.push('-');
            }
            let value = rawValues.filter(i => validValues.includes(i)).join('');
            this.computedValue = value;
        }
        this.computedValue = e.target.value;
        this.props.onChange(e, this.computedValue);
    };
    onPressEnter = (e) => {
        this.props.onPressEnter(e, this.computedValue);
    };
    render() {
        const props = { ...this.props };
        Reflect.deleteProperty(props, 'getRef');
        return (
            <Input
                {...props}
                ref={this.props.getRef}
                value={this.computedValue}
                onPressEnter={this.onPressEnter}
                onChange={this.onChange}
            />
        );
    }
}


export default ProtoInput;
