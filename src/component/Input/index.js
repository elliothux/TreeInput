import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop, types, typesMap } from '../../utils';

import './index.scss';


class Input extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(types),
      onChange: PropTypes.func,
      // onPressEnter: PropTypes.func,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      className: PropTypes.string,
    };
    static defaultProps = {
      type: typesMap.STRING,
      onChange: noop,
      // onPressEnter: noop,
      value: '',
      className: '',
    };

    shouldComponentUpdate(nextProps) {
      const {
        value, name, type, className,
      } = this.props;
      const {
        value: nextValue,
        name: nextName,
        type: nextType,
        className: nextClassName,
      } = nextProps;
      return value !== nextValue || name !== nextName ||
            type !== nextType || className !== nextClassName;
    }

    onChange = (e) => {
      const { onChange, value: preValue } = this.props;
      const { value } = e.target;
      const formated = this.format(value);
      if (formated === preValue) {
        return;
      }
      const event = { ...e, value: formated, component: this };
      onChange(event, formated, value);
    };

    get isNumber() {
      const { type } = this.props;
      const invalid = [typesMap.BOOL, typesMap.STRING, typesMap.BYTES, typesMap.ENUM];
      return !invalid.includes(type);
    }

    get hasPoint() {
      const { type } = this.props;
      const valid = [typesMap.DOUBLE, typesMap.FLOAT, typesMap];
      return valid.includes(type);
    }

    get hasNegative() {
      const { type } = this.props;
      const invalid = [typesMap.UINT32, typesMap.UINT64];
      return !invalid.includes(type);
    }

    format = (value) => {
      const { isNumber, hasPoint, hasNegative } = this;
      if (!isNumber) {
        return value;
      }
      const match = value.match(/[\d.-]/g);
      if (!match) {
        return '';
      }
      value = match.join('');

      if (hasPoint) {
        const pointMatch = value.match(/-?\d+\.?\d*/);
        value = pointMatch ? pointMatch[0] : '';
      } else {
        value = value.replace(/\./g, '');
      }

      if (hasNegative) {
        const isNegative = value[0] === '-';
        value = `${isNegative ? '-' : ''}${value.replace(/-/g, '')}`;
      } else {
        value = value.replace(/-/g, '');
      }
      return value;
    };

    render() {
      const {
        value, name, type, className,
      } = this.props;
      return (
        <input
          type="text"
          className={`tree-input-input-field ${className}`}
          value={value}
          placeholder={`${name}: ${type}`}
          onChange={this.onChange}
        />
      );
    }
}


export default Input;
