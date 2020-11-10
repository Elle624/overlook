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
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.login-form {\n  display: flex;\n  width: 33em;\n  height: 21em;\n  padding: 0;\n  border-radius: 0.4em;\n  margin: 5em auto 3em;\n  flex-direction: column;\n  align-items: center;\n  background: #fffaf6;\n  color: #7e7975;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(255, 255, 255, 0.4); }\n  .login-form #log-in {\n    font-size: 3em;\n    padding-top: 0.3em;\n    color: #6c6763; }\n  .login-form label {\n    display: block;\n    font-size: 0.4em;\n    color: black; }\n\n.wrong-login-msg {\n  font-size: 1em;\n  color: #c05322; }\n\n.login-form .float {\n  width: 40%;\n  padding-top: 0.3em; }\n\n.login-form input[type=text],\n.login-form input[type=password] {\n  display: block;\n  width: 120%;\n  height: 3em;\n  padding: 0.5em;\n  border-radius: 0.2em;\n  font-size: 0.5em;\n  border: 0.2em solid #ebe6e2;\n  transition: all 0.3s ease-out; }\n  .login-form input[type=text] :hover,\n  .login-form input[type=password] :hover {\n    border-color: #CCC; }\n\n.login-form input[type=submit] {\n  width: 7em;\n  height: 2em;\n  box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.3);\n  border-radius: 0.3em;\n  cursor: pointer;\n  font-size: 0.5em;\n  text-align: center;\n  font-weight: bold;\n  background: linear-gradient(#fbd568, #ffb347);\n  border: 1px solid #f4ab4c;\n  color: #996319; }\n  .login-form input[type=submit]:hover {\n    box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), inset 0 20px 40px rgba(255, 255, 255, 0.15); }\n  .login-form input[type=submit]:active {\n    top: 1px; }\n\n.hidden {\n  display: none; }\n\n.hide {\n  visibility: hidden; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") center/100% 100% no-repeat;\n  width: 100%;\n  height: 100vh; }\n\n.login-page {\n  margin-top: 10em; }\n\nh1 {\n  text-align: center;\n  font-size: 5em;\n  color: #79bfee; }\n\nh2 {\n  font-family: sans-serif;\n  font-size: 2.5em;\n  color: #114293; }\n\ninput {\n  display: block;\n  width: 10em;\n  height: 1.5em;\n  padding: 0.1em;\n  border-radius: 0.1em;\n  font-size: 1.4em;\n  font-weight: lighter;\n  margin: 0.5em 0 1em; }\n\nbutton {\n  width: 6em;\n  height: 2em;\n  font-size: 1em;\n  background-color: #4287f5;\n  border: none;\n  border-radius: 3em;\n  color: #fff;\n  transition: 300ms; }\n  button:hover {\n    cursor: pointer;\n    color: #0505c5;\n    opacity: 0.7; }\n\n.book-btn {\n  margin: 1em 0; }\n\n.main-page {\n  width: 100%;\n  height: -webkit-fill-available;\n  background-color: #fffcfc;\n  overflow-y: auto; }\n\nnav {\n  display: flex;\n  background-color: #3e97de; }\n\nimg {\n  width: 3em;\n  height: 3em;\n  margin-right: 1em; }\n\n.dashboard {\n  padding: 1em;\n  margin: 10em 10em;\n  display: flex;\n  border: #4097de6b 0.5em solid; }\n\n.left-side {\n  width: 40%; }\n\n.today-data {\n  margin-bottom: 2em;\n  background-color: white;\n  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc; }\n\n.label-name {\n  font-family: sans-serif;\n  font-size: 1.6em; }\n\np {\n  font-size: 2em;\n  color: #071775; }\n  p:hover {\n    opacity: 0.5; }\n  p.guest {\n    margin-top: 1em;\n    color: #f3f1f1;\n    background-color: #4097de;\n    border-radius: 0.2em;\n    padding: 0.2em;\n    box-shadow: 0.2em 0.2em #b2d2f0; }\n\n.room-list, .booking-list {\n  cursor: pointer;\n  margin: 2em 0;\n  background-color: #aad6fa99;\n  box-shadow: 0.5em 0.5em #8f979d;\n  border-radius: 0.6em;\n  padding: 0.5em; }\n\n.right-side {\n  margin-left: 10%;\n  width: 60%;\n  display: flex; }\n\n#customer-data-display {\n  width: fit-content;\n  padding: 0.5em; }\n\n.guest-data {\n  width: 30em; }\n\n#guest-name {\n  width: 8em; }\n\n.delete-booking {\n  width: 40%;\n  margin-left: 2em; }\n\n#room-num {\n  width: 7em;\n  height: 1.5em; }\n\n.delete-booking-btn {\n  width: 9em; }\n\n@media only screen and (max-width: 1200px) {\n  .dashboard {\n    margin: 10em 1em; } }\n\n@media only screen and (max-width: 1023px) {\n  .right-side {\n    display: block; }\n  .delete-booking {\n    margin: 3em 0; } }\n\n@media only screen and (max-width: 767px) {\n  .guest-data {\n    width: 10em; } }\n\n@media only screen and (max-width: 480px) {\n  .dashboard {\n    display: block; }\n  .right-side {\n    margin-top: 2em; }\n  .left-side {\n    width: 100%; } }\n", ""]);



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
  const wrongLogin = document.querySelector('.wrong-login-msg');
  event.preventDefault();
  if (!areInputsFilled() && checkUsername() && checkPassword()) {
    displayPage();
    _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement([{section: wrongLogin, addHidden: true}]);
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
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}, {section: deleteBookingSection, addHidden: true}];
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateElement(sections);
  updateCustomerPage();
}

function updateCustomerPage() {
  const guestSection = document.querySelector('.guest-data');
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentUser.id);
  const totalCost = currentUser.returnUserRevenue(currentUser.id, bookings, rooms);
  bookings.sort((a, b) => a.date < b.date ? -1 : 1);
  _domUpdate__WEBPACK_IMPORTED_MODULE_8__["default"].updateCustomerView(guestSection, bookings, totalCost);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZ3NSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9vbXNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3VzZXItaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRTs7Ozs7Ozs7Ozs7O0FDVmY7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyRTs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQUE7QUFBMEI7O0FBRTFCLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ3BCdkI7QUFBQTtBQUEwQjs7QUFFMUIsc0JBQXNCLDZDQUFJO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRWUsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDcEJ0QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSx3RTs7Ozs7Ozs7Ozs7O0FDMUJmO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLG1FOzs7Ozs7Ozs7Ozs7QUNaZjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ3pDdkIsY0FBYyxtQkFBTyxDQUFDLCtNQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQsd0RBQXdELG1CQUFtQjtBQUMzRSx5REFBeUQsNEJBQTRCO0FBQ3JGO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsWUFBWTtBQUNoRSx3QkFBd0IsWUFBWTtBQUNwQyxzQkFBc0IsY0FBYztBQUNwQyxrQkFBa0IsV0FBVztBQUM3QixxQkFBcUIsYUFBYTtBQUNsQywyQkFBMkIsYUFBYTtBQUN4Qyw0QkFBNEIsa0JBQWtCO0FBQzlDOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUssSUFBSSxLQUFLO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RSxlQUFlLCtCQUErQjtBQUM5QztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjLEdBQUcsY0FBYyxJQUFJLGNBQWM7QUFDcEUsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsZ0JBQWdCO0FBQ2pGLGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBOztBQUVlLHdFOzs7Ozs7Ozs7OztBQzVIZix5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDTztBQUNFO0FBQ1I7QUFDVTtBQUNKO0FBQ1U7QUFDUjtBQUNFO0FBQ0w7O0FBRS9CO0FBQ0Esd0Q7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0EsMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxpREFBUSxnQkFBZ0IsaURBQVEsZ0JBQWdCLGlEQUFRO0FBQ3JFO0FBQ0EsMkQ7QUFDQSx3QkFBd0I7QUFDeEIsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSw0Q0FBNEMsaURBQVE7QUFDcEQsd0NBQXdDLDZDQUFJO0FBQzVDLGtCQUFrQixrREFBUztBQUMzQixpREFBaUQsZ0RBQU87QUFDeEQscUJBQXFCLHFEQUFZO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakMseUJBQXlCLEtBQUs7QUFDOUIsYUFBYSxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUs7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVMsaUJBQWlCLHFDQUFxQztBQUNuRSxHQUFHO0FBQ0gsSUFBSSxrREFBUyxpQkFBaUIsb0JBQW9CO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEQ7QUFDQTtBQUNBLHNCQUFzQixnREFBTztBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixnREFBTztBQUNwQztBQUNBLEdBQUcsaUNBQWlDLGlEQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCO0FBQ0EscUJBQXFCLG9DQUFvQyxHQUFHLGtCQUFrQjtBQUM5RSxFQUFFLGtEQUFTO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBUztBQUNYOztBQUVBLGtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVMsaUJBQWlCLDJDQUEyQztBQUN6RSxHQUFHLHFEQUFxRCxnREFBTztBQUMvRDtBQUNBLElBQUksa0RBQVMsaUJBQWlCLDJDQUEyQztBQUN6RSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksa0RBQVMsaUJBQWlCLDBCQUEwQixHQUFHLDRDQUE0QztBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVM7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1g7O0FBRUE7QUFDQSxFQUFFLGtEQUFTLGlCQUFpQiw2QkFBNkI7QUFDekQsRUFBRSxrREFBUyxpQkFBaUIsMkNBQTJDO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTLGlCQUFpQiw0Q0FBNEM7QUFDMUUsSUFBSSxrREFBUztBQUNiLEdBQUc7QUFDSCxJQUFJLGtEQUFTLGlCQUFpQiw4Q0FBOEM7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpQ0FBaUMsaURBQVE7QUFDNUM7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVjtBQUNBLHFDQUFxQyxnREFBTztBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTLGlCQUFpQixpQ0FBaUM7QUFDL0QsR0FBRztBQUNILElBQUksa0RBQVMsaUJBQWlCLGtEQUFrRDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EO0FBQ0EsRUFBRSxrREFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVMsaUJBQWlCLDRDQUE0QztBQUMxRSxJQUFJLGlEQUFRLG9CQUFvQixlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0NBQW9DLEdBQUcsa0JBQWtCLEdBQUcsK0NBQStDO0FBQ2hJLEVBQUUsa0RBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTO0FBQ1giLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzNlbTtcXG4gIGhlaWdodDogMjFlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXG4gIG1hcmdpbjogNWVtIGF1dG8gM2VtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmYWY2O1xcbiAgY29sb3I6ICM3ZTc5NzU7XFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxcbiAgLmxvZ2luLWZvcm0gI2xvZy1pbiB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XFxuICAgIGNvbG9yOiAjNmM2NzYzOyB9XFxuICAubG9naW4tZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuNGVtO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ud3JvbmctbG9naW4tbXNnIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY29sb3I6ICNjMDUzMjI7IH1cXG5cXG4ubG9naW4tZm9ybSAuZmxvYXQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmctdG9wOiAwLjNlbTsgfVxcblxcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwJTtcXG4gIGhlaWdodDogM2VtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBib3JkZXI6IDAuMmVtIHNvbGlkICNlYmU2ZTI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDsgfVxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSA6aG92ZXIsXFxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXSA6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNDQ0M7IH1cXG5cXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgd2lkdGg6IDdlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmJkNTY4LCAjZmZiMzQ3KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGFiNGM7XFxuICBjb2xvcjogIzk5NjMxOTsgfVxcbiAgLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCBpbnNldCAwIDIwcHggNDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpOyB9XFxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlIHtcXG4gICAgdG9wOiAxcHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKSBjZW50ZXIvMTAwJSAxMDAlIG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIG1hcmdpbi10b3A6IDEwZW07IH1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIGNvbG9yOiAjNzliZmVlOyB9XFxuXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgY29sb3I6ICMxMTQyOTM7IH1cXG5cXG5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMGVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAuMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBtYXJnaW46IDAuNWVtIDAgMWVtOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA2ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODdmNTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7IH1cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMwNTA1YzU7XFxuICAgIG9wYWNpdHk6IDAuNzsgfVxcblxcbi5ib29rLWJ0biB7XFxuICBtYXJnaW46IDFlbSAwOyB9XFxuXFxuLm1haW4tcGFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZjZmM7XFxuICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5N2RlOyB9XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLmRhc2hib2FyZCB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IDEwZW0gMTBlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6ICM0MDk3ZGU2YiAwLjVlbSBzb2xpZDsgfVxcblxcbi5sZWZ0LXNpZGUge1xcbiAgd2lkdGg6IDQwJTsgfVxcblxcbi50b2RheS1kYXRhIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMXB4ICNkZGQsIDAgMTBweCAyMHB4ICNjY2M7IH1cXG5cXG4ubGFiZWwtbmFtZSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS42ZW07IH1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICMwNzE3NzU7IH1cXG4gIHA6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7IH1cXG4gIHAuZ3Vlc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGNvbG9yOiAjZjNmMWYxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5N2RlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIGJveC1zaGFkb3c6IDAuMmVtIDAuMmVtICNiMmQyZjA7IH1cXG5cXG4ucm9vbS1saXN0LCAuYm9va2luZy1saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkNmZhOTk7XFxuICBib3gtc2hhZG93OiAwLjVlbSAwLjVlbSAjOGY5NzlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5yaWdodC1zaWRlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICB3aWR0aDogNjAlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNjdXN0b21lci1kYXRhLWRpc3BsYXkge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uZ3Vlc3QtZGF0YSB7XFxuICB3aWR0aDogMzBlbTsgfVxcblxcbiNndWVzdC1uYW1lIHtcXG4gIHdpZHRoOiA4ZW07IH1cXG5cXG4uZGVsZXRlLWJvb2tpbmcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbi1sZWZ0OiAyZW07IH1cXG5cXG4jcm9vbS1udW0ge1xcbiAgd2lkdGg6IDdlbTtcXG4gIGhlaWdodDogMS41ZW07IH1cXG5cXG4uZGVsZXRlLWJvb2tpbmctYnRuIHtcXG4gIHdpZHRoOiA5ZW07IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmRhc2hib2FyZCB7XFxuICAgIG1hcmdpbjogMTBlbSAxZW07IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAucmlnaHQtc2lkZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuZGVsZXRlLWJvb2tpbmcge1xcbiAgICBtYXJnaW46IDNlbSAwOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuZ3Vlc3QtZGF0YSB7XFxuICAgIHdpZHRoOiAxMGVtOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuZGFzaGJvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5yaWdodC1zaWRlIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtOyB9XFxuICAubGVmdC1zaWRlIHtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoaWQsIHVzZXJJRCwgZGF0ZSwgcm9vbU51bWJlciwgcm9vbVNlcnZpY2VDaGFyZ2VzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5yb29tTnVtYmVyID0gcm9vbU51bWJlcjtcbiAgICB0aGlzLnJvb21TZXJ2aWNlQ2hhcmdlcyA9IHJvb21TZXJ2aWNlQ2hhcmdlcyB8fCBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nIiwiY2xhc3MgQm9va2luZ3NSZXBvIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ3MpIHtcbiAgICB0aGlzLmJvb2tpbmdzID0gYm9va2luZ3MgfHwgW107XG4gIH1cblxuICByZXR1cm5Cb29rZWRSb29tc051bShyZWZlcmFuY2UsIGRldGFpbCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tpbmdzLnJlZHVjZSgoYm9va2VkUm9vbXNOdW0sIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nW3JlZmVyYW5jZV0gPT09IGRldGFpbCkge1xuICAgICAgICBib29rZWRSb29tc051bS5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9va2VkUm9vbXNOdW1cbiAgICB9LCBbXSlcbiAgfVxuXG4gIGZpbHRlckJvb2tpbmdzQnlSZWYocmVmZXJhbmNlLCBkZXRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5ncy5maWx0ZXIoYm9va2luZyA9PiBib29raW5nW3JlZmVyYW5jZV0gPT09IGRldGFpbCk7XG4gIH1cblxuICBmaW5kQm9va2luZyhkYXRlLCBudW0pIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5ncy5maW5kKGJvb2tpbmcgPT4gYm9va2luZy5kYXRlID09PSBkYXRlICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gbnVtKTtcbiAgfVxuXG4gIHJlbW92ZUJvb2tpbmcoaWQpIHtcbiAgICB0aGlzLmJvb2tpbmdzID0gdGhpcy5ib29raW5ncy5maWx0ZXIoYm9va2luZyA9PiBib29raW5nLmlkICE9PSBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ3NSZXBvIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcbiAgICBzdXBlcihpZCwgbmFtZSk7XG4gIH1cblxuICByZXR1cm5Vc2VyUmV2ZW51ZShpZCwgYm9va2luZ3MsIHJvb21zKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdzLnJlZHVjZSgodG90YWxDb3N0LCBib29raW5nKSA9PiB7XG4gICAgICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZiAoYm9va2luZy51c2VySUQgPT09IGlkICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbENvc3QgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXI7IiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgTWFuYWdlciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoJ21hbmFnZXInLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVyblRvZGF5UmV2ZW51ZShkYXRlLCBib29raW5ncywgcm9vbXMpIHtcbiAgICByZXR1cm4gYm9va2luZ3MucmVkdWNlKCh0b3RhbENvc3QsIGJvb2tpbmcpID0+IHtcbiAgICAgIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRvdGFsQ29zdCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImNsYXNzIFJvb20ge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIHJvb21UeXBlLCBiaWRldCwgYmVkU2l6ZSwgbnVtQmVkcywgY29zdFBlck5pZ2h0KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5yb29tVHlwZSA9IHJvb21UeXBlO1xuICAgIHRoaXMuYmlkZXQgPSBiaWRldDtcbiAgICB0aGlzLmJlZFNpemUgPSBiZWRTaXplO1xuICAgIHRoaXMubnVtQmVkcyA9IG51bUJlZHM7XG4gICAgdGhpcy5jb3N0UGVyTmlnaHQgPSBjb3N0UGVyTmlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vbSIsImNsYXNzIFJvb21zUmVwbyB7XG4gIGNvbnN0cnVjdG9yKHJvb21zKSB7XG4gICAgdGhpcy5yb29tcyA9IHJvb21zIHx8IFtdO1xuICB9XG5cbiAgZmlsdGVyUm9vbXNCeVR5cGUodHlwZSwgcm9vbXMpIHtcbiAgICByZXR1cm4gdGhpcy5yb29tcy5yZWR1Y2UoKHR5cGVSb29tcywgZWFjaFJvb20pID0+IHtcbiAgICAgIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmIChyb29tLm51bWJlciA9PT0gZWFjaFJvb20ubnVtYmVyICYmIGVhY2hSb29tLnJvb21UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgdHlwZVJvb21zLnB1c2goZWFjaFJvb20pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdHlwZVJvb21zXG4gICAgfSwgW10pXG4gIH1cblxuICByZXR1cm5BdmFpbGFibGVSb29tcyhyb29tc1Rha2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vbXMucmVkdWNlKChhdmFpbGFibGVSb29tcywgcm9vbSkgPT4ge1xuICAgICAgaWYgKCFyb29tc1Rha2VuLmluY2x1ZGVzKHJvb20ubnVtYmVyKSkge1xuICAgICAgICBhdmFpbGFibGVSb29tcy5wdXNoKHJvb20pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF2YWlsYWJsZVJvb21zO1xuICAgIH0sIFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21zUmVwbyIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcmV0dXJuVXNlcihyZWZlcmFuY2UsIHVzZXJzKSB7XG4gICAgcmVmZXJhbmNlLnRvTG93ZXJDYXNlKCk7IFxuICAgIHJldHVybiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSByZWZlcmFuY2UgfHwgdXNlci5uYW1lID09PSByZWZlcmFuY2UpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXIiLCJjb25zdCBnZXREYXRhID0gKHBhdGgpID0+IHtcbiAgcmV0dXJuIGZldGNoKHBhdGgpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbn1cblxuY29uc3QgdXBkYXRlRGF0YSA9IChwYXRoLCBhY3Rpb24sIGRhdGEpID0+IHtcbiAgcmV0dXJuIGZldGNoKHBhdGgsIHtcbiAgICBtZXRob2Q6IGFjdGlvbixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG59XG5cbmNvbnN0IGFwaUNhbGxzID0ge1xuXG4gIGdldFVzZXJEYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIGdldERhdGEoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJyk7XG4gIH0sXG5cbiAgZ2V0Um9vbURhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKTtcbiAgfSxcblxuICBnZXRCb29raW5nRGF0YTogKCkgPT4ge1xuICAgIHJldHVybiBnZXREYXRhKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycpO1xuICB9LFxuXG4gIGFkZEJvb2tpbmdEYXRhOiAoYm9va2luZ0RhdGEpID0+IHtcbiAgICByZXR1cm4gdXBkYXRlRGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCAnUE9TVCcsIGJvb2tpbmdEYXRhKVxuICB9LFxuXG4gIGRlbGV0ZUJvb2tpbmdEYXRhOiAoYm9va2luZ0RhdGEpID0+IHtcbiAgICByZXR1cm4gdXBkYXRlRGF0YSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCAnREVMRVRFJywgYm9va2luZ0RhdGEpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlDYWxsczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjb25zdCBkb21VcGRhdGUgPSB7XG4gIHVwZGF0ZUVsZW1lbnQ6IGVsZW1lbnRzID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuYWRkSGlkZGVuKSB7XG4gICAgICAgIGVsZW1lbnQuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmFkZEhpZGUpIHtcbiAgICAgICAgZWxlbWVudC5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicsICdoaWRlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVXZWxjb21lTXNnOiAodGl0bGUsIHVzZXIpID0+IHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHt1c2VyLm5hbWV9YDtcbiAgfSxcblxuICB1cGRhdGVNYW5hZ2VyVG9kYXlEYXRhOiAoc2VjdGlvbiwgcm9vbXMsIHJldmVudWUsIG9jY3VwYXRpb24pID0+IHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBgXG4gICAgPGgyIGNsYXNzPVwiYXZhaWxhYmxlLXJvb21cIj5BdmFpbGFibGUgcm9vbXMgdG9kYXk6ICR7cm9vbXN9PC9oMj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RheS1yZXZlbnVlXCI+VG9kYXkncyB0b3RhbCByZXZlbnVlOiAkJHtyZXZlbnVlLnRvRml4ZWQoMil9PC9oMj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RheS1vY2N1cGF0aW9uXCI+Um9vbSBPY2N1cGF0aW9uIHJhdGU6ICR7KG9jY3VwYXRpb24qMTAwKS50b0ZpeGVkKDEpfSAlIDwvaDI+XG4gICAgYFxuICB9LFxuXG4gIHVwZGF0ZUF2YWlsYWJsZVJvb21zOiBmdW5jdGlvbiAoc2VjdGlvbiwgcm9vbXMpIHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXNwbGF5LXJvb21zXCI+JHt0aGlzLmxpc3RSb29tcyhyb29tcyl9XG4gICAgYFxuICB9LFxuXG4gIGxpc3RSb29tczogKHJvb21zKSA9PiB7XG4gICAgbGV0IHNlY3Rpb24gPSAnJztcbiAgICBsZXQgYmlkZXRWYWx1ZTtcbiAgICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgYmlkZXRWYWx1ZSA9IHJvb20uYmlkZXQgPyAnWWVzJyA6ICdObyc7XG4gICAgICBzZWN0aW9uICs9XG4gICAgICBgXG4gICAgICA8c2VjdGlvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInJvb20tbGlzdFwiIGlkPVwiJHtyb29tLm51bWJlcn1cIj5cbiAgICAgIDxwPlJvb20gTnVtYmVyOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgIDxwPlJvb20gVHlwZTogJHtyb29tLnJvb21UeXBlfTwvcD5cbiAgICAgIDxwPkJpZGV0OiAke2JpZGV0VmFsdWV9PC9wPlxuICAgICAgPHA+QmVkIFNpemU6ICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgIDxwPk51bWJlciBvZiBCZWRzOiAke3Jvb20ubnVtQmVkc308L3A+XG4gICAgICA8cD5Db3N0IFBlciBOaWdodDogJCR7cm9vbS5jb3N0UGVyTmlnaHR9PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICBgXG4gICAgfSlcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfSxcblxuICBkaXNwbGF5VHlwZXM6IGZ1bmN0aW9uIChzZWN0aW9uLCBhbGxUeXBlcykge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8b3B0aW9uIGFyaWEtbGFiZWxsZWRieT1cImF2YWlsYWJsZS1yb29tLWZpbHRlclwiIGRpc2FibGVkIHNlbGVjdGVkIHZhbHVlPi0tIHNlbGVjdCB0eXBlIC0tPC9vcHRpb24+XG4gICAgJHt0aGlzLnVwZGF0ZVR5cGVzKGFsbFR5cGVzKX1cbiAgICBgXG4gIH0sXG5cbiAgdXBkYXRlVHlwZXM6IGFsbFR5cGVzID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9ICcnXG4gICAgYWxsVHlwZXMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIHNlY3Rpb24gKz1cbiAgICAgIGBcbiAgICAgIDxvcHRpb24gdmFsdWU9XCIke3R5cGV9XCI+JHt0eXBlfTwvb3B0aW9uPlxuICAgICAgYFxuICAgIH0pXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH0sXG5cbiAgZGlzcGxheU1lc3NhZ2U6IGVsZW1lbnQgPT4ge1xuICAgIGlmIChlbGVtZW50LmFwcGxvZ3kpIHtcbiAgICAgIGVsZW1lbnQuc2VjdGlvbi5pbm5lclRleHQgPSAnV2UgYXJlIHZlcnkgc29ycnkhISEgQ3VycmVudGx5IHRoZXJlIGFyZSBubyByb29tcyBhdmFpbGFibGUgZm9yIHRoYXQgdHlwZS9kYXksIHBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgdHlwZS9kYXRlISdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZXJyb3IpIHtcbiAgICAgIGVsZW1lbnQuc2VjdGlvbi5pbm5lclRleHQgPSAnSW52YWxpZCBpbnB1dCEgUGxlYXNlIGRvdWJsZSBjaGVjayAoaWYpIHNlbGVjdGVkIGRhdGUvcm9vbSMvY3VzdG9tZXIgYW5kIHRyeSBhZ2FpbiEgJ1xuICAgIH0gXG4gIH0sXG5cbiAgdXBkYXRlR3Vlc3RJbmZvOiBmdW5jdGlvbiAoc2VjdGlvbiwgYm9va2luZ3MsIGNvc3QpIHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID1cbiAgICBgXG4gICAgPGgyIGNsYXNzPVwiZ3Vlc3QgZ3Vlc3QtYm9va2luZ1wiPkJvb2tpbmcgSGlzdG9yeTwvaDI+XG4gICAgPHAgY2xhc3M9XCJndWVzdFwiIGlkPVwiY3VzdG9tZXItZGF0YS1kaXNwbGF5XCI+VG90YWwgQ29zdDogJHtjb3N0LnRvRml4ZWQoMil9PC9wPlxuICAgIDxzZWN0aW9uPiR7dGhpcy5kaXNwbGF5Qm9va2luZ3MoYm9va2luZ3MpfTwvc2VjdGlvbj5cbiAgICBgXG4gIH0sXG5cbiAgZGlzcGxheUJvb2tpbmdzOiBib29raW5ncyA9PiB7XG4gICAgbGV0IHNlY3Rpb24gPSAnJztcbiAgICBib29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuZGF0ZSk7XG4gICAgICBjb25zdCBjaG9zZW5EYXRlID0gZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdCgnICcpO1xuICAgICAgc2VjdGlvbiArPSBcbiAgICAgIGBcbiAgICAgIDxzZWN0aW9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYm9va2luZy1saXN0XCIgaWQ9XCJjdXN0b21lci1kYXRhLWRpc3BsYXlcIj5cbiAgICAgICAgPHA+RGF0ZTogJHtjaG9zZW5EYXRlWzFdfSAke2Nob3NlbkRhdGVbMl19LCAke2Nob3NlbkRhdGVbM119PC9wPlxuICAgICAgICA8cD5Sb29tIE51bWJlcjogJHtib29raW5nLnJvb21OdW1iZXJ9PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYFxuICAgIH0pO1xuICAgIHJldHVybiBzZWN0aW9uO1xuICB9LFxuXG4gIHVwZGF0ZUN1c3RvbWVyVmlldzogZnVuY3Rpb24gKHNlY3Rpb24xLCBib29raW5ncywgY29zdCkge1xuICAgIHNlY3Rpb24xLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb24xLmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1ndWVzdC1kYXRhXCI+XG4gICAgICA8aDIgY2xhc3M9XCJndWVzdCBndWVzdC1ib29raW5nXCI+Qm9va2luZyBIaXN0b3J5OjwvaDI+XG4gICAgICA8cCBjbGFzcz1cImd1ZXN0XCIgaWQ9XCJjdXN0b21lci1kYXRhLWRpc3BsYXlcIj5Ub3RhbCBDb3N0OiAkJHtjb3N0LnRvRml4ZWQoMil9PC9wPlxuICAgICAgPHNlY3Rpb24+JHt0aGlzLmRpc3BsYXlCb29raW5ncyhib29raW5ncyl9PC9zZWN0aW9uPiBcbiAgICA8L3NlY3Rpb24+XG4gICAgYFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlIiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvdXNlci1pY29uLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSAnLi9DdXN0b21lcic7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0IFJvb21zUmVwbyBmcm9tICcuL1Jvb21zUmVwbyc7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuL0Jvb2tpbmcnO1xuaW1wb3J0IEJvb2tpbmdzUmVwbyBmcm9tICcuL0Jvb2tpbmdzUmVwbyc7XG5pbXBvcnQgYXBpQ2FsbHMgZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgZG9tVXBkYXRlIGZyb20gJy4vZG9tVXBkYXRlJztcbmltcG9ydCAnLi9pbWFnZXMvdXNlci1pY29uLnBuZydcblxubGV0IHRvZGF5LCBzZWxlY3REYXRlLCBjdXJyZW50Q3VzdG9tZXIsIGN1cnJlbnRVc2VyO1xubGV0IGN1c3RvbWVycywgcm9vbXMsIGJvb2tpbmdzLCByb29tc1JlcG8sIGJvb2tpbmdzUmVwbzsgXG5sZXQgbmV3Qm9va2luZyA9IHt1c2VySUQ6IDEsIGRhdGU6ICcnLCByb29tTnVtYmVyOiAxfTtcblxuY29uc3QgbG9naW5JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG9naW4taW5wdXQnKTtcbmNvbnN0IGxvZ2luRGF0YSA9IEFycmF5LmZyb20obG9naW5JbnB1dHMpOyBcbmNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyLWJ0bicpO1xuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLXBhZ2UnKTtcbmNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuY29uc3QgbGlzdFJvb21zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXJvb21zJyk7XG5jb25zdCBzZWxlY3REYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1kYXRlLWJ0bicpO1xuY29uc3QgZGlzcGxheVJvb21zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXJvb21zJyk7XG5jb25zdCBndWVzdFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY3VzdG9tZXItYnRuJyk7XG5jb25zdCBkaXNwbGF5R3Vlc3REYXRhU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWd1ZXN0LWRhdGEnKTtcbmNvbnN0IGJvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1idG4nKTtcbmNvbnN0IGRlbGV0ZUJvb2tpbmdJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWlucHV0IGlucHV0Jyk7XG5jb25zdCBkZWxldGVCb29raW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1ib29raW5nLWJ0bicpO1xuY29uc3QgbWVzc2FnZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVzc2FnZScpO1xuXG5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrTG9naW5JbnB1dHMpO1xuc2VsZWN0RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBdmFpbGFibGVSb29tcyk7XG5ndWVzdFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlHdWVzdEluZm8pO1xubGlzdFJvb21zU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkaXNwbGF5RmlsdGVyUm9vbXMpO1xuZGlzcGxheVJvb21zU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdEFSb29tKTtcbmJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlQm9va2luZyk7XG5kZWxldGVCb29raW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQm9va2luZyk7XG5cblByb21pc2UuYWxsKFthcGlDYWxscy5nZXRVc2VyRGF0YSgpLCBhcGlDYWxscy5nZXRSb29tRGF0YSgpLCBhcGlDYWxscy5nZXRCb29raW5nRGF0YSgpXSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc3QgYWxsRGF0YSA9IGRhdGEucmVkdWNlKChkYXRhU2V0LCBlYWNoRGF0YXNldCkgPT4geyAgICAgIFxuICAgICAgcmV0dXJuIGRhdGFTZXQgPSB7Li4uZGF0YVNldCwgLi4uZWFjaERhdGFzZXR9XG4gICAgfSwge30pO1xuICAgIGluc3RhbmNpYXRhdGUoYWxsRGF0YSk7XG4gICAgdXBkYXRlVG9kYXlEYXRlKCk7XG4gIH0pXG5cbmZ1bmN0aW9uIGluc3RhbmNpYXRhdGUoZGF0YVNldCkge1xuICBjdXN0b21lcnMgPSBkYXRhU2V0LnVzZXJzLm1hcCh1c2VyID0+IG5ldyBDdXN0b21lcih1c2VyLmlkLCB1c2VyLm5hbWUpKTtcbiAgcm9vbXMgPSBkYXRhU2V0LnJvb21zLm1hcChyb29tID0+IG5ldyBSb29tKHJvb20ubnVtYmVyLCByb29tLnJvb21UeXBlLCByb29tLmJpZGV0LCByb29tLmJlZFNpemUsIHJvb20ubnVtQmVkcywgcm9vbS5jb3N0UGVyTmlnaHQpKTtcbiAgcm9vbXNSZXBvID0gbmV3IFJvb21zUmVwbyhyb29tcyk7XG4gIGJvb2tpbmdzID0gZGF0YVNldC5ib29raW5ncy5tYXAoYm9va2luZyA9PiBuZXcgQm9va2luZyhib29raW5nLmlkLCBib29raW5nLnVzZXJJRCwgYm9va2luZy5kYXRlLCBib29raW5nLnJvb21OdW1iZXIsIGJvb2tpbmcucm9vbVNlcnZpY2VDaGFyZ2VzKSk7XG4gIGJvb2tpbmdzUmVwbyA9IG5ldyBCb29raW5nc1JlcG8oYm9va2luZ3MpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RheURhdGUoKSB7XG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gIG1vbnRoID0gbW9udGggPCAxMCA/IGAwJHttb250aH1gIDogbW9udGhcbiAgZGF0ZSA9IGRhdGUgPCAxMCA/IGAwJHtkYXRlfWAgOiBkYXRlXG4gIHRvZGF5ID0gYCR7eWVhcn0vJHttb250aH0vJHtkYXRlfWA7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTG9naW5JbnB1dHMoKSB7XG4gIGNvbnN0IHdyb25nTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JvbmctbG9naW4tbXNnJyk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghYXJlSW5wdXRzRmlsbGVkKCkgJiYgY2hlY2tVc2VybmFtZSgpICYmIGNoZWNrUGFzc3dvcmQoKSkge1xuICAgIGRpc3BsYXlQYWdlKCk7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiB3cm9uZ0xvZ2luLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gIH0gZWxzZSBpZiAoIWNoZWNrVXNlcm5hbWUoKSB8fCAhY2hlY2tQYXNzd29yZCgpIHx8IGFyZUlucHV0c0ZpbGxlZCgpKSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiB3cm9uZ0xvZ2lufV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUlucHV0c0ZpbGxlZCgpIHtcbiAgcmV0dXJuIGxvZ2luRGF0YS5maW5kKGlucHV0ID0+IGlucHV0LnZhbHVlID09PSAnJyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVXNlcm5hbWUoKSB7XG4gIGNvbnN0IHNwbGl0SW5wdXQgPSBsb2dpbkRhdGFbMF0udmFsdWUuc3BsaXQoJ2N1c3RvbWVyJyk7IFxuICBpZiAoc3BsaXRJbnB1dFswXSA9PT0gJ21hbmFnZXInKSB7XG4gICAgY3VycmVudFVzZXIgPSBuZXcgTWFuYWdlcignRWxsZScpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHNwbGl0SW5wdXRbMF0gPT09ICcnICYmIHNwbGl0SW5wdXRbMV0gPCA1MSkge1xuICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoc3BsaXRJbnB1dFsxXSkudG9GaXhlZCgwKTtcbiAgICBjdXJyZW50VXNlciA9IHVwZGF0ZUN1cnJlbnRDdXN0b21lcihpZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudEN1c3RvbWVyKGlkKSB7XG4gIGlkID0gcGFyc2VJbnQoaWQpO1xuICByZXR1cm4gY3VzdG9tZXJzLmZpbmQoY3VzdG9tZXIgPT4gY3VzdG9tZXIuaWQgPT09IGlkKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQYXNzd29yZCgpIHtcbiAgcmV0dXJuIGxvZ2luRGF0YVsxXS52YWx1ZSA9PT0gJ292ZXJsb29rMjAyMCc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlKCkge1xuICBpZiAoY3VycmVudFVzZXIgaW5zdGFuY2VvZiBNYW5hZ2VyKSB7XG4gICAgZGlzcGxheU1hbmFnZXJQYWdlKCk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFVzZXIgaW5zdGFuY2VvZiBDdXN0b21lcikge1xuICAgIGRpc3BsYXlDdXN0b21lclBhZ2UoKTtcbiAgfVxuICB1cGRhdGVXZWxjb21lKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyUGFnZSgpIHsgXG4gIGNvbnN0IHNlY3Rpb25zID0gW3tzZWN0aW9uOiBsb2dpblBhZ2UsIGFkZEhpZGRlbjogdHJ1ZX0sIHtzZWN0aW9uOiBtYWluUGFnZX1dO1xuICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChzZWN0aW9ucyk7XG4gIGRpc3BsYXlNYW5hZ2VyVG9kYXlEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyVG9kYXlEYXRhKCkge1xuICBjb25zdCB0b2RheURhdGFTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWRhdGEnKTtcbiAgY29uc3QgYm9va2VkUm9vbXMgPSBib29raW5nc1JlcG8ucmV0dXJuQm9va2VkUm9vbXNOdW0oJ2RhdGUnLCB0b2RheSk7XG4gIGNvbnN0IG9wZW5Sb29tcyA9IHJvb21zUmVwby5yZXR1cm5BdmFpbGFibGVSb29tcyhib29rZWRSb29tcyk7XG4gIGNvbnN0IHJldmVudWUgPSBjdXJyZW50VXNlci5yZXR1cm5Ub2RheVJldmVudWUodG9kYXksIGJvb2tpbmdzLCByb29tcyk7XG4gIGRvbVVwZGF0ZS51cGRhdGVNYW5hZ2VyVG9kYXlEYXRhKHRvZGF5RGF0YVNlY3Rpb24sIChvcGVuUm9vbXMubGVuZ3RoKSwgcmV2ZW51ZSwgKChib29rZWRSb29tcy5sZW5ndGgpIC8gMjUpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zKCkgeyAgXG4gIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItaW5wdXQnKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VsZWN0RGF0ZSA9IGNhbGVuZGFySW5wdXQudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJyk7XG4gIGlmICghc2VsZWN0RGF0ZSB8fCBzZWxlY3REYXRlIDwgdG9kYXkpIHtcbiAgICBkaXNwbGF5TWVzc2FnZSgwLCAnZXJyb3InKTtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IGxpc3RSb29tc1NlY3Rpb24sIGFkZEhpZGRlbjogdHJ1ZX1dKTtcbiAgfSBlbHNlIGlmICghY3VycmVudEN1c3RvbWVyICYmIGN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgIGRpc3BsYXlNZXNzYWdlKDAsICdlcnJvcicpO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogbGlzdFJvb21zU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUF2YWlsYWJsZVJvb21zKCk7XG4gICAgZGlzcGxheUZpbHRlclR5cGVzKCk7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBsaXN0Um9vbXNTZWN0aW9ufSwge3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uWzBdLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlUm9vbXMoKSB7XG4gIGNvbnN0IGJvb2tlZFJvb21zID0gYm9va2luZ3NSZXBvLnJldHVybkJvb2tlZFJvb21zTnVtKCdkYXRlJywgc2VsZWN0RGF0ZSk7XG4gIGNvbnN0IG9wZW5Sb29tcyA9IHJvb21zUmVwby5yZXR1cm5BdmFpbGFibGVSb29tcyhib29rZWRSb29tcyk7XG4gIGRvbVVwZGF0ZS51cGRhdGVBdmFpbGFibGVSb29tcyhkaXNwbGF5Um9vbXNTZWN0aW9uLCBvcGVuUm9vbXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmlsdGVyVHlwZXMoKSB7XG4gIGNvbnN0IGxpc3RUeXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXR5cGVzJyk7XG4gIGNvbnN0IHR5cGVzID0gcmV0dXJuQWxsUm9vbVR5cGVzKCk7XG4gIGRvbVVwZGF0ZS5kaXNwbGF5VHlwZXMobGlzdFR5cGVzLCB0eXBlcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKG51bSwgdHlwZSkge1xuICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uW251bV19XSk7XG4gIGRvbVVwZGF0ZS5kaXNwbGF5TWVzc2FnZSh7c2VjdGlvbjogbWVzc2FnZVNlY3Rpb25bbnVtXSwgW3R5cGVdOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkFsbFJvb21UeXBlcygpIHtcbiAgcmV0dXJuIHJvb21zLnJlZHVjZSgodHlwZXMsIHJvb20pID0+IHtcbiAgICBpZiAoIXR5cGVzLmluY2x1ZGVzKHJvb20ucm9vbVR5cGUpKSB7XG4gICAgICB0eXBlcy5wdXNoKHJvb20ucm9vbVR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZXNcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGaWx0ZXJSb29tcygpIHtcbiAgY29uc3QgZmlsdGVyUm9vbXMgPSBmaWx0ZXJBdmFpbGFibGVSb29tcygpO1xuICBpZiAoZmlsdGVyUm9vbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBtZXNzYWdlU2VjdGlvblsxXSwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVBdmFpbGFibGVSb29tcyhkaXNwbGF5Um9vbXNTZWN0aW9uLCBmaWx0ZXJSb29tcyk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBkaXNwbGF5Um9vbXNTZWN0aW9uLCBhZGRIaWRkZW46IHRydWV9XSlcbiAgICBkaXNwbGF5TWVzc2FnZSgxLCAnYXBwbG9neScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckF2YWlsYWJsZVJvb21zKCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBjb25zdCBib29rZWRSb29tcyA9IGJvb2tpbmdzUmVwby5yZXR1cm5Cb29rZWRSb29tc051bSgnZGF0ZScsIHNlbGVjdERhdGUpO1xuICBjb25zdCBvcGVuUm9vbXMgPSByb29tc1JlcG8ucmV0dXJuQXZhaWxhYmxlUm9vbXMoYm9va2VkUm9vbXMpO1xuICByZXR1cm4gcm9vbXNSZXBvLmZpbHRlclJvb21zQnlUeXBlKHR5cGUsIG9wZW5Sb29tcyk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEFSb29tKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcbiAgICBuZXdCb29raW5nLnJvb21OdW1iZXIgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUJvb2tpbmcoKSB7XG4gIG5ld0Jvb2tpbmcuZGF0ZSA9IHNlbGVjdERhdGU7XG4gIGlmIChjdXJyZW50Q3VzdG9tZXIpIHtcbiAgICBhZGRCb29raW5nKGN1cnJlbnRDdXN0b21lcik7XG4gIH0gZWxzZSBpZiAoY3VycmVudFVzZXIgaW5zdGFuY2VvZiBDdXN0b21lcikge1xuICAgIGFkZEJvb2tpbmcoY3VycmVudFVzZXIpO1xuICB9IFxufVxuXG5mdW5jdGlvbiBhZGRCb29raW5nKHNlbGVjdFVzZXIpIHtcbiAgbmV3Qm9va2luZy51c2VySUQgPSBzZWxlY3RVc2VyLmlkO1xuICBhcGlDYWxscy5hZGRCb29raW5nRGF0YShuZXdCb29raW5nKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBib29raW5nc1JlcG8uYm9va2luZ3MucHVzaChuZXcgQm9va2luZyhkYXRhLmlkLCBkYXRhLnVzZXJJRCwgZGF0YS5kYXRlLCBkYXRhLnJvb21OdW1iZXIpKTtcbiAgICAgIHNlbGVjdFVzZXIgPT09IGN1cnJlbnRDdXN0b21lciA/IHVwZGF0ZUd1ZXN0SW5mbygpIDogdXBkYXRlQ3VzdG9tZXJQYWdlKCk7XG4gICAgICB1cGRhdGVBdmFpbGFibGVSb29tcygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJldHVybkd1ZXN0SW5mbygpIHtcbiAgY29uc3QgZ3Vlc3RTZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNndWVzdC1uYW1lJyk7XG4gIHJldHVybiBjdXN0b21lcnMuZmluZChjdXN0b21lciA9PiBjdXN0b21lci5uYW1lID09PSBndWVzdFNlYXJjaElucHV0LnZhbHVlKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3RJbmZvKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjdXJyZW50Q3VzdG9tZXIgPSByZXR1cm5HdWVzdEluZm8oKTsgICBcbiAgaWYgKGN1cnJlbnRDdXN0b21lcikge1xuICAgIHVwZGF0ZUd1ZXN0SW5mbygpO1xuICAgIGRvbVVwZGF0ZS51cGRhdGVFbGVtZW50KFt7c2VjdGlvbjogZGlzcGxheUd1ZXN0RGF0YVNlY3Rpb259XSk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoW3tzZWN0aW9uOiBkaXNwbGF5R3Vlc3REYXRhU2VjdGlvbiwgYWRkSGlkZGVuOiB0cnVlfV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUd1ZXN0SW5mbygpIHtcbiAgY29uc3QgYm9va2luZ3MgPSBib29raW5nc1JlcG8uZmlsdGVyQm9va2luZ3NCeVJlZigndXNlcklEJywgY3VycmVudEN1c3RvbWVyLmlkKTtcbiAgY29uc3QgdG90YWxDb3N0ID0gY3VycmVudEN1c3RvbWVyLnJldHVyblVzZXJSZXZlbnVlKGN1cnJlbnRDdXN0b21lci5pZCwgYm9va2luZ3MsIHJvb21zKTtcbiAgYm9va2luZ3Muc29ydCgoYSwgYikgPT4gYS5kYXRlIDwgYi5kYXRlID8gLTEgOiAxKTsgXG4gIGRvbVVwZGF0ZS51cGRhdGVHdWVzdEluZm8oZGlzcGxheUd1ZXN0RGF0YVNlY3Rpb24sIGJvb2tpbmdzLCB0b3RhbENvc3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVCb29raW5nKCkge1xuICBjb25zdCBpbnF1ZXJ5ID0gY2hlY2tEZWxldGVCb29raW5nSW5wdXRzKCk7XG4gIGlmIChpbnF1ZXJ5ICYmIGN1cnJlbnRDdXN0b21lciAmJiBzZWxlY3REYXRlID4gdG9kYXkpIHtcbiAgICBkb21VcGRhdGUudXBkYXRlRWxlbWVudChbe3NlY3Rpb246IG1lc3NhZ2VTZWN0aW9uWzJdLCBhZGRIaWRkZW46IHRydWV9XSk7XG4gICAgYXBpQ2FsbHMuZGVsZXRlQm9va2luZ0RhdGEoe2lkOiBpbnF1ZXJ5LmlkfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdWRwYXRlRGVsZXRlQm9va2luZyhpbnF1ZXJ5LmlkKTtcbiAgICAgICAgdXBkYXRlR3Vlc3RJbmZvKCk7XG4gICAgICB9KVxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlNZXNzYWdlKDIsICdlcnJvcicpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tEZWxldGVCb29raW5nSW5wdXRzKCkge1xuICBzZWxlY3REYXRlID0gZGVsZXRlQm9va2luZ0lucHV0c1swXS52YWx1ZS5yZXBsYWNlQWxsKCctJywgJy8nKTtcbiAgY29uc3Qgcm9vbU51bSA9IHBhcnNlSW50KGRlbGV0ZUJvb2tpbmdJbnB1dHNbMV0udmFsdWUpO1xuICByZXR1cm4gYm9va2luZ3NSZXBvLmZpbmRCb29raW5nKHNlbGVjdERhdGUsIHJvb21OdW0pO1xufVxuXG5mdW5jdGlvbiB1ZHBhdGVEZWxldGVCb29raW5nKGlkKSB7XG4gIGRlbGV0ZUJvb2tpbmdJbnB1dHNbMF0udmFsdWUgPSAnJztcbiAgZGVsZXRlQm9va2luZ0lucHV0c1sxXS52YWx1ZSA9ICcnO1xuICBib29raW5nc1JlcG8ucmVtb3ZlQm9va2luZyhpZClcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VsY29tZSgpIHtcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lJyk7XG4gIGRvbVVwZGF0ZS51cGRhdGVXZWxjb21lTXNnKHdlbGNvbWUsIGN1cnJlbnRVc2VyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyUGFnZSgpIHtcbiAgY29uc3QgZGVsZXRlQm9va2luZ1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJvb2tpbmcnKTtcbiAgY29uc3Qgc2VjdGlvbnMgPSBbe3NlY3Rpb246IGxvZ2luUGFnZSwgYWRkSGlkZGVuOiB0cnVlfSwge3NlY3Rpb246IG1haW5QYWdlfSwge3NlY3Rpb246IGRlbGV0ZUJvb2tpbmdTZWN0aW9uLCBhZGRIaWRkZW46IHRydWV9XTtcbiAgZG9tVXBkYXRlLnVwZGF0ZUVsZW1lbnQoc2VjdGlvbnMpO1xuICB1cGRhdGVDdXN0b21lclBhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJQYWdlKCkge1xuICBjb25zdCBndWVzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3QtZGF0YScpO1xuICBjb25zdCBib29raW5ncyA9IGJvb2tpbmdzUmVwby5maWx0ZXJCb29raW5nc0J5UmVmKCd1c2VySUQnLCBjdXJyZW50VXNlci5pZCk7XG4gIGNvbnN0IHRvdGFsQ29zdCA9IGN1cnJlbnRVc2VyLnJldHVyblVzZXJSZXZlbnVlKGN1cnJlbnRVc2VyLmlkLCBib29raW5ncywgcm9vbXMpO1xuICBib29raW5ncy5zb3J0KChhLCBiKSA9PiBhLmRhdGUgPCBiLmRhdGUgPyAtMSA6IDEpO1xuICBkb21VcGRhdGUudXBkYXRlQ3VzdG9tZXJWaWV3KGd1ZXN0U2VjdGlvbiwgYm9va2luZ3MsIHRvdGFsQ29zdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9