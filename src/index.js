
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './component/Message';
import { noop, typesMap } from './utils';

import './index.scss';

const EMPTY = {};


class TreeInput extends Component {
    static propTypes = {
        schema: PropTypes.array.isRequired,
        rootName: PropTypes.string,
        collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        onChange: PropTypes.func,
        filterEmpty: PropTypes.bool,
        warnEmpty: PropTypes.bool
    };
    static defaultProps = {
        rootName: 'Root',
        collapsed: true,
        onChange: noop,
        filterEmpty: true,
        warnEmpty: false
    };

    // Format Value to JSON
    static format = (value, filterEmpty) => {
        value = value.map(i => {
            const {
                name, type, label, value, fieldInfo
            } = i;
            let v;

            if (label === "REPEATED") {
                if (!value || value.length === 0) return EMPTY;
                v = TreeInput.formatRepeated(
                    value,
                    type === 'message' ? fieldInfo : type,
                    filterEmpty
                );
                if (v === '[]' && filterEmpty) return EMPTY;
            } else if (type === 'message') {
                v = TreeInput.format(fieldInfo, filterEmpty);
                if (v === '{}' && filterEmpty) return EMPTY;
            } else {
                if (filterEmpty && [undefined, null, ''].includes(value)) return EMPTY;
                if (value === undefined) {
                    v = 'null'
                } else {
                    v = TreeInput.formatSingle(value, type);
                }
            }
            return `"${name}":${v}`;
        }).filter(i => i !== EMPTY).join(',');
        return `{${value}}`;
    };
    static formatRepeated = (value, typeOrFieldInfo, filterEmpty) => {
        if (typeof typeOrFieldInfo === 'string') {
            value = value
                .map((v) => TreeInput.formatSingle(v, typeOrFieldInfo))
                .filter((v) => !!v)
                .join(',');
        } else {
            value = value
                .map((v) => TreeInput.format(v, filterEmpty))
                .filter((v) => v !== '{}')
                .join(',');
        }
        return `[${value}]`;
    };
    static formatSingle = (value, type) => {
        if ([typesMap.BYTES, typesMap.STRING].includes(type)) {
            return `"${value}"`;
        } else if (type === typesMap.ENUM) {
            return typeof value === 'string' ? `"${value}"` : `${value}`;
        } else {
            return `${value}`;
        }
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

    state = { value: [] };

    onChange = (e, value) => {
        this.setState({ value });
        const formated = TreeInput.format(value, this.props.filterEmpty);
        console.log(formated);
        console.log(JSON.parse(formated));
    };
    render() {
        const { value } = this.state;
        const { rootName, collapsed } = this.props;
        return (
            <Message
                value={value}
                collapsed={collapsed}
                nestedDepth={1}
                name={rootName}
                onChange={this.onChange}
            />
        );
    }
}


const format = TreeInput.format;


export {
    TreeInput,
    format
};
