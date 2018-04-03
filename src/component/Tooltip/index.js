
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';


function Tooltip(props) {
  const { text } = props;
  return (
    <div
      if={text.trim()}
      className="tree-input-tooltip"
    >
      <span>{text}</span>
      <div className="tree-input-tooltip-arrow" />
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  text: '',
};


export default Tooltip;
