
import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Tooltip extends Component {
    static propTypes = {
        text: PropTypes.string
    };
    static defaultProps = {
        text: ''
    };

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}


export default Tooltip;
