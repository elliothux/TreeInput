
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
        collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        nestedDepth: PropTypes.number,
        onChange: PropTypes.func
    };
    static defaultProps = {
        name: 'Root',
        onChange: noop,
        nestedDepth: 0
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
        console.log(value);
        return '';
    };
    formatRepeated = (value) => {

    };

    generateOnChange = (node) => {
        return (e, value) => {
            this.setState((prevState) => {
                const { value: V } = prevState;
                V.find(i => i === node).value = value;
                const newValue = [...V];
                const formated = this.props.nestedDepth === 0 ? this.format(newValue) : newValue;
                this.props.onChange(e, formated);
                return { value: newValue };
            });
        };
    };
    renderInput = (node) => {
        const { name, type, value } = node;
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
                    onChange={this.generateOnChange(node)}
                />
            </div>
        );
    };
    renderMessage = (node) => {
        const { fieldInfo, name } = node;
        const { nestedDepth, collapsed } = this.props;
        return (
            <TreeInput
                key={name}
                schema={fieldInfo}
                name={name}
                nestedDepth={nestedDepth + 1}
                collapsed={collapsed}
                onChange={this.generateOnChange(node)}
            />
        );
    };
    renderRepeated = (node) => {
        // TODO: REPEATED
    };
    renderNode = (node) => {
        const { label, type } = node;
        if (label === 'REPEATED') {
            return this.renderRepeated(node);
        } else {
            return (type === 'message' ? this.renderMessage : this.renderInput)(node);
        }
    };
    render() {
        const { value, value: { length }, collapsed } = this.state;
        const { name } = this.props;
        return (
            <div
                className={`tree-input${collapsed ? ' tree-input-collapsed' : ''}`}
                key={name}
            >
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
                    >"{name}": </span>
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
