
const noop = () => {};

const types = [
    'double', 'float', 'int32', 'int64', 'uint32', 'uint64',
    'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64',
    'bool', 'string', 'bytes', 'enum'
];

const typesMap = {
    DOUBLE: 'double', FLOAT: 'float', INT32: 'int32',
    INT64: 'int64', UINT32: 'uint32', UINT64: 'uint64',
    SINT32: 'sint32', SINT64: 'sint64', FIXED32: 'fixed32',
    FIXED64: 'fixed64', SFIXED32: 'sfixed32', SFIXED64: 'sfixed64',
    BOOL: 'bool', STRING: 'string', BYTES: 'bytes', ENUM: 'enum'
};


function preventDefault(e) {
    if (e) {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.nativeEvent && e.nativeEvent.stopImmediatePropagation && e.nativeEvent.stopImmediatePropagation();
    }
}



export {
    noop, types, typesMap, preventDefault
};
