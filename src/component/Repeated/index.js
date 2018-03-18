
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Message from '../Message';
import CollapsedIcon from '../../media/collapsed.svg';
import { noop, types } from '../../utils';




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

    state = { collapsed: false };

    handleToggleCollapsed = (collapsed) => {
        this.setState({
            collapsed: typeof collapsed === 'boolean' ?
                collapsed : !this.state.collapsed
        });
    };

    generateOnChange = (index) => {
        return (e, value) => {
            const { value: newValue } = this.props;
            newValue[index] = value;
            this.props.onChange(e, newValue);
        };
    };
    renderInput = (value, index) => {
        const { name, typeOrFieldInfo: type } = this.props;
        return (
            <Input
                key={index}
                name={name}
                type={type}
                value={value}
                onChange={this.generateOnChange(index)}
            />
        );
    };
    renderMessage = (value, index) => {
        const { typeOrFieldInfo: fieldInfo, name } = this.props;
        const { nestedDepth, collapsed } = this.props;
        return (
            <Message
                key={name}
                value={value || fieldInfo}
                name={name}
                nestedDepth={nestedDepth + 1}
                collapsed={collapsed}
                onChange={this.generateOnChange(index)}
            />
        );
    };
    renderRepeated = (value, index) => {
        // TODO: REPEATED
    };
    renderNode = (value, index) => {
        console.log(index);
        return null;
        const { typeOrFieldInfo } = this.props;
        if (Array.isArray(typeOrFieldInfo)) {
            // return this.renderMessage(value || typeOrFieldInfo, index);
        } else {
            // return this.renderInput(value, index);
        }
    };
    render() {
        const { collapsed } = this.state;
        const { value, value: { length }, name } = this.props;
        return (111);
    }
}


export default Repeated;
