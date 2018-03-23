
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { noop, preventDefault } from '../../utils';

import './index.scss';



class Enum extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        fieldInfo: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.string,
        documentation: PropTypes.string,
        className: PropTypes.string
    };
    static defaultProps = {
        onChange: noop,
        onPressEnter: noop,
        getRef: noop,
        value: '',
        documentation: '',
        className: ''
    };

    componentWillMount() {
        this.unexpand = this.handleToggleExpand.bind(this, false);
        window.addEventListener('click', this.unexpand);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.unexpand);
    }

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
    handleClick = (e) => {
        preventDefault(e);
        this.handleToggleExpand();
    };
    onChange = (e, value) => {
        const { onChange } = this.props;
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
        const { length } = fieldInfo;
        const { expand } = this.state;
        return (
            <div
                key={name}
                className={`tree-input-item-enum ${className}${expand ? ' active' : ''}`}
                onClick={this.handleClick}
            >
                <div className="tree-input-item-enum-value">
                    <span>{value}</span>
                    <i className="tree-input-item-expand-icon icon-expand"/>
                </div>
                <div
                    className="tree-input-enum-options"
                    style={{
                        height: expand ? `${length * (28 + 8)}px` : 0,
                        opacity: expand ? 1 : 0
                    }}
                >
                    {
                        fieldInfo.map(i => (
                            <div
                                key={i.name}
                                className={`tree-input-enum-option${i.name === value ? ' active' : ''}`}
                                onClick={(e) => this.onChange(e, i.name)}
                            >
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
