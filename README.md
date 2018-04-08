# TreeInput
A TreeInput Component for React

![](https://travis-ci.org/HuQingyang/TreeInput.svg?branch=master)

## Features
* Using schema to generate complex nested forms easily
* Stringify all kinds of types including **64bit numbers**
* Documentation tips
* Filter empty values
* Pretty UI with color schema

## Preview
![Preview](preview.png)

## Install
`npm i -S tree-input`

## Example
```jsx harmony
import React from 'react';
import { render } from 'react-dom';
import { TreeInput, format, formatToJS } from 'tree-input';

const schema = [
    { tag: 1, name: 'uin', label: 'OPTIONAL', type: 'uint64', value: 12345678987654 },
    { tag: 2, ame: 'uid_type', documentation: '用户类型', label: 'OPTIONAL', type: 'int32' },
    { tag: 3, name: 'course_info', label: 'OPTIONAL', type: 'message',fieldInfo: [
        { tag: 1, name: 'aid', documentation: '机构id', label: 'OPTIONAL', type: 'int32' },
        { tag: 2, name: 'cid', documentation: '课程id', label: 'OPTIONAL', type: 'uint32' },
        { tag: 3, name: 'name', documentation: '课程名称', label: 'OPTIONAL', type: 'string' },
        { tag: 4, name: 'get_all', label: 'OPTIONAL', type: 'boolean', value: false }]
    },
    {
        tag: 4, name: 'type', label: 'REQUIRED', type: 'enum',
        value: [{ tag: 1, name: 'STRING_VALUE' }],
        fieldInfo: [
            { tag: 0, name: 'LONG_VALUE' },
            { tag: 1, name: 'STRING_VALUE' }
        ]
    }
];

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
```
[More Example](example/src/index.js)

## PropTypes
* **schema: Array** Field infos  

* **rootName: String (Optional)** Displayed name of root node  

* **collapsed: Boolean | Int (Optional)** "True" to collapse all nodes; "False" to expand all nodes, number to expand nodes with the specified nested depth  

* **onChange: Function (Optional)** onChange(event, formatedValue, rawValue)  
