import React from 'react';
import {render} from 'react-dom';
import {TreeInput} from '../src';

const a = {
    "fieldInfo": [{
        "tag": 1,
        "name": "serviceName",
        "documentation": "被回调的服务名\r",
        "label": "REQUIRED",
        "type": "string"
    }, {
        "tag": 2,
        "name": "key",
        "documentation": "定时器的可以，可不传，自己传的话需要保证唯一\r",
        "label": "OPTIONAL",
        "type": "string"
    }, , {
        "tag": 4,
        "name": "cron",
        "documentation": "cron 任务的参数\r",
        "label": "OPTIONAL",
        "type": "string"
    }, {
        "tag": 5,
        "name": "fire",
        "documentation": "简单任务的触发时间,时间戳，单位是毫秒,延时任务中表示顺延时间\r",
        "label": "OPTIONAL",
        "type": "uint64"
    }, , {"tag": 7, "name": "route", "documentation": "l5信息\r", "label": "OPTIONAL", "type": "string"}, {
        "tag": 8,
        "fieldInfo": [{
            "tag": 1,
            "name": "callBackType",
            "documentation": "回调类型,0 异步回调（仅唤起，异步上报执行结果） 1 同步等待\r",
            "label": "OPTIONAL",
            "type": "uint32"
        }, {"tag": 2, "name": "retry", "documentation": "任务是否需要失败重试\r", "label": "OPTIONAL", "type": "bool"}],
        "name": "desc",
        "documentation": "任务扩展信息\r",
        "label": "OPTIONAL",
        "type": "message"
    }]
}

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
        "tag": 6,
        "fieldInfo": [{"tag": 1, "name": "key", "label": "REQUIRED", "type": "string"}, {
            "tag": 2,
            "fieldInfo": [{"tag": 0, "name": "LONG_VALUE"}, {"tag": 1, "name": "STRING_VALUE"}],
            "name": "type",
            "label": "REQUIRED",
            "type": "enum"
        }, {"tag": 3, "name": "longValue", "label": "OPTIONAL", "type": "uint64"}, {
            "tag": 4,
            "name": "strValue",
            "label": "OPTIONAL",
            "type": "string"
        }],
        "name": "valueMap",
        "documentation": "定时器透传的参数\r",
        "label": "REPEATED",
        "type": "message"
    },
    {
        "tag": 3,
        "fieldInfo": [{"tag": 0, "name": "SIMPLE_TRIGGER", "documentation": "定时任务\r"}, {
            "tag": 1,
            "name": "CRON_TRIGGER",
            "documentation": "CRON 表达式任务\r"
        }, {"tag": 2, "name": "DELAY_TRIGGER", "documentation": "延时任务\r"}],
        "name": "triggerType",
        "documentation": "定时器类型\r",
        "label": "REQUIRED",
        "type": "enum"
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
    <TreeInput schema={schema} collapsed={2}/>
);


render(
    <App/>,
    document.getElementById('root')
);
