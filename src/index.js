
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './component/Message';
import { noop, typesMap } from './utils';



class TreeInput extends Component {
    static propTypes = {
        schema: PropTypes.array.isRequired,
        rootName: PropTypes.string,
        collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        onChange: PropTypes.func
    };
    static defaultProps = {
        name: 'Root',
        onChange: noop
    };

    constructor(...args) {
        super(...args);
        const {
            schema, nestedDepth, collapsed
        } = this.props;
        this.state = {
            value: schema,
            collapsed: typeof collapsed === 'number' ?
                nestedDepth >= collapsed : !!collapsed
        };
    }

    state = {
        value: [],
        collapsed: false
    };

    handleToggleCollapsed = (collapsed) => {
        this.setState({
            collapsed: typeof collapsed === 'boolean' ?
                collapsed : !this.state.collapsed
        });
    };
    format = (value) => {
        value = value.map(i => {
            const {
                name, type, label, value, fieldInfo
            } = i;
            if (label === "REPEATED") {
                return `"${name}":${this.formatRepeated(value)}`;
            } else if (type === 'message') {
                return `"${name}":${this.format(fieldInfo)}`;
            } else {
                if ([undefined, null, ''].includes(value)) return false;
                if ([typesMap.BYTES, typesMap.STRING].includes(type)) {
                    return `"${name}":"${value}"`;
                } else {
                    return `"${name}":${value}`;
                }
            }
        }).filter(i => !!i).join(',');
        return `{${value}}`;
    };
    formatRepeated = (value) => {
        return `""`;
    };

    onChange = (e, value) => {
        this.setState({ value });
        const formated = this.format(value);
        console.log(value, formated);
        console.log(JSON.parse(formated));
    };
    render() {
        const { value, collapsed } = this.state;
        const { name } = this.props;
        return (
            <Message
                value={value}
                collapsed={collapsed}
                nestedDepth={1}
                name={name}
                onChange={this.onChange}
            />
        );
    }
}


export {
    TreeInput
};
