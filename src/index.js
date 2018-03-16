
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
        name: 'Root',
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
                this.props.onChange(formated);
                return { value: newValue };
            });
        };
        return (
            <div className="tree-input-item" key={name}>
                <div className="tree-input-item-info">
                    <span className="tree-input-item-name">"{name}"</span>
                    <span className="tree-input-item-type">: {type}</span>
                </div>
                <Input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>
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
                    <img
                        className="tree-input-expand"
                        src={CollapsedIcon}
                        onClick={this.handleToggleCollapsed}
                    />
                    <span
                        className="tree-input-name"
                        onClick={this.handleToggleCollapsed}
                    >{name}: </span>
                    <span onClick={this.handleToggleCollapsed}>{"\u007b"}</span>
                    <span if={collapsed} onClick={this.handleToggleCollapsed}> ... }</span>
                    <span className="tree-input-count">{length} Items</span>
                </div>
                <div className="tree-input-items">{value.map(this.renderNode)}</div>
                <div className="tree-input-end">
                    <span onClick={this.handleToggleCollapsed}>{"\u007d"}</span>
                </div>
            </div>
        );
    }
}


export {
    TreeInput
};
