
import { typesMap } from './';


const EMPTY = {};


function format(rawValue, filterEmpty) {
    const formated = rawValue.map((i) => {
        const {
            name, type, label, value, fieldInfo,
        } = i;
        let v;

        if (label === 'REPEATED') {
            if (!value || value.length === 0) {
                return EMPTY;
            }
            v = formatRepeated(
                value,
                type === 'message' ? fieldInfo : type,
                filterEmpty
            );
            if (v === '[]' && filterEmpty) {
                return EMPTY;
            }
        } else if (type === 'message') {
            v = format(fieldInfo, filterEmpty);
            if (v === '{}' && filterEmpty) {
                return EMPTY;
            }
        } else {
            if (filterEmpty && [undefined, null, ''].includes(value)) {
                return EMPTY;
            }
            if (value === undefined) {
                v = 'null';
            } else {
                v = formatSingle(value, type);
            }
        }
        return `"${name}":${v}`;
    }).filter(i => i !== EMPTY).join(',');
    return `{${formated}}`;
}

function formatRepeated(value, typeOrFieldInfo, filterEmpty) {
    if (typeof typeOrFieldInfo === 'string') {
        value = value
            .map(v => formatSingle(v, typeOrFieldInfo))
            .filter(v => !!v)
            .join(',');
    } else {
        value = value
            .map(v => format(v, filterEmpty))
            .filter(v => v !== '{}')
            .join(',');
    }
    return `[${value}]`;
}

function formatSingle(value, type) {
    if ([typesMap.BYTES, typesMap.STRING].includes(type)) {
        return `"${value}"`;
    } else if (type === typesMap.ENUM) {
        return typeof value === 'string' ? `"${value}"` : `${value}`;
    }
    return `${value}`;
}


function formatToJS(rawValue, filterEmpty) {
    return format(rawValue, filterEmpty)
}


export {
    format,
    formatToJS
}
