
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Enum from '../Enum';
import Boolean from '../Boolean';
import Repeated from '../Repeated';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import { noop, preventDefault } from '../../utils';

import './index.scss';


class Message extends Component {
    static propTypes = {
      value: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired,
      collapsed: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      nestedDepth: PropTypes.number.isRequired,
      documentation: PropTypes.string,
      onChange: PropTypes.func,
      onRemove: PropTypes.func,
      // warnEmpty: PropTypes.bool
    };
    static defaultProps = {
      documentation: '',
      onChange: noop,
      onRemove: noop,
      // warnEmpty: false,
    };

    constructor(...args) {
      super(...args);
      const { nestedDepth, collapsed } = this.props;
      this.state = {
        collapsed: typeof collapsed === 'number' ?
          nestedDepth >= collapsed : !!collapsed,
      };
    }

    state = { collapsed: false };

    handleToggleCollapsed = (e, collapsed) => {
      preventDefault(e);
      this.setState({
        collapsed: typeof collapsed === 'boolean' ?
          collapsed : !this.state.collapsed,
      });
    };

    generateOnChange = (node) => {
      return (e, value) => {
        const { value: newValue } = this.props;
        newValue.find(i => i === node).value = value;
        this.props.onChange(e, newValue);
      };
    };
    renderInput = (node) => {
      const {
        name, type, value, documentation,
      } = node;
      return (
        <div
          className={`tree-input-item ${type}`}
          key={name}
        >
          <div className="tree-input-item-info">
            <div className="tree-input-item-name">
              <span>{`"${name}":`}</span>
              <Tooltip text={documentation} />
            </div>
            <span className="tree-input-item-type"> {type}</span>
          </div>
          <Input
            className="tree-input-item-input"
            name={name}
            type={type}
            value={value}
            documentation={documentation}
            onChange={this.generateOnChange(node)}
          />
        </div>
      );
    };
    renderEnum = (node) => {
      const {
        name, fieldInfo, value, documentation,
      } = node;
      return (
        <div
          className="tree-input-item enum"
          key={name}
        >
          <div className="tree-input-item-info">
            <div className="tree-input-item-name">
              <span>{`"${name}":`}</span>
              <Tooltip text={documentation} />
            </div>
            <span className="tree-input-item-type"> enum</span>
          </div>
          <Enum
            name={name}
            value={value}
            fieldInfo={fieldInfo}
            documentation={documentation}
            onChange={this.generateOnChange(node)}
          />
        </div>
      );
    };
    renderBoolean = (node) => {
      const { name, value, documentation } = node;
      return (
        <div
          className="tree-input-item boolean"
          key={name}
        >
          <div className="tree-input-item-info">
            <div className="tree-input-item-name">
              <span>{`"${name}":`}</span>
              <Tooltip text={documentation} />
            </div>
            <span className="tree-input-item-type"> boolean</span>
          </div>
          <Boolean
            name={name}
            value={value}
            documentation={documentation}
            onChange={this.generateOnChange(node)}
          />
        </div>
      );
    };
    renderMessage = (node) => {
      const { fieldInfo, name, documentation } = node;
      const { nestedDepth, collapsed } = this.props;
      return (
        <Message
          key={name}
          value={fieldInfo}
          name={name}
          nestedDepth={nestedDepth + 1}
          collapsed={collapsed}
          documentation={documentation}
          onChange={this.generateOnChange(node)}
        />
      );
    };
    renderRepeated = (node) => {
      const {
        name, type, fieldInfo, value, documentation,
      } = node;
      const { nestedDepth, collapsed } = this.props;
      return (
        <Repeated
          key={name}
          value={value || []}
          name={name}
          typeOrFieldInfo={fieldInfo || type}
          collapsed={collapsed}
          nestedDepth={nestedDepth + 1}
          documentation={documentation}
          onChange={this.generateOnChange(node)}
        />
      );
    };
    renderNode = (node) => {
      const { label, type } = node;
      if (label === 'REPEATED') {
        return this.renderRepeated(node);
      }
      switch (type) {
        case 'message': return this.renderMessage(node);
        case 'enum': return this.renderEnum(node);
        case 'boolean': return this.renderBoolean(node);
        default: return this.renderInput(node);
      }
    };
    render() {
      const { collapsed } = this.state;
      const {
        value,
        value: { length },
        name,
        nestedDepth,
        onRemove,
        documentation,
      } = this.props;
      const isRoot = nestedDepth === 1;
      return (
        <div
          className={`tree-input${
                    collapsed ? ' tree-input-collapsed' : ''}${
                    isRoot ? ' tree-input-root' : ''} message`}
          key={name}
        >
          <div
            className="tree-input-start"
            onClick={this.handleToggleCollapsed}
          >
            <Icon type="COLLAPSED" className="tree-input-expand" />
            <div className="tree-input-name">
              <span>{`"${name}": `}</span>
              <Tooltip text={documentation} />
            </div>
            <span
              if={!isRoot}
              className="tree-input-item-type"
            > message
            </span>
            <span className="tree-input-tag">{'\u007b'}</span>
            <span className={collapsed ? '' : 'tree-input-hide'}>
              <span if={length > 0} className="tree-input-points">...</span>
              <span className="tree-input-tag">{'\u007D'}</span>
            </span>
            <span if={length === 0} className="tree-input-count-empty">Empty</span>
            <span else className="tree-input-count">{length} Items</span>
            <Icon
              type="REMOVE"
              if={onRemove !== noop}
              className="tree-input-remove icon-remove"
              onClick={onRemove}
            />
          </div>
          <div className="tree-input-items">{value.map(this.renderNode)}</div>
          <div className="tree-input-end">
            <span onClick={this.handleToggleCollapsed}>{'\u007d'}</span>
          </div>
        </div>
      );
    }
}


export default Message;
