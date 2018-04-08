import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './component/Message';
import { noop, format, formatToJS } from './utils';

import './index.scss';


class TreeInput extends Component {
    static propTypes = {
      schema: PropTypes.array.isRequired,
      rootName: PropTypes.string,
      collapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
      onChange: PropTypes.func,
      // warnEmpty: PropTypes.bool,
    };
    static defaultProps = {
      rootName: 'Root',
      collapsed: true,
      onChange: noop,
      // warnEmpty: false,
    };

    constructor(...args) {
      super(...args);
      const { schema } = this.props;
      this.state = { value: schema };
    }

    state = { value: [] };

    onChange = (e, value) => {
      this.setState({ value });
      this.props.onChange(e, value);
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


export {
  TreeInput,
  format,
  formatToJS,
};
