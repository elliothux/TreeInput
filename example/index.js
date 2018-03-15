import React from 'react';
import { render } from 'react-dom';
import { TreeInput } from '../src';


const schema = [
    {
        "tag": 1, "name": "name", "label": "OPTIONAL", "type": "string", "value": "测试"
    },
    {
        "tag": 2,
        "name": "discount_type",
        "label": "OPTIONAL",
        "type": "uint32",
        "value": "1"
    },
    {
        "tag": 3, "name": "aid", "label": "OPTIONAL", "type": "uint64"
    }, {
        "tag": 4,
        "name": "start_time",
        "label": "OPTIONAL",
        "type": "uint64",
        "value": "1520234991"
    },
    {
        "tag": 5, "name": "end_time", "label": "OPTIONAL", "type": "uint64", "value": "1520321391"
    }, {
        "tag": 6,
        "name": "limit_count",
        "label": "OPTIONAL",
        "type": "uint32",
        "value": "3"
    }, {
        "tag": 7,
        "fieldInfo": [{"tag": 1, "name": "rule_type", "label": "OPTIONAL", "type": "uint32", "value": "3"}, {
            "tag": 2,
            "name": "aid_list",
            "label": "REPEATED",
            "type": "uint64"
        }, {"tag": 3, "name": "cid_list", "label": "REPEATED", "type": "uint64", "value": ["58113"]}, {
            "tag": 4,
            "name": "cid_passcard_list",
            "label": "REPEATED",
            "type": "uint64"
        }, {"tag": 5, "name": "term_list", "label": "REPEATED", "type": "uint64", "value": ["1000015914"]}, {
            "tag": 6,
            "name": "industry_list",
            "label": "REPEATED",
            "type": "uint64"
        }, {"tag": 7, "name": "discount", "label": "OPTIONAL", "type": "uint32"}, {
            "tag": 8,
            "name": "limit_price",
            "label": "OPTIONAL",
            "type": "uint32"
        }, {"tag": 9, "name": "subduction", "label": "OPTIONAL", "type": "uint32"}, {
            "tag": 10,
            "name": "discount_price",
            "label": "OPTIONAL",
            "type": "uint32",
            "value": "100"
        }, {"tag": 11, "name": "platform", "label": "OPTIONAL", "type": "uint32"}, {
            "tag": 12,
            "name": "version",
            "label": "OPTIONAL",
            "type": "uint32"
        }, {"tag": 13, "name": "channel", "label": "OPTIONAL", "type": "string"}],
        "name": "rule",
        "label": "OPTIONAL",
        "type": "message"
    }, {
        "tag": 8,
        "fieldInfo": [{"tag": 1, "name": "activity_url", "label": "OPTIONAL", "type": "string"}],
        "name": "ext_config",
        "label": "OPTIONAL",
        "type": "message"
    }, {"tag": 9, "name": "has_preview", "label": "OPTIONAL", "type": "uint32", "value": "1"}, {
        "tag": 10,
        "name": "preview_day_num",
        "label": "OPTIONAL",
        "type": "uint32"
    }, {"tag": 11, "name": "preview_time", "label": "OPTIONAL", "type": "uint32", "value": "1519958614"}];


const App = () => (
    <TreeInput schema={schema} />
);


render(
    <App/>,
    document.getElementById('root')
);
