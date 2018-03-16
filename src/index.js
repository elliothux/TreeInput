
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './component/Input';
import CollapsedIcon from './media/collapsed.svg';
import { noop, typesMap } from './utils';

import './index.scss';



class TreeInput extends Component {
    static propTypes = {
        schema: PropTypes.array.isRequired,
        name: PropTypes.string,
        onChange: PropTypes.func
    };
    static defaultProps = {
        name: 'root',
        onChange: noop
    };

    constructor(...args) {
        super(...args);
        this.state.value = this.props.schema;
    }

    state = {
        value: [],
        collapsed: false
    };

    format = (value) => {
        console.log(value);
        value = value.map(i => {
            const { name, type, label, value } = i;
            if (type === 'message') {
                return `${name}:${this.formatMessage(value)}`;
            } else if (label === 'REPEATED') {
                return `${name}:${this.formatRepeated(value)}`;
            } else {
                if ([undefined, null, ''].includes(value)) return false;
                if ([typesMap.BYTES, typesMap.STRING].includes(type)) {
                    return `${name}:"${value}"`;
                } else {
                    return `${name}:${value}`;
                }
            }
        }).filter(i => !!i).join(',');
        return `{${value}}`;
    };
    formatMessage = (value) => {

    };
    formatRepeated = (value) => {

    };


    handleToggleCollapsed = (collapsed) => {
        this.setState({
            collapsed: typeof collapsed === 'boolean' ?
                collapsed : !this.state.collapsed
        });
    };

    setValue = (node) => {
        const { value } = node;
        const { value: V } = this.state;
        V.find(i => i === node).value = value;
        const newValue = [...V];
        this.setState({ value: newValue });
        return newValue;
    };
    renderInput = (node) => {
        const { name, type, value } = node;
        const onChange = (e, value) => {
            this.setState((prevState) => {
                const { value: V } = prevState;
                V.find(i => i === node).value = value;
                const newValue = [...V];
                const formated = this.format(newValue);
                console.log(formated);
                this.props.onChange(formated);
                return { value: newValue };
            });
        };
        return (
            <Input
                key={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        );
    };
    renderMessage = (node) => {

    };
    renderRepeated = (node) => {
        // TODO: REPEATED
    };
    renderNode = (node) => {
        const { label, type } = node;
        if (label === 'OPTIONAL') {
            return (type === 'message' ? this.renderMessage : this.renderInput)(node);
        } else {
            return this.renderRepeated(node);
        }
    };
    render() {
        const { value, value: { length }, collapsed } = this.state;
        const { name } = this.props;
        return (
            <div className={`tree-input${collapsed ? ' tree-input-collapsed' : ''}`}>
                <div
                    className="tree-input-start"
                    onClick={this.handleToggleCollapsed}
                >
                    <img className="tree-input-expand" src={CollapsedIcon} />
                    <span className="tree-input-name">{name}: </span>
                    <span>{"\u007b"}</span>
                    <span if={collapsed}> ... }</span>
                    <span className="tree-input-count">{length} Items</span>
                </div>
                <div className="tree-input-items">{value.map(this.renderNode)}</div>
                <div
                    className="tree-input-end"
                    onClick={this.handleToggleCollapsed}
                >
                    <span>{"\u007d"}</span>
                </div>
            </div>
        );
    }
}


export {
    TreeInput
};
