
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const iconTypes = {
    'ADD': 'ADD',
    'REMOVE': 'REMOVE',
    'COLLAPSED': 'COLLAPSED',
    'ARROW': 'ARROW'
};


class Icon extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(Object.keys(iconTypes)).isRequired
    };
    static types = iconTypes;

    render() {
        const { types: iconTypes } = Icon;
        const { type, ...rest } = this.props;
        switch (type) {
            case iconTypes.ADD: return (
                <svg {...rest} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M683.968 534.944H544v139.968a32 32 0 0 1-64 0v-139.968h-139.968a32 32 0 0 1 0-64H480v-139.968a32 32 0 0 1 64 0v139.968h139.968a32 32 0 0 1 0 64M512 128C300.256 128 128 300.288 128 512c0 211.744 172.256 384 384 384s384-172.256 384-384c0-211.712-172.256-384-384-384" />
                </svg>
            );
            case iconTypes.REMOVE: return (
                <svg {...rest} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M645.568 537.6h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64M512 128C300.288 128 128 300.288 128 512c0 211.744 172.288 384 384 384 211.744 0 384-172.256 384-384 0-211.712-172.256-384-384-384" />
                </svg>
            );
            case iconTypes.COLLAPSED: return (
                <svg {...rest} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M755.552 495.36l-384-296.672a31.936 31.936 0 0 0-51.552 25.28v593.504a32 32 0 0 0 51.552 25.28l384-296.704a32 32 0 0 0 0-50.656" />
                </svg>
            );
            case iconTypes.ARROW: return (
                <svg {...rest} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M231.424 346.208a32 32 0 0 0-46.848 43.584l297.696 320a32 32 0 0 0 46.4 0.48l310.304-320a32 32 0 1 0-45.952-44.544l-286.848 295.808-274.752-295.36z" />
                </svg>
            );
        }
    }
}


export default Icon;
