
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { noop, types, typesMap } from '../../utils';

import './index.scss';



class Enum extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        fieldInfo: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.string,
        className: PropTypes.string
    };
    static defaultProps = {
        onChange: noop,
        onPressEnter: noop,
        getRef: noop,
        value: '',
        className: ''
    };

    state = {
        expand: false
    };
    handleToggleExpand = (expand) => {
        if (typeof expand === 'boolean') {
            this.setState({ expand });
        } else {
            this.setState({ expand: !this.state.expand });
        }
    };
    onChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;
        const formated = this.format(value);
        const event = { ...e, value: formated, component: this };
        onChange(event, formated, value);
    };
    format = (value) => {
        return value;
    };
    render() {
        const {
            value, name, className, fieldInfo
        } = this.props;
        console.log(fieldInfo);
        return (
            <div
                key={name}
                className={`tree-input-item-enum ${className}`}
                onClick={this.handleToggleExpand}
            >
                {value}
                <div className="tree-input-enum-options">
                    {
                        fieldInfo.map(i => (
                            <div className="tree-input-enum-options">
                                {i.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Enum;
