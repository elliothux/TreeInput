
import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TreeInput extends Component {
    static propTypes = {
        schema: PropTypes.array.isRequired
    };
    static defaultProps = {

    };

    constructor(...args) {
        super(...args);
        console.log(this.props.schema);
    }
    state = {
        value: null
    };

    render() {
        const { schema } = this.props;
        return (
            schema.toString()
        )
    }
}


export {
    TreeInput
};
