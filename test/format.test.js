require('jsdom-global')();
const chai = require('chai');

const { expect } = chai;
const { format } = require('../dist');


describe('jsdom test', () => {
  it('has document', () => {
    const div = document.createElement('div');
    expect(div.nodeName).eql('DIV');
  });
});

describe('format test', () => {
  it('format number', () => {
    const data = [{
      tag: 1,
      name: 'uin',
      label: 'OPTIONAL',
      type: 'uint64',
      value: '1123',
    }, {
      tag: 2,
      name: 'uid_type',
      label: 'OPTIONAL',
      type: 'float',
      value: '2345.6',
    }];
    const result = '{"uin":1123,"uid_type":2345.6}';
    expect(format(data)).eql(result);
  });
  it('format string', () => {
    const data = [{
      tag: 0,
      name: 'cid',
      label: 'OPTIONAL',
      type: 'string',
      value: 'test',
    }];
    const result = '{"cid":"test"}';
    expect(format(data)).eql(result);
  });
  it('format boolean', () => {
    const data = [{
      tag: 0,
      name: 'get_all',
      label: 'OPTIONAL',
      type: 'boolean',
      value: 'false',
    }];
    const result = '{"get_all":false}';
    expect(format(data)).eql(result);
  });
  it('format message', () => {
    const data = [{
      tag: 0,
      fieldInfo: [
        {
          tag: 1,
          name: 'aid',
          label: 'OPTIONAL',
          type: 'string',
          value: '1123',
        },
        {
          tag: 2,
          name: 'cid',
          label: 'OPTIONAL',
          type: 'string',
          value: 'test1',
        },
        {
          tag: 3,
          name: 'name',
          label: 'OPTIONAL',
          type: 'string',
          value: 'foo',
        },
      ],
      name: 'course_info',
      label: 'OPTIONAL',
      type: 'message',
    }];
    const result = '{"course_info":{"aid":"1123","cid":"test1","name":"foo"}}';
    expect(format(data)).eql(result);
  });
  it('format repeated', () => {
    const data = [{
      tag: 0,
      name: 'tid',
      label: 'REPEATED',
      type: 'string',
      value: ['a', 'b', 'c'],
    }];
    const result = '{"tid":["a","b","c"]}';
    expect(format(data)).eql(result);
  });
});
