
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './component/Input';
import { noop } from './utils';

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
        value: []
    };

    get formatedValue() {
        return this.state.value;
    }

    renderInput = (node) => {
        // console.log(node);
        const { name, type, value } = node;
        const onChange = (e, value) => {
            this.setState((prevState) => {
                const { value: V } = prevState;
                V.find(i => i === node).value = value;
                return { ...V }
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
        const { value, value: { length } } = this.state;
        const { name } = this.props;
        return (
            <div className="tree-input">
                <div className="tree-input-start">
                    <span className="tree-input-expand">▼</span>
                    <span className="tree-input-name">"{name}": </span>
                    <span>{"\u007b"}</span>
                    <span className="tree-input-count">{length} Items</span>
                </div>
                <div className="tree-input-items">{value.map(this.renderNode)}</div>
                <div className="tree-input-end"><span>{"\u007d"}</span></div>
            </div>
        );
    }
}


export {
    TreeInput
};
