
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Message from '../Message';
import { noop, types, preventDefault, deepCopy } from '../../utils';

import "./index.scss";
import Tooltip from "../Tooltip";



class Repeated extends Component {
    static propTypes = {
        value: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        typeOrFieldInfo: PropTypes.oneOfType([
            PropTypes.oneOf(types),
            PropTypes.array
        ]).isRequired,
        collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
        nestedDepth: PropTypes.number.isRequired,
        documentation: PropTypes.string,
        onChange: PropTypes.func
    };
    static defaultProps = {
        documentation: '',
        onChange: noop
    };

    constructor(...args) {
        super(...args);
        const { nestedDepth, collapsed } = this.props;
        this.state = {
            collapsed: typeof collapsed === 'number' ?
                nestedDepth >= collapsed : !!collapsed
        };
    }

    get isMessage() {
        const { typeOrFieldInfo } = this.props;
        return typeof typeOrFieldInfo !== 'string';
    }
    state = { collapsed: false };

    handleToggleCollapsed = (e, collapsed) => {
        preventDefault(e);
        this.setState({
            collapsed: typeof collapsed === 'boolean' ?
                collapsed : !this.state.collapsed
        });
    };
    handleAddInputItem = (e) => {
        const { value: newValue } = this.props;
        newValue.push('');
        this.props.onChange(e, newValue);
        this.handleToggleCollapsed(e, false);
    };
    handleAddMessageItem = (e) => {
        const {
            value: newValue,
            typeOrFieldInfo: fieldInfo
        } = this.props;
        newValue.push(deepCopy(fieldInfo));
        this.props.onChange(e, newValue);
        this.handleToggleCollapsed(e, false);
    };
    handleAddItem = (e) => {
        preventDefault(e);
        if (this.isMessage) {
            this.handleAddMessageItem(e);
        } else {
            this.handleAddInputItem(e);
        }
    };
    handleRemoveItem = (e, index) => {
        preventDefault(e);
        const { value: newValue } = this.props;
        newValue.splice(index, 1);
        this.props.onChange(e, newValue);

        if (newValue.length === 0) {
            this.handleToggleCollapsed(e, true);
        }
    };

    generateOnChange = (index) => {
        return (e, value) => {
            const { value: newValue } = this.props;
            newValue[index] = value;
            this.props.onChange(e, [...newValue]);
        };
    };
    renderInput = (value, index) => {
        const { name, typeOrFieldInfo: type } = this.props;
        return (
            <div
                key={index}
                className="tree-input-repeated-item"
            >
                <span className="tree-input-repeated-item-index">"{index}": </span>
                <Input
                    className="tree-input-repeated-item-input"
                    key={`${index}-1`}
                    name={name}
                    type={type}
                    value={value}
                    onChange={this.generateOnChange(index)}
                />
                <i
                    className="tree-input-remove icon-remove"
                    onClick={(e) => this.handleRemoveItem(e, index)}
                />
            </div>
        );
    };
    renderMessage = (value, index) => {
        const { typeOrFieldInfo: fieldInfo, name } = this.props;
        const { nestedDepth, collapsed } = this.props;
        return (
            <Message
                key={index}
                value={value || fieldInfo}
                name={index.toString()}
                nestedDepth={nestedDepth + 1}
                collapsed={collapsed}
                onChange={this.generateOnChange(index)}
                onRemove={(e) => this.handleRemoveItem(e, index)}
            />
        );
    };
    renderNode = (value, index) => {
        if (this.isMessage) {
            return this.renderMessage(value || typeOrFieldInfo, index);
        } else {
            return this.renderInput(value, index);
        }
    };
    render() {
        const { collapsed } = this.state;
        const {
            value,
            value: { length },
            name,
            documentation,
            typeOrFieldInfo
        } = this.props;
        const isMessage = typeof typeOrFieldInfo !== 'string';
        return (
            <div
                className={`tree-input-repeated tree-input${
                    collapsed ? ' tree-input-collapsed' : ''} ${isMessage ? 'message' : typeOrFieldInfo}`}
                key={name}
            >
                <div
                    className="tree-input-start"
                    onClick={this.handleToggleCollapsed}
                >
                    <i className="tree-input-expand icon-collapsed"/>
                    <div className="tree-input-name">
                        <span>"{name}": </span>
                        <Tooltip text={documentation}/>
                    </div>
                    <span className="tree-input-item-type"> {isMessage ? 'message' : typeOrFieldInfo}[]</span>
                    <span className="tree-input-tag">[</span>
                    <span className={collapsed ? '' : 'tree-input-hide'}>
                        <span if={length > 0}>...</span>
                        <span className="tree-input-tag">]</span>
                    </span>
                    <span if={length === 0} className="tree-input-count-empty">Empty</span>
                    <span else className="tree-input-count">{length} Items</span>
                    <i
                        className="tree-input-add icon-add"
                        onClick={this.handleAddItem}
                    />
                </div>
                <div className="tree-input-items">{value.map(this.renderNode)}</div>
                <div className="tree-input-end">
                    <span onClick={this.handleToggleCollapsed}>]</span>
                </div>
            </div>
        );
    }
}


export default Repeated;
