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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/background.png */ "./src/images/background.png"));

// Module
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.login-form {\n  display: flex;\n  width: 33em;\n  height: 21em;\n  padding: 2em;\n  border-radius: 0.4em;\n  margin: 5em auto 3em;\n  flex-direction: column;\n  align-items: center;\n  background: #fffaf6;\n  color: #7e7975;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(255, 255, 255, 0.4); }\n  .login-form h1, .login-form #log-in {\n    font-size: 3em;\n    padding-bottom: 0.3em;\n    color: #6c6763; }\n  .login-form label {\n    display: block;\n    padding: 0 0 5px 2px;\n    font-size: 0.3em;\n    color: black; }\n\n.login-form .float {\n  width: 40%;\n  padding-top: 0.3em; }\n\n.login-form input[type=text],\n.login-form input[type=password] {\n  display: block;\n  width: 100%;\n  height: 3em;\n  padding: 0.5em;\n  border-radius: 0.2em;\n  font-size: 0.3em;\n  border: 0.2em solid #ebe6e2;\n  transition: all 0.3s ease-out; }\n  .login-form input[type=text] :hover,\n  .login-form input[type=password] :hover {\n    border-color: #CCC; }\n\n.login-form input[type=submit] {\n  width: 7em;\n  height: 2em;\n  box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.3);\n  border-radius: 0.3em;\n  cursor: pointer;\n  font-size: 0.5em;\n  text-align: center;\n  font-weight: bold;\n  background: linear-gradient(#fbd568, #ffb347);\n  border: 1px solid #f4ab4c;\n  color: #996319; }\n  .login-form input[type=submit]:hover {\n    box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), inset 0 20px 40px rgba(255, 255, 255, 0.15); }\n  .login-form input[type=submit]:active {\n    top: 1px; }\n\n.hidden {\n  display: none; }\n\n.hide {\n  visibility: hidden; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") center/100% 100% no-repeat;\n  width: 100%;\n  height: 100vh; }\n\n.login-page {\n  margin-top: 10em; }\n\nh1 {\n  text-align: center;\n  font-size: 5em;\n  color: #79bfee; }\n\nh2 {\n  font-size: 2.5em;\n  color: #0d25ad; }\n\ninput {\n  display: block;\n  width: 9em;\n  height: 1.5em;\n  padding: 0.1em;\n  border-radius: 0.1em;\n  font-size: 2em;\n  font-weight: lighter;\n  margin-bottom: 1em; }\n\nbutton {\n  width: 6em;\n  height: 2em;\n  font-size: 1em;\n  background-color: #4287f5;\n  border: none;\n  border-radius: 3em;\n  color: #fff;\n  transition: 300ms; }\n  button:hover {\n    cursor: pointer;\n    color: #0505c5;\n    opacity: 0.7; }\n\n.book-btn {\n  margin: 1em 0; }\n\n.main-page {\n  width: 100%;\n  height: -webkit-fill-available;\n  background-color: #ddd4d4;\n  overflow-y: auto; }\n\nnav {\n  display: flex;\n  background-color: #3e97de; }\n\nimg {\n  width: 3em;\n  height: 3em;\n  margin-right: 1em; }\n\n.dashboard {\n  margin: 10em 10em;\n  display: flex; }\n\n.left-side {\n  background-color: rgba(195, 227, 249, 0.6);\n  width: 30%; }\n\n.today-data {\n  margin-bottom: 2em; }\n\n.label-name {\n  font-size: 1.6em; }\n\np {\n  font-size: 2.5em; }\n  p:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n\n.right-side {\n  margin-left: 10%;\n  width: 60%;\n  display: flex; }\n\n.delete-booking {\n  background-color: rgba(195, 227, 249, 0.6);\n  width: 40%;\n  margin-left: 2em; }\n\n#room-num {\n  width: 6em; }\n\n.delete-booking-btn {\n  width: 9em; }\n\n.guest-data {\n  background-color: rgba(195, 227, 249, 0.6);\n  width: 30em; }\n\n#guest {\n  width: 7em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./src/Booking.js":
/*!************************!*\
  !*** ./src/Booking.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Booking {
  constructor(id, userID, date, roomNumber, roomServiceCharges) {
    this.id = id;
    this.userID = userID;
    this.date = date;
    this.roomNumber = roomNumber;
    this.roomServiceCharges = roomServiceCharges || [];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Booking);

/***/ }),

/***/ "./src/BookingsRepo.js":
/*!*****************************!*\
  !*** ./src/BookingsRepo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BookingsRepo {
  constructor(bookings) {
    this.bookings = bookings || [];
  }

  returnBookedRoomsNum(referance, detail) {
    return this.bookings.reduce((bookedRoomsNum, booking) => {
      if (booking[referance] === detail) {
        bookedRoomsNum.push(booking.roomNumber);
      }
      return bookedRoomsNum
    }, [])
  }

  filterBookingsByRef(referance, detail) {
    return this.bookings.filter(booking => booking[referance] === detail);
  }

  findBooking(date, num) {
    return this.bookings.find(booking => booking.date === date && booking.roomNumber === num);
  }

  removeBooking(id) {
    this.bookings = this.bookings.filter(booking => booking.id !== id);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BookingsRepo);

/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Customer extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(id, name) {
    super(id, name);
  }

  returnUserRevenue(id, bookings, rooms) {
    return bookings.reduce((totalCost, booking) => {
      rooms.forEach(room => {
        if (booking.userID === id && booking.roomNumber === room.number) {
          totalCost += room.costPerNight;
        }
      });
      return totalCost;
    }, 0)
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Customer);

/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name) {
    super('manager', name);
  }

  returnTodayRevenue(date, bookings, rooms) {
    return bookings.reduce((totalCost, booking) => {
      rooms.forEach(room => {
        if (booking.date === date && booking.roomNumber === room.number) {
          totalCost += room.costPerNight;
        }
      });
      return totalCost;
    }, 0)
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/Room.js":
/*!*********************!*\
  !*** ./src/Room.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Room {
  constructor(number, roomType, bidet, bedSize, numBeds, costPerNight) {
    this.number = number;
    this.roomType = roomType;
    this.bidet = bidet;
    this.bedSize = bedSize;
    this.numBeds = numBeds;
    this.costPerNight = costPerNight;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./src/RoomsRepo.js":
/*!**************************!*\
  !*** ./src/RoomsRepo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RoomsRepo {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  filterRoomsByType(type, rooms) {
    return this.rooms.reduce((typeRooms, eachRoom) => {
      rooms.forEach(room => {
        if (room === eachRoom.number && eachRoom.roomType === type) {
          typeRooms.push(eachRoom.number)
        }
      })
      return typeRooms
    }, [])
  }

  returnAvailableRooms(roomsTaken) {
    return this.rooms.reduce((roomsNum, room) => {
      if (!roomsTaken.includes(room.number)) {
        roomsNum.push(room.number);
      }
      return roomsNum;
    }, [])
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RoomsRepo);

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  returnUser(referance, users) {
    referance.toLowerCase(); 
    return users.find(user => user.id == referance || user.name === referance);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getData = (path) => {
  return fetch(path)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const updateData = (path, action, data) => {
  return fetch(path, {
    method: action,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const apiCalls = {

  getUserData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
  },

  getRoomData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
  },

  getBookingData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
  },

  addBookingData: (bookingData) => {
    return updateData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'POST', bookingData)
  },

  deleteBookingData: (bookingData) => {
    return updateData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'DELETE', bookingData)
  }

}

/* harmony default export */ __webpack_exports__["default"] = (apiCalls);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdate.js":
/*!**************************!*\
  !*** ./src/domUpdate.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdate = {
  updateElement: elements => {
    elements.forEach(element => {
      if (element.addHidden) {
        element.section.classList.add('hidden')
      } else if (element.addHide) {
        element.section.classList.add('hide')
      } else {
        element.section.classList.remove('hidden', 'hide')
      }
    });
  },

  updateWelcomeMsg: (title, user) => {
    title.innerText = `${user.name}`;
  },

  updateManagerTodayData: (section, rooms, revenue, occupation) => {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="available-room">Available rooms today: ${rooms}</h2>
    <h2 class="today-revenue">Today's total revenue: $${revenue.toFixed(2)}</h2>
    <h2 class="today-occupation">Room Occupation rate: ${occupation*100}% </h2>
    `
  },

  updateAvailableRooms: function (section, rooms) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <section class="display-rooms">${this.listRooms(rooms)}
    `
  },

  listRooms: (rooms) => {
    let section = '';
    rooms.forEach(room => {
      section +=
      `
      <p class="${room}" tabindex="0">room ${room}</p>
      `
    })
    return section;
  },

  displayTypes: function (section, allTypes) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <option disabled selected value>-- select type --</option>
    ${this.updateTypes(allTypes)}
    `
  },

  updateTypes: allTypes => {
    let section = ''
    allTypes.forEach(type => {
      section +=
      `
      <option>${type}</option>
      `
    })
    return section;
  },

  displayMessage: element => {
    if (element.applogy) {
      element.section.innerText = 'We are very sorry!!! Currently there are no rooms available for that type/day, please try a different type/date!'
    } else if (element.error) {
      element.section.innerText = 'Sorry! Can not operate on a past date or without choosing a user, please try again! '
    } 
  },

  updateGuestInfo: function (section, bookings, cost) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="guest guest-booking">Booking History</h2>
    <section>${this.displayBookings(bookings)}</section>
    <h2 class="guest guest-cost">Total Cost: ${cost.toFixed(2)}</h2>
    `
  },

  displayBookings: bookings => {
    let section = '';
    bookings.forEach(booking => {
      const date = new Date(booking.date);
      const chosenDate = date.toDateString().split(' ');
      section += 
      `
      <p>${chosenDate[1]} ${chosenDate[2]}, ${chosenDate[3]}  Room# ${booking.roomNumber}</p>
      `
    });
    return section;
  },

  updateCustomerView: function (section1, bookings, cost) {
    section1.innerHTML = '';
    section1.innerHTML =
    `
    <section class="display-guest-data">
      <h2 class="guest guest-booking">Booking History</h2>
      <section>${this.displayBookings(bookings)}</section>
      <h2 class="guest guest-cost">Total Cost: $${cost.toFixed(2)}</h2> 
    </section>
    `
  }

}

/* harmony default export */ __webpack_exports__["default"] = (domUpdate);

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/background.png";

/***/ }),

/***/ "./src/images/user-icon.png":
/*!**********************************!*\
  !*** ./src/images/user-icon.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/user-icon.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Room */ "./src/Room.js");
/* harmony import */ var _RoomsRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoomsRepo */ "./src/RoomsRepo.js");
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Booking */ "./src/Booking.js");
/* harmony import */ var _BookingsRepo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BookingsRepo */ "./src/BookingsRepo.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _domUpdate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domUpdate */ "./src/domUpdate.js");
/* harmony import */ var _images_user_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/user-icon.png */ "./src/images/user-icon.png");
/* harmony import */ var _images_user_icon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_user_icon_png__WEBPACK_IMPORTED_MODULE_9__);











let today, selectDate, currentCustomer, currentUser;
let customers, rooms, bookings, roomsRepo, bookingsRepo; 
let newBooking = {userID: 1, date: '', roomNumber: 1};

const loginInputs = document.querySelectorAll('.login-input');
const loginData = Array.from(loginInputs); 
const loginBtn = document.querySelector('#register-btn');
const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');
const listRoomsSection = document.querySelector('.list-rooms');
const selectDateBtn = document.querySelector('.select-date-btn');
const displayRoomsSection = document.querySelector('.display-rooms');
const guestSearchBtn = document.querySelector('.search-customer-btn');
const displayGuestDataSection = document.querySelector('.display-guest-data');
const bookBtn = document.querySelector('.book-btn');
const deleteBookingInputs = document.querySelectorAll('.delete-input input');
const deleteBookingBtn = document.querySelector('.delete-booking-btn');
const messageSection = document.querySelectorAll('.message');

loginBtn.addEventListener('click', checkLoginInputs);
selectDateBtn.addEventListener('click', displayAvailableRooms);
guestSearchBtn.addEventListener('click', displayGuestInfo);
listRoomsSection.addEventListener('change', displayFilterRooms);
displayRoomsSection.addEventListener('click', selectARoom);
bookBtn.addEventListener('click', makeBooking);
deleteBookingBtn.addEventListener('click', deleteBooking);

Promise.all([_apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getUserData(), _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getRoomData(), _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getBookingData()])
  .then(data => {
    const allData = data.reduce((dataSet, eachDataset) => {      
      return dataSet = {...dataSet, ...eachDataset}
    }, {});
    instanciatate(allData);
    updateTodayDate();
  })

function instanciatate(dataSet) {
  customers = dataSet.users.map(user => new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](user.id, user.name));
  rooms = dataSet.rooms.map(room => new _Room__WEBPACK_IMPORTED_MODULE_3__["default"](room.number, room.roomType, room.bidet, room.bedSize, room.numBeds, room.costPerNight));
  roomsRepo = new _RoomsRepo__WEBPACK_IMPORTED_MODULE_4__["default"](rooms);
  bookings = dataSet.bookings.map(booking => new _Booking__WEBPACK_IMPORTED_MODULE_5__["default"](booking.id, booking.userID, booking.date, booking.roomNumber, booking.roomServiceCharges));
  bookingsRepo = new _BookingsRepo__WEBPACK_IMPORTED_MODULE_6__["default"](bookings);
}

function updateTodayDate() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  month = month < 10 ? `0${month}` : month
  date = date < 10 ? `0${date}` : date
  today = `${year}/${month}/${date}`;
}

function checkLoginInputs() {
  event.preventDefault();
  if (!areInputsFilled() && checkUsername() && checkPassword()) {
    displayPage();
  }
}

function areInputsFilled() {
  return loginData.find(input => input.value === '');
}

function checkUsername() {
  const splitInput = loginData[0].value.split('customer'); 
  if (splitInput[0] === 'manager') {
    currentUser = new _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]('Elle');
    return true;
  } else if (splitInput[0] === '' && splitInput[1] < 51) {
    const id = parseInt(splitInput[1]).toFixed(0);
    currentUser = updateCurrentCustomer(id);
    return true;
  } else {
    return false
  }
}

function updateCurrentCustomer(id) {
  id = parseInt(id);
  return customers.find(customer => customer.id === id);
}

function checkPassword() {
  return loginData[1].value === 'overlook2020';
}

function displayPage() {
  if (currentUser instanceof _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    displayManagerPage();
  } else if (currentUser instanceof _Customer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    displayCustomerPage();
  }
  updateWelcome();
}

function displayManagerPage() { 
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}];
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement(sections);
  displayManagerTodayData();
}

function displayManagerTodayData() {
  const todayDataSection = document.querySelector('.today-data');
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', today);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  const revenue = currentUser.returnTodayRevenue(today, bookings, rooms);
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateManagerTodayData(todayDataSection, (openRooms.length), revenue, ((bookedRooms.length) / 25));
}

function displayAvailableRooms() {  
  const calendarInput = document.querySelector('#calendar-input');
  selectDate = calendarInput.value.split('-').join('/');
  if (!selectDate || selectDate < today) {
    displayMessage(0, 'error');
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: listRoomsSection, addHidden: true}]);
  } else if (!currentCustomer && currentUser instanceof _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    displayMessage(0, 'error');
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: listRoomsSection, addHidden: true}]);
  } else {
    updateAvailableRooms();
    displayFilterTypes();
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: listRoomsSection}, {section: messageSection[0], addHidden: true}]);
  }
}

function updateAvailableRooms() {
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', selectDate);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateAvailableRooms(displayRoomsSection, openRooms);
}

function displayFilterTypes() {
  const listTypes = document.querySelector('.list-types');
  const types = returnAllRoomTypes();
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].displayTypes(listTypes, types);
}

function displayMessage(num, type) {
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: messageSection[num]}]);
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].displayMessage({section: messageSection[num], [type]: true});
}

function returnAllRoomTypes() {
  return rooms.reduce((types, room) => {
    if (!types.includes(room.roomType)) {
      types.push(room.roomType);
    }
    return types
  }, [])
}

function displayFilterRooms() {
  const filterRooms = filterAvailableRooms();
  if (filterRooms.length !== 0) {
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: messageSection[1], addHidden: true}]);
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateAvailableRooms(displayRoomsSection, filterRooms);
  } else {
    displayMessage(1, 'applogy');
  }
}

function filterAvailableRooms() {
  const type = event.target.value;
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', selectDate);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  return roomsRepo.filterRoomsByType(type, openRooms);
}

function selectARoom() {
  newBooking.roomNumber = parseInt(event.target.className);
}

function makeBooking() {
  newBooking.date = selectDate;
  if (currentCustomer) {
    addBooking(currentCustomer);
  } else if (currentUser instanceof _Customer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    addBooking(currentUser);
  } 
}

function addBooking(selectUser) {
  newBooking.userID = selectUser.id;
  _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].addBookingData(newBooking)
    .then((data) => {
      bookingsRepo.bookings.push(new _Booking__WEBPACK_IMPORTED_MODULE_5__["default"](data.id, data.userID, data.date, data.roomNumber));
      selectUser === currentCustomer ? updateGuestInfo() : updateCustomerPage();
    })
}

function returnGuestInfo() {
  const guestSearchInput = document.querySelector('#guest');
  return customers.find(customer => customer.name === guestSearchInput.value)
}

function displayGuestInfo() {
  currentCustomer = returnGuestInfo();   
  if (currentCustomer) {
    updateGuestInfo();
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: displayGuestDataSection}]);
  } else {
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: displayGuestDataSection, addHidden: true}]);
  }
}

function updateGuestInfo() {
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentCustomer.id);
  const totalCost = currentCustomer.returnUserRevenue(currentCustomer.id, bookings, rooms) 
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateGuestInfo(displayGuestDataSection, bookings, totalCost);
}

function deleteBooking() {
  const inquery = checkDeleteBookingInputs();
  if (inquery && currentCustomer && selectDate > today) {
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: messageSection[2], addHidden: true}]);
    _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].deleteBookingData({id: inquery.id})
      .then(() => {
        udpateDeleteBooking(inquery.id);
        updateGuestInfo();
      })
  } else {
    displayMessage(2, 'error')
  }
}

function checkDeleteBookingInputs() {
  selectDate = deleteBookingInputs[0].value.split('-').join('/');
  const roomNum = parseInt(deleteBookingInputs[1].value);
  return bookingsRepo.findBooking(selectDate, roomNum);
}

function udpateDeleteBooking(id) {
  deleteBookingInputs[0].value = '';
  deleteBookingInputs[1].value = '';
  bookingsRepo.removeBooking(id)
}

function updateWelcome() {
  const welcome = document.querySelector('.welcome');
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateWelcomeMsg(welcome, currentUser);
}

function displayCustomerPage() {
  const deleteBookingSection = document.querySelector('.delete-booking');
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}, {section: deleteBookingSection, addHidden: true}];
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement(sections);
  updateCustomerPage();
}

function updateCustomerPage() {
  const guestSection = document.querySelector('.guest-data');
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentUser.id);
  const totalCost = currentUser.returnUserRevenue(currentUser.id, bookings, rooms) 
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateCustomerView(guestSection, bookings, totalCost);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZ3NSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbXNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3VzZXItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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QTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJE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QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlDQUFpQyxpREFBUTtBQUM1QztBQUNBLEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWO0FBQ0EscUNBQXFDLGdEQUFPO0FBQzVDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0M7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUyxpQkFBaUIsaUNBQWlDO0FBQy9ELEdBQUc7QUFDSCxJQUFJLGtEQUFTLGlCQUFpQixrREFBa0Q7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUyxpQkFBaUIsNENBQTRDO0FBQzFFLElBQUksaURBQVEsb0JBQW9CLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvQ0FBb0MsR0FBRyxrQkFBa0IsR0FBRywrQ0FBK0M7QUFDaEksRUFBRSxrREFBUztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1giLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzNlbTtcXG4gIGhlaWdodDogMjFlbTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xcbiAgbWFyZ2luOiA1ZW0gYXV0byAzZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmZhZjY7XFxuICBjb2xvcjogIzdlNzk3NTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwIDEycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XFxuICAubG9naW4tZm9ybSBoMSwgLmxvZ2luLWZvcm0gI2xvZy1pbiB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XFxuICAgIGNvbG9yOiAjNmM2NzYzOyB9XFxuICAubG9naW4tZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDAgNXB4IDJweDtcXG4gICAgZm9udC1zaXplOiAwLjNlbTtcXG4gICAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLmxvZ2luLWZvcm0gLmZsb2F0IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nLXRvcDogMC4zZW07IH1cXG5cXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICBmb250LXNpemU6IDAuM2VtO1xcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCAjZWJlNmUyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0W3R5cGU9dGV4dF0gOmhvdmVyLFxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0gOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjQ0NDOyB9XFxuXFxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIHdpZHRoOiA3ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZiZDU2OCwgI2ZmYjM0Nyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjRhYjRjO1xcbiAgY29sb3I6ICM5OTYzMTk7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAyMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgfVxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XFxuICAgIHRvcDogMXB4OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgY2VudGVyLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4ubG9naW4tcGFnZSB7XFxuICBtYXJnaW4tdG9wOiAxMGVtOyB9XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBjb2xvcjogIzc5YmZlZTsgfVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBjb2xvcjogIzBkMjVhZDsgfVxcblxcbmlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDllbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBwYWRkaW5nOiAwLjFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogNmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg3ZjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDMwMG1zOyB9XFxuICBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMDUwNWM1O1xcbiAgICBvcGFjaXR5OiAwLjc7IH1cXG5cXG4uYm9vay1idG4ge1xcbiAgbWFyZ2luOiAxZW0gMDsgfVxcblxcbi5tYWluLXBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkNGQ0O1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTdkZTsgfVxcblxcbmltZyB7XFxuICB3aWR0aDogM2VtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi5kYXNoYm9hcmQge1xcbiAgbWFyZ2luOiAxMGVtIDEwZW07XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmxlZnQtc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NSwgMjI3LCAyNDksIDAuNik7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxuLnRvZGF5LWRhdGEge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtOyB9XFxuXFxuLmxhYmVsLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjZlbTsgfVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAyLjVlbTsgfVxcbiAgcDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnJpZ2h0LXNpZGUge1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmRlbGV0ZS1ib29raW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk1LCAyMjcsIDI0OSwgMC42KTtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuI3Jvb20tbnVtIHtcXG4gIHdpZHRoOiA2ZW07IH1cXG5cXG4uZGVsZXRlLWJvb2tpbmctYnRuIHtcXG4gIHdpZHRoOiA5ZW07IH1cXG5cXG4uZ3Vlc3QtZGF0YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NSwgMjI3LCAyNDksIDAuNik7XFxuICB3aWR0aDogMzBlbTsgfVxcblxcbiNndWVzdCB7XFxuICB3aWR0aDogN2VtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3RvcihpZCwgdXNlcklELCBkYXRlLCByb29tTnVtYmVyLCByb29tU2VydmljZUNoYXJnZXMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy51c2VySUQgPSB1c2VySUQ7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnJvb21OdW1iZXIgPSByb29tTnVtYmVyO1xuICAgIHRoaXMucm9vbVNlcnZpY2VDaGFyZ2VzID0gcm9vbVNlcnZpY2VDaGFyZ2VzIHx8IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmciLCJjbGFzcyBCb29raW5nc1JlcG8ge1xuICBjb25zdHJ1Y3Rvcihib29raW5ncykge1xuICAgIHRoaXMuYm9va2luZ3MgPSBib29raW5ncyB8fCBbXTtcbiAgfVxuXG4gIHJldHVybkJvb2tlZFJvb21zTnVtKHJlZmVyYW5jZSwgZGV0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va2luZ3MucmVkdWNlKChib29rZWRSb29tc051bSwgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmdbcmVmZXJhbmNlXSA9PT0gZGV0YWlsKSB7XG4gICAgICAgIGJvb2tlZFJvb21zTnVtLnB1c2goYm9va2luZy5yb29tTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib29rZWRSb29tc051bVxuICAgIH0sIFtdKVxuICB9XG5cbiAgZmlsdGVyQm9va2luZ3NCeVJlZihyZWZlcmFuY2UsIGRldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tpbmdzLmZpbHRlcihib29raW5nID0+IGJvb2tpbmdbcmVmZXJhbmNlXSA9PT0gZGV0YWlsKTtcbiAgfVxuXG4gIGZpbmRCb29raW5nKGRhdGUsIG51bSkge1xuICAgIHJldHVybiB0aGlzLmJvb2tpbmdzLmZpbmQoYm9va2luZyA9PiBib29raW5nLmRhdGUgPT09IGRhdGUgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSBudW0pO1xuICB9XG5cbiAgcmVtb3ZlQm9va2luZyhpZCkge1xuICAgIHRoaXMuYm9va2luZ3MgPSB0aGlzLmJvb2tpbmdzLmZpbHRlcihib29raW5nID0+IGJvb2tpbmcuaWQgIT09IGlkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nc1JlcG8iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgIHN1cGVyKGlkLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVyblVzZXJSZXZlbnVlKGlkLCBib29raW5ncywgcm9vbXMpIHtcbiAgICByZXR1cm4gYm9va2luZ3MucmVkdWNlKCh0b3RhbENvc3QsIGJvb2tpbmcpID0+IHtcbiAgICAgIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmIChib29raW5nLnVzZXJJRCA9PT0gaWQgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRvdGFsQ29zdCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcjsiLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcignbWFuYWdlcicsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuVG9kYXlSZXZlbnVlKGRhdGUsIGJvb2tpbmdzLCByb29tcykge1xuICAgIHJldHVybiBib29raW5ncy5yZWR1Y2UoKHRvdGFsQ29zdCwgYm9va2luZykgPT4ge1xuICAgICAgcm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgaWYgKGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZSAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgICAgdG90YWxDb3N0ICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0b3RhbENvc3Q7XG4gICAgfSwgMClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IiwiY2xhc3MgUm9vbSB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgcm9vbVR5cGUsIGJpZGV0LCBiZWRTaXplLCBudW1CZWRzLCBjb3N0UGVyTmlnaHQpIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnJvb21UeXBlID0gcm9vbVR5cGU7XG4gICAgdGhpcy5iaWRldCA9IGJpZGV0O1xuICAgIHRoaXMuYmVkU2l6ZSA9IGJlZFNpemU7XG4gICAgdGhpcy5udW1CZWRzID0gbnVtQmVkcztcbiAgICB0aGlzLmNvc3RQZXJOaWdodCA9IGNvc3RQZXJOaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tIiwiY2xhc3MgUm9vbXNSZXBvIHtcbiAgY29uc3RydWN0b3Iocm9vbXMpIHtcbiAgICB0aGlzLnJvb21zID0gcm9vbXMgfHwgW107XG4gIH1cblxuICBmaWx0ZXJSb29tc0J5VHlwZSh0eXBlLCByb29tcykge1xuICAgIHJldHVybiB0aGlzLnJvb21zLnJlZHVjZSgodHlwZVJvb21zLCBlYWNoUm9vbSkgPT4ge1xuICAgICAgcm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgaWYgKHJvb20gPT09IGVhY2hSb29tLm51bWJlciAmJiBlYWNoUm9vbS5yb29tVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHR5cGVSb29tcy5wdXNoKGVhY2hSb29tLm51bWJlcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0eXBlUm9vbXNcbiAgICB9LCBbXSlcbiAgfVxuXG4gIHJldHVybkF2YWlsYWJsZVJvb21zKHJvb21zVGFrZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yb29tcy5yZWR1Y2UoKHJvb21zTnVtLCByb29tKSA9PiB7XG4gICAgICBpZiAoIXJvb21zVGFrZW4uaW5jbHVkZXMocm9vbS5udW1iZXIpKSB7XG4gICAgICAgIHJvb21zTnVtLnB1c2gocm9vbS5udW1iZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJvb21zTnVtO1xuICAgIH0sIFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21zUmVwbyIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcmV0dXJuVXNlcihyZWZlcmFuY2UsIHVzZXJzKSB7XG4gICAgcmVmZXJhbmNlLnRvTG93ZXJDYXNlKCk7IFxuICAgIHJldHVybiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSByZWZlcmFuY2UgfHwgdXNlci5uYW1lID09PSByZWZlcmFuY2UpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXIiLCJjb25zdCBnZXREYXRhID0gKHBhdGgpID0+IHtcbiAgcmV0dXJuIGZldGNoKHBhdGgpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbn1cblxuY29uc3QgdXBkYXRlRGF0YSA9IChwYXRoLCBhY3Rpb24sIGRhdGEpID0+IHtcbiAgcmV0dXJuIGZldGNoKHBhdGgsIHtcbiAgICBtZXRob2Q6IGFjdGlvbixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG59XG5cbmNvbnN0IGFwaUNhbGxzID0ge1xuXG4gIGdldFVzZXJEYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIGdldERhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJyk7XG4gIH0sXG5cbiAgZ2V0Um9vbURhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKTtcbiAgfSxcblxuICBnZXRCb29raW5nRGF0YTogKCkgPT4ge1xuICAgIHJldHVybiBnZXREYXRhKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycpO1xuICB9LFxuXG4gIGFkZEJvb2tpbmdEYXRhOiAoYm9va2luZ0RhdGEpID0+IHtcbiAgICByZXR1cm4gdXBkYXRlRGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCAnUE9TVCcsIGJvb2tpbmdEYXRhKVxuICB9LFxuXG4gIGRlbGV0ZUJvb2tpbmdEYXRhOiAoYm9va2luZ0RhdGEpID0+IHtcbiAgICByZXR1cm4gdXBkYXRlRGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCAnREVMRVRFJywgYm9va2luZ0RhdGEpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlDYWxsczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjb25zdCBkb21VcGRhdGUgPSB7XG4gIHVwZGF0ZUVsZW1lbnQ6IGVsZW1lbnRzID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuYWRkSGlkZGVuKSB7XG4gICAgICAgIGVsZW1lbnQuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmFkZEhpZGUpIHtcbiAgICAgICAgZWxlbWVudC5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicsICdoaWRlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVXZWxjb21lTXNnOiAodGl0bGUsIHVzZXIpID0+IHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHt1c2VyLm5hbWV9YDtcbiAgfSxcblxuICB1cGRhdGVNYW5hZ2VyVG9kYXlEYXRhOiAoc2VjdGlvbiwgcm9vbXMsIHJldmVudWUsIG9jY3VwYXRpb24pID0+IHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBgXG4gICAgPGgyIGNsYXNzPVwiYXZhaWxhYmxlLXJvb21cIj5BdmFpbGFibGUgcm9vbXMgdG9kYXk6ICR7cm9vbXN9PC9oMj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RheS1yZXZlbnVlXCI+VG9kYXkncyB0b3RhbCByZXZlbnVlOiAkJHtyZXZlbnVlLnRvRml4ZWQoMil9PC9oMj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RheS1vY2N1cGF0aW9uXCI+Um9vbSBPY2N1cGF0aW9uIHJhdGU6ICR7b2NjdXBhdGlvbioxMDB9JSA8L2gyPlxuICAgIGBcbiAgfSxcblxuICB1cGRhdGVBdmFpbGFibGVSb29tczogZnVuY3Rpb24gKHNlY3Rpb24sIHJvb21zKSB7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1yb29tc1wiPiR7dGhpcy5saXN0Um9vbXMocm9vbXMpfVxuICAgIGBcbiAgfSxcblxuICBsaXN0Um9vbXM6IChyb29tcykgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gJyc7XG4gICAgcm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgIHNlY3Rpb24gKz1cbiAgICAgIGBcbiAgICAgIDxwIGNsYXNzPVwiJHtyb29tfVwiIHRhYmluZGV4PVwiMFwiPnJvb20gJHtyb29tfTwvcD5cbiAgICAgIGBcbiAgICB9KVxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9LFxuXG4gIGRpc3BsYXlUeXBlczogZnVuY3Rpb24gKHNlY3Rpb24sIGFsbFR5cGVzKSB7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQgdmFsdWU+LS0gc2VsZWN0IHR5cGUgLS08L29wdGlvbj5cbiAgICAke3RoaXMudXBkYXRlVHlwZXMoYWxsVHlwZXMpfVxuICAgIGBcbiAgfSxcblxuICB1cGRhdGVUeXBlczogYWxsVHlwZXMgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gJydcbiAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgc2VjdGlvbiArPVxuICAgICAgYFxuICAgICAgPG9wdGlvbj4ke3R5cGV9PC9vcHRpb24+XG4gICAgICBgXG4gICAgfSlcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfSxcblxuICBkaXNwbGF5TWVzc2FnZTogZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQuYXBwbG9neSkge1xuICAgICAgZWxlbWVudC5zZWN0aW9uLmlubmVyVGV4dCA9ICdXZSBhcmUgdmVyeSBzb3JyeSEhISBDdXJyZW50bHkgdGhlcmUgYXJlIG5vIHJvb21zIGF2YWlsYWJsZSBmb3IgdGhhdCB0eXBlL2RheSwgcGxlYXNlIHRyeSBhIGRpZmZlcmVudCB0eXBlL2RhdGUhJ1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5lcnJvcikge1xuICAgICAgZWxlbWVudC5zZWN0aW9uLmlubmVyVGV4dCA9ICdTb3JyeSEgQ2FuIG5vdCBvcGVyYXRlIG9uIGEgcGFzdCBkYXRlIG9yIHdpdGhvdXQgY2hvb3NpbmcgYSB1c2VyLCBwbGVhc2UgdHJ5IGFnYWluISAnXG4gICAgfSBcbiAgfSxcblxuICB1cGRhdGVHdWVzdEluZm86IGZ1bmN0aW9uIChzZWN0aW9uLCBib29raW5ncywgY29zdCkge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8aDIgY2xhc3M9XCJndWVzdCBndWVzdC1ib29raW5nXCI+Qm9va2luZyBIaXN0b3J5PC9oMj5cbiAgICA8c2VjdGlvbj4ke3RoaXMuZGlzcGxheUJvb2tpbmdzKGJvb2tpbmdzKX08L3NlY3Rpb24+XG4gICAgPGgyIGNsYXNzPVwiZ3Vlc3QgZ3Vlc3QtY29zdFwiPlRvdGFsIENvc3Q6ICR7Y29zdC50b0ZpeGVkKDIpfTwvaDI+XG4gICAgYFxuICB9LFxuXG4gIGRpc3BsYXlCb29raW5nczogYm9va2luZ3MgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gJyc7XG4gICAgYm9va2luZ3MuZm9yRWFjaChib29raW5nID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShib29raW5nLmRhdGUpO1xuICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IGRhdGUudG9EYXRlU3RyaW5nKCkuc3BsaXQoJyAnKTtcbiAgICAgIHNlY3Rpb24gKz0gXG4gICAgICBgXG4gICAgICA8cD4ke2Nob3NlbkRhdGVbMV19ICR7Y2hvc2VuRGF0ZVsyXX0sICR7Y2hvc2VuRGF0ZVszXX0gIFJvb20jICR7Ym9va2luZy5yb29tTnVtYmVyfTwvcD5cbiAgICAgIGBcbiAgICB9KTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfSxcblxuICB1cGRhdGVDdXN0b21lclZpZXc6IGZ1bmN0aW9uIChzZWN0aW9uMSwgYm9va2luZ3MsIGNvc3QpIHtcbiAgICBzZWN0aW9uMS5pbm5lckhUTUwgPSAnJztcbiAgICBzZWN0aW9uMS5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktZ3Vlc3QtZGF0YVwiPlxuICAgICAgPGgyIGNsYXNzPVwiZ3Vlc3QgZ3Vlc3QtYm9va2luZ1wiPkJvb2tpbmcgSGlzdG9yeTwvaDI+XG4gICAgICA8c2VjdGlvbj4ke3RoaXMuZGlzcGxheUJvb2tpbmdzKGJvb2tpbmdzKX08L3NlY3Rpb24+XG4gICAgICA8aDIgY2xhc3M9XCJndWVzdCBndWVzdC1jb3N0XCI+VG90YWwgQ29zdDogJCR7Y29zdC50b0ZpeGVkKDIpfTwvaDI+IFxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2JhY2tncm91bmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy91c2VyLWljb24ucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcbmltcG9ydCBDdXN0b21lciBmcm9tICcuL0N1c3RvbWVyJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgUm9vbXNSZXBvIGZyb20gJy4vUm9vbXNSZXBvJztcbmltcG9ydCBCb29raW5nIGZyb20gJy4vQm9va2luZyc7XG5pbXBvcnQgQm9va2luZ3NSZXBvIGZyb20gJy4vQm9va2luZ3NSZXBvJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBkb21VcGRhdGUgZnJvbSAnLi9kb21VcGRhdGUnO1xuaW1wb3J0ICcuL2ltYWdlcy91c2VyLWljb24ucG5nJ1xuXG5sZXQgdG9kYXksIHNlbGVjdERhdGUsIGN1cnJlbnRDdXN0b21lciwgY3VycmVudFVzZXI7XG5sZXQgY3VzdG9tZXJzLCByb29tcywgYm9va2luZ3MsIHJvb21zUmVwbywgYm9va2luZ3NSZXBvOyBcbmxldCBuZXdCb29raW5nID0ge3VzZXJJRDogMSwgZGF0ZTogJycsIHJvb21OdW1iZXI6IDF9O1xuXG5jb25zdCBsb2dpbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dpbi1pbnB1dCcpO1xuY29uc3QgbG9naW5EYXRhID0gQXJyYXkuZnJvbShsb2dpbklucHV0cyk7IFxuY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItYnRuJyk7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpO1xuY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XG5jb25zdCBsaXN0Um9vbXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Qtcm9vbXMnKTtcbmNvbnN0IHNlbGVjdERhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWRhdGUtYnRuJyk7XG5jb25zdCBkaXNwbGF5Um9vbXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktcm9vbXMnKTtcbmNvbnN0IGd1ZXN0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jdXN0b21lci1idG4nKTtcbmNvbnN0IGRpc3BsYXlHdWVzdERhdGFTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktZ3Vlc3QtZGF0YScpO1xuY29uc3QgYm9va0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWJ0bicpO1xuY29uc3QgZGVsZXRlQm9va2luZ0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaW5wdXQgaW5wdXQnKTtcbmNvbnN0IGRlbGV0ZUJvb2tpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJvb2tpbmctYnRuJyk7XG5jb25zdCBtZXNzYWdlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXNzYWdlJyk7XG5cbmxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMb2dpbklucHV0cyk7XG5zZWxlY3REYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUF2YWlsYWJsZVJvb21zKTtcbmd1ZXN0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUd1ZXN0SW5mbyk7XG5saXN0Um9vbXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlGaWx0ZXJSb29tcyk7XG5kaXNwbGF5Um9vbXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QVJvb20pO1xuYm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VCb29raW5nKTtcbmRlbGV0ZUJvb2tpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVCb29raW5nKTtcblxuUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmdldFVzZXJEYXRhKCksIGFwaUNhbGxzLmdldFJvb21EYXRhKCksIGFwaUNhbGxzLmdldEJvb2tpbmdEYXRhKCldKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBhbGxEYXRhID0gZGF0YS5yZWR1Y2UoKGRhdGFTZXQsIGVhY2hEYXRhc2V0KSA9PiB7ICAgICAgXG4gICAgICByZXR1cm4gZGF0YVNldCA9IHsuLi5kYXRhU2V0LCAuLi5lYWNoRGF0YXNldH1cbiAgICB9LCB7fSk7XG4gICAgaW5zdGFuY2lhdGF0ZShhbGxEYXRhKTtcbiAgICB1cGRhdGVUb2RheURhdGUoKTtcbiAgfSlcblxuZnVuY3Rpb24gaW5zdGFuY2lhdGF0ZShkYXRhU2V0KSB7XG4gIGN1c3RvbWVycyA9IGRhdGFTZXQudXNlcnMubWFwKHVzZXIgPT4gbmV3IEN1c3RvbWVyKHVzZXIuaWQsIHVzZXIubmFtZSkpO1xuICByb29tcyA9IGRhdGFTZXQucm9vbXMubWFwKHJvb20gPT4gbmV3IFJvb20ocm9vbS5udW1iZXIsIHJvb20ucm9vbVR5cGUsIHJvb20uYmlkZXQsIHJvb20uYmVkU2l6ZSwgcm9vbS5udW1CZWRzLCByb29tLmNvc3RQZXJOaWdodCkpO1xuICByb29tc1JlcG8gPSBuZXcgUm9vbXNSZXBvKHJvb21zKTtcbiAgYm9va2luZ3MgPSBkYXRhU2V0LmJvb2tpbmdzLm1hcChib29raW5nID0+IG5ldyBCb29raW5nKGJvb2tpbmcuaWQsIGJvb2tpbmcudXNlcklELCBib29raW5nLmRhdGUsIGJvb2tpbmcucm9vbU51bWJlciwgYm9va2luZy5yb29tU2VydmljZUNoYXJnZXMpKTtcbiAgYm9va2luZ3NSZXBvID0gbmV3IEJvb2tpbmdzUmVwbyhib29raW5ncyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZGF5RGF0ZSgpIHtcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgbW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBtb250aFxuICBkYXRlID0gZGF0ZSA8IDEwID8gYDAke2RhdGV9YCA6IGRhdGVcbiAgdG9kYXkgPSBgJHt5ZWFyfS8ke21vbnRofS8ke2RhdGV9YDtcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2dpbklucHV0cygpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFhcmVJbnB1dHNGaWxsZWQoKSAmJiBjaGVja1VzZXJuYW1lKCkgJiYgY2hlY2tQYXNzd29yZCgpKSB7XG4gICAgZGlzcGxheVBhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVJbnB1dHNGaWxsZWQoKSB7XG4gIHJldHVybiBsb2dpbkRhdGEuZmluZChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9PT0gJycpO1xufVxuXG5mdW5jdGlvbiBjaGVja1VzZXJuYW1lKCkge1xuICBjb25zdCBzcGxpdElucHV0ID0gbG9naW5EYXRhWzBdLnZhbHVlLnNwbGl0KCdjdXN0b21lcicpOyBcbiAgaWYgKHNwbGl0SW5wdXRbMF0gPT09ICdtYW5hZ2VyJykge1xuICAgIGN1cnJlbnRVc2VyID0gbmV3IE1hbmFnZXIoJ0VsbGUnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzcGxpdElucHV0WzBdID09PSAnJyAmJiBzcGxpdElucHV0WzFdIDwgNTEpIHtcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KHNwbGl0SW5wdXRbMV0pLnRvRml4ZWQoMCk7XG4gICAgY3VycmVudFVzZXIgPSB1cGRhdGVDdXJyZW50Q3VzdG9tZXIoaWQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDdXN0b21lcihpZCkge1xuICBpZCA9IHBhcnNlSW50KGlkKTtcbiAgcmV0dXJuIGN1c3RvbWVycy5maW5kKGN1c3RvbWVyID0+IGN1c3RvbWVyLmlkID09PSBpZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFzc3dvcmQoKSB7XG4gIHJldHVybiBsb2dpbkRhdGFbMV0udmFsdWUgPT09ICdvdmVybG9vazIwMjAnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpIHtcbiAgaWYgKGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgIGRpc3BsYXlNYW5hZ2VyUGFnZSgpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgQ3VzdG9tZXIpIHtcbiAgICBkaXNwbGF5Q3VzdG9tZXJQYWdlKCk7XG4gIH1cbiAgdXBkYXRlV2VsY29tZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclBhZ2UoKSB7IFxuICBjb25zdCBzZWN0aW9ucyA9IFt7c2VjdGlvbjogbG9naW5QYWdlLCBhZGRIaWRkZW46IHRydWV9LCB7c2VjdGlvbjogbWFpblBhZ2V9XTtcbiAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoc2VjdGlvbnMpO1xuICBkaXNwbGF5TWFuYWdlclRvZGF5RGF0YSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclRvZGF5RGF0YSgpIHtcbiAgY29uc3QgdG9kYXlEYXRhU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1kYXRhJyk7XG4gIGNvbnN0IGJvb2tlZFJvb21zID0gYm9va2luZ3NSZXBvLnJldHVybkJvb2tlZFJvb21zTnVtKCdkYXRlJywgdG9kYXkpO1xuICBjb25zdCBvcGVuUm9vbXMgPSByb29tc1JlcG8ucmV0dXJuQXZhaWxhYmxlUm9vbXMoYm9va2VkUm9vbXMpO1xuICBjb25zdCByZXZlbnVlID0gY3VycmVudFVzZXIucmV0dXJuVG9kYXlSZXZlbnVlKHRvZGF5LCBib29raW5ncywgcm9vbXMpO1xuICBkb21VcGRhdGUudXBkYXRlTWFuYWdlclRvZGF5RGF0YSh0b2RheURhdGFTZWN0aW9uLCAob3BlblJvb21zLmxlbmd0aCksIHJldmVudWUsICgoYm9va2VkUm9vbXMubGVuZ3RoKSAvIDI1KSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVSb29tcygpIHsgIFxuICBjb25zdCBjYWxlbmRhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLWlucHV0Jyk7XG4gIHNlbGVjdERhdGUgPSBjYWxlbmRhcklucHV0LnZhbHVlLnNwbGl0KCctJykuam9pbignLycpO1xuICBpZiAoIXNlbGVjdERhdGUgfHwgc2VsZWN0RGF0ZSA8IHRvZGF5KSB7XG4gICAgZGlzcGxheU1lc3NhZ2UoMCwgJ2Vycm9yJyk7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBsaXN0Um9vbXNTZWN0aW9uLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gIH0gZWxzZSBpZiAoIWN1cnJlbnRDdXN0b21lciAmJiBjdXJyZW50VXNlciBpbnN0YW5jZW9mIE1hbmFnZXIpIHtcbiAgICBkaXNwbGF5TWVzc2FnZSgwLCAnZXJyb3InKTtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IGxpc3RSb29tc1NlY3Rpb24sIGFkZEhpZGRlbjogdHJ1ZX1dKTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVBdmFpbGFibGVSb29tcygpO1xuICAgIGRpc3BsYXlGaWx0ZXJUeXBlcygpO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogbGlzdFJvb21zU2VjdGlvbn0sIHtzZWN0aW9uOiBtZXNzYWdlU2VjdGlvblswXSwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF2YWlsYWJsZVJvb21zKCkge1xuICBjb25zdCBib29rZWRSb29tcyA9IGJvb2tpbmdzUmVwby5yZXR1cm5Cb29rZWRSb29tc051bSgnZGF0ZScsIHNlbGVjdERhdGUpO1xuICBjb25zdCBvcGVuUm9vbXMgPSByb29tc1JlcG8ucmV0dXJuQXZhaWxhYmxlUm9vbXMoYm9va2VkUm9vbXMpO1xuICBkb21VcGRhdGUudXBkYXRlQXZhaWxhYmxlUm9vbXMoZGlzcGxheVJvb21zU2VjdGlvbiwgb3BlblJvb21zKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZpbHRlclR5cGVzKCkge1xuICBjb25zdCBsaXN0VHlwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC10eXBlcycpO1xuICBjb25zdCB0eXBlcyA9IHJldHVybkFsbFJvb21UeXBlcygpO1xuICBkb21VcGRhdGUuZGlzcGxheVR5cGVzKGxpc3RUeXBlcywgdHlwZXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWVzc2FnZShudW0sIHR5cGUpIHtcbiAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBtZXNzYWdlU2VjdGlvbltudW1dfV0pO1xuICBkb21VcGRhdGUuZGlzcGxheU1lc3NhZ2Uoe3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uW251bV0sIFt0eXBlXTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiByZXR1cm5BbGxSb29tVHlwZXMoKSB7XG4gIHJldHVybiByb29tcy5yZWR1Y2UoKHR5cGVzLCByb29tKSA9PiB7XG4gICAgaWYgKCF0eXBlcy5pbmNsdWRlcyhyb29tLnJvb21UeXBlKSkge1xuICAgICAgdHlwZXMucHVzaChyb29tLnJvb21UeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVzXG4gIH0sIFtdKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmlsdGVyUm9vbXMoKSB7XG4gIGNvbnN0IGZpbHRlclJvb21zID0gZmlsdGVyQXZhaWxhYmxlUm9vbXMoKTtcbiAgaWYgKGZpbHRlclJvb21zLmxlbmd0aCAhPT0gMCkge1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogbWVzc2FnZVNlY3Rpb25bMV0sIGFkZEhpZGRlbjogdHJ1ZX1dKTtcbiAgICBkb21VcGRhdGUudXBkYXRlQXZhaWxhYmxlUm9vbXMoZGlzcGxheVJvb21zU2VjdGlvbiwgZmlsdGVyUm9vbXMpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlNZXNzYWdlKDEsICdhcHBsb2d5Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQXZhaWxhYmxlUm9vbXMoKSB7XG4gIGNvbnN0IHR5cGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGNvbnN0IGJvb2tlZFJvb21zID0gYm9va2luZ3NSZXBvLnJldHVybkJvb2tlZFJvb21zTnVtKCdkYXRlJywgc2VsZWN0RGF0ZSk7XG4gIGNvbnN0IG9wZW5Sb29tcyA9IHJvb21zUmVwby5yZXR1cm5BdmFpbGFibGVSb29tcyhib29rZWRSb29tcyk7XG4gIHJldHVybiByb29tc1JlcG8uZmlsdGVyUm9vbXNCeVR5cGUodHlwZSwgb3BlblJvb21zKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0QVJvb20oKSB7XG4gIG5ld0Jvb2tpbmcucm9vbU51bWJlciA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBtYWtlQm9va2luZygpIHtcbiAgbmV3Qm9va2luZy5kYXRlID0gc2VsZWN0RGF0ZTtcbiAgaWYgKGN1cnJlbnRDdXN0b21lcikge1xuICAgIGFkZEJvb2tpbmcoY3VycmVudEN1c3RvbWVyKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50VXNlciBpbnN0YW5jZW9mIEN1c3RvbWVyKSB7XG4gICAgYWRkQm9va2luZyhjdXJyZW50VXNlcik7XG4gIH0gXG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tpbmcoc2VsZWN0VXNlcikge1xuICBuZXdCb29raW5nLnVzZXJJRCA9IHNlbGVjdFVzZXIuaWQ7XG4gIGFwaUNhbGxzLmFkZEJvb2tpbmdEYXRhKG5ld0Jvb2tpbmcpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGJvb2tpbmdzUmVwby5ib29raW5ncy5wdXNoKG5ldyBCb29raW5nKGRhdGEuaWQsIGRhdGEudXNlcklELCBkYXRhLmRhdGUsIGRhdGEucm9vbU51bWJlcikpO1xuICAgICAgc2VsZWN0VXNlciA9PT0gY3VycmVudEN1c3RvbWVyID8gdXBkYXRlR3Vlc3RJbmZvKCkgOiB1cGRhdGVDdXN0b21lclBhZ2UoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXR1cm5HdWVzdEluZm8oKSB7XG4gIGNvbnN0IGd1ZXN0U2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Vlc3QnKTtcbiAgcmV0dXJuIGN1c3RvbWVycy5maW5kKGN1c3RvbWVyID0+IGN1c3RvbWVyLm5hbWUgPT09IGd1ZXN0U2VhcmNoSW5wdXQudmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHdWVzdEluZm8oKSB7XG4gIGN1cnJlbnRDdXN0b21lciA9IHJldHVybkd1ZXN0SW5mbygpOyAgIFxuICBpZiAoY3VycmVudEN1c3RvbWVyKSB7XG4gICAgdXBkYXRlR3Vlc3RJbmZvKCk7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBkaXNwbGF5R3Vlc3REYXRhU2VjdGlvbn1dKTtcbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IGRpc3BsYXlHdWVzdERhdGFTZWN0aW9uLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlR3Vlc3RJbmZvKCkge1xuICBjb25zdCBib29raW5ncyA9IGJvb2tpbmdzUmVwby5maWx0ZXJCb29raW5nc0J5UmVmKCd1c2VySUQnLCBjdXJyZW50Q3VzdG9tZXIuaWQpO1xuICBjb25zdCB0b3RhbENvc3QgPSBjdXJyZW50Q3VzdG9tZXIucmV0dXJuVXNlclJldmVudWUoY3VycmVudEN1c3RvbWVyLmlkLCBib29raW5ncywgcm9vbXMpIFxuICBkb21VcGRhdGUudXBkYXRlR3Vlc3RJbmZvKGRpc3BsYXlHdWVzdERhdGFTZWN0aW9uLCBib29raW5ncywgdG90YWxDb3N0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQm9va2luZygpIHtcbiAgY29uc3QgaW5xdWVyeSA9IGNoZWNrRGVsZXRlQm9va2luZ0lucHV0cygpO1xuICBpZiAoaW5xdWVyeSAmJiBjdXJyZW50Q3VzdG9tZXIgJiYgc2VsZWN0RGF0ZSA+IHRvZGF5KSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBtZXNzYWdlU2VjdGlvblsyXSwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICAgIGFwaUNhbGxzLmRlbGV0ZUJvb2tpbmdEYXRhKHtpZDogaW5xdWVyeS5pZH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHVkcGF0ZURlbGV0ZUJvb2tpbmcoaW5xdWVyeS5pZCk7XG4gICAgICAgIHVwZGF0ZUd1ZXN0SW5mbygpO1xuICAgICAgfSlcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5TWVzc2FnZSgyLCAnZXJyb3InKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVsZXRlQm9va2luZ0lucHV0cygpIHtcbiAgc2VsZWN0RGF0ZSA9IGRlbGV0ZUJvb2tpbmdJbnB1dHNbMF0udmFsdWUuc3BsaXQoJy0nKS5qb2luKCcvJyk7XG4gIGNvbnN0IHJvb21OdW0gPSBwYXJzZUludChkZWxldGVCb29raW5nSW5wdXRzWzFdLnZhbHVlKTtcbiAgcmV0dXJuIGJvb2tpbmdzUmVwby5maW5kQm9va2luZyhzZWxlY3REYXRlLCByb29tTnVtKTtcbn1cblxuZnVuY3Rpb24gdWRwYXRlRGVsZXRlQm9va2luZyhpZCkge1xuICBkZWxldGVCb29raW5nSW5wdXRzWzBdLnZhbHVlID0gJyc7XG4gIGRlbGV0ZUJvb2tpbmdJbnB1dHNbMV0udmFsdWUgPSAnJztcbiAgYm9va2luZ3NSZXBvLnJlbW92ZUJvb2tpbmcoaWQpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlbGNvbWUoKSB7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZScpO1xuICBkb21VcGRhdGUudXBkYXRlV2VsY29tZU1zZyh3ZWxjb21lLCBjdXJyZW50VXNlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclBhZ2UoKSB7XG4gIGNvbnN0IGRlbGV0ZUJvb2tpbmdTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1ib29raW5nJyk7XG4gIGNvbnN0IHNlY3Rpb25zID0gW3tzZWN0aW9uOiBsb2dpblBhZ2UsIGFkZEhpZGRlbjogdHJ1ZX0sIHtzZWN0aW9uOiBtYWluUGFnZX0sIHtzZWN0aW9uOiBkZWxldGVCb29raW5nU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfV07XG4gIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KHNlY3Rpb25zKTtcbiAgdXBkYXRlQ3VzdG9tZXJQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyUGFnZSgpIHtcbiAgY29uc3QgZ3Vlc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LWRhdGEnKTtcbiAgY29uc3QgYm9va2luZ3MgPSBib29raW5nc1JlcG8uZmlsdGVyQm9va2luZ3NCeVJlZigndXNlcklEJywgY3VycmVudFVzZXIuaWQpO1xuICBjb25zdCB0b3RhbENvc3QgPSBjdXJyZW50VXNlci5yZXR1cm5Vc2VyUmV2ZW51ZShjdXJyZW50VXNlci5pZCwgYm9va2luZ3MsIHJvb21zKSBcbiAgZG9tVXBkYXRlLnVwZGF0ZUN1c3RvbWVyVmlldyhndWVzdFNlY3Rpb24sIGJvb2tpbmdzLCB0b3RhbENvc3QpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==