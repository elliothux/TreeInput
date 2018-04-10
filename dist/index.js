(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("tree-input", ["react"], factory);
	else if(typeof exports === 'object')
		exports["tree-input"] = factory(require("react"));
	else
		root["tree-input"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(15)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatToJS = exports.format = exports.deepCopy = exports.preventDefault = exports.noop = exports.typesMap = exports.types = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _format = __webpack_require__(19);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var noop = function noop() {};

var types = ['double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64', 'bool', 'string', 'bytes', 'enum'];

var typesMap = {
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
  ENUM: 'enum'
};

function preventDefault(e) {
  if (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }
}

function deepCopy(data) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) {
    return data;
  }
  return Array.isArray(data) ? [].concat(_toConsumableArray(data)).map(function (i) {
    return deepCopy(i);
  }) : Object.keys(data).reduce(function (accu, k) {
    accu[k] = deepCopy(data[k]);
    return accu;
  }, {});
}

exports.types = types;
exports.typesMap = typesMap;
exports.noop = noop;
exports.preventDefault = preventDefault;
exports.deepCopy = deepCopy;
exports.format = _format.format;
exports.formatToJS = _format.formatToJS;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconTypesMap = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  COLLAPSED: 'COLLAPSED',
  ARROW: 'ARROW'
};

var Icon = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var iconTypes = Icon.types;

      var _props = this.props,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['type']);

      switch (type) {
        case iconTypes.ADD:
          /* eslint-disable max-len */
          return _react2.default.createElement(
            'svg',
            _extends({}, rest, { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }),
            _react2.default.createElement('path', {
              d: 'M683.968 534.944H544v139.968a32 32 0 0 1-64 0v-139.968h-139.968a32 32 0 0 1 0-64H480v-139.968a32 32 0 0 1 64 0v139.968h139.968a32 32 0 0 1 0 64M512 128C300.256 128 128 300.288 128 512c0 211.744 172.256 384 384 384s384-172.256 384-384c0-211.712-172.256-384-384-384'
            })
          );
        case iconTypes.REMOVE:
          return _react2.default.createElement(
            'svg',
            _extends({}, rest, { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }),
            _react2.default.createElement('path', {
              d: 'M645.568 537.6h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64M512 128C300.288 128 128 300.288 128 512c0 211.744 172.288 384 384 384 211.744 0 384-172.256 384-384 0-211.712-172.256-384-384-384'
            })
          );
        case iconTypes.COLLAPSED:
          return _react2.default.createElement(
            'svg',
            _extends({}, rest, { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }),
            _react2.default.createElement('path', {
              d: 'M755.552 495.36l-384-296.672a31.936 31.936 0 0 0-51.552 25.28v593.504a32 32 0 0 0 51.552 25.28l384-296.704a32 32 0 0 0 0-50.656'
            })
          );
        case iconTypes.ARROW:
          return _react2.default.createElement(
            'svg',
            _extends({}, rest, { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }),
            _react2.default.createElement('path', {
              d: 'M231.424 346.208a32 32 0 0 0-46.848 43.584l297.696 320a32 32 0 0 0 46.4 0.48l310.304-320a32 32 0 1 0-45.952-44.544l-286.848 295.808-274.752-295.36z'
            })
          );
        /* eslint-enable max-len */
        default:
          return null;
      }
    }
  }]);

  return Icon;
}(_react.PureComponent);

Icon.propTypes = {
  type: _propTypes2.default.oneOf(Object.keys(iconTypesMap)).isRequired
};
Icon.types = iconTypesMap;
exports.default = Icon;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(12);

var _Input2 = _interopRequireDefault(_Input);

var _Enum = __webpack_require__(23);

var _Enum2 = _interopRequireDefault(_Enum);

var _Boolean = __webpack_require__(28);

var _Boolean2 = _interopRequireDefault(_Boolean);

var _Repeated = __webpack_require__(31);

var _Repeated2 = _interopRequireDefault(_Repeated);

var _Tooltip = __webpack_require__(13);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = __webpack_require__(4);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _ref;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        nestedDepth = _this$props.nestedDepth,
        collapsed = _this$props.collapsed;

    _this.state = {
      collapsed: typeof collapsed === 'number' ? nestedDepth >= collapsed : !!collapsed
    };
    return _this;
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var collapsed = this.state.collapsed;
      var _props = this.props,
          value = _props.value,
          length = _props.value.length,
          name = _props.name,
          nestedDepth = _props.nestedDepth,
          onRemove = _props.onRemove,
          documentation = _props.documentation;

      var isRoot = nestedDepth === 1;
      return _react2.default.createElement(
        'div',
        {
          className: 'tree-input' + (collapsed ? ' tree-input-collapsed' : '') + (isRoot ? ' tree-input-root' : '') + ' message',
          key: name
        },
        _react2.default.createElement(
          'div',
          {
            className: 'tree-input-start',
            onClick: this.handleToggleCollapsed
          },
          _react2.default.createElement(_Icon2.default, { type: 'COLLAPSED', className: 'tree-input-expand' }),
          _react2.default.createElement(
            'div',
            { className: 'tree-input-name' },
            _react2.default.createElement(
              'span',
              null,
              '"' + name + '": '
            ),
            _react2.default.createElement(_Tooltip2.default, { text: documentation })
          ),
          !isRoot ? _react2.default.createElement(
            'span',
            {
              className: 'tree-input-item-type'
            },
            ' message'
          ) : null,
          _react2.default.createElement(
            'span',
            { className: 'tree-input-tag' },
            '{'
          ),
          _react2.default.createElement(
            'span',
            { className: collapsed ? '' : 'tree-input-hide' },
            length > 0 ? _react2.default.createElement(
              'span',
              { className: 'tree-input-points' },
              '...'
            ) : null,
            _react2.default.createElement(
              'span',
              { className: 'tree-input-tag' },
              '}'
            )
          ),
          length === 0 ? _react2.default.createElement(
            'span',
            { className: 'tree-input-count-empty' },
            'Empty'
          ) : _react2.default.createElement(
            'span',
            { className: 'tree-input-count' },
            length,
            ' Items'
          ),
          onRemove !== _utils.noop ? _react2.default.createElement(_Icon2.default, {
            type: 'REMOVE',

            className: 'tree-input-remove icon-remove',
            onClick: onRemove
          }) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'tree-input-items' },
          value.map(this.renderNode)
        ),
        _react2.default.createElement(
          'div',
          { className: 'tree-input-end' },
          _react2.default.createElement(
            'span',
            { onClick: this.handleToggleCollapsed },
            '}'
          )
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  value: _propTypes2.default.array.isRequired,
  name: _propTypes2.default.string.isRequired,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]).isRequired,
  nestedDepth: _propTypes2.default.number.isRequired,
  documentation: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onRemove: _propTypes2.default.func
  // warnEmpty: PropTypes.bool
};
Message.defaultProps = {
  documentation: '',
  onChange: _utils.noop,
  onRemove: _utils.noop
  // warnEmpty: false,
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { collapsed: false };

  this.handleToggleCollapsed = function (e, collapsed) {
    (0, _utils.preventDefault)(e);
    _this2.setState({
      collapsed: typeof collapsed === 'boolean' ? collapsed : !_this2.state.collapsed
    });
  };

  this.generateOnChange = function (node) {
    return function (e, value) {
      var newValue = _this2.props.value;

      newValue.find(function (i) {
        return i === node;
      }).value = value;
      _this2.props.onChange(e, newValue);
    };
  };

  this.renderInput = function (node) {
    var name = node.name,
        type = node.type,
        value = node.value,
        documentation = node.documentation;

    return _react2.default.createElement(
      'div',
      {
        className: 'tree-input-item ' + type,
        key: name
      },
      _react2.default.createElement(
        'div',
        { className: 'tree-input-item-info' },
        _react2.default.createElement(
          'div',
          { className: 'tree-input-item-name' },
          _react2.default.createElement(
            'span',
            null,
            '"' + name + '":'
          ),
          _react2.default.createElement(_Tooltip2.default, { text: documentation })
        ),
        _react2.default.createElement(
          'span',
          { className: 'tree-input-item-type' },
          ' ',
          type
        )
      ),
      _react2.default.createElement(_Input2.default, {
        className: 'tree-input-item-input',
        name: name,
        type: type,
        value: value,
        documentation: documentation,
        onChange: _this2.generateOnChange(node)
      })
    );
  };

  this.renderEnum = function (node) {
    var name = node.name,
        fieldInfo = node.fieldInfo,
        value = node.value,
        documentation = node.documentation;

    return _react2.default.createElement(
      'div',
      {
        className: 'tree-input-item enum',
        key: name
      },
      _react2.default.createElement(
        'div',
        { className: 'tree-input-item-info' },
        _react2.default.createElement(
          'div',
          { className: 'tree-input-item-name' },
          _react2.default.createElement(
            'span',
            null,
            '"' + name + '":'
          ),
          _react2.default.createElement(_Tooltip2.default, { text: documentation })
        ),
        _react2.default.createElement(
          'span',
          { className: 'tree-input-item-type' },
          ' enum'
        )
      ),
      _react2.default.createElement(_Enum2.default, {
        name: name,
        value: value,
        fieldInfo: fieldInfo,
        documentation: documentation,
        onChange: _this2.generateOnChange(node)
      })
    );
  };

  this.renderBoolean = function (node) {
    var name = node.name,
        value = node.value,
        documentation = node.documentation;

    return _react2.default.createElement(
      'div',
      {
        className: 'tree-input-item boolean',
        key: name
      },
      _react2.default.createElement(
        'div',
        { className: 'tree-input-item-info' },
        _react2.default.createElement(
          'div',
          { className: 'tree-input-item-name' },
          _react2.default.createElement(
            'span',
            null,
            '"' + name + '":'
          ),
          _react2.default.createElement(_Tooltip2.default, { text: documentation })
        ),
        _react2.default.createElement(
          'span',
          { className: 'tree-input-item-type' },
          ' boolean'
        )
      ),
      _react2.default.createElement(_Boolean2.default, {
        name: name,
        value: value,
        documentation: documentation,
        onChange: _this2.generateOnChange(node)
      })
    );
  };

  this.renderMessage = function (node) {
    var fieldInfo = node.fieldInfo,
        name = node.name,
        documentation = node.documentation;
    var _props2 = _this2.props,
        nestedDepth = _props2.nestedDepth,
        collapsed = _props2.collapsed;

    return _react2.default.createElement(Message, {
      key: name,
      value: fieldInfo,
      name: name,
      nestedDepth: nestedDepth + 1,
      collapsed: collapsed,
      documentation: documentation,
      onChange: _this2.generateOnChange(node)
    });
  };

  this.renderRepeated = function (node) {
    var name = node.name,
        type = node.type,
        fieldInfo = node.fieldInfo,
        value = node.value,
        documentation = node.documentation;
    var _props3 = _this2.props,
        nestedDepth = _props3.nestedDepth,
        collapsed = _props3.collapsed;

    return _react2.default.createElement(_Repeated2.default, {
      key: name,
      value: value || [],
      name: name,
      typeOrFieldInfo: fieldInfo || type,
      collapsed: collapsed,
      nestedDepth: nestedDepth + 1,
      documentation: documentation,
      onChange: _this2.generateOnChange(node)
    });
  };

  this.renderNode = function (node) {
    var label = node.label,
        type = node.type;

    if (label === 'REPEATED') {
      return _this2.renderRepeated(node);
    }
    switch (type) {
      case 'message':
        return _this2.renderMessage(node);
      case 'enum':
        return _this2.renderEnum(node);
      case 'boolean':
        return _this2.renderBoolean(node);
      default:
        return _this2.renderInput(node);
    }
  };
};

exports.default = Message;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(4);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          preValue = _this$props.value;
      var value = e.target.value;

      var formated = _this.format(value);
      if (formated === preValue) {
        return;
      }
      var event = _extends({}, e, { value: formated, component: _this });
      onChange(event, formated, value);
    }, _this.format = function (value) {
      var _this2 = _this,
          isNumber = _this2.isNumber,
          hasPoint = _this2.hasPoint,
          hasNegative = _this2.hasNegative;

      if (!isNumber) {
        return value;
      }
      var match = value.match(/[\d.-]/g);
      if (!match) {
        return '';
      }
      value = match.join('');

      if (hasPoint) {
        var pointMatch = value.match(/-?\d+\.?\d*/);
        value = pointMatch ? pointMatch[0] : '';
      } else {
        value = value.replace(/\./g, '');
      }

      if (hasNegative) {
        var isNegative = value[0] === '-';
        value = '' + (isNegative ? '-' : '') + value.replace(/-/g, '');
      } else {
        value = value.replace(/-/g, '');
      }
      return value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          value = _props.value,
          name = _props.name,
          type = _props.type,
          className = _props.className;
      var nextValue = nextProps.value,
          nextName = nextProps.name,
          nextType = nextProps.type,
          nextClassName = nextProps.className;

      return value !== nextValue || name !== nextName || type !== nextType || className !== nextClassName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          value = _props2.value,
          name = _props2.name,
          type = _props2.type,
          className = _props2.className;

      return _react2.default.createElement('input', {
        type: 'text',
        className: 'tree-input-input-field ' + className,
        value: value,
        placeholder: name + ': ' + type,
        onChange: this.onChange
      });
    }
  }, {
    key: 'isNumber',
    get: function get() {
      var type = this.props.type;

      var invalid = [_utils.typesMap.BOOL, _utils.typesMap.STRING, _utils.typesMap.BYTES, _utils.typesMap.ENUM];
      return !invalid.includes(type);
    }
  }, {
    key: 'hasPoint',
    get: function get() {
      var type = this.props.type;

      var valid = [_utils.typesMap.DOUBLE, _utils.typesMap.FLOAT, _utils.typesMap];
      return valid.includes(type);
    }
  }, {
    key: 'hasNegative',
    get: function get() {
      var type = this.props.type;

      var invalid = [_utils.typesMap.UINT32, _utils.typesMap.UINT64];
      return !invalid.includes(type);
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(_utils.types),
  onChange: _propTypes2.default.func,
  // onPressEnter: PropTypes.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string
};
Input.defaultProps = {
  type: _utils.typesMap.STRING,
  onChange: _utils.noop,
  // onPressEnter: noop,
  value: '',
  className: ''
};
exports.default = Input;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip(props) {
  var text = props.text;

  return text.trim() ? _react2.default.createElement(
    'div',
    {
      className: 'tree-input-tooltip'
    },
    _react2.default.createElement(
      'span',
      null,
      text
    ),
    _react2.default.createElement('div', { className: 'tree-input-tooltip-arrow' })
  ) : null;
}

Tooltip.propTypes = {
  text: _propTypes2.default.string
};

Tooltip.defaultProps = {
  text: ''
};

exports.default = Tooltip;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatToJS = exports.format = exports.TreeInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Message = __webpack_require__(11);

var _Message2 = _interopRequireDefault(_Message);

var _utils = __webpack_require__(4);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeInput = function (_Component) {
  _inherits(TreeInput, _Component);

  function TreeInput() {
    var _ref;

    _classCallCheck(this, TreeInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TreeInput.__proto__ || Object.getPrototypeOf(TreeInput)).call.apply(_ref, [this].concat(args)));

    _this.state = { value: [] };

    _this.onChange = function (e, value) {
      _this.setState({ value: value });
      _this.props.onChange(e, value);
    };

    var schema = _this.props.schema;

    _this.state = { value: schema };
    return _this;
  }

  _createClass(TreeInput, [{
    key: 'render',
    value: function render() {
      var value = this.state.value;
      var _props = this.props,
          rootName = _props.rootName,
          collapsed = _props.collapsed;

      return _react2.default.createElement(_Message2.default, {
        value: value,
        collapsed: collapsed,
        nestedDepth: 1,
        name: rootName,
        onChange: this.onChange
      });
    }
  }]);

  return TreeInput;
}(_react.Component);

TreeInput.propTypes = {
  schema: _propTypes2.default.array.isRequired,
  rootName: _propTypes2.default.string,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  onChange: _propTypes2.default.func
  // warnEmpty: PropTypes.bool,
};
TreeInput.defaultProps = {
  rootName: 'Root',
  collapsed: true,
  onChange: _utils.noop
  // warnEmpty: false,
};
exports.TreeInput = TreeInput;
exports.format = _utils.format;
exports.formatToJS = _utils.formatToJS;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(10);
var assign = __webpack_require__(16);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(17);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(10);
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatToJS = exports.format = undefined;

var _ = __webpack_require__(4);

var EMPTY = {};

function formatSingle(value, type) {
    if ([_.typesMap.BYTES, _.typesMap.STRING].includes(type)) {
        return '"' + value.replace(/"/g, "\\\"") + '"';
    } else if (type === _.typesMap.ENUM) {
        return typeof value === 'string' ? '"' + value.replace(/"/g, "\\\"") + '"' : '' + value;
    }
    return '' + value;
}

function formatRepeated(value, typeOrFieldInfo, filterEmpty) {
    if (typeof typeOrFieldInfo === 'string') {
        value = value.map(function (v) {
            return formatSingle(v, typeOrFieldInfo);
        }).filter(function (v) {
            return !!v;
        }).join(',');
    } else {
        value = value.map(function (v) {
            return format(v, filterEmpty);
        }).filter(function (v) {
            return v !== '{}';
        }).join(',');
    }
    return '[' + value + ']';
}

function formatEnum(value) {
    if (!value || !value[0]) return "";
    return '"' + value[0].tag + '"';
}

function format(rawValue, filterEmpty) {
    var formated = rawValue.map(function (i) {
        var name = i.name,
            type = i.type,
            label = i.label,
            value = i.value,
            fieldInfo = i.fieldInfo;

        var v = void 0;

        if (label === 'REPEATED') {
            if (!value || value.length === 0) {
                return EMPTY;
            }
            v = formatRepeated(value, type === 'message' ? fieldInfo : type, filterEmpty);
            if (v === '[]' && filterEmpty) {
                return EMPTY;
            }
        } else if (type === 'message') {
            v = format(fieldInfo, filterEmpty);
            if (v === '{}' && filterEmpty) {
                return EMPTY;
            }
        } else if (type === 'enum') {
            v = formatEnum(value, filterEmpty);
            if (v === "" && filterEmpty) {
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
        return '"' + name + '":' + v;
    }).filter(function (i) {
        return i !== EMPTY;
    }).join(',');
    return '{' + formated + '}';
}

function formatToJS(rawValue, filterEmpty) {
    return JSON.parse(format(rawValue, filterEmpty));
}

exports.format = format;
exports.formatToJS = formatToJS;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-input-field {\n  font-family: monospace;\n  font-size: 14px;\n  background-color: white; }\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = __webpack_require__(4);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enum = function (_PureComponent) {
  _inherits(Enum, _PureComponent);

  function Enum() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Enum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Enum.__proto__ || Object.getPrototypeOf(Enum)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expand: false
    }, _this.onChange = function (e, value) {
      var onChange = _this.props.onChange;

      var event = _extends({}, e, { value: value, component: _this });
      onChange(event, [value], [value]);
    }, _this.handleToggleExpand = function (expand) {
      if (typeof expand === 'boolean') {
        _this.setState({ expand: expand });
      } else {
        _this.setState({ expand: !_this.state.expand });
      }
    }, _this.handleClick = function (e) {
      (0, _utils.preventDefault)(e);
      _this.handleToggleExpand();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Enum, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unexpand = this.handleToggleExpand.bind(this, false);
      window.addEventListener('click', this.unexpand);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.unexpand);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          name = _props.name,
          className = _props.className,
          fieldInfo = _props.fieldInfo;
      var length = fieldInfo.length;
      var expand = this.state.expand;

      var _value = _slicedToArray(value, 1),
          valueName = _value[0].name;

      return _react2.default.createElement(
        'div',
        {
          key: name,
          className: 'tree-input-item-enum ' + className + (expand ? ' active' : ''),
          onClick: this.handleClick,
          style: { zIndex: expand ? 99 : 3 }
        },
        _react2.default.createElement(
          'div',
          { className: 'tree-input-item-enum-value' },
          valueName ? _react2.default.createElement(
            'span',
            null,
            valueName
          ) : _react2.default.createElement(
            'span',
            { className: 'tree-input-place-holder' },
            name,
            ': enum'
          ),
          _react2.default.createElement(_Icon2.default, { type: _Icon2.default.types.ARROW, className: 'tree-input-item-expand-icon' })
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'tree-input-enum-options',
            style: {
              height: expand ? length * 36 + 'px' : 0,
              opacity: expand ? 1 : 0
            }
          },
          fieldInfo.map(function (i) {
            return _react2.default.createElement(
              'div',
              {
                key: i.name,
                className: 'tree-input-enum-option' + (i.name === valueName ? ' active' : ''),
                onClick: function onClick(e) {
                  return _this2.onChange(e, i);
                }
              },
              i.name
            );
          })
        )
      );
    }
  }]);

  return Enum;
}(_react.PureComponent);

Enum.propTypes = {
  name: _propTypes2.default.string.isRequired,
  fieldInfo: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func,
  // onPressEnter: PropTypes.func,
  value: _propTypes2.default.array,
  className: _propTypes2.default.string
};
Enum.defaultProps = {
  onChange: _utils.noop,
  // onPressEnter: noop,
  value: [{}],
  className: ''
};
exports.default = Enum;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-item-enum {\n  cursor: pointer;\n  z-index: 1;\n  padding: 0 !important;\n  position: relative; }\n  .tree-input-item-enum.active .tree-input-item-expand-icon {\n    transform: rotate(180deg); }\n  .tree-input-item-enum .tree-input-item-enum-value {\n    line-height: 32px;\n    padding: 0 11px;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .tree-input-item-enum .tree-input-item-enum-value .tree-input-item-expand-icon {\n      width: 16px;\n      height: 16px;\n      font-weight: bolder;\n      font-size: 15px;\n      position: relative;\n      left: 4px;\n      transition: all ease 300ms; }\n  .tree-input-item-enum .tree-input-enum-options {\n    z-index: 2;\n    background-color: #fbfbfb;\n    width: 100% !important;\n    padding: 0 !important;\n    position: relative;\n    top: 4px;\n    overflow: hidden;\n    transition: all ease 300ms; }\n    .tree-input-item-enum .tree-input-enum-options .tree-input-enum-option {\n      padding: 4px 11px;\n      height: 28px;\n      line-height: 28px;\n      box-sizing: content-box;\n      background-color: #fbfbfb;\n      transition: all ease 200ms; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(4);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boolean = function (_Component) {
  _inherits(Boolean, _Component);

  function Boolean() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Boolean);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Boolean.__proto__ || Object.getPrototypeOf(Boolean)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e, value) {
      (0, _utils.preventDefault)(e);
      var onChange = _this.props.onChange;

      var event = _extends({}, e, { value: value, component: _this });
      onChange(event, value, value);
    }, _this.handleSelectTrue = function (e) {
      _this.onChange(e, true);
    }, _this.handleSelectFalse = function (e) {
      _this.onChange(e, false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Boolean, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          name = _props.name,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        {
          key: name,
          className: 'tree-input-item-boolean ' + (value === false ? 'tree-input-false' : '') + ' ' + className
        },
        _react2.default.createElement(
          'div',
          {
            className: value === true ? 'tree-input-boolean-active' : '',
            onClick: this.handleSelectTrue
          },
          'TRUE'
        ),
        _react2.default.createElement(
          'div',
          {
            className: value === false ? 'tree-input-boolean-active' : '',
            onClick: this.handleSelectFalse
          },
          'FALSE'
        )
      );
    }
  }]);

  return Boolean;
}(_react.Component);

Boolean.propTypes = {
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  className: _propTypes2.default.string
};
Boolean.defaultProps = {
  onChange: _utils.noop,
  value: '',
  className: ''
};
exports.default = Boolean;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(30);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-item-boolean {\n  padding: 0 !important;\n  overflow: hidden; }\n  .tree-input-item-boolean > div {\n    width: 50%;\n    height: 100%;\n    line-height: 30px;\n    display: inline-block;\n    text-align: center;\n    cursor: pointer;\n    transition: all ease 300ms; }\n    .tree-input-item-boolean > div:hover, .tree-input-item-boolean > div.tree-input-boolean-active {\n      color: white;\n      font-weight: bold; }\n    .tree-input-item-boolean > div:first-child {\n      width: calc(50% - 1px);\n      border-right: 1px solid #d9d9d9; }\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(12);

var _Input2 = _interopRequireDefault(_Input);

var _Message = __webpack_require__(11);

var _Message2 = _interopRequireDefault(_Message);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = __webpack_require__(4);

__webpack_require__(32);

var _Tooltip = __webpack_require__(13);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repeated = function (_Component) {
  _inherits(Repeated, _Component);

  function Repeated() {
    var _ref;

    _classCallCheck(this, Repeated);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Repeated.__proto__ || Object.getPrototypeOf(Repeated)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        nestedDepth = _this$props.nestedDepth,
        collapsed = _this$props.collapsed;

    _this.state = {
      collapsed: typeof collapsed === 'number' ? nestedDepth >= collapsed : !!collapsed
    };
    return _this;
  }

  _createClass(Repeated, [{
    key: 'render',
    value: function render() {
      var collapsed = this.state.collapsed;
      var _props = this.props,
          value = _props.value,
          length = _props.value.length,
          name = _props.name,
          documentation = _props.documentation,
          typeOrFieldInfo = _props.typeOrFieldInfo;

      var isMessage = typeof typeOrFieldInfo !== 'string';
      var isEmpty = length === 0;
      return _react2.default.createElement(
        'div',
        {
          className: 'tree-input-repeated tree-input' + (collapsed ? ' tree-input-collapsed' : '') + ' ' + (isMessage ? 'message' : typeOrFieldInfo),
          key: name
        },
        _react2.default.createElement(
          'div',
          {
            className: 'tree-input-start',
            onClick: this.handleToggleCollapsed
          },
          _react2.default.createElement(_Icon2.default, { type: 'COLLAPSED', className: 'tree-input-expand' }),
          _react2.default.createElement(
            'div',
            { className: 'tree-input-name' },
            _react2.default.createElement(
              'span',
              null,
              '"' + name + '": '
            ),
            _react2.default.createElement(_Tooltip2.default, { text: documentation })
          ),
          _react2.default.createElement(
            'span',
            { className: 'tree-input-item-type' },
            ' ',
            isMessage ? 'message' : typeOrFieldInfo,
            '[]'
          ),
          _react2.default.createElement(
            'span',
            { className: 'tree-input-tag' },
            '['
          ),
          _react2.default.createElement(
            'span',
            { className: collapsed ? '' : 'tree-input-hide' },
            _react2.default.createElement(
              'span',
              { className: 'tree-input-points' + (isEmpty ? ' tree-input-hide' : '') },
              '...'
            ),
            _react2.default.createElement(
              'span',
              { className: 'tree-input-tag' },
              ']'
            )
          ),
          isEmpty ? _react2.default.createElement(
            'span',
            { className: 'tree-input-count-empty' },
            'Empty'
          ) : _react2.default.createElement(
            'span',
            { className: 'tree-input-count' },
            length,
            ' Items'
          ),
          _react2.default.createElement(_Icon2.default, {
            type: 'ADD',
            className: 'tree-input-add icon-add',
            onClick: this.handleAddItem
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'tree-input-items' },
          value.map(this.renderNode)
        ),
        _react2.default.createElement(
          'div',
          { className: 'tree-input-end' },
          _react2.default.createElement(
            'span',
            { onClick: this.handleToggleCollapsed },
            ']'
          )
        )
      );
    }
  }, {
    key: 'isMessage',
    get: function get() {
      var typeOrFieldInfo = this.props.typeOrFieldInfo;

      return typeof typeOrFieldInfo !== 'string';
    }
  }]);

  return Repeated;
}(_react.Component);

Repeated.propTypes = {
  value: _propTypes2.default.array.isRequired,
  typeOrFieldInfo: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(_utils.types), _propTypes2.default.array]).isRequired,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]).isRequired,
  nestedDepth: _propTypes2.default.number.isRequired,
  documentation: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
Repeated.defaultProps = {
  documentation: '',
  onChange: _utils.noop
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { collapsed: false };

  this.handleToggleCollapsed = function (e, collapsed) {
    (0, _utils.preventDefault)(e);
    _this2.setState({
      collapsed: typeof collapsed === 'boolean' ? collapsed : !_this2.state.collapsed
    });
  };

  this.handleAddInputItem = function (e) {
    var newValue = _this2.props.value;

    newValue.push('');
    _this2.props.onChange(e, newValue);
    _this2.handleToggleCollapsed(e, false);
  };

  this.handleAddMessageItem = function (e) {
    var _props2 = _this2.props,
        newValue = _props2.value,
        fieldInfo = _props2.typeOrFieldInfo;

    newValue.push((0, _utils.deepCopy)(fieldInfo));
    _this2.props.onChange(e, newValue);
    _this2.handleToggleCollapsed(e, false);
  };

  this.handleAddItem = function (e) {
    (0, _utils.preventDefault)(e);
    if (_this2.isMessage) {
      _this2.handleAddMessageItem(e);
    } else {
      _this2.handleAddInputItem(e);
    }
  };

  this.handleRemoveItem = function (e, index) {
    (0, _utils.preventDefault)(e);
    var newValue = _this2.props.value;

    newValue.splice(index, 1);
    _this2.props.onChange(e, newValue);

    if (newValue.length === 0) {
      _this2.handleToggleCollapsed(e, true);
    }
  };

  this.generateOnChange = function (index) {
    return function (e, value) {
      var newValue = _this2.props.value;

      newValue[index] = value;
      _this2.props.onChange(e, [].concat(_toConsumableArray(newValue)));
    };
  };

  this.renderInput = function (value, index) {
    var _props3 = _this2.props,
        name = _props3.name,
        type = _props3.typeOrFieldInfo;

    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: 'tree-input-repeated-item'
      },
      _react2.default.createElement(
        'span',
        { className: 'tree-input-repeated-item-index' },
        index,
        ': '
      ),
      _react2.default.createElement(_Input2.default, {
        className: 'tree-input-repeated-item-input',
        key: index + '-1',
        name: name,
        type: type,
        value: value,
        onChange: _this2.generateOnChange(index)
      }),
      _react2.default.createElement(_Icon2.default, {
        type: 'REMOVE',
        className: 'tree-input-remove icon-remove',
        onClick: function onClick(e) {
          return _this2.handleRemoveItem(e, index);
        }
      })
    );
  };

  this.renderMessage = function (value, index) {
    var fieldInfo = _this2.props.typeOrFieldInfo;
    var _props4 = _this2.props,
        nestedDepth = _props4.nestedDepth,
        collapsed = _props4.collapsed;

    return _react2.default.createElement(_Message2.default, {
      key: index,
      value: value || fieldInfo,
      name: index.toString(),
      nestedDepth: nestedDepth + 1,
      collapsed: collapsed,
      onChange: _this2.generateOnChange(index),
      onRemove: function onRemove(e) {
        return _this2.handleRemoveItem(e, index);
      }
    });
  };

  this.renderNode = function (value, index) {
    var typeOrFieldInfo = _this2.props.typeOrFieldInfo;

    if (_this2.isMessage) {
      return _this2.renderMessage(value || typeOrFieldInfo, index);
    }
    return _this2.renderInput(value, index);
  };
};

exports.default = Repeated;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(33);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-repeated .tree-input-repeated-item {\n  display: inline-flex;\n  align-items: center;\n  margin: 10px 20px 5px 0; }\n  .tree-input-repeated .tree-input-repeated-item .tree-input-repeated-item-index {\n    display: inline-block;\n    width: 30px;\n    font-weight: bolder; }\n  .tree-input-repeated .tree-input-repeated-item .tree-input-repeated-item-input {\n    width: 120px; }\n\n.tree-input-repeated .tree-input-add, .tree-input-repeated .tree-input-remove {\n  font-size: 24px;\n  cursor: pointer;\n  transition: all ease 300ms;\n  width: 24px;\n  height: 24px; }\n  .tree-input-repeated .tree-input-add:hover, .tree-input-repeated .tree-input-remove:hover {\n    transform: scale(1.3) rotate(-180deg); }\n\n.tree-input-repeated .tree-input-add {\n  margin-left: 26px; }\n\n.tree-input-repeated .tree-input-remove {\n  margin-left: 10px; }\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-tooltip {\n  position: absolute;\n  max-width: 200px;\n  background-color: #3e3e3e;\n  color: white;\n  font-weight: bold;\n  padding: 6px 11px;\n  border-radius: 4px;\n  transition: all ease-out 200ms;\n  box-shadow: rgba(0, 0, 0, 0.07) 3px 3px 7px 0;\n  font-size: 13px; }\n  .tree-input-tooltip .tree-input-tooltip-arrow {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    transform: rotate(45deg);\n    background-color: #3e3e3e;\n    top: calc(100% - 6px);\n    left: 12px; }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(37);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input {\n  margin: 8px 10px;\n  transition: all ease 300ms;\n  height: auto;\n  position: relative;\n  left: -22px;\n  color: rgba(0, 43, 54, 0.8);\n  fill: rgba(0, 43, 54, 0.8); }\n  .tree-input:before {\n    content: '';\n    width: 1px;\n    height: calc(100% - 2 * 25px);\n    top: 25px;\n    background-color: rgba(0, 43, 54, 0.15);\n    position: absolute; }\n  .tree-input .tree-input-start, .tree-input .tree-input-end {\n    position: relative;\n    cursor: pointer;\n    height: 25px;\n    user-select: none; }\n  .tree-input .tree-input-start {\n    left: -6px;\n    display: inline-flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    top: 3px; }\n    .tree-input .tree-input-start .tree-input-expand {\n      width: 18px;\n      height: 18px;\n      fill: rgba(0, 43, 54, 0.8);\n      position: relative;\n      left: -3px;\n      top: -1px;\n      transition: all ease 300ms;\n      transform: rotate(90deg); }\n    .tree-input .tree-input-start .tree-input-count, .tree-input .tree-input-start .tree-input-count-empty {\n      display: inline-block;\n      margin-left: 20px;\n      opacity: 0.8;\n      font-style: italic;\n      color: rgba(0, 0, 0, 0.3);\n      min-width: 60px; }\n    .tree-input .tree-input-start .tree-input-name {\n      font-weight: bold;\n      min-width: 40px;\n      margin-right: 8px;\n      font-size: 15px; }\n    .tree-input .tree-input-start .tree-input-tag {\n      margin: 0 8px; }\n    .tree-input .tree-input-start .tree-input-remove {\n      margin-left: 20px; }\n  .tree-input .tree-input-end {\n    left: -3px;\n    display: inline-block; }\n  .tree-input .tree-input-items {\n    margin-left: 40px; }\n    .tree-input .tree-input-items .tree-input-item {\n      height: 32px;\n      margin: 8px 0;\n      font-size: 14px;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n      .tree-input .tree-input-items .tree-input-item > span, .tree-input .tree-input-items .tree-input-item > input {\n        display: inline-block; }\n      .tree-input .tree-input-items .tree-input-item .tree-input-item-info {\n        position: relative;\n        min-width: 240px; }\n        .tree-input .tree-input-items .tree-input-item .tree-input-item-info .tree-input-item-name {\n          font-size: 15px;\n          font-weight: bolder;\n          cursor: pointer;\n          display: inline-block; }\n  .tree-input .tree-input-item-input,\n  .tree-input .tree-input-item-enum,\n  .tree-input .tree-input-enum-options,\n  .tree-input .tree-input-item-boolean,\n  .tree-input .tree-input-repeated-item-input {\n    min-width: 150px;\n    width: 220px;\n    height: 32px;\n    line-height: 1.5;\n    padding: 4px 11px;\n    box-sizing: border-box;\n    border: 1px solid #d9d9d9;\n    border-radius: 4px;\n    color: rgba(0, 0, 0, 0.65);\n    transition: all ease 300ms;\n    background: white; }\n    .tree-input .tree-input-item-input::placeholder, .tree-input .tree-input-item-input .tree-input-place-holder,\n    .tree-input .tree-input-item-enum::placeholder,\n    .tree-input .tree-input-item-enum .tree-input-place-holder,\n    .tree-input .tree-input-enum-options::placeholder,\n    .tree-input .tree-input-enum-options .tree-input-place-holder,\n    .tree-input .tree-input-item-boolean::placeholder,\n    .tree-input .tree-input-item-boolean .tree-input-place-holder,\n    .tree-input .tree-input-repeated-item-input::placeholder,\n    .tree-input .tree-input-repeated-item-input .tree-input-place-holder {\n      font-family: monospace;\n      font-size: 13px;\n      opacity: 0.8;\n      color: #b6b6b6; }\n    .tree-input .tree-input-item-input:focus,\n    .tree-input .tree-input-item-enum:focus,\n    .tree-input .tree-input-enum-options:focus,\n    .tree-input .tree-input-item-boolean:focus,\n    .tree-input .tree-input-repeated-item-input:focus {\n      border-color: #40a9ff;\n      outline: none;\n      box-shadow: 0 0 4px 1px rgba(59, 169, 255, 0.71); }\n\n.tree-input.tree-input-collapsed {\n  height: 32px;\n  border-left: none; }\n  .tree-input.tree-input-collapsed .tree-input-start .tree-input-expand {\n    color: inherit;\n    fill: inherit;\n    transform: rotate(0deg); }\n  .tree-input.tree-input-collapsed .tree-input-items, .tree-input.tree-input-collapsed .tree-input-end {\n    display: none; }\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(39);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".tree-input-root {\n  margin: 0 0 0 40px;\n  padding: 0;\n  font-family: monospace;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .tree-input-root .tree-input-hide {\n    opacity: 0; }\n  .tree-input-root .tree-input-name .tree-input-tooltip, .tree-input-root .tree-input-item-name .tree-input-tooltip {\n    transform: scale(0.1) translateY(calc(-200% - 26px));\n    opacity: 0; }\n  .tree-input-root .tree-input-name:hover .tree-input-tooltip, .tree-input-root .tree-input-item-name:hover .tree-input-tooltip {\n    transform: scale(1) translateY(calc(-100% - 26px));\n    opacity: 1; }\n  .tree-input-root .tree-input-points {\n    font-weight: bolder;\n    font-size: 16px;\n    line-height: 5px;\n    letter-spacing: -0.1em; }\n  .tree-input-root .tree-input-tag {\n    font-weight: bolder; }\n  .tree-input-root .tree-input-item-type {\n    margin-right: 20px;\n    font-style: italic;\n    font-size: 14px; }\n  .tree-input-root .tree-input-repeated .tree-input-add {\n    color: #48b8f5;\n    fill: #48b8f5; }\n  .tree-input-root .tree-input-repeated .tree-input-remove {\n    color: #f35d6f;\n    fill: #f35d6f; }\n  .tree-input-root .message .tree-input-item-type,\n  .tree-input-root .message .tree-input-expand,\n  .tree-input-root .message .tree-input-points {\n    color: #f35d6f;\n    fill: #f35d6f; }\n  .tree-input-root .boolean .tree-input-item-type,\n  .tree-input-root .boolean .tree-input-expand,\n  .tree-input-root .boolean .tree-input-points {\n    color: #33d391;\n    fill: #33d391; }\n  .tree-input-root .boolean .tree-input-item-boolean {\n    border-color: rgba(51, 211, 145, 0.4); }\n    .tree-input-root .boolean .tree-input-item-boolean.tree-input-false {\n      border-color: rgba(243, 7, 3, 0.44); }\n      .tree-input-root .boolean .tree-input-item-boolean.tree-input-false > div:first-child {\n        border-color: white; }\n    .tree-input-root .boolean .tree-input-item-boolean:hover > div:first-child {\n      border-right-color: #FFFF; }\n    .tree-input-root .boolean .tree-input-item-boolean > div:first-child {\n      border-color: rgba(51, 211, 145, 0.4);\n      color: #33d391; }\n      .tree-input-root .boolean .tree-input-item-boolean > div:first-child:hover, .tree-input-root .boolean .tree-input-item-boolean > div:first-child.tree-input-boolean-active {\n        background-color: #33d391;\n        color: white; }\n    .tree-input-root .boolean .tree-input-item-boolean > div:last-child {\n      color: #f35d6f; }\n      .tree-input-root .boolean .tree-input-item-boolean > div:last-child:hover, .tree-input-root .boolean .tree-input-item-boolean > div:last-child.tree-input-boolean-active {\n        background-color: #f35d6f;\n        color: white; }\n  .tree-input-root .enum .tree-input-item-type,\n  .tree-input-root .enum .tree-input-expand,\n  .tree-input-root .enum .tree-input-points {\n    color: #c84ee6;\n    fill: #c84ee6; }\n  .tree-input-root .enum .tree-input-item-enum {\n    color: #c84ee6;\n    border-color: rgba(200, 78, 230, 0.4); }\n    .tree-input-root .enum .tree-input-item-enum .tree-input-item-enum-value .tree-input-item-expand-icon {\n      color: #d024d0;\n      fill: #d024d0; }\n    .tree-input-root .enum .tree-input-item-enum.active, .tree-input-root .enum .tree-input-item-enum .tree-input-enum-options {\n      border-color: #c84ee6;\n      box-shadow: 0 0 4px 1px rgba(200, 78, 230, 0.71); }\n    .tree-input-root .enum .tree-input-item-enum .tree-input-enum-options .tree-input-enum-option.active {\n      font-weight: bold;\n      background-color: #dd68d9;\n      color: white; }\n    .tree-input-root .enum .tree-input-item-enum .tree-input-enum-options .tree-input-enum-option:hover {\n      color: white;\n      background-color: #bf5ccd; }\n  .tree-input-root .string .tree-input-item-type,\n  .tree-input-root .string .tree-input-expand,\n  .tree-input-root .string .tree-input-points,\n  .tree-input-root .string .tree-input-item-input, .tree-input-root .string .tree-input-repeated-item-input, .tree-input-root .bytes .tree-input-item-type,\n  .tree-input-root .bytes .tree-input-expand,\n  .tree-input-root .bytes .tree-input-points,\n  .tree-input-root .bytes .tree-input-item-input, .tree-input-root .bytes .tree-input-repeated-item-input {\n    color: #e9782a;\n    fill: #e9782a; }\n  .tree-input-root .string .tree-input-item-input, .tree-input-root .string .tree-input-repeated-item-input, .tree-input-root .bytes .tree-input-item-input, .tree-input-root .bytes .tree-input-repeated-item-input {\n    border-color: rgba(233, 120, 42, 0.4); }\n    .tree-input-root .string .tree-input-item-input:focus, .tree-input-root .string .tree-input-repeated-item-input:focus, .tree-input-root .bytes .tree-input-item-input:focus, .tree-input-root .bytes .tree-input-repeated-item-input:focus {\n      border-color: #e9782a;\n      box-shadow: 0 0 4px 1px rgba(233, 120, 42, 0.71); }\n  .tree-input-root .double .tree-input-item-type,\n  .tree-input-root .double .tree-input-expand,\n  .tree-input-root .double .tree-input-points,\n  .tree-input-root .double .tree-input-item-input,\n  .tree-input-root .double .tree-input-repeated-item-input, .tree-input-root .float .tree-input-item-type,\n  .tree-input-root .float .tree-input-expand,\n  .tree-input-root .float .tree-input-points,\n  .tree-input-root .float .tree-input-item-input,\n  .tree-input-root .float .tree-input-repeated-item-input {\n    color: #859900;\n    fill: #859900; }\n  .tree-input-root .double .tree-input-item-input,\n  .tree-input-root .double .tree-input-repeated-item-input, .tree-input-root .float .tree-input-item-input,\n  .tree-input-root .float .tree-input-repeated-item-input {\n    border-color: rgba(133, 153, 0, 0.4); }\n    .tree-input-root .double .tree-input-item-input:focus,\n    .tree-input-root .double .tree-input-repeated-item-input:focus, .tree-input-root .float .tree-input-item-input:focus,\n    .tree-input-root .float .tree-input-repeated-item-input:focus {\n      border-color: #859900;\n      box-shadow: 0 0 4px 1px rgba(133, 153, 0, 0.71); }\n  .tree-input-root .int32 .tree-input-item-type,\n  .tree-input-root .int32 .tree-input-expand,\n  .tree-input-root .int32 .tree-input-points,\n  .tree-input-root .int32 .tree-input-item-input,\n  .tree-input-root .int32 .tree-input-repeated-item-input, .tree-input-root .uint32 .tree-input-item-type,\n  .tree-input-root .uint32 .tree-input-expand,\n  .tree-input-root .uint32 .tree-input-points,\n  .tree-input-root .uint32 .tree-input-item-input,\n  .tree-input-root .uint32 .tree-input-repeated-item-input, .tree-input-root .sint32 .tree-input-item-type,\n  .tree-input-root .sint32 .tree-input-expand,\n  .tree-input-root .sint32 .tree-input-points,\n  .tree-input-root .sint32 .tree-input-item-input,\n  .tree-input-root .sint32 .tree-input-repeated-item-input, .tree-input-root .fixed32 .tree-input-item-type,\n  .tree-input-root .fixed32 .tree-input-expand,\n  .tree-input-root .fixed32 .tree-input-points,\n  .tree-input-root .fixed32 .tree-input-item-input,\n  .tree-input-root .fixed32 .tree-input-repeated-item-input, .tree-input-root .sfixed32 .tree-input-item-type,\n  .tree-input-root .sfixed32 .tree-input-expand,\n  .tree-input-root .sfixed32 .tree-input-points,\n  .tree-input-root .sfixed32 .tree-input-item-input,\n  .tree-input-root .sfixed32 .tree-input-repeated-item-input {\n    color: #23addb;\n    fill: #23addb; }\n  .tree-input-root .int32 .tree-input-item-input,\n  .tree-input-root .int32 .tree-input-repeated-item-input, .tree-input-root .uint32 .tree-input-item-input,\n  .tree-input-root .uint32 .tree-input-repeated-item-input, .tree-input-root .sint32 .tree-input-item-input,\n  .tree-input-root .sint32 .tree-input-repeated-item-input, .tree-input-root .fixed32 .tree-input-item-input,\n  .tree-input-root .fixed32 .tree-input-repeated-item-input, .tree-input-root .sfixed32 .tree-input-item-input,\n  .tree-input-root .sfixed32 .tree-input-repeated-item-input {\n    border-color: rgba(35, 173, 219, 0.4); }\n    .tree-input-root .int32 .tree-input-item-input:focus,\n    .tree-input-root .int32 .tree-input-repeated-item-input:focus, .tree-input-root .uint32 .tree-input-item-input:focus,\n    .tree-input-root .uint32 .tree-input-repeated-item-input:focus, .tree-input-root .sint32 .tree-input-item-input:focus,\n    .tree-input-root .sint32 .tree-input-repeated-item-input:focus, .tree-input-root .fixed32 .tree-input-item-input:focus,\n    .tree-input-root .fixed32 .tree-input-repeated-item-input:focus, .tree-input-root .sfixed32 .tree-input-item-input:focus,\n    .tree-input-root .sfixed32 .tree-input-repeated-item-input:focus {\n      border-color: #23addb;\n      box-shadow: 0 0 4px 1px rgba(35, 173, 219, 0.71); }\n  .tree-input-root .int64 .tree-input-item-type,\n  .tree-input-root .int64 .tree-input-expand,\n  .tree-input-root .int64 .tree-input-points,\n  .tree-input-root .int64 .tree-input-item-input,\n  .tree-input-root .int64 .tree-input-repeated-item-input, .tree-input-root .uint64 .tree-input-item-type,\n  .tree-input-root .uint64 .tree-input-expand,\n  .tree-input-root .uint64 .tree-input-points,\n  .tree-input-root .uint64 .tree-input-item-input,\n  .tree-input-root .uint64 .tree-input-repeated-item-input, .tree-input-root .sint64 .tree-input-item-type,\n  .tree-input-root .sint64 .tree-input-expand,\n  .tree-input-root .sint64 .tree-input-points,\n  .tree-input-root .sint64 .tree-input-item-input,\n  .tree-input-root .sint64 .tree-input-repeated-item-input, .tree-input-root .fixed64 .tree-input-item-type,\n  .tree-input-root .fixed64 .tree-input-expand,\n  .tree-input-root .fixed64 .tree-input-points,\n  .tree-input-root .fixed64 .tree-input-item-input,\n  .tree-input-root .fixed64 .tree-input-repeated-item-input, .tree-input-root .sfixed64 .tree-input-item-type,\n  .tree-input-root .sfixed64 .tree-input-expand,\n  .tree-input-root .sfixed64 .tree-input-points,\n  .tree-input-root .sfixed64 .tree-input-item-input,\n  .tree-input-root .sfixed64 .tree-input-repeated-item-input {\n    color: #4e86de;\n    fill: #4e86de; }\n  .tree-input-root .int64 .tree-input-item-input,\n  .tree-input-root .int64 .tree-input-repeated-item-input, .tree-input-root .uint64 .tree-input-item-input,\n  .tree-input-root .uint64 .tree-input-repeated-item-input, .tree-input-root .sint64 .tree-input-item-input,\n  .tree-input-root .sint64 .tree-input-repeated-item-input, .tree-input-root .fixed64 .tree-input-item-input,\n  .tree-input-root .fixed64 .tree-input-repeated-item-input, .tree-input-root .sfixed64 .tree-input-item-input,\n  .tree-input-root .sfixed64 .tree-input-repeated-item-input {\n    border-color: rgba(78, 134, 222, 0.4); }\n    .tree-input-root .int64 .tree-input-item-input:focus,\n    .tree-input-root .int64 .tree-input-repeated-item-input:focus, .tree-input-root .uint64 .tree-input-item-input:focus,\n    .tree-input-root .uint64 .tree-input-repeated-item-input:focus, .tree-input-root .sint64 .tree-input-item-input:focus,\n    .tree-input-root .sint64 .tree-input-repeated-item-input:focus, .tree-input-root .fixed64 .tree-input-item-input:focus,\n    .tree-input-root .fixed64 .tree-input-repeated-item-input:focus, .tree-input-root .sfixed64 .tree-input-item-input:focus,\n    .tree-input-root .sfixed64 .tree-input-repeated-item-input:focus {\n      border-color: #4e86de;\n      box-shadow: 0 0 4px 1px rgba(78, 134, 222, 0.71); }\n", ""]);

// exports


/***/ })
/******/ ]);
});