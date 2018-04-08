
import React from 'react';
import { render } from 'react-dom';
import { TreeInput, format, formatToJS } from '../../';

import './index.scss';


const schema = [
  {
    tag: 1,
    name: 'uin',
    documentation: 'uin',
    label: 'OPTIONAL',
    type: 'uint64',
  },
  {
    tag: 2,
    name: 'uid_type',
    documentation: '用户类型',
    label: 'OPTIONAL',
    type: 'int32',
  },
  {
    tag: 3,
    fieldInfo: [
      {
        tag: 1,
        name: 'aid',
        documentation: '机构id',
        label: 'OPTIONAL',
        type: 'string',
      },
      {
        tag: 2,
        name: 'cid',
        documentation: '课程id',
        label: 'OPTIONAL',
        type: 'string',
      },
      {
        tag: 3,
        name: 'name',
        documentation: '课程名称',
        label: 'OPTIONAL',
        type: 'string',
      },
      {
        tag: 4,
        name: 'tid',
        documentation: '班级id',
        label: 'REPEATED',
        type: 'string',
      },
    ],
    name: 'course_info',
    documentation: '课程信息',
    label: 'OPTIONAL',
    type: 'message',
  },
  {
    tag: 1, name: 'name', label: 'OPTIONAL', type: 'string', value: '测试',
  },
  {
    tag: 2,
    name: 'discount_type',
    label: 'OPTIONAL',
    type: 'uint32',
    value: '1',
  },
  {
    tag: 3,
    name: 'aid_list',
    label: 'REPEATED',
    type: 'uint64',
  },
  {
    tag: 4,
    name: 'get_all',
    label: 'OPTIONAL',
    type: 'boolean',
  },
  {
    tag: 6,
    fieldInfo: [{
      tag: 1, name: 'key', label: 'REQUIRED', type: 'string',
    }, {
      tag: 2,
      fieldInfo: [{ tag: 0, name: 'LONG_VALUE' }, { tag: 1, name: 'STRING_VALUE' }],
      name: 'type',
      label: 'REQUIRED',
      type: 'enum',
      value: [{ tag: 1, name: 'STRING_VALUE' }],
    }, {
      tag: 3, name: 'longValue', label: 'OPTIONAL', type: 'uint64',
    }, {
      tag: 4,
      name: 'strValue',
      label: 'OPTIONAL',
      type: 'string',
    }],
    name: 'valueMap',
    documentation: '定时器透传的参数: 1. uin; 2. cid; 3. name; 4. fieldInfo; 5. tid;',
    label: 'REPEATED',
    type: 'message',
  },
  {
    tag: 3,
    fieldInfo: [{ tag: 0, name: 'SIMPLE_TRIGGER', documentation: '定时任务' }, {
      tag: 1,
      name: 'CRON_TRIGGER',
      documentation: 'CRON 表达式任务',
    }, { tag: 2, name: 'DELAY_TRIGGER', documentation: '延时任务' }],
    name: 'triggerType',
    documentation: '定时器类型',
    label: 'REQUIRED',
    type: 'enum',
  },
  {
    tag: 3, name: 'aid', label: 'OPTIONAL', type: 'uint64',
  }, {
    tag: 4,
    name: 'start_time',
    label: 'OPTIONAL',
    type: 'uint64',
    value: '1520234991',
  },
  {
    tag: 5, name: 'end_time', label: 'OPTIONAL', type: 'uint64', value: '1520321391',
  }, {
    tag: 7,
    fieldInfo: [{
      tag: 1, name: 'rule_type', label: 'OPTIONAL', type: 'uint32', value: '3',
    }, {
      tag: 2,
      name: 'aid_list',
      label: 'REPEATED',
      type: 'uint64',
    }, {
      tag: 3, name: 'cid_list', label: 'REPEATED', type: 'uint64', value: ['58113'],
    }, {
      tag: 4,
      name: 'cid_passcard_list',
      label: 'REPEATED',
      type: 'uint64',
    }, {
      tag: 5, name: 'term_list', label: 'REPEATED', type: 'uint64', value: ['1000015914'],
    }, {
      tag: 6,
      name: 'industry_list',
      label: 'REPEATED',
      type: 'uint64',
    }, {
      tag: 7, name: 'discount', label: 'OPTIONAL', type: 'uint32',
    }, {
      tag: 8,
      name: 'limit_price',
      label: 'OPTIONAL',
      type: 'uint32',
    }, {
      tag: 9, name: 'subduction', label: 'OPTIONAL', type: 'uint32',
    }, {
      tag: 10,
      name: 'discount_price',
      label: 'OPTIONAL',
      type: 'uint32',
      value: '100',
    }, {
      tag: 12,
      name: 'version',
      label: 'OPTIONAL',
      type: 'uint32',
    }, {
      tag: 13, name: 'channel', label: 'OPTIONAL', type: 'string',
    }],
    name: 'rule',
    label: 'OPTIONAL',
    type: 'message',
  }];

function handleChange(e, rawValue) {
  // Filter empty value
  const filterEmpty = true;
  // format to json string
  console.log(format(rawValue, filterEmpty));
  // format to js object
  console.log(formatToJS(rawValue, filterEmpty));
}

const App = () => (
  <TreeInput
    schema={schema}
    collapsed={2}
    onChange={handleChange}
    rootName="ROOT"
  />
);

const container = document.createElement('div');
document.body.appendChild(container);

render(<App />, container);
