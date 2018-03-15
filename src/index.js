
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './component/Input';



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
            schema
                .filter(i => i.type !== "message")
                .map((i, index) => (
                    <Input type={i.type} name={i.name} key={index} />
                ))
        )
    }
}


export {
    TreeInput
};
