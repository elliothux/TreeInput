
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Message from '../Message';
import CollapsedIcon from '../../media/collapsed.svg';
import AddIcon from '../../media/add.svg';
import RemoveIcon from '../../media/remove.svg';
import { noop, types, preventDefault, deepCopy } from '../../utils';

import "./index.scss";



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
        onChange: PropTypes.func
    };
    static defaultProps = {
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
                <img
                    className="tree-input-remove"
                    src={RemoveIcon}
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
        const { value, value: { length }, name } = this.props;
        return (
            <div
                className={`tree-input-repeated tree-input${collapsed ? ' tree-input-collapsed' : ''}`}
                key={name}
            >
                <div
                    className="tree-input-start"
                    onClick={this.handleToggleCollapsed}
                >
                    <img
                        className="tree-input-expand"
                        src={CollapsedIcon}
                    />
                    <span className="tree-input-name">"{name}": </span>
                    <span>[</span>
                    <span if={collapsed}> <span if={length > 0}>...</span> ]</span>
                    <span className="tree-input-count">{length} Items</span>
                    <img
                        className="tree-input-add"
                        src={AddIcon}
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
