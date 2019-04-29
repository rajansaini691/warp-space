/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Chain/CStyle.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/Chain/CStyle.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._3lbvDJIXd_-mtonNxD3rgq {\n    background-color: rgb(247, 205, 138);\n    display: inline-block;\n    position: relative;\n}", ""]);

// exports
exports.locals = {
	"chain": "_3lbvDJIXd_-mtonNxD3rgq"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Graph/GStyle.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/Graph/GStyle.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._1tqh2qhggatZH7WeMzrNsR {\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n}\n\n.IzKJAWjx17qRR4c2MnJqA {\n    display: inline-block;\n    position: relative;\n}", ""]);

// exports
exports.locals = {
	"graph": "_1tqh2qhggatZH7WeMzrNsR",
	"container": "IzKJAWjx17qRR4c2MnJqA"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Matrix/MatrixStyles.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/Matrix/MatrixStyles.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._3jddZJVBkDhCh0gD4Vo_bb {\n    top: 25%;\n    margin-right: 3%;\n\n    background: #ff5959;\n    position: relative;\n    border-radius: 1vh;\n    padding: 0.5vh;\n    text-align: center;\n\n    font-family: \"Advent Pro\";\n    font-size: 2.5vh;\n\n    float: right;\n}\n\n._1cv3yhATgjhI4yF_-q2K3H {\n    width: 40%;\n    height: 20%;\n\n    background: rgb(255, 148, 148);\n    border: rgb(255, 227, 227);\n\n    font-family: \"Advent Pro\";\n    font-size: 70%;\n    text-align: center;\n\n    margin-bottom: 5%;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 0;\n}\n\n._1cv3yhATgjhI4yF_-q2K3H:focus {\n    background: rgb(255, 192, 192);\n    outline: none;\n}\n\n._1cv3yhATgjhI4yF_-q2K3H::-webkit-inner-spin-button,\n._1cv3yhATgjhI4yF_-q2K3H::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}", ""]);

// exports
exports.locals = {
	"matrix": "_3jddZJVBkDhCh0gD4Vo_bb",
	"input": "_1cv3yhATgjhI4yF_-q2K3H"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/MenuButton/DropDown/DElementStyles.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/MenuButton/DropDown/DElementStyles.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._7SM71cCjd6p9brHpt-Msc {\n    /* Positioning */\n    position: relative;\n    top: -10vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    height: 5vh;\n    margin-bottom: 1vh;\n    width: 100%;\n\n    /* Positioning of text */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    /* Border */ \n    border: solid black;\n\n    /* Fonts */\n    font-size: 2.5vh;\n    font-family: \"Advent Pro\";\n    border-radius: 0.75vh;\n    user-select: none;\n\n    /* Animations */\n    transition: opacity 0.25s linear 0s, visibility 0s linear 0.25s, top 0.25s linear;\n    visibility: hidden;\n    opacity: 0;\n}\n\n._7SM71cCjd6p9brHpt-Msc._1kOsQxrTqSoew74NW_k2fd {\n    transition-delay: 0s;\n    \n    opacity: 1;\n    top: -14vh;\n    visibility: visible;\n}\n\n._7SM71cCjd6p9brHpt-Msc:hover {\n    cursor: default;\n}\n\n@keyframes _2QfeB5j7Po0hokXomLtt2q {\n\n}", ""]);

// exports
exports.locals = {
	"dElement": "_7SM71cCjd6p9brHpt-Msc",
	"visible": "_1kOsQxrTqSoew74NW_k2fd",
	"appear": "_2QfeB5j7Po0hokXomLtt2q"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/MenuButton/MButtonStyles.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/MenuButton/MButtonStyles.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._2wXEIkJYSnUd-RvOkbGc0Z {\n    float: right;\n    position: relative;\n    top: 25%;\n    margin-right: 7%;\n\n    border: solid rgb(155, 117, 90);\n    border-radius: 10px;\n    border-style: dotted;\n    background-color: rgb(221, 184, 124);\n}\n\n._2wXEIkJYSnUd-RvOkbGc0Z:hover {\n    cursor: pointer;\n}\n\n._2wXEIkJYSnUd-RvOkbGc0Z::before {\n    background-color: rgb(155, 117, 90);\n    top: 46.5%;\n    left: 25%;\n    width: 50%;\n    height: 7%;\n    position: absolute;\n    content: \" \";\n}\n\n._2wXEIkJYSnUd-RvOkbGc0Z::after {\n    background-color: rgb(155, 117, 90);\n    left: 46.5%;\n    top: 25%;\n    height: 50%;\n    width: 7%;\n    position: absolute;\n    content: \" \";\n}", ""]);

// exports
exports.locals = {
	"MButton": "_2wXEIkJYSnUd-RvOkbGc0Z"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/WarpSpace/WarpSpaceStyles.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./src/components/WarpSpace/WarpSpaceStyles.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._22KNaX5W5vzzshS6mNTXVd {\n    float: right;\n    position: relative;\n    top: 25%;\n    margin-right: 10%;\n\n    color: white;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    font-size: 3vh;\n    font-family: \"Advent Pro\";\n    background: black;\n    border-radius: 10px;\n    border: solid white\n}\n\n._22KNaX5W5vzzshS6mNTXVd:hover {\n    color: black;\n    background: white;\n    cursor: pointer;\n    border: solid black\n}", ""]);

// exports
exports.locals = {
	"warpButton": "_22KNaX5W5vzzshS6mNTXVd"
};

/***/ }),

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Graph_1 = __webpack_require__(/*! ../Graph/Graph */ "./src/components/Graph/Graph.tsx");
var Chain_1 = __webpack_require__(/*! ../Chain/Chain */ "./src/components/Chain/Chain.tsx");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        // Initializes data object so the compiler doesn't complain
        _this.data = {
            matrix: null
        };
        _this.state = {
            width: 0,
            height: 0,
            CHAIN_HEIGHT: 0,
            data: _this.data
        };
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        _this.onWarp = _this.onWarp.bind(_this);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    };
    App.prototype.updateDimensions = function () {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            MENU_WIDTH: 0,
            CHAIN_HEIGHT: window.innerHeight / 5
        });
    };
    // Sole job should be passing data to Graph
    App.prototype.onWarp = function (e, newData) {
        this.setState({ data: newData });
    };
    App.prototype.render = function () {
        return (React.createElement("div", { style: { height: '100%', width: '100%' } },
            React.createElement(Graph_1.Graph, { width: this.state.width, height: this.state.height - this.state.CHAIN_HEIGHT, data: this.state.data }),
            React.createElement(Chain_1.Chain, { width: this.state.width, height: this.state.CHAIN_HEIGHT, onWarp: this.onWarp })));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./src/components/Chain/CStyle.css":
/*!*****************************************!*\
  !*** ./src/components/Chain/CStyle.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./CStyle.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Chain/CStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Chain/Chain.tsx":
/*!****************************************!*\
  !*** ./src/components/Chain/Chain.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Styles = __webpack_require__(/*! ./CStyle.css */ "./src/components/Chain/CStyle.css");
var WarpSpace_1 = __webpack_require__(/*! ../WarpSpace/WarpSpace */ "./src/components/WarpSpace/WarpSpace.tsx");
var MenuButton_1 = __webpack_require__(/*! ../MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.tsx");
var Matrix_1 = __webpack_require__(/*! ../Matrix/Matrix */ "./src/components/Matrix/Matrix.tsx");
/**
 * Stores the different types of objects that can go into the chain for consistency
 */
var chainTypes;
(function (chainTypes) {
    chainTypes[chainTypes["matrix"] = 0] = "matrix";
    chainTypes[chainTypes["vector"] = 1] = "vector";
})(chainTypes || (chainTypes = {}));
/**
 * Stores the chain of transformations, an animate button
 * to animate the final transformation, and a final result matrix
 * representing what is animated
 */
var Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain(props) {
        var _this = _super.call(this, props) || this;
        _this.warpSpace = _this.warpSpace.bind(_this);
        _this.data = {
            matrix: [[0, 1],
                [-1, 0]]
        };
        _this.state = {
            chain: [chainTypes.matrix]
        };
        _this.addElementToChain = _this.addElementToChain.bind(_this);
        return _this;
    }
    Chain.prototype.warpSpace = function (e) {
        this.props.onWarp(e, this.data);
    };
    /**
     * Adds an element to the chain, depending on the type
     */
    Chain.prototype.addElementToChain = function (type) {
        console.log("Added a new " + type);
        this.setState(function (prevState) { return ({
            chain: prevState.chain.concat([chainTypes.matrix])
        }); });
    };
    Chain.prototype.render = function () {
        // Chain, in this case, is the actual chain of matrices that will be rendered to the DOM
        var chain = [];
        for (var i = 0; i < this.state.chain.length; i++) {
            chain.push(React.createElement(Matrix_1.Matrix, { height: this.props.height / 2, key: i }));
        }
        console.log("The length is " + this.state.chain.length);
        return (React.createElement("div", { style: { height: this.props.height, width: this.props.width }, className: Styles.chain },
            React.createElement(WarpSpace_1.WarpSpace, { height: this.props.height / 2, onClick: this.warpSpace }),
            React.createElement(MenuButton_1.MenuButton, { onDropdownClick: this.addElementToChain, height: this.props.height / 2 }),
            chain));
    };
    return Chain;
}(React.Component));
exports.Chain = Chain;


/***/ }),

/***/ "./src/components/Graph/GStyle.css":
/*!*****************************************!*\
  !*** ./src/components/Graph/GStyle.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./GStyle.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Graph/GStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Graph/Graph.tsx":
/*!****************************************!*\
  !*** ./src/components/Graph/Graph.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Styles = __webpack_require__(/*! ./GStyle.css */ "./src/components/Graph/GStyle.css");
var Graph = /** @class */ (function (_super) {
    __extends(Graph, _super);
    function Graph(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Distance, in pixels, from 0 to 1 on the graph.
         */
        _this.scale = 60;
        /**
         * Background color of the graph
         */
        _this.backgroundColor = 'rgb(198, 255, 251)';
        /**
         * Color of the x and y axes
         */
        _this.axisColor = 'white';
        _this.state = {
            data: _this.props.data
        };
        // Allows the canvas to be directly accessed
        _this.ref = React.createRef();
        _this.update = _this.update.bind(_this);
        _this.resize = _this.resize.bind(_this);
        return _this;
    }
    /**
     * Called once the canvas is rendered
     */
    Graph.prototype.componentDidMount = function () {
        var _this = this;
        // Initially resizes the drawing area and stores the context from it
        var ctx = this.resize();
        var tf = 60;
        this.t = Date.now();
        window.requestAnimationFrame(function () { _this.update(_this.t, ctx); });
    };
    Graph.prototype.componentDidUpdate = function (prevProps) {
        // Check to make sure that the canvas changed size before resizing the window
        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            this.resize();
        }
        // Update t so that the animations can start over
        this.t = Date.now();
    };
    /**
     * Resizes the graph to fit the current window size
     * @returns The graph's 2D rendering context
     */
    Graph.prototype.resize = function () {
        // Holds a DOM reference to the canvas element
        var canvas = this.ref.current;
        var ctx = canvas.getContext("2d");
        // Resize drawing area to size of canvas element
        ctx.canvas.width = canvas.offsetWidth;
        ctx.canvas.height = canvas.offsetHeight;
        return ctx;
    };
    /**
     * Draws the coordinate plane
     * @param ctx
     */
    Graph.prototype.drawGraph = function (ctx) {
        // Saves a copy of width and height for dynamic rendering
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        // 1. Draw the gridlines
        // Draws the horizontal gridlines spreading out from origin, stopping when we reach the top of the
        // window
        for (var i = 0; i < height / (2 * this.scale); i++) {
            // Stores the vertical distance from the origin of each gridline, in pixels
            var location_1 = i * this.scale;
            // Gridline properties
            ctx.strokeStyle = this.axisColor;
            ctx.lineWidth = 2;
            // Positive gridlines
            ctx.beginPath();
            ctx.moveTo(0, height / 2 - location_1);
            ctx.lineTo(width, height / 2 - location_1);
            ctx.stroke();
            // Negative gridlines
            ctx.moveTo(0, height / 2 + location_1);
            ctx.lineTo(width, height / 2 + location_1);
            ctx.stroke();
            // y axis labels
            ctx.font = "20px Trebuchet MS";
            ctx.fillStyle = "gray";
            if (i != 0) {
                // Outline to prevent gridline interference
                ctx.strokeStyle = this.backgroundColor;
                ctx.lineWidth = 6;
                ctx.strokeText(" " + i, 10 * width / 21, height / 2 - location_1 + 5);
                ctx.strokeText("" + -i, 10 * width / 21, height / 2 + location_1 + 5);
                // Text
                ctx.fillStyle = "gray";
                ctx.fillText(" " + i, 10 * width / 21, height / 2 - location_1 + 5);
                ctx.fillText("" + -i, 10 * width / 21, height / 2 + location_1 + 5);
            }
        }
        // Vertical gridlines
        for (var i = 0; i < width / (2 * this.scale); i++) {
            // Stores the vertical distance from the origin of each gridline, in pixels
            var location_2 = i * this.scale;
            ctx.strokeStyle = this.axisColor;
            ctx.lineWidth = 2;
            // Positive gridlines
            ctx.beginPath();
            ctx.moveTo(width / 2 - location_2, 0);
            ctx.lineTo(width / 2 - location_2, height);
            ctx.stroke();
            // Negative gridlines
            ctx.moveTo(width / 2 + location_2, 0);
            ctx.lineTo(width / 2 + location_2, height);
            ctx.stroke();
            ctx.closePath();
            // Axis labels
            ctx.font = "20px Trebuchet MS";
            ctx.textAlign = "center";
            if (i != 0) {
                ctx.strokeStyle = this.backgroundColor;
                ctx.lineWidth = 8;
                ctx.strokeText("" + -i, width / 2 - location_2, 10 * height / 19);
                ctx.strokeText(" " + i, width / 2 + location_2, 10 * height / 19);
                ctx.strokeStyle = "gray";
                ctx.fillText("" + -i, width / 2 - location_2, 10 * height / 19);
                ctx.fillText(" " + i, width / 2 + location_2, 10 * height / 19);
            }
        }
        // 2. Drawing the axes
        // Axis properties
        ctx.strokeStyle = this.axisColor;
        // Draws the y axis
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
        ctx.closePath();
        // Draws the x axis
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        ctx.closePath();
    };
    /**
     * Updates the screen every frame
     */
    Graph.prototype.update = function (t, ctx) {
        var _this = this;
        // Repaints the screen
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // Draw the graph
        this.drawGraph(ctx);
        var transform = this.props.data.matrix;
        if (transform != null) {
            // Test a full-length animation, as long as there exists a legitimate transformation
            for (var i = -30; i <= 30; i++)
                for (var j = -30; j <= 30; j++)
                    this.animateDot(ctx, transform, Date.now() - this.t, 3000, i, j);
        }
        // Loop again
        window.requestAnimationFrame(function () { _this.update(_this.t, ctx); });
    };
    /**
     * Converts coordinates on the graph to canvas coordinates
     * @param x
     * @param y
     * @returns an array of the form [x, y] containing the given point on the canvas
     */
    Graph.prototype.convertCoords = function (ctx, x, y) {
        var height = ctx.canvas.height;
        var width = ctx.canvas.width;
        var xp = x * this.scale + width / 2;
        var yp = -y * this.scale + height / 2;
        return [xp, yp];
    };
    Graph.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps.data.matrix);
        // Check if the matrix is getting updated
        if (this.props.data.matrix != nextProps.data.matrix) {
            // Reset the animation time to the current one, thus resetting the animation
            this.t = Date.now();
        }
    };
    // TODO: Make this accept a generic animation function instead of the current one
    Graph.prototype.animateDot = function (ctx, matrix, t, tf, x0, y0) {
        ctx.fillStyle = 'rgb(31, 110, 124)';
        // Calculate final x and y
        var xf = x0 * matrix[0][0] + y0 * matrix[0][1];
        var yf = x0 * matrix[1][0] + y0 * matrix[1][1];
        // Calculate where in the animation we should be
        var x, y;
        if (t < tf) {
            x = (xf - x0) * t / tf + x0;
            y = (yf - y0) * t / tf + y0;
        }
        else {
            x = xf;
            y = yf;
        }
        var finalSpot = this.convertCoords(ctx, x, y);
        // Only draw dot if on the screen
        if (finalSpot[0] < 0 || finalSpot[1] < 0 || finalSpot[0] > ctx.canvas.width || finalSpot[1] > ctx.canvas.height) {
            return;
        }
        // Draw dot
        ctx.beginPath();
        ctx.arc(finalSpot[0], finalSpot[1], 2, 0, Math.PI * 2);
        ctx.fill();
        //ctx.fillRect(finalSpot[0], finalSpot[1], 5, 5);
    };
    Graph.prototype.render = function () {
        return (React.createElement("div", { className: Styles.container, style: { width: this.props.width, height: this.props.height } },
            React.createElement("canvas", { ref: this.ref, className: Styles.graph }, " ")));
    };
    return Graph;
}(React.Component));
exports.Graph = Graph;


/***/ }),

/***/ "./src/components/Matrix/Matrix.tsx":
/*!******************************************!*\
  !*** ./src/components/Matrix/Matrix.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MatrixStyles_css_1 = __webpack_require__(/*! ./MatrixStyles.css */ "./src/components/Matrix/MatrixStyles.css");
/**
 * A matrix houses four input boxes, analogous to a 2 by 2 matrix. When a user fills it,
 * it sends its data to the parent in a 2 by 2 array for processing.
 */
var Matrix = /** @class */ (function (_super) {
    __extends(Matrix, _super);
    function Matrix(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Initializes matrix to the identity matrix
         */
        _this.data = {
            matrix: [[1, 0], [0, 1]]
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    /**
     * Whenever the value of a form element changes, the data variable is updated. This way,
     * other components can access this matrix's contents in the form of a 2 by 2 array.
     * @param event
     */
    Matrix.prototype.onChange = function (event) {
        var value = parseInt(event.currentTarget.value);
        switch (event.currentTarget.name) {
            case "a":
                this.data.matrix[0][0] = value;
                break;
            case "b":
                this.data.matrix[0][1] = value;
                break;
            case "c":
                this.data.matrix[1][0] = value;
                break;
            case "d":
                this.data.matrix[1][1] = value;
                break;
            default:
                console.error("Name" + event.currentTarget.name + " does not exist. Check Matrix.tsx");
        }
        console.log(this.data.matrix);
    };
    Matrix.prototype.render = function () {
        return (React.createElement("div", { style: { height: this.props.height, width: this.props.height }, className: MatrixStyles_css_1.matrix },
            "Matrix ",
            React.createElement("br", null),
            React.createElement("input", { className: MatrixStyles_css_1.input, type: "number", name: "a", defaultValue: "1", onChange: this.onChange }),
            React.createElement("input", { className: MatrixStyles_css_1.input, type: "number", name: "b", defaultValue: "0", onChange: this.onChange }),
            React.createElement("br", null),
            React.createElement("input", { className: MatrixStyles_css_1.input, type: "number", name: "c", defaultValue: "0", onChange: this.onChange }),
            React.createElement("input", { className: MatrixStyles_css_1.input, type: "number", name: "d", defaultValue: "1", onChange: this.onChange })));
    };
    return Matrix;
}(React.Component));
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/components/Matrix/MatrixStyles.css":
/*!************************************************!*\
  !*** ./src/components/Matrix/MatrixStyles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./MatrixStyles.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/Matrix/MatrixStyles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/MenuButton/DropDown/DElementStyles.css":
/*!***************************************************************!*\
  !*** ./src/components/MenuButton/DropDown/DElementStyles.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./DElementStyles.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/MenuButton/DropDown/DElementStyles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/MenuButton/DropDown/DropDownElement.tsx":
/*!****************************************************************!*\
  !*** ./src/components/MenuButton/DropDown/DropDownElement.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DElementStyles_css_1 = __webpack_require__(/*! ./DElementStyles.css */ "./src/components/MenuButton/DropDown/DElementStyles.css");
/**
 * A DropDownElement appears when the MenuButton is pressed and allows the user to select a type
 * of transformation (like a matrix, vector, inverse matrix, etc.)
 */
var DropDownElement = /** @class */ (function (_super) {
    __extends(DropDownElement, _super);
    function DropDownElement(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    /**
     * When this element is clicked, it does nothing, except to override the parent's clicking behavior
     * @param e
     */
    DropDownElement.prototype.onClick = function (e) {
        e.stopPropagation();
        this.props.onClick(this.props.content);
    };
    DropDownElement.prototype.render = function () {
        // If this element is supposed to be visible, then add the visible class to the
        // div element. If not, take it away.
        var className = DElementStyles_css_1.dElement + ((this.props.visible) ? " " + DElementStyles_css_1.visible : "");
        return (React.createElement("div", { onClick: this.onClick, className: className, style: {
                background: this.props.color
            } }, this.props.content));
    };
    return DropDownElement;
}(React.Component));
exports.DropDownElement = DropDownElement;


/***/ }),

/***/ "./src/components/MenuButton/MButtonStyles.css":
/*!*****************************************************!*\
  !*** ./src/components/MenuButton/MButtonStyles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./MButtonStyles.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/MenuButton/MButtonStyles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/MenuButton/MenuButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/MenuButton/MenuButton.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MButtonStyles_css_1 = __webpack_require__(/*! ./MButtonStyles.css */ "./src/components/MenuButton/MButtonStyles.css");
var DropDownElement_1 = __webpack_require__(/*! ./DropDown/DropDownElement */ "./src/components/MenuButton/DropDown/DropDownElement.tsx");
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selected: false
        };
        _this.onClick = _this.onClick.bind(_this);
        _this.onDropDownClick = _this.onDropDownClick.bind(_this);
        return _this;
    }
    MenuButton.prototype.onClick = function (e) {
        this.setState(function (state) {
            return { selected: !state.selected };
        });
    };
    /**
     * Called when the user clicks an item on the dropdown menu. Notifies its parent.
     */
    MenuButton.prototype.onDropDownClick = function (type) {
        this.props.onDropdownClick(type);
    };
    MenuButton.prototype.render = function () {
        return (React.createElement("div", { className: MButtonStyles_css_1.MButton, onClick: this.onClick, style: {
                height: this.props.height,
                width: this.props.height
            } },
            React.createElement(DropDownElement_1.DropDownElement, { onClick: this.onDropDownClick, color: "rgb(250, 157, 157)", content: "matrix", visible: this.state.selected }),
            React.createElement(DropDownElement_1.DropDownElement, { onClick: this.onDropDownClick, color: "rgb(179, 249, 181)", content: "vector", visible: this.state.selected })));
    };
    return MenuButton;
}(React.Component));
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/components/WarpSpace/WarpSpace.tsx":
/*!************************************************!*\
  !*** ./src/components/WarpSpace/WarpSpace.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Styles = __webpack_require__(/*! ./WarpSpaceStyles.css */ "./src/components/WarpSpace/WarpSpaceStyles.css");
/**
 * The WarpSpace button triggers an animation when clicked using the new updated data from
 * the transformation chain
 */
var WarpSpace = /** @class */ (function (_super) {
    __extends(WarpSpace, _super);
    function WarpSpace(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pressed: false,
        };
        return _this;
    }
    WarpSpace.prototype.render = function () {
        return (React.createElement("div", { onClick: this.props.onClick, className: Styles.warpButton, style: {
                height: this.props.height,
                width: this.props.height,
            } }, "Warp Space"));
    };
    return WarpSpace;
}(React.Component));
exports.WarpSpace = WarpSpace;


/***/ }),

/***/ "./src/components/WarpSpace/WarpSpaceStyles.css":
/*!******************************************************!*\
  !*** ./src/components/WarpSpace/WarpSpaceStyles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/typings-for-css-modules-loader/lib?modules&namedExport!./WarpSpaceStyles.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js?modules&namedExport!./src/components/WarpSpace/WarpSpaceStyles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var App_1 = __webpack_require__(/*! ./components/App/App */ "./src/components/App/App.tsx");
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById("root"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map