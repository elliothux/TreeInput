
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { noop, preventDefault } from '../../utils';

import './index.scss';



class Enum extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        fieldInfo: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        onPressEnter: PropTypes.func,
        getRef: PropTypes.func,
        value: PropTypes.array,
        documentation: PropTypes.string,
        className: PropTypes.string
    };
    static defaultProps = {
        onChange: noop,
        onPressEnter: noop,
        getRef: noop,
        value: [{}],
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
        const event = { ...e, value, component: this };
        onChange(event, [value], [value]);
    };
    render() {
        const {
            value, name, className, fieldInfo
        } = this.props;
        const { length } = fieldInfo;
        const { expand } = this.state;
        const [{ name: valueName }] = value;
        return (
            <div
                key={name}
                className={`tree-input-item-enum ${className}${expand ? ' active' : ''}`}
                onClick={this.handleClick}
                style={{ zIndex: expand ? 99 : 3 }}
            >
                <div className="tree-input-item-enum-value">
                    <span if={valueName}>{valueName}</span>
                    <span else className="tree-input-place-holder">{name}: enum</span>
                    <Icon type={Icon.types.ARROW} className="tree-input-item-expand-icon"/>
                </div>
                <div
                    className="tree-input-enum-options"
                    style={{
                        height: expand ? `${length * 36}px` : 0,
                        opacity: expand ? 1 : 0
                    }}
                >
                    {
                        fieldInfo.map(i => (
                            <div
                                key={i.name}
                                className={`tree-input-enum-option${i.name === valueName ? ' active' : ''}`}
                                onClick={(e) => this.onChange(e, i)}
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
