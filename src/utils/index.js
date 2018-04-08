
import { format, formatToJS } from './format';


const noop = () => {};

const types = [
  'double', 'float', 'int32', 'int64', 'uint32', 'uint64',
  'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64',
  'bool', 'string', 'bytes', 'enum',
];

const typesMap = {
  DOUBLE: 'double',
  FLOAT: 'float',
  INT32: 'int32',
  INT64: 'int64',
  UINT32: 'uint32',
  UINT64: 'uint64',
  SINT32: 'sint32',
  SINT64: 'sint64',
  FIXED32: 'fixed32',
  FIXED64: 'fixed64',
  SFIXED32: 'sfixed32',
  SFIXED64: 'sfixed64',
  BOOL: 'bool',
  STRING: 'string',
  BYTES: 'bytes',
  ENUM: 'enum',
};


function preventDefault(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.stopPropagation) { e.stopPropagation(); }
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }
}


function deepCopy(data) {
  if (typeof data !== 'object' || data === null) { return data; }
  return Array.isArray(data) ?
    [...data].map(i => deepCopy(i)) :
    Object.keys(data).reduce((accu, k) => {
      accu[k] = deepCopy(data[k]);
      return accu;
    }, {});
}


export {
  types,
  typesMap,
  noop,
  preventDefault,
  deepCopy,
  format,
  formatToJS,
};
