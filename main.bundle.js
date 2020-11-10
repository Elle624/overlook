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
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.login-form {\n  display: flex;\n  width: 33em;\n  height: 21em;\n  padding: 0;\n  border-radius: 0.4em;\n  margin: 5em auto 3em;\n  flex-direction: column;\n  align-items: center;\n  background: #fffaf6;\n  color: #7e7975;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(255, 255, 255, 0.4); }\n  .login-form #log-in {\n    font-size: 3em;\n    padding-top: 0.3em;\n    color: #6c6763; }\n  .login-form label {\n    display: block;\n    font-size: 0.4em;\n    color: black; }\n\n.wrong-login-msg {\n  font-size: 1em;\n  color: #c05322;\n  margin-top: -0.6em; }\n\n.login-form .float {\n  width: 40%;\n  padding-top: 0.3em; }\n\n.login-form input[type=text],\n.login-form input[type=password] {\n  display: block;\n  width: 120%;\n  height: 3em;\n  padding: 0.5em;\n  border-radius: 0.2em;\n  font-size: 0.5em;\n  border: 0.2em solid #ebe6e2;\n  transition: all 0.3s ease-out; }\n  .login-form input[type=text] :hover,\n  .login-form input[type=password] :hover {\n    border-color: #CCC; }\n\n.login-form input[type=submit] {\n  width: 7em;\n  height: 2em;\n  box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.3);\n  border-radius: 0.3em;\n  cursor: pointer;\n  font-size: 0.5em;\n  text-align: center;\n  font-weight: bold;\n  background: linear-gradient(#fbd568, #ffb347);\n  border: 1px solid #f4ab4c;\n  color: #996319; }\n  .login-form input[type=submit]:hover {\n    box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), inset 0 20px 40px rgba(255, 255, 255, 0.15); }\n  .login-form input[type=submit]:active {\n    top: 1px; }\n\n.hidden {\n  display: none; }\n\n.hide {\n  visibility: hidden; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") center/100% 100% no-repeat;\n  width: 100%;\n  height: 100vh; }\n\n.login-page {\n  margin-top: 10em; }\n\nh1 {\n  text-align: center;\n  font-size: 5em;\n  color: #79bfee; }\n\nh2 {\n  font-family: sans-serif;\n  font-size: 2.5em;\n  color: #114293; }\n\ninput {\n  display: block;\n  width: 10em;\n  height: 1.5em;\n  padding: 0.1em;\n  border-radius: 0.1em;\n  font-size: 1.4em;\n  font-weight: lighter;\n  margin: 0.5em 0 1em; }\n\nbutton {\n  width: 6em;\n  height: 2em;\n  font-size: 1em;\n  background-color: #1a3e5c;\n  border: none;\n  border-radius: 3em;\n  color: #fff;\n  transition: 300ms; }\n  button:hover {\n    cursor: pointer;\n    color: #0505c5;\n    opacity: 0.7; }\n\n.book-btn {\n  margin: 1em 0; }\n\n.main-page {\n  width: 100%;\n  height: -webkit-fill-available;\n  background-color: #fffcfc;\n  overflow-y: auto; }\n\nnav {\n  display: flex;\n  background-color: #1a3e5c; }\n\nimg {\n  width: 3em;\n  height: 3em;\n  margin-right: 1em; }\n\n#log-out {\n  background: none;\n  margin: 0.2em; }\n  #log-out:hover {\n    color: #cebd29;\n    opacity: 0.7; }\n\n.dashboard {\n  padding: 1em;\n  margin: 10em 10em;\n  display: flex;\n  border: #4097de6b 0.5em solid; }\n\n.left-side {\n  width: 40%; }\n\n.today-data {\n  margin-bottom: 2em;\n  background-color: white;\n  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc; }\n\n.label-name {\n  font-family: sans-serif;\n  font-size: 1.6em; }\n\np {\n  font-size: 2em;\n  color: #071775; }\n  p.guest {\n    margin-top: 1em;\n    color: #f3f1f1;\n    background-color: #4097de;\n    border-radius: 0.2em;\n    padding: 0.2em;\n    box-shadow: 0.2em 0.2em #b2d2f0; }\n  p#welcome-title {\n    color: white; }\n\n.room-list, .booking-list {\n  cursor: pointer;\n  margin: 2em 0;\n  background-color: #aad6fa99;\n  box-shadow: 0.5em 0.5em #8f979d;\n  border-radius: 0.6em;\n  padding: 0.5em; }\n\n.booking-list {\n  outline: none; }\n\n.right-side {\n  margin-left: 10%;\n  width: 60%;\n  display: flex; }\n\n#customer-data-display {\n  width: fit-content;\n  padding: 0.5em;\n  cursor: default; }\n\n.guest-data {\n  width: 30em; }\n\n#guest-name {\n  width: 8em; }\n\n.delete-booking {\n  width: 40%;\n  margin-left: 2em; }\n\n#room-num {\n  width: 7em;\n  height: 1.5em; }\n\n.delete-booking-btn {\n  width: 9em; }\n\n@media only screen and (max-width: 1200px) {\n  .dashboard {\n    margin: 10em 1em; } }\n\n@media only screen and (max-width: 1023px) {\n  .right-side {\n    display: block; }\n  .delete-booking {\n    margin: 3em 0; } }\n\n@media only screen and (max-width: 767px) {\n  .guest-data {\n    width: 10em; } }\n\n@media only screen and (max-width: 480px) {\n  .dashboard {\n    display: block; }\n  .right-side {\n    margin-top: 2em; }\n  .left-side {\n    width: 100%; } }\n", ""]);



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
        if (room.number === eachRoom.number && eachRoom.roomType === type) {
          typeRooms.push(eachRoom)
        }
      })
      return typeRooms
    }, [])
  }

  returnAvailableRooms(roomsTaken) {
    return this.rooms.reduce((availableRooms, room) => {
      if (!roomsTaken.includes(room.number)) {
        availableRooms.push(room);
      }
      return availableRooms;
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

  eraseLoginInputs: inputs => {
    inputs.forEach(input => input.value = '')
  },

  updateManagerTodayData: (section, rooms, revenue, occupation) => {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="available-room">Available rooms today: ${rooms}</h2>
    <h2 class="today-revenue">Today's total revenue: $${revenue.toFixed(2)}</h2>
    <h2 class="today-occupation">Room Occupation rate: ${(occupation*100).toFixed(1)} % </h2>
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
    let bidetValue;
    rooms.forEach(room => {
      bidetValue = room.bidet ? 'Yes' : 'No';
      section +=
      `
      <section tabindex="0" class="room-list" id="${room.number}">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bidet: ${bidetValue}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Number of Beds: ${room.numBeds}</p>
      <p>Cost Per Night: $${room.costPerNight}</p>
      </section>
      
      `
    })
    return section;
  },

  displayTypes: function (section, allTypes) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <option aria-labelledby="available-room-filter" disabled selected value>-- select type --</option>
    ${this.updateTypes(allTypes)}
    `
  },

  updateTypes: allTypes => {
    let section = ''
    allTypes.forEach(type => {
      section +=
      `
      <option value="${type}">${type}</option>
      `
    })
    return section;
  },

  displayMessage: element => {
    if (element.applogy) {
      element.section.innerText = 'We are very sorry!!! Currently there are no rooms available for that type/day, please try a different type/date!'
    } else if (element.error) {
      element.section.innerText = 'Invalid input! Please double check (if) selected date/room#/customer and try again! '
    } 
  },

  updateGuestInfo: function (section, bookings, cost) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="guest guest-booking">Booking History</h2>
    <p class="guest" id="customer-data-display">Total Cost: ${cost.toFixed(2)}</p>
    <section>${this.displayBookings(bookings)}</section>
    `
  },

  displayBookings: bookings => {
    let section = '';
    bookings.forEach(booking => {
      const date = new Date(booking.date);
      const chosenDate = date.toDateString().split(' ');
      section += 
      `
      <section tabindex="0" class="booking-list" id="customer-data-display">
        <p>Date: ${chosenDate[1]} ${chosenDate[2]}, ${chosenDate[3]}</p>
        <p>Room Number: ${booking.roomNumber}</p>
      </section>
      `
    });
    return section;
  },

  updateCustomerView: function (section1, bookings, cost) {
    section1.innerHTML = '';
    section1.innerHTML =
    `
    <section class="display-guest-data">
      <h2 class="guest guest-booking">Booking History:</h2>
      <p class="guest" id="customer-data-display">Total Cost: $${cost.toFixed(2)}</p>
      <section>${this.displayBookings(bookings)}</section> 
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
const logOutBtn = document.querySelector('#log-out');
const listRoomsSection = document.querySelector('.list-rooms');
const selectDateBtn = document.querySelector('.select-date-btn');
const displayRoomsSection = document.querySelector('.display-rooms');
const guestSearchBtn = document.querySelector('.search-customer-btn');
const guestSection = document.querySelector('.guest-data');
const displayGuestDataSection = document.querySelector('.display-guest-data');
const bookBtn = document.querySelector('.book-btn');
const deleteBookingInputs = document.querySelectorAll('.delete-input input');
const deleteBookingBtn = document.querySelector('.delete-booking-btn');
const messageSection = document.querySelectorAll('.message');

loginBtn.addEventListener('click', checkLoginInputs);
logOutBtn.addEventListener('click', logOut);
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
  const wrongLogin = document.querySelector('.wrong-login-msg');
  event.preventDefault();
  if (!areInputsFilled() && checkUsername() && checkPassword()) {
    displayPage();
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: wrongLogin, addHidden: true}]);
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].eraseLoginInputs(loginData);
  } else if (!checkUsername() || !checkPassword() || areInputsFilled()) {
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: wrongLogin}]);
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

function logOut() {
  location.reload();
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
  const sections = [
    {section: loginPage, addHidden: true}, 
    {section: mainPage}, 
    {section: guestSection}
  ];
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
  event.preventDefault();
  selectDate = calendarInput.value.replaceAll('-', '/');
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
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: displayRoomsSection, addHidden: true}])
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
  if (event.target.parentNode.id) {
    newBooking.roomNumber = parseInt(event.target.parentNode.id);
  }
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
      updateAvailableRooms();
    })
}

function returnGuestInfo() {
  const guestSearchInput = document.querySelector('#guest-name');
  return customers.find(customer => customer.name === guestSearchInput.value)
}

function displayGuestInfo() {
  event.preventDefault();
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
  const totalCost = currentCustomer.returnUserRevenue(currentCustomer.id, bookings, rooms);
  bookings.sort((a, b) => a.date < b.date ? -1 : 1); 
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateGuestInfo(displayGuestDataSection, bookings, totalCost);
}

function deleteBooking() {
  const inquery = checkDeleteBookingInputs();
  if (inquery && currentCustomer && selectDate >= today) {
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
  selectDate = deleteBookingInputs[0].value.replaceAll('-', '/');
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
  const sections = [
    {section: loginPage, addHidden: true}, 
    {section: mainPage}, 
    {section: deleteBookingSection, addHidden: true}
  ];
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement(sections);
  updateCustomerPage();
}

function updateCustomerPage() {
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentUser.id);
  const totalCost = currentUser.returnUserRevenue(currentUser.id, bookings, rooms);
  bookings.sort((a, b) => a.date < b.date ? -1 : 1);
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateCustomerView(guestSection, bookings, totalCost);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZ3NSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbXNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3VzZXItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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QUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0EsR0FBRyxpQ0FBaUMsaURBQVE7QUFDNUM7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVjtBQUNBLHFDQUFxQyxnREFBTztBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTLGlCQUFpQixpQ0FBaUM7QUFDL0QsR0FBRztBQUNILElBQUksa0RBQVMsaUJBQWlCLGtEQUFrRDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EO0FBQ0EsRUFBRSxrREFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVMsaUJBQWlCLDRDQUE0QztBQUMxRSxJQUFJLGlEQUFRLG9CQUFvQixlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssb0NBQW9DO0FBQ3pDLEtBQUssa0JBQWtCO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLEVBQUUsa0RBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBUztBQUNYIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQucG5nXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMzZW07XFxuICBoZWlnaHQ6IDIxZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxuICBtYXJnaW46IDVlbSBhdXRvIDNlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmFmNjtcXG4gIGNvbG9yOiAjN2U3OTc1O1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgMTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cXG4gIC5sb2dpbi1mb3JtICNsb2ctaW4ge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xcbiAgICBjb2xvcjogIzZjNjc2MzsgfVxcbiAgLmxvZ2luLWZvcm0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjRlbTtcXG4gICAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLndyb25nLWxvZ2luLW1zZyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGNvbG9yOiAjYzA1MzIyO1xcbiAgbWFyZ2luLXRvcDogLTAuNmVtOyB9XFxuXFxuLmxvZ2luLWZvcm0gLmZsb2F0IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nLXRvcDogMC4zZW07IH1cXG5cXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMCU7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCAjZWJlNmUyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0W3R5cGU9dGV4dF0gOmhvdmVyLFxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0gOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjQ0NDOyB9XFxuXFxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIHdpZHRoOiA3ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZiZDU2OCwgI2ZmYjM0Nyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjRhYjRjO1xcbiAgY29sb3I6ICM5OTYzMTk7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAyMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgfVxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XFxuICAgIHRvcDogMXB4OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIikgY2VudGVyLzEwMCUgMTAwJSBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4ubG9naW4tcGFnZSB7XFxuICBtYXJnaW4tdG9wOiAxMGVtOyB9XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBjb2xvcjogIzc5YmZlZTsgfVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGNvbG9yOiAjMTE0MjkzOyB9XFxuXFxuaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTBlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBwYWRkaW5nOiAwLjFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDFlbTsgfVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogNmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTNlNWM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IDMwMG1zOyB9XFxuICBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMDUwNWM1O1xcbiAgICBvcGFjaXR5OiAwLjc7IH1cXG5cXG4uYm9vay1idG4ge1xcbiAgbWFyZ2luOiAxZW0gMDsgfVxcblxcbi5tYWluLXBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmY2ZjO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhM2U1YzsgfVxcblxcbmltZyB7XFxuICB3aWR0aDogM2VtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbiNsb2ctb3V0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW46IDAuMmVtOyB9XFxuICAjbG9nLW91dDpob3ZlciB7XFxuICAgIGNvbG9yOiAjY2ViZDI5O1xcbiAgICBvcGFjaXR5OiAwLjc7IH1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogMTBlbSAxMGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogIzQwOTdkZTZiIDAuNWVtIHNvbGlkOyB9XFxuXFxuLmxlZnQtc2lkZSB7XFxuICB3aWR0aDogNDAlOyB9XFxuXFxuLnRvZGF5LWRhdGEge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxcHggI2RkZCwgMCAxMHB4IDIwcHggI2NjYzsgfVxcblxcbi5sYWJlbC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZlbTsgfVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogIzA3MTc3NTsgfVxcbiAgcC5ndWVzdCB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgY29sb3I6ICNmM2YxZjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDk3ZGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG4gICAgYm94LXNoYWRvdzogMC4yZW0gMC4yZW0gI2IyZDJmMDsgfVxcbiAgcCN3ZWxjb21lLXRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnJvb20tbGlzdCwgLmJvb2tpbmctbGlzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDZmYTk5O1xcbiAgYm94LXNoYWRvdzogMC41ZW0gMC41ZW0gIzhmOTc5ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uYm9va2luZy1saXN0IHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4ucmlnaHQtc2lkZSB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jY3VzdG9tZXItZGF0YS1kaXNwbGF5IHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLmd1ZXN0LWRhdGEge1xcbiAgd2lkdGg6IDMwZW07IH1cXG5cXG4jZ3Vlc3QtbmFtZSB7XFxuICB3aWR0aDogOGVtOyB9XFxuXFxuLmRlbGV0ZS1ib29raW5nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuI3Jvb20tbnVtIHtcXG4gIHdpZHRoOiA3ZW07XFxuICBoZWlnaHQ6IDEuNWVtOyB9XFxuXFxuLmRlbGV0ZS1ib29raW5nLWJ0biB7XFxuICB3aWR0aDogOWVtOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5kYXNoYm9hcmQge1xcbiAgICBtYXJnaW46IDEwZW0gMWVtOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgLnJpZ2h0LXNpZGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmRlbGV0ZS1ib29raW5nIHtcXG4gICAgbWFyZ2luOiAzZW0gMDsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmd1ZXN0LWRhdGEge1xcbiAgICB3aWR0aDogMTBlbTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmRhc2hib2FyZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAucmlnaHQtc2lkZSB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTsgfVxcbiAgLmxlZnQtc2lkZSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgQm9va2luZyB7XG4gIGNvbnN0cnVjdG9yKGlkLCB1c2VySUQsIGRhdGUsIHJvb21OdW1iZXIsIHJvb21TZXJ2aWNlQ2hhcmdlcykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucm9vbU51bWJlciA9IHJvb21OdW1iZXI7XG4gICAgdGhpcy5yb29tU2VydmljZUNoYXJnZXMgPSByb29tU2VydmljZUNoYXJnZXMgfHwgW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZyIsImNsYXNzIEJvb2tpbmdzUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGJvb2tpbmdzKSB7XG4gICAgdGhpcy5ib29raW5ncyA9IGJvb2tpbmdzIHx8IFtdO1xuICB9XG5cbiAgcmV0dXJuQm9va2VkUm9vbXNOdW0ocmVmZXJhbmNlLCBkZXRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5ncy5yZWR1Y2UoKGJvb2tlZFJvb21zTnVtLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZ1tyZWZlcmFuY2VdID09PSBkZXRhaWwpIHtcbiAgICAgICAgYm9va2VkUm9vbXNOdW0ucHVzaChib29raW5nLnJvb21OdW1iZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2tlZFJvb21zTnVtXG4gICAgfSwgW10pXG4gIH1cblxuICBmaWx0ZXJCb29raW5nc0J5UmVmKHJlZmVyYW5jZSwgZGV0YWlsKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4gYm9va2luZ1tyZWZlcmFuY2VdID09PSBkZXRhaWwpO1xuICB9XG5cbiAgZmluZEJvb2tpbmcoZGF0ZSwgbnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va2luZ3MuZmluZChib29raW5nID0+IGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZSAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IG51bSk7XG4gIH1cblxuICByZW1vdmVCb29raW5nKGlkKSB7XG4gICAgdGhpcy5ib29raW5ncyA9IHRoaXMuYm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4gYm9va2luZy5pZCAhPT0gaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdzUmVwbyIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbmNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgc3VwZXIoaWQsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuVXNlclJldmVudWUoaWQsIGJvb2tpbmdzLCByb29tcykge1xuICAgIHJldHVybiBib29raW5ncy5yZWR1Y2UoKHRvdGFsQ29zdCwgYm9va2luZykgPT4ge1xuICAgICAgcm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09PSBpZCAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgICAgdG90YWxDb3N0ICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0b3RhbENvc3Q7XG4gICAgfSwgMClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyOyIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCdtYW5hZ2VyJywgbmFtZSk7XG4gIH1cblxuICByZXR1cm5Ub2RheVJldmVudWUoZGF0ZSwgYm9va2luZ3MsIHJvb21zKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdzLnJlZHVjZSgodG90YWxDb3N0LCBib29raW5nKSA9PiB7XG4gICAgICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5kYXRlID09PSBkYXRlICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbENvc3QgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsiLCJjbGFzcyBSb29tIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCByb29tVHlwZSwgYmlkZXQsIGJlZFNpemUsIG51bUJlZHMsIGNvc3RQZXJOaWdodCkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMucm9vbVR5cGUgPSByb29tVHlwZTtcbiAgICB0aGlzLmJpZGV0ID0gYmlkZXQ7XG4gICAgdGhpcy5iZWRTaXplID0gYmVkU2l6ZTtcbiAgICB0aGlzLm51bUJlZHMgPSBudW1CZWRzO1xuICAgIHRoaXMuY29zdFBlck5pZ2h0ID0gY29zdFBlck5pZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb20iLCJjbGFzcyBSb29tc1JlcG8ge1xuICBjb25zdHJ1Y3Rvcihyb29tcykge1xuICAgIHRoaXMucm9vbXMgPSByb29tcyB8fCBbXTtcbiAgfVxuXG4gIGZpbHRlclJvb21zQnlUeXBlKHR5cGUsIHJvb21zKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vbXMucmVkdWNlKCh0eXBlUm9vbXMsIGVhY2hSb29tKSA9PiB7XG4gICAgICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAocm9vbS5udW1iZXIgPT09IGVhY2hSb29tLm51bWJlciAmJiBlYWNoUm9vbS5yb29tVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHR5cGVSb29tcy5wdXNoKGVhY2hSb29tKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHR5cGVSb29tc1xuICAgIH0sIFtdKVxuICB9XG5cbiAgcmV0dXJuQXZhaWxhYmxlUm9vbXMocm9vbXNUYWtlbikge1xuICAgIHJldHVybiB0aGlzLnJvb21zLnJlZHVjZSgoYXZhaWxhYmxlUm9vbXMsIHJvb20pID0+IHtcbiAgICAgIGlmICghcm9vbXNUYWtlbi5pbmNsdWRlcyhyb29tLm51bWJlcikpIHtcbiAgICAgICAgYXZhaWxhYmxlUm9vbXMucHVzaChyb29tKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdmFpbGFibGVSb29tcztcbiAgICB9LCBbXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb29tc1JlcG8iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHJldHVyblVzZXIocmVmZXJhbmNlLCB1c2Vycykge1xuICAgIHJlZmVyYW5jZS50b0xvd2VyQ2FzZSgpOyBcbiAgICByZXR1cm4gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT0gcmVmZXJhbmNlIHx8IHVzZXIubmFtZSA9PT0gcmVmZXJhbmNlKTtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBVc2VyIiwiY29uc3QgZ2V0RGF0YSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiBmZXRjaChwYXRoKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG59XG5cbmNvbnN0IHVwZGF0ZURhdGEgPSAocGF0aCwgYWN0aW9uLCBkYXRhKSA9PiB7XG4gIHJldHVybiBmZXRjaChwYXRoLCB7XG4gICAgbWV0aG9kOiBhY3Rpb24sXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5jb25zdCBhcGlDYWxscyA9IHtcblxuICBnZXRVc2VyRGF0YTogKCkgPT4ge1xuICAgIHJldHVybiBnZXREYXRhKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2VycycpO1xuICB9LFxuXG4gIGdldFJvb21EYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIGdldERhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3Jvb21zL3Jvb21zJyk7XG4gIH0sXG5cbiAgZ2V0Qm9va2luZ0RhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKTtcbiAgfSxcblxuICBhZGRCb29raW5nRGF0YTogKGJvb2tpbmdEYXRhKSA9PiB7XG4gICAgcmV0dXJuIHVwZGF0ZURhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywgJ1BPU1QnLCBib29raW5nRGF0YSlcbiAgfSxcblxuICBkZWxldGVCb29raW5nRGF0YTogKGJvb2tpbmdEYXRhKSA9PiB7XG4gICAgcmV0dXJuIHVwZGF0ZURhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywgJ0RFTEVURScsIGJvb2tpbmdEYXRhKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpQ2FsbHM7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiY29uc3QgZG9tVXBkYXRlID0ge1xuICB1cGRhdGVFbGVtZW50OiBlbGVtZW50cyA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmFkZEhpZGRlbikge1xuICAgICAgICBlbGVtZW50LnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hZGRIaWRlKSB7XG4gICAgICAgIGVsZW1lbnQuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nLCAnaGlkZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlV2VsY29tZU1zZzogKHRpdGxlLCB1c2VyKSA9PiB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYCR7dXNlci5uYW1lfWA7XG4gIH0sXG5cbiAgZXJhc2VMb2dpbklucHV0czogaW5wdXRzID0+IHtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9ICcnKVxuICB9LFxuXG4gIHVwZGF0ZU1hbmFnZXJUb2RheURhdGE6IChzZWN0aW9uLCByb29tcywgcmV2ZW51ZSwgb2NjdXBhdGlvbikgPT4ge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8aDIgY2xhc3M9XCJhdmFpbGFibGUtcm9vbVwiPkF2YWlsYWJsZSByb29tcyB0b2RheTogJHtyb29tc308L2gyPlxuICAgIDxoMiBjbGFzcz1cInRvZGF5LXJldmVudWVcIj5Ub2RheSdzIHRvdGFsIHJldmVudWU6ICQke3JldmVudWUudG9GaXhlZCgyKX08L2gyPlxuICAgIDxoMiBjbGFzcz1cInRvZGF5LW9jY3VwYXRpb25cIj5Sb29tIE9jY3VwYXRpb24gcmF0ZTogJHsob2NjdXBhdGlvbioxMDApLnRvRml4ZWQoMSl9ICUgPC9oMj5cbiAgICBgXG4gIH0sXG5cbiAgdXBkYXRlQXZhaWxhYmxlUm9vbXM6IGZ1bmN0aW9uIChzZWN0aW9uLCByb29tcykge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktcm9vbXNcIj4ke3RoaXMubGlzdFJvb21zKHJvb21zKX1cbiAgICBgXG4gIH0sXG5cbiAgbGlzdFJvb21zOiAocm9vbXMpID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9ICcnO1xuICAgIGxldCBiaWRldFZhbHVlO1xuICAgIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICBiaWRldFZhbHVlID0gcm9vbS5iaWRldCA/ICdZZXMnIDogJ05vJztcbiAgICAgIHNlY3Rpb24gKz1cbiAgICAgIGBcbiAgICAgIDxzZWN0aW9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicm9vbS1saXN0XCIgaWQ9XCIke3Jvb20ubnVtYmVyfVwiPlxuICAgICAgPHA+Um9vbSBOdW1iZXI6ICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgICAgPHA+Um9vbSBUeXBlOiAke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgPHA+QmlkZXQ6ICR7YmlkZXRWYWx1ZX08L3A+XG4gICAgICA8cD5CZWQgU2l6ZTogJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgPHA+TnVtYmVyIG9mIEJlZHM6ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgIDxwPkNvc3QgUGVyIE5pZ2h0OiAkJHtyb29tLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIGBcbiAgICB9KVxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9LFxuXG4gIGRpc3BsYXlUeXBlczogZnVuY3Rpb24gKHNlY3Rpb24sIGFsbFR5cGVzKSB7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxvcHRpb24gYXJpYS1sYWJlbGxlZGJ5PVwiYXZhaWxhYmxlLXJvb20tZmlsdGVyXCIgZGlzYWJsZWQgc2VsZWN0ZWQgdmFsdWU+LS0gc2VsZWN0IHR5cGUgLS08L29wdGlvbj5cbiAgICAke3RoaXMudXBkYXRlVHlwZXMoYWxsVHlwZXMpfVxuICAgIGBcbiAgfSxcblxuICB1cGRhdGVUeXBlczogYWxsVHlwZXMgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gJydcbiAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgc2VjdGlvbiArPVxuICAgICAgYFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7dHlwZX1cIj4ke3R5cGV9PC9vcHRpb24+XG4gICAgICBgXG4gICAgfSlcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfSxcblxuICBkaXNwbGF5TWVzc2FnZTogZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQuYXBwbG9neSkge1xuICAgICAgZWxlbWVudC5zZWN0aW9uLmlubmVyVGV4dCA9ICdXZSBhcmUgdmVyeSBzb3JyeSEhISBDdXJyZW50bHkgdGhlcmUgYXJlIG5vIHJvb21zIGF2YWlsYWJsZSBmb3IgdGhhdCB0eXBlL2RheSwgcGxlYXNlIHRyeSBhIGRpZmZlcmVudCB0eXBlL2RhdGUhJ1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5lcnJvcikge1xuICAgICAgZWxlbWVudC5zZWN0aW9uLmlubmVyVGV4dCA9ICdJbnZhbGlkIGlucHV0ISBQbGVhc2UgZG91YmxlIGNoZWNrIChpZikgc2VsZWN0ZWQgZGF0ZS9yb29tIy9jdXN0b21lciBhbmQgdHJ5IGFnYWluISAnXG4gICAgfSBcbiAgfSxcblxuICB1cGRhdGVHdWVzdEluZm86IGZ1bmN0aW9uIChzZWN0aW9uLCBib29raW5ncywgY29zdCkge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8aDIgY2xhc3M9XCJndWVzdCBndWVzdC1ib29raW5nXCI+Qm9va2luZyBIaXN0b3J5PC9oMj5cbiAgICA8cCBjbGFzcz1cImd1ZXN0XCIgaWQ9XCJjdXN0b21lci1kYXRhLWRpc3BsYXlcIj5Ub3RhbCBDb3N0OiAke2Nvc3QudG9GaXhlZCgyKX08L3A+XG4gICAgPHNlY3Rpb24+JHt0aGlzLmRpc3BsYXlCb29raW5ncyhib29raW5ncyl9PC9zZWN0aW9uPlxuICAgIGBcbiAgfSxcblxuICBkaXNwbGF5Qm9va2luZ3M6IGJvb2tpbmdzID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9ICcnO1xuICAgIGJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYm9va2luZy5kYXRlKTtcbiAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KCcgJyk7XG4gICAgICBzZWN0aW9uICs9IFxuICAgICAgYFxuICAgICAgPHNlY3Rpb24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJib29raW5nLWxpc3RcIiBpZD1cImN1c3RvbWVyLWRhdGEtZGlzcGxheVwiPlxuICAgICAgICA8cD5EYXRlOiAke2Nob3NlbkRhdGVbMV19ICR7Y2hvc2VuRGF0ZVsyXX0sICR7Y2hvc2VuRGF0ZVszXX08L3A+XG4gICAgICAgIDxwPlJvb20gTnVtYmVyOiAke2Jvb2tpbmcucm9vbU51bWJlcn08L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgXG4gICAgfSk7XG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH0sXG5cbiAgdXBkYXRlQ3VzdG9tZXJWaWV3OiBmdW5jdGlvbiAoc2VjdGlvbjEsIGJvb2tpbmdzLCBjb3N0KSB7XG4gICAgc2VjdGlvbjEuaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbjEuaW5uZXJIVE1MID1cbiAgICBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXNwbGF5LWd1ZXN0LWRhdGFcIj5cbiAgICAgIDxoMiBjbGFzcz1cImd1ZXN0IGd1ZXN0LWJvb2tpbmdcIj5Cb29raW5nIEhpc3Rvcnk6PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwiZ3Vlc3RcIiBpZD1cImN1c3RvbWVyLWRhdGEtZGlzcGxheVwiPlRvdGFsIENvc3Q6ICQke2Nvc3QudG9GaXhlZCgyKX08L3A+XG4gICAgICA8c2VjdGlvbj4ke3RoaXMuZGlzcGxheUJvb2tpbmdzKGJvb2tpbmdzKX08L3NlY3Rpb24+IFxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2JhY2tncm91bmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy91c2VyLWljb24ucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9NYW5hZ2VyJztcbmltcG9ydCBDdXN0b21lciBmcm9tICcuL0N1c3RvbWVyJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgUm9vbXNSZXBvIGZyb20gJy4vUm9vbXNSZXBvJztcbmltcG9ydCBCb29raW5nIGZyb20gJy4vQm9va2luZyc7XG5pbXBvcnQgQm9va2luZ3NSZXBvIGZyb20gJy4vQm9va2luZ3NSZXBvJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBkb21VcGRhdGUgZnJvbSAnLi9kb21VcGRhdGUnO1xuaW1wb3J0ICcuL2ltYWdlcy91c2VyLWljb24ucG5nJ1xuXG5sZXQgdG9kYXksIHNlbGVjdERhdGUsIGN1cnJlbnRDdXN0b21lciwgY3VycmVudFVzZXI7XG5sZXQgY3VzdG9tZXJzLCByb29tcywgYm9va2luZ3MsIHJvb21zUmVwbywgYm9va2luZ3NSZXBvOyBcbmxldCBuZXdCb29raW5nID0ge3VzZXJJRDogMSwgZGF0ZTogJycsIHJvb21OdW1iZXI6IDF9O1xuXG5jb25zdCBsb2dpbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dpbi1pbnB1dCcpO1xuY29uc3QgbG9naW5EYXRhID0gQXJyYXkuZnJvbShsb2dpbklucHV0cyk7IFxuY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItYnRuJyk7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpO1xuY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XG5jb25zdCBsb2dPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nLW91dCcpO1xuY29uc3QgbGlzdFJvb21zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXJvb21zJyk7XG5jb25zdCBzZWxlY3REYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1kYXRlLWJ0bicpO1xuY29uc3QgZGlzcGxheVJvb21zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXJvb21zJyk7XG5jb25zdCBndWVzdFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY3VzdG9tZXItYnRuJyk7XG5jb25zdCBndWVzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3QtZGF0YScpO1xuY29uc3QgZGlzcGxheUd1ZXN0RGF0YVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1ndWVzdC1kYXRhJyk7XG5jb25zdCBib29rQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYnRuJyk7XG5jb25zdCBkZWxldGVCb29raW5nSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1pbnB1dCBpbnB1dCcpO1xuY29uc3QgZGVsZXRlQm9va2luZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYm9va2luZy1idG4nKTtcbmNvbnN0IG1lc3NhZ2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lc3NhZ2UnKTtcblxubG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xvZ2luSW5wdXRzKTtcbmxvZ091dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ091dCk7XG5zZWxlY3REYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUF2YWlsYWJsZVJvb21zKTtcbmd1ZXN0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUd1ZXN0SW5mbyk7XG5saXN0Um9vbXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlGaWx0ZXJSb29tcyk7XG5kaXNwbGF5Um9vbXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QVJvb20pO1xuYm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VCb29raW5nKTtcbmRlbGV0ZUJvb2tpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVCb29raW5nKTtcblxuUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmdldFVzZXJEYXRhKCksIGFwaUNhbGxzLmdldFJvb21EYXRhKCksIGFwaUNhbGxzLmdldEJvb2tpbmdEYXRhKCldKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBhbGxEYXRhID0gZGF0YS5yZWR1Y2UoKGRhdGFTZXQsIGVhY2hEYXRhc2V0KSA9PiB7ICAgICAgXG4gICAgICByZXR1cm4gZGF0YVNldCA9IHsuLi5kYXRhU2V0LCAuLi5lYWNoRGF0YXNldH1cbiAgICB9LCB7fSk7XG4gICAgaW5zdGFuY2lhdGF0ZShhbGxEYXRhKTtcbiAgICB1cGRhdGVUb2RheURhdGUoKTtcbiAgfSlcblxuZnVuY3Rpb24gaW5zdGFuY2lhdGF0ZShkYXRhU2V0KSB7XG4gIGN1c3RvbWVycyA9IGRhdGFTZXQudXNlcnMubWFwKHVzZXIgPT4gbmV3IEN1c3RvbWVyKHVzZXIuaWQsIHVzZXIubmFtZSkpO1xuICByb29tcyA9IGRhdGFTZXQucm9vbXMubWFwKHJvb20gPT4gbmV3IFJvb20ocm9vbS5udW1iZXIsIHJvb20ucm9vbVR5cGUsIHJvb20uYmlkZXQsIHJvb20uYmVkU2l6ZSwgcm9vbS5udW1CZWRzLCByb29tLmNvc3RQZXJOaWdodCkpO1xuICByb29tc1JlcG8gPSBuZXcgUm9vbXNSZXBvKHJvb21zKTtcbiAgYm9va2luZ3MgPSBkYXRhU2V0LmJvb2tpbmdzLm1hcChib29raW5nID0+IG5ldyBCb29raW5nKGJvb2tpbmcuaWQsIGJvb2tpbmcudXNlcklELCBib29raW5nLmRhdGUsIGJvb2tpbmcucm9vbU51bWJlciwgYm9va2luZy5yb29tU2VydmljZUNoYXJnZXMpKTtcbiAgYm9va2luZ3NSZXBvID0gbmV3IEJvb2tpbmdzUmVwbyhib29raW5ncyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZGF5RGF0ZSgpIHtcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgbW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBtb250aFxuICBkYXRlID0gZGF0ZSA8IDEwID8gYDAke2RhdGV9YCA6IGRhdGVcbiAgdG9kYXkgPSBgJHt5ZWFyfS8ke21vbnRofS8ke2RhdGV9YDtcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2dpbklucHV0cygpIHtcbiAgY29uc3Qgd3JvbmdMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cm9uZy1sb2dpbi1tc2cnKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFhcmVJbnB1dHNGaWxsZWQoKSAmJiBjaGVja1VzZXJuYW1lKCkgJiYgY2hlY2tQYXNzd29yZCgpKSB7XG4gICAgZGlzcGxheVBhZ2UoKTtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IHdyb25nTG9naW4sIGFkZEhpZGRlbjogdHJ1ZX1dKTtcbiAgICBkb21VcGRhdGUuZXJhc2VMb2dpbklucHV0cyhsb2dpbkRhdGEpO1xuICB9IGVsc2UgaWYgKCFjaGVja1VzZXJuYW1lKCkgfHwgIWNoZWNrUGFzc3dvcmQoKSB8fCBhcmVJbnB1dHNGaWxsZWQoKSkge1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogd3JvbmdMb2dpbn1dKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVJbnB1dHNGaWxsZWQoKSB7XG4gIHJldHVybiBsb2dpbkRhdGEuZmluZChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9PT0gJycpO1xufVxuXG5mdW5jdGlvbiBjaGVja1VzZXJuYW1lKCkge1xuICBjb25zdCBzcGxpdElucHV0ID0gbG9naW5EYXRhWzBdLnZhbHVlLnNwbGl0KCdjdXN0b21lcicpOyBcbiAgaWYgKHNwbGl0SW5wdXRbMF0gPT09ICdtYW5hZ2VyJykge1xuICAgIGN1cnJlbnRVc2VyID0gbmV3IE1hbmFnZXIoJ0VsbGUnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzcGxpdElucHV0WzBdID09PSAnJyAmJiBzcGxpdElucHV0WzFdIDwgNTEpIHtcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KHNwbGl0SW5wdXRbMV0pLnRvRml4ZWQoMCk7XG4gICAgY3VycmVudFVzZXIgPSB1cGRhdGVDdXJyZW50Q3VzdG9tZXIoaWQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDdXN0b21lcihpZCkge1xuICBpZCA9IHBhcnNlSW50KGlkKTtcbiAgcmV0dXJuIGN1c3RvbWVycy5maW5kKGN1c3RvbWVyID0+IGN1c3RvbWVyLmlkID09PSBpZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFzc3dvcmQoKSB7XG4gIHJldHVybiBsb2dpbkRhdGFbMV0udmFsdWUgPT09ICdvdmVybG9vazIwMjAnO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpIHtcbiAgaWYgKGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgIGRpc3BsYXlNYW5hZ2VyUGFnZSgpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgQ3VzdG9tZXIpIHtcbiAgICBkaXNwbGF5Q3VzdG9tZXJQYWdlKCk7XG4gIH1cbiAgdXBkYXRlV2VsY29tZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclBhZ2UoKSB7IFxuICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICB7c2VjdGlvbjogbG9naW5QYWdlLCBhZGRIaWRkZW46IHRydWV9LCBcbiAgICB7c2VjdGlvbjogbWFpblBhZ2V9LCBcbiAgICB7c2VjdGlvbjogZ3Vlc3RTZWN0aW9ufVxuICBdO1xuICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChzZWN0aW9ucyk7XG4gIGRpc3BsYXlNYW5hZ2VyVG9kYXlEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyVG9kYXlEYXRhKCkge1xuICBjb25zdCB0b2RheURhdGFTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWRhdGEnKTtcbiAgY29uc3QgYm9va2VkUm9vbXMgPSBib29raW5nc1JlcG8ucmV0dXJuQm9va2VkUm9vbXNOdW0oJ2RhdGUnLCB0b2RheSk7XG4gIGNvbnN0IG9wZW5Sb29tcyA9IHJvb21zUmVwby5yZXR1cm5BdmFpbGFibGVSb29tcyhib29rZWRSb29tcyk7XG4gIGNvbnN0IHJldmVudWUgPSBjdXJyZW50VXNlci5yZXR1cm5Ub2RheVJldmVudWUodG9kYXksIGJvb2tpbmdzLCByb29tcyk7XG4gIGRvbVVwZGF0ZS51cGRhdGVNYW5hZ2VyVG9kYXlEYXRhKHRvZGF5RGF0YVNlY3Rpb24sIChvcGVuUm9vbXMubGVuZ3RoKSwgcmV2ZW51ZSwgKChib29rZWRSb29tcy5sZW5ndGgpIC8gMjUpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zKCkgeyAgXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItaW5wdXQnKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VsZWN0RGF0ZSA9IGNhbGVuZGFySW5wdXQudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJyk7XG4gIGlmICghc2VsZWN0RGF0ZSB8fCBzZWxlY3REYXRlIDwgdG9kYXkpIHtcbiAgICBkaXNwbGF5TWVzc2FnZSgwLCAnZXJyb3InKTtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IGxpc3RSb29tc1NlY3Rpb24sIGFkZEhpZGRlbjogdHJ1ZX1dKTtcbiAgfSBlbHNlIGlmICghY3VycmVudEN1c3RvbWVyICYmIGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgIGRpc3BsYXlNZXNzYWdlKDAsICdlcnJvcicpO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogbGlzdFJvb21zU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUF2YWlsYWJsZVJvb21zKCk7XG4gICAgZGlzcGxheUZpbHRlclR5cGVzKCk7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBsaXN0Um9vbXNTZWN0aW9ufSwge3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uWzBdLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlUm9vbXMoKSB7XG4gIGNvbnN0IGJvb2tlZFJvb21zID0gYm9va2luZ3NSZXBvLnJldHVybkJvb2tlZFJvb21zTnVtKCdkYXRlJywgc2VsZWN0RGF0ZSk7XG4gIGNvbnN0IG9wZW5Sb29tcyA9IHJvb21zUmVwby5yZXR1cm5BdmFpbGFibGVSb29tcyhib29rZWRSb29tcyk7XG4gIGRvbVVwZGF0ZS51cGRhdGVBdmFpbGFibGVSb29tcyhkaXNwbGF5Um9vbXNTZWN0aW9uLCBvcGVuUm9vbXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmlsdGVyVHlwZXMoKSB7XG4gIGNvbnN0IGxpc3RUeXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXR5cGVzJyk7XG4gIGNvbnN0IHR5cGVzID0gcmV0dXJuQWxsUm9vbVR5cGVzKCk7XG4gIGRvbVVwZGF0ZS5kaXNwbGF5VHlwZXMobGlzdFR5cGVzLCB0eXBlcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKG51bSwgdHlwZSkge1xuICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uW251bV19XSk7XG4gIGRvbVVwZGF0ZS5kaXNwbGF5TWVzc2FnZSh7c2VjdGlvbjogbWVzc2FnZVNlY3Rpb25bbnVtXSwgW3R5cGVdOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkFsbFJvb21UeXBlcygpIHtcbiAgcmV0dXJuIHJvb21zLnJlZHVjZSgodHlwZXMsIHJvb20pID0+IHtcbiAgICBpZiAoIXR5cGVzLmluY2x1ZGVzKHJvb20ucm9vbVR5cGUpKSB7XG4gICAgICB0eXBlcy5wdXNoKHJvb20ucm9vbVR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZXNcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGaWx0ZXJSb29tcygpIHtcbiAgY29uc3QgZmlsdGVyUm9vbXMgPSBmaWx0ZXJBdmFpbGFibGVSb29tcygpO1xuICBpZiAoZmlsdGVyUm9vbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBtZXNzYWdlU2VjdGlvblsxXSwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVBdmFpbGFibGVSb29tcyhkaXNwbGF5Um9vbXNTZWN0aW9uLCBmaWx0ZXJSb29tcyk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBkaXNwbGF5Um9vbXNTZWN0aW9uLCBhZGRIaWRkZW46IHRydWV9XSlcbiAgICBkaXNwbGF5TWVzc2FnZSgxLCAnYXBwbG9neScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckF2YWlsYWJsZVJvb21zKCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBjb25zdCBib29rZWRSb29tcyA9IGJvb2tpbmdzUmVwby5yZXR1cm5Cb29rZWRSb29tc051bSgnZGF0ZScsIHNlbGVjdERhdGUpO1xuICBjb25zdCBvcGVuUm9vbXMgPSByb29tc1JlcG8ucmV0dXJuQXZhaWxhYmxlUm9vbXMoYm9va2VkUm9vbXMpO1xuICByZXR1cm4gcm9vbXNSZXBvLmZpbHRlclJvb21zQnlUeXBlKHR5cGUsIG9wZW5Sb29tcyk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEFSb29tKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcbiAgICBuZXdCb29raW5nLnJvb21OdW1iZXIgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUJvb2tpbmcoKSB7XG4gIG5ld0Jvb2tpbmcuZGF0ZSA9IHNlbGVjdERhdGU7XG4gIGlmIChjdXJyZW50Q3VzdG9tZXIpIHtcbiAgICBhZGRCb29raW5nKGN1cnJlbnRDdXN0b21lcik7XG4gIH0gZWxzZSBpZiAoY3VycmVudFVzZXIgaW5zdGFuY2VvZiBDdXN0b21lcikge1xuICAgIGFkZEJvb2tpbmcoY3VycmVudFVzZXIpO1xuICB9IFxufVxuXG5mdW5jdGlvbiBhZGRCb29raW5nKHNlbGVjdFVzZXIpIHtcbiAgbmV3Qm9va2luZy51c2VySUQgPSBzZWxlY3RVc2VyLmlkO1xuICBhcGlDYWxscy5hZGRCb29raW5nRGF0YShuZXdCb29raW5nKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBib29raW5nc1JlcG8uYm9va2luZ3MucHVzaChuZXcgQm9va2luZyhkYXRhLmlkLCBkYXRhLnVzZXJJRCwgZGF0YS5kYXRlLCBkYXRhLnJvb21OdW1iZXIpKTtcbiAgICAgIHNlbGVjdFVzZXIgPT09IGN1cnJlbnRDdXN0b21lciA/IHVwZGF0ZUd1ZXN0SW5mbygpIDogdXBkYXRlQ3VzdG9tZXJQYWdlKCk7XG4gICAgICB1cGRhdGVBdmFpbGFibGVSb29tcygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJldHVybkd1ZXN0SW5mbygpIHtcbiAgY29uc3QgZ3Vlc3RTZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNndWVzdC1uYW1lJyk7XG4gIHJldHVybiBjdXN0b21lcnMuZmluZChjdXN0b21lciA9PiBjdXN0b21lci5uYW1lID09PSBndWVzdFNlYXJjaElucHV0LnZhbHVlKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3RJbmZvKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjdXJyZW50Q3VzdG9tZXIgPSByZXR1cm5HdWVzdEluZm8oKTsgICBcbiAgaWYgKGN1cnJlbnRDdXN0b21lcikge1xuICAgIHVwZGF0ZUd1ZXN0SW5mbygpO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogZGlzcGxheUd1ZXN0RGF0YVNlY3Rpb259XSk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBkaXNwbGF5R3Vlc3REYXRhU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUd1ZXN0SW5mbygpIHtcbiAgY29uc3QgYm9va2luZ3MgPSBib29raW5nc1JlcG8uZmlsdGVyQm9va2luZ3NCeVJlZigndXNlcklEJywgY3VycmVudEN1c3RvbWVyLmlkKTtcbiAgY29uc3QgdG90YWxDb3N0ID0gY3VycmVudEN1c3RvbWVyLnJldHVyblVzZXJSZXZlbnVlKGN1cnJlbnRDdXN0b21lci5pZCwgYm9va2luZ3MsIHJvb21zKTtcbiAgYm9va2luZ3Muc29ydCgoYSwgYikgPT4gYS5kYXRlIDwgYi5kYXRlID8gLTEgOiAxKTsgXG4gIGRvbVVwZGF0ZS51cGRhdGVHdWVzdEluZm8oZGlzcGxheUd1ZXN0RGF0YVNlY3Rpb24sIGJvb2tpbmdzLCB0b3RhbENvc3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVCb29raW5nKCkge1xuICBjb25zdCBpbnF1ZXJ5ID0gY2hlY2tEZWxldGVCb29raW5nSW5wdXRzKCk7XG4gIGlmIChpbnF1ZXJ5ICYmIGN1cnJlbnRDdXN0b21lciAmJiBzZWxlY3REYXRlID49IHRvZGF5KSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBtZXNzYWdlU2VjdGlvblsyXSwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICAgIGFwaUNhbGxzLmRlbGV0ZUJvb2tpbmdEYXRhKHtpZDogaW5xdWVyeS5pZH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHVkcGF0ZURlbGV0ZUJvb2tpbmcoaW5xdWVyeS5pZCk7XG4gICAgICAgIHVwZGF0ZUd1ZXN0SW5mbygpO1xuICAgICAgfSlcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5TWVzc2FnZSgyLCAnZXJyb3InKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVsZXRlQm9va2luZ0lucHV0cygpIHtcbiAgc2VsZWN0RGF0ZSA9IGRlbGV0ZUJvb2tpbmdJbnB1dHNbMF0udmFsdWUucmVwbGFjZUFsbCgnLScsICcvJyk7XG4gIGNvbnN0IHJvb21OdW0gPSBwYXJzZUludChkZWxldGVCb29raW5nSW5wdXRzWzFdLnZhbHVlKTtcbiAgcmV0dXJuIGJvb2tpbmdzUmVwby5maW5kQm9va2luZyhzZWxlY3REYXRlLCByb29tTnVtKTtcbn1cblxuZnVuY3Rpb24gdWRwYXRlRGVsZXRlQm9va2luZyhpZCkge1xuICBkZWxldGVCb29raW5nSW5wdXRzWzBdLnZhbHVlID0gJyc7XG4gIGRlbGV0ZUJvb2tpbmdJbnB1dHNbMV0udmFsdWUgPSAnJztcbiAgYm9va2luZ3NSZXBvLnJlbW92ZUJvb2tpbmcoaWQpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlbGNvbWUoKSB7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZScpO1xuICBkb21VcGRhdGUudXBkYXRlV2VsY29tZU1zZyh3ZWxjb21lLCBjdXJyZW50VXNlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclBhZ2UoKSB7XG4gIGNvbnN0IGRlbGV0ZUJvb2tpbmdTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1ib29raW5nJyk7XG4gIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgIHtzZWN0aW9uOiBsb2dpblBhZ2UsIGFkZEhpZGRlbjogdHJ1ZX0sIFxuICAgIHtzZWN0aW9uOiBtYWluUGFnZX0sIFxuICAgIHtzZWN0aW9uOiBkZWxldGVCb29raW5nU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfVxuICBdO1xuICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChzZWN0aW9ucyk7XG4gIHVwZGF0ZUN1c3RvbWVyUGFnZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXN0b21lclBhZ2UoKSB7XG4gIGNvbnN0IGJvb2tpbmdzID0gYm9va2luZ3NSZXBvLmZpbHRlckJvb2tpbmdzQnlSZWYoJ3VzZXJJRCcsIGN1cnJlbnRVc2VyLmlkKTtcbiAgY29uc3QgdG90YWxDb3N0ID0gY3VycmVudFVzZXIucmV0dXJuVXNlclJldmVudWUoY3VycmVudFVzZXIuaWQsIGJvb2tpbmdzLCByb29tcyk7XG4gIGJvb2tpbmdzLnNvcnQoKGEsIGIpID0+IGEuZGF0ZSA8IGIuZGF0ZSA/IC0xIDogMSk7XG4gIGRvbVVwZGF0ZS51cGRhdGVDdXN0b21lclZpZXcoZ3Vlc3RTZWN0aW9uLCBib29raW5ncywgdG90YWxDb3N0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=