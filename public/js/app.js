/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js?id=" + {"0":"2190579071c875ee8661","1":"67af4bd802bfd8df8f63","2":"395175c181ce1111973d","3":"e0b09fbe0ce93e82825a","4":"99d4ec190fc5994e1e67","5":"8a60928202201ca77584","6":"2dc60a2a3e8b13a673e1","7":"8f71c578f4610b48946f","8":"1a07e9d6825e16757e11","9":"441dd58f9479c7630b1b","10":"20404bf656fe31fb40ce"}[chunkId] + ""
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@braid/vue-formulate-i18n/dist/locales.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/@braid/vue-formulate-i18n/dist/locales.esm.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "da", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "de", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "en", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "es", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "he", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "it", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ja", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ko", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pl", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pt", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ru", function() { return q; });
function e(e){return"string"==typeof e?e[0].toUpperCase()+e.substr(1):e}var r={accepted:function(e){return"من فضلك اقبل ال "+e.name},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" يجب أن يأتي بعد "+a[0]+".":e(n)+" يجب أن يكون تاريخ أحدث"},alpha:function(r){return e(r.name)+" يجب أن يحتوى على حروف أبجدية فقط."},alphanumeric:function(r){return e(r.name)+" يمكن أن يحتوي على حروف أبجدية أو أرقام فقط."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" يجب أن يكون قبل "+a[0]+".":e(n)+" يجب أن يكون تاريخ أقدم"},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" يجب أن يقع بين "+t[0]+" و "+t[1]+".":e(n)+" يجب ان يكون طوله بين "+t[0]+" و "+t[1]+" حرف."},confirm:function(r){var n=r.name;r.args;return e(n)+" غير متطابق."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" ليس على الصيغة الصحيحة, من فضلك استخدم هذه الصيغة "+a[0]:e(n)+" ليس على الصيغة الصحيحة."},default:function(e){e.name;return"هذه القيمة غير مناسبة."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” ليس عنوان بريد الكتروني.":"من فضلك أدخل عنوان بريد الكتروني مناسب."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تنتهي بنهاية صحيحة.":"نهاية هذه القيمة ليست صحيحة."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” ليس "+n+" صحيح.":"هذه القيمة ليست "+n+" صحيح."},matches:function(r){return e(r.name)+" ليست قيمة مسموح بها."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"يمكنك فقط ان تختار "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" لا يمكن أن يتجاوز "+t[0]+".":e(n)+" لا يجب ان يزيد طوله عن "+t[0]+" حرف."},mime:function(r){var n=r.name,a=r.args;return e(n)+" يجب ان يكون من نوع "+(a[0]||"لا يسمح بأي نوع.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"يجب أن تختار على الأقل "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" يجب أن يكون أكبر من "+t[0]+".":e(n)+" يجب أن يكون طوله أكبر من "+t[0]+" حرف."},not:function(e){var r=e.name;return"“"+e.value+"” ليست قيمة مسموح بها ك"+r+"."},number:function(r){return e(r.name)+" يجب أن يكون رقم."},required:function(r){return e(r.name)+" ضروري."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تبدأ بقيمة صحيحة.":"هذه القيمة لا تبدأ بقيمة صحيحة."},url:function(e){e.name;return"من فضلك أدخل رابط صحيح."}};function n(e){var n;e.extend({locales:(n={},n.ar=r,n)})}var a={accepted:function(e){return"Accepter venligst "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være efter "+a[0]+".":e(n)+" skal være en senere dato."},alpha:function(r){return e(r.name)+" kan kun indeholde bogstaver."},alphanumeric:function(r){return e(r.name)+" kan kun indeholde bogstaver og tal."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være før "+a[0]+".":e(n)+" skal være en tidligere dato."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mellem "+t[0]+" og "+t[1]+".":e(n)+" skal være mellem "+t[0]+" og "+t[1]+" tegn."},confirm:function(r){var n=r.name;r.args;return e(n)+" matcher ikke."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" er ikke gyldig, brug venligst formatet "+a[0]:e(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette felt er ikke gyldigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig email-adresse.":"Indtast venligst en gyldig email-adresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig værdi.":"Dette felt slutter ikke med en gyldig værdi."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” er ikke en tilladt "+n+".":"Dette er ikke en tilladt "+n+"."},matches:function(r){return e(r.name)+" er ikke en gyldig værdi."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du kan kun vælge "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mindre end eller lig "+t[0]+".":e(n)+" skal være mindre end eller lig "+t[0]+" tegn."},mime:function(r){var n=r.name,a=r.args;return e(n)+" skal være af typen: "+(a[0]||"Ingen tilladte filformater.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du skal vælge mindst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mere end "+t[0]+".":e(n)+" skal være mere end "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke en gyldig "+r+"."},number:function(r){return e(r.name)+" skal være et tal."},required:function(r){return e(r.name)+" er påkrævet."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig værdi.":"Dette felt starter ikke med en gyldig værdi."},url:function(e){e.name;return"Indtast venligst en gyldig URL."}};function t(e){var r;e.extend({locales:(r={},r.da=a,r)})}var i={accepted:function(e){return e.name+" erfordert Zustimmung."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss auf "+a[0]+" folgen.":e(n)+" muss ein späteres Datum sein."},alpha:function(r){return e(r.name)+" darf nur Buchstaben enthalten."},alphanumeric:function(r){return e(r.name)+" darf nur Buchstaben und Zahlen enthalten."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss vor "+a[0]+" sein.":e(n)+" muss ein früheres Datum sein."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss zwischen "+t[0]+" und "+t[1]+".":e(n)+" muss zwischen "+t[0]+" und "+t[1]+" Zeichen lang sein."},confirm:function(r){var n=r.name;r.args;return e(n)+" stimmt nicht überein."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" ist nicht korrekt, bitte das Format "+a[0]+" benutzen.":e(n)+" ist kein gültiges Datum."},default:function(e){e.name;return"Das Feld hat einen Fehler."},email:function(e){e.name;var r=e.value;return r?"„"+r+"“ ist keine gültige E-Mail-Adresse.":"Bitte eine gültige E-Mail-Adresse eingeben."},endsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” endet nicht mit einem gültigen Wert.":"Dieses Feld endet nicht mit einem gültigen Wert"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"„"+e(a)+"“ ist kein gültiger Wert für "+n+".":"Dies ist kein gültiger Wert für "+n+"."},matches:function(r){return e(r.name)+" ist kein gültiger Wert."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es dürfen nur "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss kleiner oder gleich "+t[0]+" sein.":e(n)+" muss "+t[0]+" oder weniger Zeichen lang sein."},mime:function(r){var n=r.name,a=r.args;return e(n)+" muss den Typ "+(a[0]||"Keine Dateien erlaubt")+" haben."},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es müssen mindestens "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss größer als "+t[0]+" sein.":e(n)+" must "+t[0]+" oder mehr Zeichen lang sein."},not:function(e){var r=e.name;return"„"+e.value+"“ ist kein erlaubter Wert für "+r+"."},number:function(r){return e(r.name)+" muss eine Zahl sein."},required:function(r){return e(r.name)+" ist ein Pflichtfeld."},startsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” beginnt nicht mit einem gültigen Wert":"Dieses Feld beginnt nicht mit einem gültigen Wert"},url:function(r){return e(r.name)+" muss eine gültige URL sein."}};function u(e){var r;e.extend({locales:(r={},r.de=i,r)})}var o={accepted:function(e){return"Please accept the "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be after "+a[0]+".":e(n)+" must be a later date."},alpha:function(r){return e(r.name)+" can only contain alphabetical characters."},alphanumeric:function(r){return e(r.name)+" can only contain letters and numbers."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be before "+a[0]+".":e(n)+" must be an earlier date."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be between "+t[0]+" and "+t[1]+".":e(n)+" must be between "+t[0]+" and "+t[1]+" characters long."},confirm:function(r){var n=r.name;r.args;return e(n)+" does not match."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" is not a valid date, please use the format "+a[0]:e(n)+" is not a valid date."},default:function(e){e.name;return"This field isn’t valid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is not a valid email address.":"Please enter a valid email address."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t end with a valid value.":"This field doesn’t end with a valid value."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” is not an allowed "+n+".":"This is not an allowed "+n+"."},matches:function(r){return e(r.name)+" is not an allowed value."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You may only select "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be less than or equal to "+t[0]+".":e(n)+" must be less than or equal to "+t[0]+" characters long."},mime:function(r){var n=r.name,a=r.args;return e(n)+" must be of the the type: "+(a[0]||"No file formats allowed.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You need at least "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be at least "+t[0]+".":e(n)+" must be at least "+t[0]+" characters long."},not:function(e){var r=e.name;return"“"+e.value+"” is not an allowed "+r+"."},number:function(r){return e(r.name)+" must be a number."},required:function(r){return e(r.name)+" is required."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t start with a valid value.":"This field doesn’t start with a valid value."},url:function(e){e.name;return"Please include a valid url."}};function s(e){var r;e.extend({locales:(r={},r.en=o,r)})}var l={accepted:function(e){return"Por favor acepta los "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" debe ser luego de "+a[0]+".":e(n)+" debe ser una fecha posterior."},alpha:function(r){return e(r.name)+" solo puede contener letras."},alphanumeric:function(r){return e(r.name)+" solo puede contener letras y números."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" debe ser antes de "+a[0]+".":e(n)+" debe ser una fecha anterior."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe estar entre "+t[0]+" y "+t[1]+".":e(n)+" debe tener entre "+t[0]+" y "+t[1]+" caracteres."},confirm:function(r){var n=r.name;r.args;return e(n)+" no coincide."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" no es una fecha válida, por favor use el formato "+a[0]:e(n)+" no es una fecha válida."},default:function(e){e.name;return"Este campo no es válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” no es un correo electrónico válido.":"Por favor introduzca un correo electrónico válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no termina en un valor válido.":"Este campo no termina en un valor válido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” no es un "+n+" permitido.":"Esto no es un "+n+" permitido."},matches:function(r){return e(r.name)+" no es un valor permitido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Solo puedes seleccionar "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe ser menor o igual que "+t[0]+".":e(n)+" debe ser menor o igual que "+t[0]+" caracteres."},mime:function(r){var n=r.name,a=r.args;return e(n)+" debe ser de tipo: "+(a[0]||"No se permite el formato de archivos.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Necesitas al menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" debe contener al menos "+t[0]+".":e(n)+" debe contener al menos "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” no es un "+r+" permitido."},number:function(r){return e(r.name)+" debe ser un número."},required:function(r){return e(r.name)+" es requerido."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no comienza con un valor válido.":"Este campo no comienza con un valor válido."},url:function(e){e.name;return"Por favor introduzca una url válida."}};function m(e){var r;e.extend({locales:(r={},r.es=l,r)})}var c={accepted:function(e){return"Merci d'accepter les "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être postérieur à "+a[0]+".":e(n)+" doit être une date ultérieure."},alpha:function(r){return e(r.name)+" peut uniquement contenir des lettres."},alphanumeric:function(r){return e(r.name)+" peut uniquement contenir des lettres ou des chiffres"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être antérieur à "+a[0]+".":e(n)+" doit être une date antérieure."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être compris entre "+t[0]+" et "+t[1]+".":e(n)+" doit être compris entre "+t[0]+" et "+t[1]+" caractères."},confirm:function(r){var n=r.name;r.args;return e(n)+" ne correspond pas."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" n'est pas valide.  Merci d'utiliser le format "+a[0]:e(n)+" n'est pas une date valide."},default:function(e){e.name;return"Ce champ n'est pas valide."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” n'est pas une adresse email valide.":"Merci d'entrer une adresse email valide."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne termine pas par une valeur correcte.":"Ce champ ne termine pas par une valeur correcte."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” n'est pas un(e) "+n+" autorisé(e).":"Cette valeur n'est pas un(e) "+n+" autorisé(e)."},matches:function(r){return e(r.name)+" n'est pas une valeur autorisée."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous pouvez uniquement sélectionner "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être inférieur ou égal à "+t[0]+".":e(n)+" doit être inférieur ou égal à "+t[0]+" caractères."},mime:function(r){var n=r.name,a=r.args;return e(n)+" doit être de type: "+(a[0]||"Aucun format autorisé.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous devez sélectionner au moins "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être supérieur à "+t[0]+".":e(n)+" doit être plus long que "+t[0]+" caractères."},not:function(e){var r=e.name;return"“"+e.value+"” n'est pas un(e) "+r+" autorisé(e)."},number:function(r){return e(r.name)+" doit être un nombre."},required:function(r){return e(r.name)+" est obligatoire."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne commence pas par une valeur correcte.":"Ce champ ne commence pas par une valeur correcte."},url:function(e){e.name;return"Merci d'entrer une URL valide."}};function v(e){var r;e.extend({locales:(r={},r.fr=c,r)})}var f={accepted:function(e){return"אנא קבל את ה"+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" חייב להיות אחרי "+a[0]+".":e(n)+" חייב להיות תאריך יותר מאוחר."},alpha:function(r){return e(r.name)+" יכול להכיל אותיות בלבד."},alphanumeric:function(r){return e(r.name)+" יכול להכיל אותיות ומספרים בלבד."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" חייב להיות לפני "+a[0]+".":e(n)+" חייב להיות תאריך יותר מוקדם."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+".":e(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+" אותיות."},confirm:function(r){var n=r.name;r.args;return e(n)+" אינו תואם."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" אינו תאריך תקין, אנא השתמש בפורמט "+a[0]:e(n)+" אינו תאריך תקין."},default:function(e){e.name;return"השדה אינו תקין."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו כתובת אימייל תקין.":"אנא הכנס כתובת אימייל תקין."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מסתיים בערך תקין.":"שדה זו אינו מסתיים בערך תקין."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” אינו "+n+" מורשה.":"ערך זו איננו "+n+" מורשה."},matches:function(r){return e(r.name)+" אינו ערך מורשה."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"אתה יכול לבחור רק "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות פחות או שוה ל-"+t[0]+".":e(n)+" חייב להיות פחות או שוה ל-"+t[0]+" אותיות."},mime:function(r){var n=r.name,a=r.args;return e(n)+" חייב להיות מסוג של: "+(a[0]||"סוגי קבצים לא מורשים.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"אתה צריך לפחות "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" חייב להיות לפחות "+t[0]+".":e(n)+" חייב להיות לפחות "+t[0]+" אותיות."},not:function(e){var r=e.name;return"“"+e.value+"” אינו "+r+" מורשה."},number:function(r){return e(r.name)+" חייב להיות מספר."},required:function(r){return e(r.name)+" נדרש."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מתחיל בערך תקף.":"שדה זה אינו מתחיל בערך תקף."},url:function(e){e.name;return"אנא כלול כתובת אתר חוקית."}};function d(e){var r;e.extend({locales:(r={},r.he=f,r)})}var g={accepted:function(e){return"Per favore, accetta il campo "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data successiva al "+a[0]+".":e(n)+" deve essere una data successiva a quella attuale."},alpha:function(r){return e(r.name)+" può contenere solo lettere."},alphanumeric:function(r){return e(r.name)+" può contenere solo lettere e numeri."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data precedente al "+a[0]+".":e(n)+" deve essere una data precedente a quella attuale."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere tra "+t[0]+" e "+t[1]+".":e(n)+" deve avere una lunghezza compresa tra "+t[0]+" e "+t[1]+" caratteri."},confirm:function(r){var n=r.name;r.args;return e(n)+" non corrisponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" non è una data valida. Per favore usa il formato "+a[0]:e(n)+" non è una data valida."},default:function(e){e.name;return"Questo campo non è valido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” non è un indirizzo email valido.":"Per favore, inserisci un indirizzo email valido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non termina con un valore valido.":"Questo campo non termina con un valore valido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” non è un valore valido per il campo "+n+".":n+" invalido."},matches:function(r){return e(r.name)+" invalido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Puoi selezionare al massimo "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere inferiore o uguale a "+t[0]+".":e(n)+" deve essere inferiore o uguale a "+t[0]+" caratteri."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve essere del tipo: "+(a[0]||"Nessun formato file autorizzato.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Devi selezionare almeno "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere maggiore di "+t[0]+".":e(n)+" deve essere più lungo di "+t[0]+" caratteri."},not:function(e){var r=e.name;return"“"+e.value+"” non è un valore valido per il campo "+r+"."},number:function(r){return e(r.name)+" deve essere un numero."},required:function(r){return e(r.name)+" è un campo obbligatorio."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non inizia con un valore valido.":"Questo campo non inizia con un valore valido."},url:function(e){e.name;return"Per favore inserisci un URL valido."}};function y(e){var r;e.extend({locales:(r={},r.it=g,r)})}var A={accepted:function(e){return e.name+"を承認してください。"},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以降にしてください。":e(n)+"はより後にしてください。"},alpha:function(r){return e(r.name)+"にはアルファベットのみ使用できます。"},alphanumeric:function(r){return e(r.name)+"には英数字のみ使用できます。"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以前にしてください。":e(n)+"はより前にしてください。"},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"から"+t[1]+"の間でなければなりません。":e(n)+"は"+t[0]+"文字から"+t[1]+"文字でなければなりません。"},confirm:function(r){var n=r.name;r.args;return e(n)+"が一致しません。"},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は有効な形式ではありません。次のフォーマットで入力してください: "+a[0]:e(n)+"は有効な形式ではありません。"},default:function(e){e.name;return"有効な値ではありません。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効なメールアドレスではありません。":"有効なメールアドレスを入力してください。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で終わっていません。":"有効な値で終わっていません。"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” は許可された"+n+"ではありません。":"許可された"+n+"ではありません。"},matches:function(r){return e(r.name)+"は許可された値ではありません。"},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目しか選択できません。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以下でなければなりません。":e(n)+"は"+t[0]+"文字以下でなければなりません。"},mime:function(r){var n=r.name,a=r.args;return e(n)+"は次のファイル形式でなければなりません: "+(a[0]||"許可されたファイル形式がありません")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目以上選択してください。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以上でなければなりません。":e(n)+"は"+t[0]+"文字以上でなければなりません。"},not:function(e){var r=e.name;return"“"+e.value+"” は許可された"+r+"ではありません。"},number:function(r){return e(r.name)+"には数字のみ使用できます。"},required:function(r){return e(r.name)+"は必須項目です。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で始まっていません。":"有効な値で始まっていません。"},url:function(e){e.name;return"有効なURLを入力してください。"}};function h(e){var r;e.extend({locales:(r={},r.ja=A,r)})}var p={accepted:function(e){return e.name+" 승인해 주세요."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" "+a[0]+" 이후이어야 합니다.":e(n)+" 미래의 날짜이어야 합니다."},alpha:function(r){return e(r.name)+" 알파벳만 사용할 수 있습니다."},alphanumeric:function(r){return e(r.name)+" 문자와 숫자만 사용할 수 있습니다."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" "+a[0]+" 이전이어야 합니다.":e(n)+"이전이어야 합니다."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" "+t[0]+"와 "+t[1]+"사이이어야 합니다.":e(n)+" "+t[0]+"자애서 "+t[1]+"자 사이이어야 합니다."},confirm:function(r){var n=r.name;r.args;return e(n)+" 일치하지 않습니다."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" 유효한 날짜 형식이 아닙니다. 다음과 같은 형식으로 입력해 주세요: "+a[0]:e(n)+"올바른 날짜 형식이 아닙니다."},default:function(e){e.name;return"유효하지 않은 값입니다."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 이메일 주소가 아닙니다.":"유효한 이메일 주소를 입력해 주세요."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"”으로 끝내야합니다.":"유효한 값으로 끝나지 않습니다."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” 허용된 "+n+" 아닙니다.":n+" 허용된 값이 아닙니다."},matches:function(r){return e(r.name)+" 허용 된 값이 아닙니다."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+" "+t[0]+"개의 항목만 선택 가능합니다.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" "+t[0]+"이하이어야 합니다.":e(n)+" "+t[0]+"자 이하이어야 합니다."},mime:function(r){var n=r.name,a=r.args;return e(n)+" 다음과 같은 파일 형식이어야 합니다: "+(a[0]||"허용되는 파일 형식이 아닙니다.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+" "+t[0]+" 이상 선택해 주세요.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" "+t[0]+"이상이어야 합니다.":e(n)+" "+t[0]+"자 이상이어야 합니다."},not:function(e){var r=e.name;return"“"+e.value+"” 허용된 "+r+" 아닙니다."},number:function(r){return e(r.name)+" 숫자만 사용 가능합니다."},required:function(r){return e(r.name)+" 필수 항목입니다."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 값으로 시작하지 않습니다.":"유효한 값으로 시작하지 않습니다."},url:function(e){e.name;return"유효한 URL을 입력해 주세요."}};function b(e){var r;e.extend({locales:(r={},r.ko=p,r)})}var N={accepted:function(e){return"Sta "+e.name+" toe."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" moet na "+a[0]+" zijn.":e(n)+" moet een latere datum zijn."},alpha:function(r){return e(r.name)+" mag enkel letters bevatten."},alphanumeric:function(r){return e(r.name)+" mag enkel letters en cijfers bevatten."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" moet voor "+a[0]+" zijn.":e(n)+" moet een eerdere datum zijn."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet tussen "+t[0]+" en "+t[1]+" zitten.":e(n)+" moet tussen "+t[0]+" en "+t[1]+" lang zijn."},confirm:function(r){var n=r.name;r.args;return e(n)+" komt niet overeen."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" is geen geldige datum, het juiste format is "+a[0]:e(n)+" is geen geldige datum."},default:function(e){e.name;return"De invoer voor dit veld is niet geldig"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is geen geldig e-mailadres.":"Voer een geldig e-mailadres in."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” eindigt niet op een geldige waarde.":"Dit veld eindigt niet op een geldige waarde."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” is niet toegestaan als "+n+".":"Deze "+n+" is niet toegestaan."},matches:function(r){return e(r.name)+" is niet toegestaan."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Je kunt maximaal "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet kleiner of gelijk zijn aan "+t[0]+".":e(n)+" mag maximaal "+t[0]+" karakters bevatten."},mime:function(r){var n=r.name,a=r.args;return e(n)+" moet van dit type zijn: "+(a[0]||"Bestanden zijn niet toegestaan")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Je moet tenminste "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" moet groter zijn dan "+t[0]+".":e(n)+" moet meer dan "+t[0]+" karakters bevatten."},not:function(e){var r=e.name;return"“"+e.value+"” is geen geldige "+r+"."},number:function(r){return e(r.name)+" moet een getal zijn."},required:function(r){return e(r.name)+" is verplicht."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” begint niet met een geldige waarde.":"Dit veld begint niet met een geldige waarde."},url:function(e){e.name;return"Voer een geldige URL in."}};function z(e){var r;e.extend({locales:(r={},r.nl=N,r)})}var k={accepted:function(e){return"Proszę zaakceptować "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" musi być po "+a[0]+".":e(n)+" musi być przyszłą datą."},alpha:function(r){return e(r.name)+" może zawierać wyłącznie znaki alfabetyczne."},alphanumeric:function(r){return e(r.name)+" może zawierać wyłącznie liczby i litery."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" musi być przed "+a[0]+".":e(n)+" musi być wczesniejszą datą."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+".":e(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+" znaków."},confirm:function(r){var n=r.name;r.args;return e(n)+" nie pasuje."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" nie jest poprawną datą, proszę użyć formatu "+a[0]:e(n)+" nie jest poprawną datą."},default:function(e){e.name;return"Pole nie jest poprawne."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nie jest poprawnym adresem email.":"Proszę podać poprawny adres email."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie kończy się z poprawną wartością.":"Pole nie kończy się z poprawną wartością."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” jest niedozwoloną wartością pola "+n+".":"Wartość jest niedozwolona w polu "+n+"."},matches:function(r){return e(r.name)+" nie jest dozwoloną wartością."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Możesz wybrać maksymalnie "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" musi być mniejszy lub równy "+t[0]+".":e(n)+" musi być mniejszy lub równy "+t[0]+" znaków."},mime:function(r){var n=r.name,a=r.args;return e(n)+" musi być typem: "+(a[0]||"Niedozwolone formaty plików.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Potrzeba przynajmniej "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" musi mieć przynajmniej "+t[0]+".":e(n)+" musi mieć przynajmniej "+t[0]+" znaków."},not:function(e){var r=e.name;return"“"+e.value+"” jest niedozwoloną wartością "+r+"."},number:function(r){return e(r.name)+" musi być liczbą."},required:function(r){return e(r.name)+" jest wymagane."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie zaczyna się z poprawną wartością.":"Pole nie zaczyna się z poprawną wartością."},url:function(e){e.name;return"Proszę wprowadzić poprawny adres URL."}};function w(e){var r;e.extend({locales:(r={},r.pl=k,r)})}var W={accepted:function(e){return"Por favor aceite o "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser posterior a "+a[0]+".":e(n)+" deve ser uma data posterior."},alpha:function(r){return e(r.name)+" pode conter apenas letras."},alphanumeric:function(r){return e(r.name)+" pode conter apenas letras e números."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser antes de "+a[0]+".":e(n)+" deve ser uma data anterior."},between:function(r){var n=r.name,a=r.value,t=r.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser entre "+t[0]+" e "+t[1]+".":e(n)+" deve ter entre "+t[0]+" e "+t[1]+" caracteres."},confirm:function(r){var n=r.name;r.args;return e(n)+" não corresponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" não é válido, por favor use o formato "+a[0]:e(n)+" não é uma data válida."},default:function(e){e.name;return"Este campo não é válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” não é um e-mail válido.":"Por favor informe um e-mail válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não termina com um valor válido.":"Este campo não termina com um valor válido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” não é um "+n+" permitido.":"Isso não é um "+n+" permitido."},matches:function(r){return e(r.name)+" não é um valor válido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar apenas "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser menor ou igual a "+t[0]+".":e(n)+" deve ter no máximo "+t[0]+" caracteres."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve ser no formato: "+(a[0]||"Formato de arquivo não permitido.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar pelo menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser maior que "+t[0]+".":e(n)+" deve ter mais de "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” não é um "+r+" válido."},number:function(r){return e(r.name)+" deve ser um número."},required:function(r){return e(r.name)+" é obrigatório."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não começa com um valor válido.":"Este campo não começa com um valor válido."},url:function(e){e.name;return"Por favor informe uma URL válida."}};function j(e){var r;e.extend({locales:(r={},r.pt=W,r)})}var x={accepted:function(e){return"Пожалуйста, подтвердите "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" должна быть после "+a[0]+".":e(n)+" должна быть дата после."},alpha:function(r){return e(r.name)+" может содержать только буквы."},alphanumeric:function(r){return e(r.name)+" может содержать только буквы и цифры."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" должно быть раньше "+a[0]+".":e(n)+" должно быть раньше."},between:function(r){var n=r.name,a=r.value,t=r.args;!(!Array.isArray(t)||!t[2])&&t[2];return isNaN(a),e(n)+" должно быть между "+t[0]+" и "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" не совпадает."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" не является допустимой датой, пожалуйста, используйте формат "+a[0]:e(n)+" не является допустимой датой."},default:function(e){e.name;return"Это поле не является допустимым."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” недействительный адрес электронной почты.":"Пожалуйста, введите действительный адрес электронной почты."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” не заканчивается допустимым значением.":"Это поле не заканчивается допустимым значением."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” является ошибочным для "+n+".":"Выбранное значение для "+n+" ошибочно."},matches:function(r){return e(r.name)+" не совпадает."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Вы можете выбрать только "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" должно быть меньше или равно "+t[0]+".":"Количество символов "+e(n)+" должно быть меньше или равно "+t[0]+"."},mime:function(r){var n=r.name,a=r.args;return e(n)+" должно быть файлом одного из следующих типов: "+(a[0]||"Не допустимые форматы файлов.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Должно быть не менее "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" должно быть не менее "+t[0]+".":"Количество символов "+e(n)+" должно быть не менее "+t[0]+"."},not:function(e){var r=e.name;return"“"+e.value+"” не является допустимым "+r+"."},number:function(r){return e(r.name)+" должны быть числом."},required:function(r){return e(r.name)+" обязательное поле."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” должно начинаться действительным значением.":"Поле должно начинаться действительным значением."},url:function(e){e.name;return"Пожалуйста, укажите действительный URL."}};function q(e){var r;e.extend({locales:(r={},r.ru=x,r)})}


/***/ }),

/***/ "./node_modules/@braid/vue-formulate/dist/formulate.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@braid/vue-formulate/dist/formulate.esm.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-url */ "./node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-plain-object */ "./node_modules/@braid/vue-formulate/node_modules/is-plain-object/index.js");
/* harmony import */ var _braid_vue_formulate_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @braid/vue-formulate-i18n */ "./node_modules/@braid/vue-formulate-i18n/dist/locales.esm.js");
var i=function(t,e){return{classification:t,component:"FormulateInput"+(e||t[0].toUpperCase()+t.substr(1))}},n=Object.assign({},["text","email","number","color","date","hidden","month","password","search","tel","time","url","week","datetime-local"].reduce((function(t,e){var r;return Object.assign({},t,((r={})[e]=i("text"),r))}),{}),{range:i("slider"),textarea:i("textarea","TextArea"),checkbox:i("box"),radio:i("box"),submit:i("button"),button:i("button"),select:i("select"),file:i("file"),image:i("file"),group:i("group")}),s=function(t,e,r){void 0===r&&(r={}),this.input=t,this.fileList=t.files,this.files=[],this.options=Object.assign({},{mimes:{}},r),this.results=!1,this.context=e,Array.isArray(this.fileList)?this.rehydrateFileList(this.fileList):this.addFileList(this.fileList)};function a(t,e){var r={};for(var o in t)r[o]=e(o,t[o]);return r}function l(t,e){if(t===e)return!0;if(!t||!e)return!1;var r=Object.keys(t),o=Object.keys(e),i=r.length;if(o.length!==i)return!1;for(var n=0;n<i;n++){var s=r[n];if(t[s]!==e[s])return!1}return!0}function u(t){return"string"==typeof t?t.replace(/([_-][a-z0-9])/gi,(function(e){return 0===t.indexOf(e)||/[_-]/.test(t[t.indexOf(e)-1])?e:e.toUpperCase().replace(/[_-]/,"")})):t}function c(t){return"string"==typeof t?t[0].toUpperCase()+t.substr(1):t}function d(t){return t?"string"==typeof t?[t]:Array.isArray(t)?t:"object"==typeof t?Object.values(t):[]:[]}function p(t,e){return"string"==typeof t?p(t.split("|"),e):Array.isArray(t)?t.map((function(t){return function(t,e){if("function"==typeof t)return[t,[]];if(Array.isArray(t)&&t.length){var r=h((t=t.map((function(t){return t}))).shift()),o=r[0],i=r[1];if("string"==typeof o&&e.hasOwnProperty(o))return[e[o],t,o,i];if("function"==typeof o)return[o,t,o,i]}if("string"==typeof t){var n=t.split(":"),s=h(n.shift()),a=s[0],l=s[1];if(e.hasOwnProperty(a))return[e[a],n.length?n.join(":").split(","):[],a,l];throw new Error("Unknown validation rule "+t)}return!1}(t,e)})).filter((function(t){return!!t})):[]}function h(t){return/^[\^]/.test(t.charAt(0))?[u(t.substr(1)),t.charAt(0)]:[u(t),null]}function f(t){switch(typeof t){case"symbol":case"number":case"string":case"boolean":case"undefined":return!0;default:return null===t}}function m(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function v(t,e){return Object.defineProperty(t,"__id",Object.assign(Object.create(null),{value:e||Symbol("uuid")}))}s.prototype.rehydrateFileList=function(t){var e=this,r=t.reduce((function(t,r){var o=r[e.options?e.options.fileUrlKey:"url"],i=!(!o||-1===o.lastIndexOf("."))&&o.substr(o.lastIndexOf(".")+1),n=e.options.mimes[i]||!1;return t.push(Object.assign({},r,o?{name:o.substr(o.lastIndexOf("/")+1||0),type:r.type?r.type:n,previewData:o}:{})),t}),[]);this.results=t,this.addFileList(r)},s.prototype.addFileList=function(t){for(var r=this,o=function(o){var i=t[o],n=nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1___default()();r.files.push({progress:!1,error:!1,complete:!1,justFinished:!1,name:i.name||"file-upload",file:i,uuid:n,path:!1,removeFile:function(){this.removeFile(n)}.bind(r),previewData:i.previewData||!1})},i=0;i<t.length;i++)o(i)},s.prototype.hasUploader=function(){return!!this.context.uploader},s.prototype.uploaderIsAxios=function(){return!(!this.hasUploader||"function"!=typeof this.context.uploader.request||"function"!=typeof this.context.uploader.get||"function"!=typeof this.context.uploader.delete||"function"!=typeof this.context.uploader.post)},s.prototype.getUploader=function(){for(var t,e=[],r=arguments.length;r--;)e[r]=arguments[r];if(this.uploaderIsAxios()){var o=new FormData;if(o.append(this.context.name||"file",e[0]),!1===this.context.uploadUrl)throw new Error("No uploadURL specified: https://vueformulate.com/guide/inputs/file/#props");return this.context.uploader.post(this.context.uploadUrl,o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e[1](Math.round(100*t.loaded/t.total))}}).then((function(t){return t.data})).catch((function(t){return e[2](t)}))}return(t=this.context).uploader.apply(t,e)},s.prototype.upload=function(){var t=this;return this.results?Promise.resolve(this.results):new Promise((function(e,r){if(!t.hasUploader)return r(new Error("No uploader has been defined"));Promise.all(t.files.map((function(e){return e.path?Promise.resolve(e.path):t.getUploader(e.file,(function(r){e.progress=r,r>=100&&(e.complete||(e.justFinished=!0,setTimeout((function(){e.justFinished=!1}),t.options.uploadJustCompleteDuration)),e.complete=!0)}),(function(t){e.progress=0,e.error=t,e.complete=!0}),t.options)}))).then((function(r){t.results=r,e(r)})).catch((function(t){throw new Error(t)}))}))},s.prototype.removeFile=function(t){if(this.files=this.files.filter((function(e){return e.uuid!==t})),this.context.performValidation(),window&&this.fileList instanceof FileList){var e=new DataTransfer;this.files.map((function(t){return e.items.add(t.file)})),this.fileList=e.files,this.input.files=this.fileList}},s.prototype.loadPreviews=function(){this.files.map((function(t){if(!t.previewData&&window&&window.FileReader&&/^image\//.test(t.file.type)){var e=new FileReader;e.onload=function(e){return Object.assign(t,{previewData:e.target.result})},e.readAsDataURL(t.file)}}))},s.prototype.getFileList=function(){return this.fileList},s.prototype.getFiles=function(){return this.files},s.prototype.toString=function(){var t=this.files.length?this.files.length+" files":"empty";return this.results?JSON.stringify(this.results,null,"  "):"FileUpload("+t+")"};var y,b={accepted:function(t){var e=t.value;return Promise.resolve(["yes","on","1",1,!0,"true"].includes(e))},after:function(t,e){var r=t.value;void 0===e&&(e=!1);var o=Date.parse(e||new Date),i=Date.parse(r);return Promise.resolve(!isNaN(i)&&i>o)},alpha:function(t,e){var r=t.value;void 0===e&&(e="default");var o={default:/^[a-zA-ZÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńŚśŹźŻż]+$/,latin:/^[a-zA-Z]+$/},i=o.hasOwnProperty(e)?e:"default";return Promise.resolve(o[i].test(r))},alphanumeric:function(t,e){var r=t.value;void 0===e&&(e="default");var o={default:/^[a-zA-Z0-9À-ÖØ-öø-ÿĄąĆćĘęŁłŃńŚśŹźŻż]+$/,latin:/^[a-zA-Z0-9]+$/},i=o.hasOwnProperty(e)?e:"default";return Promise.resolve(o[i].test(r))},before:function(t,e){var r=t.value;void 0===e&&(e=!1);var o=Date.parse(e||new Date),i=Date.parse(r);return Promise.resolve(!isNaN(i)&&i<o)},between:function(t,e,r,o){var i=t.value;return void 0===e&&(e=0),void 0===r&&(r=10),Promise.resolve(null!==e&&null!==r&&!isNaN(e)&&!isNaN(r)&&(!isNaN(i)&&"length"!==o||"value"===o?(i=Number(i),e=Number(e),r=Number(r),i>e&&i<r):("string"==typeof i||"length"===o)&&(i=isNaN(i)?i:i.toString()).length>e&&i.length<r))},confirm:function(t,e){var r,o,i=t.value,n=t.getFormValues,s=t.name;return Promise.resolve((r=n(),(o=e)||(o=/_confirm$/.test(s)?s.substr(0,s.length-8):s+"_confirm"),r[o]===i))},date:function(t,e){var r=t.value;return void 0===e&&(e=!1),Promise.resolve(e&&"string"==typeof e?function(t){var e="^"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"$",r={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][1-9]|3[01])",D:"([012]?[1-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"};return new RegExp(Object.keys(r).reduce((function(t,e){return t.replace(e,r[e])}),e))}(e).test(r):!isNaN(Date.parse(r)))},email:function(t){var e=t.value;return Promise.resolve(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e))},endsWith:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve("string"==typeof e&&r.length?void 0!==r.find((function(t){return e.endsWith(t)})):"string"==typeof e&&0===r.length)},in:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve(void 0!==r.find((function(t){return"object"==typeof t?l(t,e):t===e})))},matches:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve(!!r.find((function(t){return"string"==typeof t&&"/"===t.substr(0,1)&&"/"===t.substr(-1)&&(t=new RegExp(t.substr(1,t.length-2))),t instanceof RegExp?t.test(e):t===e})))},mime:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve(function(){if(e instanceof s)for(var t=e.getFiles(),o=0;o<t.length;o++){var i=t[o].file;if(!r.includes(i.type))return!1}return!0}())},min:function(t,e,r){var o=t.value;return void 0===e&&(e=1),Promise.resolve(Array.isArray(o)?(e=isNaN(e)?e:Number(e),o.length>=e):!isNaN(o)&&"length"!==r||"value"===r?(o=isNaN(o)?o:Number(o))>=e:("string"==typeof o||"length"===r)&&(o=isNaN(o)?o:o.toString()).length>=e)},max:function(t,e,r){var o=t.value;return void 0===e&&(e=10),Promise.resolve(Array.isArray(o)?(e=isNaN(e)?e:Number(e),o.length<=e):!isNaN(o)&&"length"!==r||"value"===r?(o=isNaN(o)?o:Number(o))<=e:("string"==typeof o||"length"===r)&&(o=isNaN(o)?o:o.toString()).length<=e)},not:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve(void 0===r.find((function(t){return"object"==typeof t?l(t,e):t===e})))},number:function(t){var e=t.value;return Promise.resolve(!isNaN(e))},required:function(t,e){var r=t.value;return void 0===e&&(e=!0),Promise.resolve(!(e&&!["no","false"].includes(e))||(Array.isArray(r)?!!r.length:r instanceof s?r.getFiles().length>0:"string"==typeof r?!!r:"object"!=typeof r||!!r&&!!Object.keys(r).length))},startsWith:function(t){for(var e=t.value,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return Promise.resolve("string"==typeof e&&r.length?void 0!==r.find((function(t){return e.startsWith(t)})):"string"==typeof e&&0===r.length)},url:function(e){var r=e.value;return Promise.resolve(is_url__WEBPACK_IMPORTED_MODULE_0___default()(r))},bail:function(){return Promise.resolve(!0)}},g="image/",x={csv:"text/csv",gif:g+"gif",jpg:g+"jpeg",jpeg:g+"jpeg",png:g+"png",pdf:"application/pdf",svg:g+"svg+xml"},E=["outer","wrapper","label","element","input","help","errors","error","decorator","rangeValue","uploadArea","uploadAreaMask","files","file","fileName","fileRemove","fileProgress","fileUploadError","fileImagePreview","fileProgressInner","grouping","groupRepeatable","groupRepeatableRemove","groupAddMore"],_={hasErrors:function(t){return t.hasErrors},hasValue:function(t){return t.hasValue},isValid:function(t){return t.isValid}},w=function(t,e,r){var o=[];switch(e){case"label":o.push(t+"--"+r.labelPosition);break;case"element":var i="group"===r.classification?"group":r.type;o.push(t+"--"+i),"group"===i&&o.push("formulate-input-group");break;case"help":o.push(t+"--"+r.helpPosition)}return o},F=(y=[""].concat(Object.keys(_).map((function(t){return c(t)}))),E.reduce((function(t,e){return t.concat(y.reduce((function(t,r){return t.push(""+e+r+"Class"),t}),[]))}),[]));function P(t,e,r){switch(typeof e){case"string":return e;case"function":return e(r,d(t));case"object":if(Array.isArray(e))return d(t).concat(e);default:return t}}function O(t){return E.reduce((function(e,r){var o;return Object.assign(e,((o={})[r]=function(t,e){var r=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),o="formulate"+("file"===r.substr(0,4)?"":"-input")+(["decorator","range-value"].includes(r)?"-element":"")+("outer"!==r?"-"+r:"");return"input"===r?[]:[o].concat(w(o,t,e))}(r,t),o))}),{})}function V(t,e,r,o){return new Promise((function(r,i){var n=(o.fauxUploaderDuration||2e3)*(.5+Math.random()),s=performance.now(),a=function(){return setTimeout((function(){var o=performance.now()-s,i=Math.min(100,Math.round(o/n*100));if(e(i),i>=100)return r({url:"http://via.placeholder.com/350x150.png",name:t.name});a()}),20)};a()}))}function A(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}var j={inheritAttrs:!1,functional:!0,render:function(t,e){for(var r=e.props,o=e.data,i=e.parent,n=e.children,s=i,a=(r.name,r.forceWrap),l=r.context,u=A(r,["name","forceWrap","context"]);s&&"FormulateInput"!==s.$options.name;)s=s.$parent;if(!s)return null;if(s.$scopedSlots&&s.$scopedSlots[r.name])return s.$scopedSlots[r.name](Object.assign({},l,u));if(Array.isArray(n)&&(n.length>1||a&&n.length>0)){var c=o.attrs,d=(c.name,c.context,A(c,["name","context"]));return t("div",Object.assign({},o,{attrs:d}),n)}return Array.isArray(n)&&1===n.length?n[0]:null}};function S(t,e){if(t&&"object"==typeof t&&!Array.isArray(t)){var r=t.children;void 0===r&&(r=null);var o=t.component;void 0===o&&(o="FormulateInput");var i=t.depth;void 0===i&&(i=1);var n=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}(t,["children","component","depth"]),s="FormulateInput"===o?n.type||"text":"",a=n.name||s||"el",l=n.id||a+"-"+i+"-"+e,u=Array.isArray(r)?r.map((function(t){return Object.assign(t,{depth:i+1})})):r;return Object.assign({key:l,depth:i,attrs:n,component:o},u?{children:u}:{})}return null}var $={functional:!0,render:function(t,e){return function t(e,r){return Array.isArray(r)?r.map((function(r){var o=S(r);return e(o.component,{attrs:o.attrs},o.children?t(e,o.children):null)})):r}(t,e.props.schema)}};function R(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}var k=function(t){this.registry=new Map,this.ctx=t};function I(t){return new k(t).dataProps()}function N(){return{hasInitialValue:function(){return this.formulateValue&&"object"==typeof this.formulateValue||this.values&&"object"==typeof this.values||this.isGrouping&&"object"==typeof this.context.model[this.index]},isVmodeled:function(){return!!(this.$options.propsData.hasOwnProperty("formulateValue")&&this._events&&Array.isArray(this._events.input)&&this._events.input.length)},initialValues:function(){return m(this.$options.propsData,"formulateValue")&&"object"==typeof this.formulateValue?Object.assign({},this.formulateValue):m(this.$options.propsData,"values")&&"object"==typeof this.values?Object.assign({},this.values):this.isGrouping&&"object"==typeof this.context.model[this.index]?this.context.model[this.index]:{}}}}function C(t){void 0===t&&(t=[]);var e={applyInitialValues:function(){this.hasInitialValue&&(this.proxy=this.initialValues)},setFieldValue:function(t,e){var r;if(void 0===e){var o=this.proxy,i=(o[t],R(o,[String(t)]));this.proxy=i}else Object.assign(this.proxy,((r={})[t]=e,r));this.$emit("input",Object.assign({},this.proxy))},valueDeps:function(t){var e=this;return Object.keys(this.proxy).reduce((function(r,o){return Object.defineProperty(r,o,{enumerable:!0,get:function(){var r=e.registry.get(o);return e.deps.set(t,e.deps.get(t)||new Set),r&&(e.deps.set(r,e.deps.get(r)||new Set),e.deps.get(r).add(t.name)),e.deps.get(t).add(o),e.proxy[o]}})}),Object.create(null))},validateDeps:function(t){var e=this;this.deps.has(t)&&this.deps.get(t).forEach((function(t){return e.registry.has(t)&&e.registry.get(t).performValidation()}))},hasValidationErrors:function(){return Promise.all(this.registry.reduce((function(t,e,r){return t.push(e.performValidation()&&e.getValidationErrors()),t}),[])).then((function(t){return t.some((function(t){return t.hasErrors}))}))},showErrors:function(){this.childrenShouldShowErrors=!0,this.registry.map((function(t){t.formShouldShowErrors=!0}))},hideErrors:function(){this.childrenShouldShowErrors=!1,this.registry.map((function(t){t.formShouldShowErrors=!1,t.behavioralErrorVisibility=!1}))},setValues:function(t){var e=this;Array.from(new Set(Object.keys(t).concat(Object.keys(this.proxy)))).forEach((function(r){!e.registry.has(r)||l(t[r],e.proxy[r])||l(t[r],e.registry.get(r).proxy)||(e.setFieldValue(r,t[r]),e.registry.get(r).context.model=t[r])}))}};return Object.keys(e).reduce((function(r,o){var i;return t.includes(o)?r:Object.assign({},r,((i={})[o]=e[o],i))}),{})}function D(t){return{formulateSetter:t.setFieldValue,formulateRegister:t.register,formulateDeregister:t.deregister,getFormValues:t.valueDeps,validateDependents:t.validateDeps}}k.prototype.add=function(t,e){return this.registry.set(t,e),this},k.prototype.remove=function(t){this.ctx.deps.delete(this.registry.get(t)),this.ctx.deps.forEach((function(e){return e.delete(t)})),this.registry.delete(t);var e=this.ctx.proxy,r=(e[t],R(e,[String(t)]));return this.ctx.proxy=r,this},k.prototype.has=function(t){return this.registry.has(t)},k.prototype.get=function(t){return this.registry.get(t)},k.prototype.map=function(t){var e={};return this.registry.forEach((function(r,o){var i;return Object.assign(e,((i={})[o]=t(r,o),i))})),e},k.prototype.keys=function(){return Array.from(this.registry.keys())},k.prototype.register=function(t,e){if(this.registry.has(t))return!1;this.registry.set(t,e);var r=m(e.$options.propsData,"formulateValue"),o=m(e.$options.propsData,"value");!r&&this.ctx.hasInitialValue&&this.ctx.initialValues[t]?e.context.model=this.ctx.initialValues[t]:!r&&!o||l(e.proxy,this.ctx.initialValues[t])||this.ctx.setFieldValue(t,e.proxy),this.childrenShouldShowErrors&&(e.formShouldShowErrors=!0)},k.prototype.reduce=function(t,e){return this.registry.forEach((function(r,o){e=t(e,r,o)})),e},k.prototype.dataProps=function(){var t=this;return{proxy:{},registry:this,register:this.register.bind(this),deregister:function(e){return t.remove(e)},childrenShouldShowErrors:!1,deps:new Map}};var L=function(t){this.form=t};function U(t,e,r,o,i,n,s,a,l,u){"boolean"!=typeof s&&(l=a,a=s,s=!1);var c,d="function"==typeof r?r.options:r;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),o&&(d._scopeId=o),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):e&&(c=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return r}L.prototype.hasValidationErrors=function(){return this.form.hasValidationErrors()},L.prototype.values=function(){var t=this;return new Promise((function(e,r){var o=[],i=function t(e){if("object"!=typeof e)return e;var r=Array.isArray(e)?[]:{};for(var o in e)e[o]instanceof s||f(e[o])?r[o]=e[o]:r[o]=t(e[o]);return r}(t.form.proxy),n=function(e){"object"==typeof t.form.proxy[e]&&t.form.proxy[e]instanceof s&&o.push(t.form.proxy[e].upload().then((function(t){var r;return Object.assign(i,((r={})[e]=t,r))})))};for(var a in i)n(a);Promise.all(o).then((function(){return e(i)})).catch((function(t){return r(t)}))}))};var B={provide:function(){return Object.assign({},D(this),{observeErrors:this.addErrorObserver,removeErrorObserver:this.removeErrorObserver,formulateFieldValidation:this.formulateFieldValidation})},name:"FormulateForm",model:{prop:"formulateValue",event:"input"},props:{name:{type:[String,Boolean],default:!1},formulateValue:{type:Object,default:function(){return{}}},values:{type:[Object,Boolean],default:!1},errors:{type:[Object,Boolean],default:!1},formErrors:{type:Array,default:function(){return[]}},schema:{type:[Array,Boolean],default:!1}},data:function(){return Object.assign({},I(this),{formShouldShowErrors:!1,errorObservers:[],namedErrors:[],namedFieldErrors:{}})},computed:Object.assign({},N(),{formContext:function(){return{errors:this.mergedFormErrors}},classes:function(){var t={"formulate-form":!0};return this.name&&(t["formulate-form--"+this.name]=!0),t},mergedFormErrors:function(){return this.formErrors.concat(this.namedErrors)},mergedFieldErrors:function(){var t={};if(this.errors)for(var e in this.errors)t[e]=d(this.errors[e]);for(var r in this.namedFieldErrors)t[r]=d(this.namedFieldErrors[r]);return t},hasFormErrorObservers:function(){return!!this.errorObservers.filter((function(t){return"form"===t.type})).length}}),watch:{formulateValue:{handler:function(t){this.isVmodeled&&t&&"object"==typeof t&&this.setValues(t)},deep:!0},mergedFormErrors:function(t){this.errorObservers.filter((function(t){return"form"===t.type})).forEach((function(e){return e.callback(t)}))},mergedFieldErrors:{handler:function(t){this.errorObservers.filter((function(t){return"input"===t.type})).forEach((function(e){return e.callback(t[e.field]||[])}))},immediate:!0}},created:function(){this.$formulate.register(this),this.applyInitialValues()},destroyed:function(){this.$formulate.deregister(this)},methods:Object.assign({},C(),{applyErrors:function(t){var e=t.formErrors,r=t.inputErrors;this.namedErrors=e,this.namedFieldErrors=r},addErrorObserver:function(t){this.errorObservers.find((function(e){return t.callback===e.callback}))||(this.errorObservers.push(t),"form"===t.type?t.callback(this.mergedFormErrors):m(this.mergedFieldErrors,t.field)&&t.callback(this.mergedFieldErrors[t.field]))},removeErrorObserver:function(t){this.errorObservers=this.errorObservers.filter((function(e){return e.callback!==t}))},registerErrorComponent:function(t){this.errorComponents.includes(t)||this.errorComponents.push(t)},formSubmitted:function(){var t=this;this.showErrors();var e=new L(this);return this.$emit("submit-raw",e),e.hasValidationErrors().then((function(t){return t?void 0:e.values()})).then((function(e){if(void 0!==e)return t.$emit("submit",e),e}))},formulateFieldValidation:function(t){this.$emit("validation",t)}})},M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{class:t.classes,on:{submit:function(e){return e.preventDefault(),t.formSubmitted(e)}}},[t.schema?r("FormulateSchema",{attrs:{schema:t.schema}}):t._e(),t._v(" "),t.hasFormErrorObservers?t._e():r("FormulateErrors",{attrs:{context:t.formContext}}),t._v(" "),t._t("default")],2)};M._withStripped=!0;var G=U({render:M,staticRenderFns:[]},void 0,B,void 0,!1,void 0,!1,void 0,void 0,void 0),q={context:function(){return Y.call(this,Object.assign({},{addLabel:this.logicalAddLabel,attributes:this.elementAttributes,blurHandler:W.bind(this),classification:this.classification,component:this.component,disableErrors:this.disableErrors,errors:this.explicitErrors,formShouldShowErrors:this.formShouldShowErrors,getValidationErrors:this.getValidationErrors.bind(this),hasGivenName:this.hasGivenName,hasValue:this.hasValue,hasLabel:this.label&&"button"!==this.classification,hasValidationErrors:this.hasValidationErrors.bind(this),help:this.help,helpPosition:this.logicalHelpPosition,id:this.id||this.defaultId,isValid:this.isValid,imageBehavior:this.imageBehavior,label:this.label,labelPosition:this.logicalLabelPosition,limit:this.limit,name:this.nameOrFallback,performValidation:this.performValidation.bind(this),pseudoProps:this.pseudoProps,preventWindowDrops:this.preventWindowDrops,repeatable:this.repeatable,rootEmit:this.$emit.bind(this),setErrors:this.setErrors.bind(this),showValidationErrors:this.showValidationErrors,slotComponents:this.slotComponents,slotProps:this.slotProps,type:this.type,uploadBehavior:this.uploadBehavior,uploadUrl:this.mergedUploadUrl,uploader:this.uploader||this.$formulate.getUploader(),validationErrors:this.validationErrors,value:this.value,visibleValidationErrors:this.visibleValidationErrors,isSubField:this.isSubField,classes:this.classes},this.typeContext))},nameOrFallback:function(){if(!0===this.name&&"button"!==this.classification){var t=this.id||this.elementAttributes.id.replace(/[^0-9]/g,"");return this.type+"_"+t}if(!1===this.name||"button"===this.classification&&!0===this.name)return!1;return this.name},hasGivenName:function(){return"boolean"!=typeof this.name},typeContext:function(){var t=this;switch(this.classification){case"select":return{options:T.call(this,this.options),optionGroups:!!this.optionGroups&&a(this.optionGroups,(function(e,r){return T.call(t,r)})),placeholder:this.$attrs.placeholder||!1};case"slider":return{showValue:!!this.showValue};default:return this.options?{options:T.call(this,this.options)}:{}}},elementAttributes:function(){var t=Object.assign({},this.filteredAttributes);this.id?t.id=this.id:t.id=this.defaultId;this.hasGivenName&&(t.name=this.name);this.help&&(t["aria-describedby"]=t.id+"-help");!this.classes.input||Array.isArray(this.classes.input)&&!this.classes.input.length||(t.class=this.classes.input);return t},logicalLabelPosition:function(){if(this.labelPosition)return this.labelPosition;switch(this.classification){case"box":return"after";default:return"before"}},logicalHelpPosition:function(){if(this.helpPosition)return this.helpPosition;switch(this.classification){case"group":return"before";default:return"after"}},mergedUploadUrl:function(){return this.uploadUrl||this.$formulate.getUploadUrl()},hasValue:function(){var t=this,e=this.proxy;if("box"===this.classification&&this.isGrouped)return Array.isArray(e)?e.some((function(e){return e===t.value})):this.value===e;return!function t(e){return void 0===e||""===e||null===e||!1===e||Array.isArray(e)&&!e.some((function(e){return!t(e)}))||e&&!Array.isArray(e)&&"object"==typeof e&&t(Object.values(e))}(e)},visibleValidationErrors:function(){return this.showValidationErrors&&this.validationErrors.length?this.validationErrors:[]},slotComponents:function(){var t=this.$formulate.slotComponent.bind(this.$formulate);return{label:t(this.type,"label"),help:t(this.type,"help"),errors:t(this.type,"errors"),repeatable:t(this.type,"repeatable"),addMore:t(this.type,"addMore"),remove:t(this.type,"remove")}},logicalAddLabel:function(){if("boolean"==typeof this.addLabel)return"+ "+(this.label||this.name||"Add");return this.addLabel},classes:function(){return this.$formulate.classes(Object.assign({},this.$props,this.pseudoProps,{classification:this.classification,hasErrors:this.hasVisibleErrors,hasValue:this.hasValue,helpPosition:this.logicalHelpPosition,isValid:this.isValid,labelPosition:this.logicalLabelPosition,type:this.type,value:this.proxy}))},showValidationErrors:function(){if(this.showErrors||this.formShouldShowErrors)return!0;if("file"===this.classification&&"live"===this.uploadBehavior&&z.call(this))return!0;return this.behavioralErrorVisibility},slotProps:function(){var t=this.$formulate.slotProps.bind(this.$formulate);return{label:t(this.type,"label",this.typeProps),help:t(this.type,"help",this.typeProps),errors:t(this.type,"errors",this.typeProps),repeatable:t(this.type,"repeatable",this.typeProps),addMore:t(this.type,"addMore",this.typeProps),remove:t(this.type,"remove",this.typeProps)}},pseudoProps:function(){return H(this.localAttributes,F)},isValid:function(){return!this.hasErrors},isVmodeled:function(){return!!(this.$options.propsData.hasOwnProperty("formulateValue")&&this._events&&Array.isArray(this._events.input)&&this._events.input.length)},mergedValidationName:function(){if(this.validationName)return this.validationName;if("string"==typeof this.name)return this.name;if(this.label)return this.label;return this.type},explicitErrors:function(){return d(this.errors).concat(this.localErrors).concat(d(this.error))},allErrors:function(){return this.explicitErrors.concat(d(this.validationErrors))},hasVisibleErrors:function(){return Array.isArray(this.validationErrors)&&this.validationErrors.length&&this.showValidationErrors||!!this.explicitErrors.length},hasErrors:function(){return!!this.allErrors.length},filteredAttributes:function(){var t=this,e=Object.keys(this.pseudoProps).concat(Object.keys(this.typeProps));return Object.keys(this.localAttributes).reduce((function(r,o){return e.includes(u(o))||(r[o]=t.localAttributes[o]),r}),{})},typeProps:function(){return H(this.localAttributes,this.$formulate.typeProps(this.type))}};function H(t,e){return Object.keys(t).reduce((function(r,o){var i=u(o);return e.includes(i)&&(r[i]=t[o]),r}),{})}function T(t){if(!Array.isArray(t)&&t&&"object"==typeof t){var e=[];for(var r in t)e.push({value:r,label:t[r],id:this.elementAttributes.id+"_"+r});return e}return t}function W(){this.$emit("blur"),"blur"===this.errorBehavior&&(this.behavioralErrorVisibility=!0)}function Y(t){return Object.defineProperty(t,"model",{get:z.bind(this),set:K.bind(this)})}function z(){var t=this.isVmodeled?"formulateValue":"proxy";return"checkbox"===this.type&&!Array.isArray(this[t])&&this.options?[]:this[t]?this[t]:""}function K(t){l(t,this.proxy)||(this.proxy=t,this.$emit("input",t)),this.context.name&&"function"==typeof this.formulateSetter&&this.formulateSetter(this.context.name,t)}var Z={name:"FormulateInput",inheritAttrs:!1,provide:function(){return{formulateRegisterRule:this.registerRule,formulateRemoveRule:this.removeRule}},inject:{formulateSetter:{default:void 0},formulateFieldValidation:{default:function(){return function(){return{}}}},formulateRegister:{default:void 0},formulateDeregister:{default:void 0},getFormValues:{default:function(){return function(){return{}}}},validateDependents:{default:function(){return function(){}}},observeErrors:{default:void 0},removeErrorObserver:{default:void 0},isSubField:{default:function(){return function(){return!1}}}},model:{prop:"formulateValue",event:"input"},props:{type:{type:String,default:"text"},name:{type:[String,Boolean],default:!0},formulateValue:{default:""},value:{default:!1},options:{type:[Object,Array,Boolean],default:!1},optionGroups:{type:[Object,Boolean],default:!1},id:{type:[String,Boolean,Number],default:!1},label:{type:[String,Boolean],default:!1},labelPosition:{type:[String,Boolean],default:!1},limit:{type:Number,default:1/0},help:{type:[String,Boolean],default:!1},helpPosition:{type:[String,Boolean],default:!1},isGrouped:{type:Boolean,default:!1},errors:{type:[String,Array,Boolean],default:!1},repeatable:{type:Boolean,default:!1},validation:{type:[String,Boolean,Array],default:!1},validationName:{type:[String,Boolean],default:!1},error:{type:[String,Boolean],default:!1},errorBehavior:{type:String,default:"blur",validator:function(t){return["blur","live","submit"].includes(t)}},showErrors:{type:Boolean,default:!1},imageBehavior:{type:String,default:"preview"},uploadUrl:{type:[String,Boolean],default:!1},uploader:{type:[Function,Object,Boolean],default:!1},uploadBehavior:{type:String,default:"live"},preventWindowDrops:{type:Boolean,default:!0},showValue:{type:[String,Boolean],default:!1},validationMessages:{type:Object,default:function(){return{}}},validationRules:{type:Object,default:function(){return{}}},checked:{type:[String,Boolean],default:!1},disableErrors:{type:Boolean,default:!1},addLabel:{type:[Boolean,String],default:!1}},data:function(){return{defaultId:this.$formulate.nextId(this),localAttributes:{},localErrors:[],proxy:this.getInitialValue(),behavioralErrorVisibility:"live"===this.errorBehavior,formShouldShowErrors:!1,validationErrors:[],pendingValidation:Promise.resolve(),ruleRegistry:[],messageRegistry:{}}},computed:Object.assign({},q,{classification:function(){var t=this.$formulate.classify(this.type);return"box"===t&&this.options?"group":t},component:function(){return"group"===this.classification?"FormulateInputGroup":this.$formulate.component(this.type)},parsedValidationRules:function(){var t=this,e={};return Object.keys(this.validationRules).forEach((function(r){e[u(r)]=t.validationRules[r]})),e},messages:function(){var t=this,e={};return Object.keys(this.validationMessages).forEach((function(r){e[u(r)]=t.validationMessages[r]})),Object.keys(this.messageRegistry).forEach((function(r){e[u(r)]=t.messageRegistry[r]})),e}}),watch:{$attrs:{handler:function(t){this.updateLocalAttributes(t)},deep:!0},proxy:function(t,e){this.performValidation(),this.isVmodeled||l(t,e)||(this.context.model=t),this.validateDependents(this)},formulateValue:function(t,e){this.isVmodeled&&!l(t,e)&&(this.context.model=t)},showValidationErrors:{handler:function(t){this.$emit("error-visibility",t)},immediate:!0}},created:function(){this.applyInitialValue(),this.formulateRegister&&"function"==typeof this.formulateRegister&&this.formulateRegister(this.nameOrFallback,this),this.disableErrors||"function"!=typeof this.observeErrors||this.observeErrors({callback:this.setErrors,type:"input",field:this.nameOrFallback}),this.updateLocalAttributes(this.$attrs),this.performValidation()},beforeDestroy:function(){this.disableErrors||"function"!=typeof this.removeErrorObserver||this.removeErrorObserver(this.setErrors),"function"==typeof this.formulateDeregister&&this.formulateDeregister(this.nameOrFallback)},methods:{getInitialValue:function(){var t=this.$formulate.classify(this.type);return"box"===(t="box"===t&&this.options?"group":t)&&this.checked?this.value||!0:m(this.$options.propsData,"value")&&"box"!==t?this.value:m(this.$options.propsData,"formulateValue")?this.formulateValue:""},applyInitialValue:function(){!l(this.context.model,this.proxy)&&Object.prototype.hasOwnProperty(this.$options.propsData,"options")&&"box"===this.classification&&(this.context.model=this.proxy)},updateLocalAttributes:function(t){l(t,this.localAttributes)||(this.localAttributes=t)},performValidation:function(){var t=this,e=p(this.validation,this.$formulate.rules(this.parsedValidationRules));return e=this.ruleRegistry.length?this.ruleRegistry.concat(e):e,this.pendingValidation=this.runRules(e).then((function(e){return t.didValidate(e)})),this.pendingValidation},runRules:function(t){var e=this,r=function(t){var r=t[0],o=t[1],i=t[2],n=(t[3],r.apply(void 0,[{value:e.context.model,getFormValues:function(){for(var t,r=[],o=arguments.length;o--;)r[o]=arguments[o];return(t=e).getFormValues.apply(t,[e].concat(r))},name:e.context.name}].concat(o)));return(n=n instanceof Promise?n:Promise.resolve(n)).then((function(t){return!t&&e.getMessage(i,o)}))};return new Promise((function(e){var o=function(t,i){void 0===i&&(i=[]);var n=t.shift();Array.isArray(n)&&n.length?Promise.all(n.map(r)).then((function(t){return t.filter((function(t){return!!t}))})).then((function(r){return(r=Array.isArray(r)?r:[]).length&&n.bail||!t.length?e(i.concat(r)):o(t,i.concat(r))})):e([])};o(function(t){var e=[],r=t.findIndex((function(t){return"bail"===t[2].toLowerCase()}));if(r>=0){var o=t.splice(0,r+1).slice(0,-1);o.length&&e.push(o),t.map((function(t){return e.push(Object.defineProperty([t],"bail",{value:!0}))}))}else e.push(t);return e.reduce((function(t,e){var r=function(t,e){if(void 0===e&&(e=!1),t.length<2)return Object.defineProperty([t],"bail",{value:e});var o=[],i=t.findIndex((function(t){return"^"===t[3]}));if(i>=0){var n=t.splice(0,i);n.length&&o.push.apply(o,r(n,e)),o.push(Object.defineProperty([t.shift()],"bail",{value:!0})),t.length&&o.push.apply(o,r(t,e))}else o.push(t);return o};return t.concat(r(e))}),[])}(t))}))},didValidate:function(t){var e=!l(t,this.validationErrors);if(this.validationErrors=t,e){var r=this.getErrorObject();this.$emit("validation",r),this.formulateFieldValidation&&"function"==typeof this.formulateFieldValidation&&this.formulateFieldValidation(r)}},getMessage:function(t,e){var r=this;return this.getMessageFunc(t)({args:e,name:this.mergedValidationName,value:this.context.model,vm:this,formValues:this.getFormValues(this),getFormValues:function(){for(var t,e=[],o=arguments.length;o--;)e[o]=arguments[o];return(t=r).getFormValues.apply(t,[r].concat(e))}})},getMessageFunc:function(t){var e=this;if(t=u(t),this.messages&&void 0!==this.messages[t])switch(typeof this.messages[t]){case"function":return this.messages[t];case"string":case"boolean":return function(){return e.messages[t]}}return function(r){return e.$formulate.validationMessage(t,r,e)}},hasValidationErrors:function(){var t=this;return new Promise((function(e){t.$nextTick((function(){t.pendingValidation.then((function(){return e(!!t.validationErrors.length)}))}))}))},getValidationErrors:function(){var t=this;return new Promise((function(e){t.$nextTick((function(){return t.pendingValidation.then((function(){return e(t.getErrorObject())}))}))}))},getErrorObject:function(){return{name:this.context.nameOrFallback||this.context.name,errors:this.validationErrors.filter((function(t){return"string"==typeof t})),hasErrors:!!this.validationErrors.length}},setErrors:function(t){this.localErrors=d(t)},registerRule:function(t,e,r,o){void 0===o&&(o=null),this.ruleRegistry.some((function(t){return t[2]===r}))||(this.ruleRegistry.push([t,e,r]),null!==o&&(this.messageRegistry[r]=o))},removeRule:function(t){var e=this.ruleRegistry.findIndex((function(e){return e[2]===t}));e>=0&&(this.ruleRegistry.splice(e,1),delete this.messageRegistry[t])}}},J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.outer,attrs:{"data-classification":t.classification,"data-has-errors":t.hasErrors,"data-is-showing-errors":t.hasVisibleErrors,"data-has-value":t.hasValue,"data-type":t.type}},[r("div",{class:t.context.classes.wrapper},["before"===t.context.labelPosition?t._t("label",[t.context.hasLabel?r(t.context.slotComponents.label,t._b({tag:"component",attrs:{context:t.context}},"component",t.context.slotProps.label,!1)):t._e()],null,t.context):t._e(),t._v(" "),"before"===t.context.helpPosition?t._t("help",[t.context.help?r(t.context.slotComponents.help,t._b({tag:"component",attrs:{context:t.context}},"component",t.context.slotProps.help,!1)):t._e()],null,t.context):t._e(),t._v(" "),t._t("element",[r(t.context.component,t._b({tag:"component",attrs:{context:t.context},on:{click:function(e){return t.$emit("click",e)}}},"component",t.context.slotProps.component,!1),[t._t("default",null,null,t.context)],2)],null,t.context),t._v(" "),"after"===t.context.labelPosition?t._t("label",[t.context.hasLabel?r(t.context.slotComponents.label,t._b({tag:"component",attrs:{context:t.context}},"component",t.context.slotProps.label,!1)):t._e()],null,t.context):t._e()],2),t._v(" "),"after"===t.context.helpPosition?t._t("help",[t.context.help?r(t.context.slotComponents.help,t._b({tag:"component",attrs:{context:t.context}},"component",t.context.slotProps.help,!1)):t._e()],null,t.context):t._e(),t._v(" "),t._t("errors",[t.context.disableErrors?t._e():r(t.context.slotComponents.errors,t._b({tag:"component",attrs:{type:"FormulateErrors"===t.context.slotComponents.errors&&"input",context:t.context}},"component",t.context.slotProps.errors,!1))],null,t.context)],2)};J._withStripped=!0;var X=U({render:J,staticRenderFns:[]},void 0,Z,void 0,!1,void 0,!1,void 0,void 0,void 0),Q={inject:{observeErrors:{default:!1},removeErrorObserver:{default:!1}},props:{context:{type:Object,default:function(){return{}}},type:{type:String,default:"form"}},data:function(){return{boundSetErrors:this.setErrors.bind(this),localErrors:[]}},computed:{visibleValidationErrors:function(){return Array.isArray(this.context.visibleValidationErrors)?this.context.visibleValidationErrors:[]},errors:function(){return Array.isArray(this.context.errors)?this.context.errors:[]},mergedErrors:function(){return this.errors.concat(this.localErrors)},visibleErrors:function(){return Array.from(new Set(this.mergedErrors.concat(this.visibleValidationErrors))).filter((function(t){return"string"==typeof t}))},outerClass:function(){return"input"===this.type&&this.context.classes?this.context.classes.errors:"formulate-"+this.type+"-errors"},itemClass:function(){return"input"===this.type&&this.context.classes?this.context.classes.error:"formulate-"+this.type+"-error"}},created:function(){"form"!==this.type||"function"!=typeof this.observeErrors||Array.isArray(this.context.errors)||this.observeErrors({callback:this.boundSetErrors,type:this.type})},destroyed:function(){"form"!==this.type||"function"!=typeof this.removeErrorObserver||Array.isArray(this.context.errors)||this.removeErrorObserver(this.boundSetErrors)},methods:{setErrors:function(t){this.localErrors=d(t)}}},tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.visibleErrors.length?r("ul",{class:t.outerClass},t._l(t.visibleErrors,(function(e){return r("li",{key:e,class:t.itemClass,domProps:{textContent:t._s(e)}})})),0):t._e()};tt._withStripped=!0;var et=U({render:tt,staticRenderFns:[]},void 0,Q,void 0,!1,void 0,!1,void 0,void 0,void 0),rt={props:{context:{type:Object,required:!0}}},ot=function(){var t=this.$createElement,e=this._self._c||t;return this.context.help?e("div",{class:this.context.classes.help,attrs:{id:this.context.id+"-help"},domProps:{textContent:this._s(this.context.help)}}):this._e()};ot._withStripped=!0;var it=U({render:ot,staticRenderFns:[]},void 0,rt,void 0,!1,void 0,!1,void 0,void 0,void 0),nt={name:"FormulateGrouping",props:{context:{type:Object,required:!0}},provide:function(){return{isSubField:function(){return!0},registerProvider:this.registerProvider,deregisterProvider:this.deregisterProvider}},data:function(){return{providers:[]}},inject:["formulateRegisterRule","formulateRemoveRule"],computed:{items:function(){return Array.isArray(this.context.model)&&(this.context.repeatable||0!==this.context.model.length)?this.context.model.map((function(t){return v(t,t.__id)})):[v({})]},formShouldShowErrors:function(){return this.context.formShouldShowErrors}},watch:{providers:function(){this.formShouldShowErrors&&this.showErrors()},formShouldShowErrors:function(t){t&&this.showErrors()}},created:function(){this.formulateRegisterRule(this.validateGroup.bind(this),[],"formulateGrouping",!0)},destroyed:function(){this.formulateRemoveRule("formulateGrouping")},methods:{getAtIndex:function(t){return void 0!==this.context.model[t]&&this.context.model[t].__id?this.context.model[t]:void 0!==this.context.model[t]?v(this.context.model[t]):void 0===this.context.model[t]&&void 0!==this.items[t]?v({},this.items[t].__id):v({})},setFieldValue:function(t,e,r){var o,i=Array.isArray(this.context.model)?this.context.model:[],n=this.getAtIndex(t),s=v(Object.assign({},n,((o={})[e]=r,o)),n.__id);i.splice(t,1,s),this.context.model=i},validateGroup:function(){return Promise.all(this.providers.reduce((function(t,e){return e&&"function"==typeof e.hasValidationErrors&&t.push(e.hasValidationErrors()),t}),[])).then((function(t){return!t.some((function(t){return!!t}))}))},showErrors:function(){this.providers.forEach((function(t){return t&&"function"==typeof t.showErrors&&t.showErrors()}))},removeItem:function(t){Array.isArray(this.context.model)&&this.context.model.splice(t,1)},registerProvider:function(t){this.providers.some((function(e){return e===t}))||this.providers.push(t)},deregisterProvider:function(t){this.providers=this.providers.filter((function(e){return e!==t}))}}},st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormulateSlot",{class:t.context.classes.grouping,attrs:{name:"grouping",context:t.context,"force-wrap":t.context.repeatable}},t._l(t.items,(function(e,o){return r("FormulateRepeatableProvider",{key:e.__id,attrs:{index:o,"set-field-value":function(e,r){return t.setFieldValue(o,e,r)},context:t.context},on:{remove:t.removeItem}},[t._t("default")],2)})),1)};st._withStripped=!0;var at=U({render:st,staticRenderFns:[]},void 0,nt,void 0,!1,void 0,!1,void 0,void 0,void 0),lt={props:{context:{type:Object,required:!0}}},ut=function(){var t=this.$createElement;return(this._self._c||t)("label",{class:this.context.classes.label,attrs:{for:this.context.id},domProps:{textContent:this._s(this.context.label)}})};ut._withStripped=!0;var ct=U({render:ut,staticRenderFns:[]},void 0,lt,void 0,!1,void 0,!1,void 0,void 0,void 0),dt={props:{context:{type:Object,required:!0},addMore:{type:Function,required:!0}}},pt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.context.classes.groupAddMore},[e("FormulateInput",{attrs:{type:"button",label:this.context.addLabel,"data-minor":"","data-ghost":""},on:{click:this.addMore}})],1)};pt._withStripped=!0;var ht=U({render:pt,staticRenderFns:[]},void 0,dt,void 0,!1,void 0,!1,void 0,void 0,void 0),ft={props:{context:{type:Object,required:!0}},computed:{type:function(){return this.context.type},attributes:function(){return this.context.attributes||{}},hasValue:function(){return!!this.context.model}}},mt={name:"FormulateInputBox",mixins:[ft]},vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type}},["radio"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{value:t.context.value,checked:t._q(t.context.model,t.context.value)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",t.context.value)}}},"input",t.attributes,!1)):r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{value:t.context.value,checked:Array.isArray(t.context.model)?t._i(t.context.model,t.context.value)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var r=t.context.model,o=e.target,i=!!o.checked;if(Array.isArray(r)){var n=t.context.value,s=t._i(r,n);o.checked?s<0&&t.$set(t.context,"model",r.concat([n])):s>-1&&t.$set(t.context,"model",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.context,"model",i)}}},"input",t.attributes,!1)),t._v(" "),r("label",{tag:"component",class:t.context.classes.decorator,attrs:{for:t.attributes.id}})],1)};vt._withStripped=!0;var yt=U({render:vt,staticRenderFns:[]},void 0,mt,void 0,!1,void 0,!1,void 0,void 0,void 0),bt={name:"FormulateInputText",mixins:[ft]},gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type}},["checkbox"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.context.model)?t._i(t.context.model,null)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var r=t.context.model,o=e.target,i=!!o.checked;if(Array.isArray(r)){var n=t._i(r,null);o.checked?n<0&&t.$set(t.context,"model",r.concat([null])):n>-1&&t.$set(t.context,"model",r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.context,"model",i)}}},"input",t.attributes,!1)):"radio"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{checked:t._q(t.context.model,null)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",null)}}},"input",t.attributes,!1)):r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:t.type},domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"input",t.attributes,!1))])};gt._withStripped=!0;var xt=U({render:gt,staticRenderFns:[]},void 0,bt,void 0,!1,void 0,!1,void 0,void 0,void 0),Et={name:"FormulateFiles",props:{files:{type:s,required:!0},imagePreview:{type:Boolean,default:!1},context:{type:Object,required:!0}},computed:{fileUploads:function(){return this.files.files||[]}},watch:{files:function(){this.imagePreview&&this.files.loadPreviews()}},mounted:function(){this.imagePreview&&this.files.loadPreviews()}},_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.fileUploads.length?r("ul",{class:t.context.classes.files},t._l(t.fileUploads,(function(e){return r("li",{key:e.uuid,attrs:{"data-has-error":!!e.error,"data-has-preview":!(!t.imagePreview||!e.previewData)}},[r("div",{class:t.context.classes.file},[t.imagePreview&&e.previewData?r("div",{class:t.context.classes.fileImagePreview},[r("img",{attrs:{src:e.previewData}})]):t._e(),t._v(" "),r("div",{class:t.context.classes.fileName,attrs:{title:e.name},domProps:{textContent:t._s(e.name)}}),t._v(" "),!1!==e.progress?r("div",{class:t.context.classes.fileProgress,attrs:{"data-just-finished":e.justFinished,"data-is-finished":!e.justFinished&&e.complete}},[r("div",{class:t.context.classes.fileProgressInner,style:{width:e.progress+"%"}})]):t._e(),t._v(" "),e.complete&&!e.justFinished||!1===e.progress?r("div",{class:t.context.classes.fileRemove,on:{click:e.removeFile}}):t._e()]),t._v(" "),e.error?r("div",{class:t.context.classes.fileUploadError,domProps:{textContent:t._s(e.error)}}):t._e()])})),0):t._e()};_t._withStripped=!0;var wt={name:"FormulateInputFile",components:{FormulateFiles:U({render:_t,staticRenderFns:[]},void 0,Et,void 0,!1,void 0,!1,void 0,void 0,void 0)},mixins:[ft],data:function(){return{isOver:!1}},computed:{hasFiles:function(){return!!(this.context.model instanceof s&&this.context.model.files.length)}},created:function(){Array.isArray(this.context.model)&&"string"==typeof this.context.model[0][this.$formulate.getFileUrlKey()]&&(this.context.model=this.$formulate.createUpload({files:this.context.model},this.context))},mounted:function(){window&&this.context.preventWindowDrops&&(window.addEventListener("dragover",this.preventDefault),window.addEventListener("drop",this.preventDefault))},destroyed:function(){window&&this.context.preventWindowDrops&&(window.removeEventListener("dragover",this.preventDefault),window.removeEventListener("drop",this.preventDefault))},methods:{preventDefault:function(t){"INPUT"!==t.target.tagName&&"file"!==t.target.getAttribute("type")&&(t=t||event).preventDefault()},handleFile:function(){var t=this;this.isOver=!1;var e=this.$refs.file;e.files.length&&(this.context.model=this.$formulate.createUpload(e,this.context),this.$nextTick((function(){return t.attemptImmediateUpload()})))},attemptImmediateUpload:function(){var t=this;"live"===this.context.uploadBehavior&&this.context.model instanceof s&&this.context.hasValidationErrors().then((function(e){e||t.context.model.upload()}))},handleDragOver:function(t){t.preventDefault(),this.isOver=!0},handleDragLeave:function(t){t.preventDefault(),this.isOver=!1}}},Ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type,"data-has-files":t.hasFiles}},[r("div",{class:t.context.classes.uploadArea,attrs:{"data-has-files":t.hasFiles}},[r("input",t._b({ref:"file",attrs:{"data-is-drag-hover":t.isOver,type:"file"},on:{blur:t.context.blurHandler,change:t.handleFile,dragover:t.handleDragOver,dragleave:t.handleDragLeave}},"input",t.attributes,!1)),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasFiles,expression:"!hasFiles"}],class:t.context.classes.uploadAreaMask}),t._v(" "),t.hasFiles?r("FormulateFiles",{attrs:{files:t.context.model,"image-preview":"image"===t.context.type&&"preview"===t.context.imageBehavior,context:t.context}}):t._e()],1)])};Ft._withStripped=!0;var Pt=U({render:Ft,staticRenderFns:[]},void 0,wt,void 0,!1,void 0,!1,void 0,void 0,void 0),Ot={props:{context:{type:Object,required:!0},removeItem:{type:Function,required:!0},index:{type:Number,required:!0}}},Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.groupRepeatable},[r("FormulateSlot",{attrs:{name:"remove",context:t.context,"remove-item":t.removeItem}},[r(t.context.slotComponents.remove,t._b({tag:"component",attrs:{context:t.context,"remove-item":t.removeItem}},"component",t.context.slotProps.remove,!1))],1),t._v(" "),t._t("default")],2)};Vt._withStripped=!0;var At=U({render:Vt,staticRenderFns:[]},void 0,Ot,void 0,!1,void 0,!1,void 0,void 0,void 0);function jt(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}var St={name:"FormulateInputGroup",props:{context:{type:Object,required:!0}},computed:{options:function(){return this.context.options||[]},subType:function(){return"group"===this.context.type?"grouping":"inputs"},optionsWithContext:function(){var t=this,e=this.context,r=e.attributes,o=(r.id,jt(r,["id"])),i=(e.blurHandler,e.classification,e.component,e.getValidationErrors,e.hasLabel,e.hasValidationErrors,e.isSubField,e.isValid,e.labelPosition,e.options,e.performValidation,e.setErrors,e.slotComponents,e.slotProps,e.validationErrors,e.visibleValidationErrors,e.classes,e.showValidationErrors,e.rootEmit,e.help,e.pseudoProps,jt(e,["attributes","blurHandler","classification","component","getValidationErrors","hasLabel","hasValidationErrors","isSubField","isValid","labelPosition","options","performValidation","setErrors","slotComponents","slotProps","validationErrors","visibleValidationErrors","classes","showValidationErrors","rootEmit","help","pseudoProps"]));return this.options.map((function(e){return t.groupItemContext(i,e,o)}))},canAddMore:function(){return this.context.repeatable&&this.items.length<this.context.limit},items:function(){return Array.isArray(this.context.model)?this.context.model:[{}]}},methods:{addItem:function(){Array.isArray(this.context.model)?this.context.model.push(v({})):this.context.model=this.items.concat([v({})])},groupItemContext:function(t,e,r){return Object.assign({},t,e,r,{isGrouped:!0},t.hasGivenName?{}:{name:!0})}}},$t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-is-repeatable":t.context.repeatable}},["grouping"!==t.subType?t._l(t.optionsWithContext,(function(e){return r("FormulateInput",t._b({key:e.id,staticClass:"formulate-input-group-item",attrs:{"disable-errors":!0},on:{blur:t.context.blurHandler},model:{value:t.context.model,callback:function(e){t.$set(t.context,"model",e)},expression:"context.model"}},"FormulateInput",e,!1))})):[r("FormulateGrouping",{attrs:{context:t.context}},[t._t("default")],2),t._v(" "),t.canAddMore?r("FormulateSlot",{attrs:{name:"addmore",context:t.context,"add-more":t.addItem}},[r(t.context.slotComponents.addMore,t._b({tag:"component",attrs:{context:t.context,"add-more":t.addItem},on:{add:t.addItem}},"component",t.context.slotProps.addMore,!1))],1):t._e()]],2)};$t._withStripped=!0;var Rt=U({render:$t,staticRenderFns:[]},void 0,St,void 0,!1,void 0,!1,void 0,void 0,void 0),kt={name:"FormulateInputButton",mixins:[ft]},It=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type}},[r("button",t._b({attrs:{type:t.type},on:{click:function(e){return t.$emit("click",e)}}},"button",t.attributes,!1),[t._t("default",[r("span",{class:"formulate-input-element--"+t.context.type+"--label",domProps:{textContent:t._s(t.context.value||t.context.label||t.context.name||"Submit")}})])],2)])};It._withStripped=!0;var Nt=U({render:It,staticRenderFns:[]},void 0,kt,void 0,!1,void 0,!1,void 0,void 0,void 0),Ct={name:"FormulateInputSelect",mixins:[ft],computed:{options:function(){return this.context.options||{}},optionGroups:function(){return this.context.optionGroups||!1},placeholderSelected:function(){return!(this.hasValue||!this.context.attributes||!this.context.attributes.placeholder)}}},Dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type}},[r("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{"data-placeholder-selected":t.placeholderSelected},on:{blur:t.context.blurHandler,change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.context,"model",e.target.multiple?r:r[0])}}},"select",t.attributes,!1),[t.context.placeholder?r("option",{attrs:{value:"",disabled:""},domProps:{selected:!t.hasValue}},[t._v("\n      "+t._s(t.context.placeholder)+"\n    ")]):t._e(),t._v(" "),t.optionGroups?t._l(t.optionGroups,(function(e,o){return r("optgroup",{key:o,attrs:{label:o}},t._l(e,(function(e){return r("option",t._b({key:e.id,domProps:{value:e.value,textContent:t._s(e.label)}},"option",e.attributes||{},!1))})),0)})):t._l(t.options,(function(e){return r("option",t._b({key:e.id,domProps:{value:e.value,textContent:t._s(e.label)}},"option",e.attributes||{},!1))}))],2)])};Dt._withStripped=!0;var Lt=U({render:Dt,staticRenderFns:[]},void 0,Ct,void 0,!1,void 0,!1,void 0,void 0,void 0),Ut={name:"FormulateInputSlider",mixins:[ft]},Bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":t.context.type}},["checkbox"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.context.model)?t._i(t.context.model,null)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var r=t.context.model,o=e.target,i=!!o.checked;if(Array.isArray(r)){var n=t._i(r,null);o.checked?n<0&&t.$set(t.context,"model",r.concat([null])):n>-1&&t.$set(t.context,"model",r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.context,"model",i)}}},"input",t.attributes,!1)):"radio"===t.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{checked:t._q(t.context.model,null)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",null)}}},"input",t.attributes,!1)):r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:t.type},domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"input",t.attributes,!1)),t._v(" "),t.context.showValue?r("div",{class:t.context.classes.rangeValue,domProps:{textContent:t._s(t.context.model)}}):t._e()])};Bt._withStripped=!0;var Mt=U({render:Bt,staticRenderFns:[]},void 0,Ut,void 0,!1,void 0,!1,void 0,void 0,void 0),Gt={name:"FormulateInputTextArea",mixins:[ft]},qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.context.classes.element,attrs:{"data-type":"textarea"}},[r("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"textarea",t.attributes,!1))])};qt._withStripped=!0;var Ht=U({render:qt,staticRenderFns:[]},void 0,Gt,void 0,!1,void 0,!1,void 0,void 0,void 0),Tt={provide:function(){var t=this;return Object.assign({},D(this),{formulateSetter:function(e,r){return t.setFieldValue(e,r)}})},inject:{registerProvider:"registerProvider",deregisterProvider:"deregisterProvider"},props:{index:{type:Number,required:!0},context:{type:Object,required:!0},setFieldValue:{type:Function,required:!0}},data:function(){return Object.assign({},I(this),{isGrouping:!0})},computed:Object.assign({},N()),created:function(){this.registerProvider(this)},beforeDestroy:function(){this.deregisterProvider(this)},methods:Object.assign({},C(["setFieldValue"]),{removeItem:function(){this.$emit("remove",this.index)}})},Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormulateSlot",{attrs:{name:"repeatable",context:t.context,index:t.index,"remove-item":t.removeItem}},[r(t.context.slotComponents.repeatable,t._b({tag:"component",attrs:{context:t.context,index:t.index,"remove-item":t.removeItem}},"component",t.context.slotProps.repeatable,!1),[r("FormulateSlot",{attrs:{context:t.context,index:t.index,name:"default"}})],1)],1)};Wt._withStripped=!0;var Yt=U({render:Wt,staticRenderFns:[]},void 0,Tt,void 0,!1,void 0,!1,void 0,void 0,void 0),zt={props:{context:{type:Object,required:!0},removeItem:{type:Function,required:!0}}},Kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.context.repeatable?r("a",{class:t.context.classes.groupRepeatableRemove,attrs:{role:"button"},domProps:{textContent:t._s("Remove")},on:{click:function(e){return e.preventDefault(),t.removeItem(e)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.removeItem(e)}}}):t._e()};Kt._withStripped=!0;var Zt=U({render:Kt,staticRenderFns:[]},void 0,zt,void 0,!1,void 0,!1,void 0,void 0,void 0),Jt=function(){this.options={},this.defaults={components:{FormulateSlot:j,FormulateForm:G,FormulateHelp:it,FormulateLabel:ct,FormulateInput:X,FormulateErrors:et,FormulateSchema:$,FormulateAddMore:ht,FormulateGrouping:at,FormulateInputBox:yt,FormulateInputText:xt,FormulateInputFile:Pt,FormulateRepeatable:At,FormulateInputGroup:Rt,FormulateInputButton:Nt,FormulateInputSelect:Lt,FormulateInputSlider:Mt,FormulateInputTextArea:Ht,FormulateRepeatableRemove:Zt,FormulateRepeatableProvider:Yt},slotComponents:{label:"FormulateLabel",help:"FormulateHelp",errors:"FormulateErrors",repeatable:"FormulateRepeatable",addMore:"FormulateAddMore",remove:"FormulateRepeatableRemove"},slotProps:{},library:n,rules:b,mimes:x,locale:!1,uploader:V,uploadUrl:!1,fileUrlKey:"url",uploadJustCompleteDuration:1e3,errorHandler:function(t){return t},plugins:[_braid_vue_formulate_i18n__WEBPACK_IMPORTED_MODULE_3__["en"]],locales:{},idPrefix:"formulate-",baseClasses:function(t){return t},coreClasses:O,classes:{}},this.registry=new Map,this.idRegistry={}};Jt.prototype.install=function(t,e){var r=this;t.prototype.$formulate=this,this.options=this.defaults;var o=this.defaults.plugins;for(var i in e&&Array.isArray(e.plugins)&&e.plugins.length&&(o=o.concat(e.plugins)),o.forEach((function(t){return"function"==typeof t?t(r):null})),this.extend(e||{}),this.options.components)t.component(i,this.options.components[i])},Jt.prototype.nextId=function(t){var e=!(!t.$route||!t.$route.path)&&t.$route.path?t.$route.path.replace(/[/\\.\s]/g,"-"):"global";return Object.prototype.hasOwnProperty.call(this.idRegistry,e)||(this.idRegistry[e]=0),""+this.options.idPrefix+e+"-"+ ++this.idRegistry[e]},Jt.prototype.extend=function(t){if("object"==typeof t)return this.options=this.merge(this.options,t),this;throw new Error("Formulate.extend expects an object, was "+typeof t)},Jt.prototype.merge=function(t,e,o){void 0===o&&(o=!0);var i={};for(var n in t)e.hasOwnProperty(n)?Object(is_plain_object__WEBPACK_IMPORTED_MODULE_2__["default"])(e[n])&&Object(is_plain_object__WEBPACK_IMPORTED_MODULE_2__["default"])(t[n])?i[n]=this.merge(t[n],e[n],o):o&&Array.isArray(t[n])&&Array.isArray(e[n])?i[n]=t[n].concat(e[n]):i[n]=e[n]:i[n]=t[n];for(var s in e)i.hasOwnProperty(s)||(i[s]=e[s]);return i},Jt.prototype.classify=function(t){return this.options.library.hasOwnProperty(t)?this.options.library[t].classification:"unknown"},Jt.prototype.classes=function(t){var e=this,r=this.options.coreClasses(t),o=this.options.baseClasses(r,t);return Object.keys(o).reduce((function(r,i){var n,s=P(o[i],e.options.classes[i],t);return s=function(t,e,r,o){return Object.keys(_).reduce((function(e,i){if(_[i](o)){var n=""+t+c(i),s=n+"Class";if(r[n])e=P(e,"string"==typeof r[n]?d(r[n]):r[n],o);if(o[s])e=P(e,"string"==typeof o[s]?d(o[s]):o[n+"Class"],o)}return e}),e)}(i,s=P(s,t[i+"Class"],t),e.options.classes,t),Object.assign(r,((n={})[i]=s,n))}),{})},Jt.prototype.typeProps=function(t){var e=function(t){return Object.keys(t).reduce((function(e,r){return Array.isArray(t[r])?e.concat(t[r]):e}),[])},r=e(this.options.slotProps);return this.options.library[t]?r.concat(e(this.options.library[t].slotProps||{})):r},Jt.prototype.slotProps=function(t,e,r){var o=Array.isArray(this.options.slotProps[e])?this.options.slotProps[e]:[],i=this.options.library[t];return i&&i.slotProps&&Array.isArray(i.slotProps[e])&&(o=o.concat(i.slotProps[e])),o.reduce((function(t,e){var o;return Object.assign(t,((o={})[e]=r[e],o))}),{})},Jt.prototype.component=function(t){return!!this.options.library.hasOwnProperty(t)&&this.options.library[t].component},Jt.prototype.slotComponent=function(t,e){var r=this.options.library[t];return r&&r.slotComponents&&r.slotComponents[e]?r.slotComponents[e]:this.options.slotComponents[e]},Jt.prototype.rules=function(t){return void 0===t&&(t={}),Object.assign({},this.options.rules,t)},Jt.prototype.i18n=function(t){if(t.$i18n)switch(typeof t.$i18n.locale){case"string":return t.$i18n.locale;case"function":return t.$i18n.locale()}return!1},Jt.prototype.getLocale=function(t){var e=this;return this.selectedLocale||(this.selectedLocale=[this.options.locale,this.i18n(t),"en"].reduce((function(t,r){if(t)return t;if(r){var o=function(t){return t.split("-").reduce((function(t,e){return t.length&&t.unshift(t[0]+"-"+e),t.length?t:[e]}),[])}(r).find((function(t){return m(e.options.locales,t)}));o&&(t=o)}return t}),!1)),this.selectedLocale},Jt.prototype.validationMessage=function(t,e,r){var o=this.options.locales[this.getLocale(r)];return o.hasOwnProperty(t)?o[t](e):o.hasOwnProperty("default")?o.default(e):"Invalid field value"},Jt.prototype.register=function(t){"FormulateForm"===t.$options.name&&t.name&&this.registry.set(t.name,t)},Jt.prototype.deregister=function(t){"FormulateForm"===t.$options.name&&t.name&&this.registry.has(t.name)&&this.registry.delete(t.name)},Jt.prototype.handle=function(t,e,r){void 0===r&&(r=!1);var o=r?t:this.options.errorHandler(t,e);return e&&this.registry.has(e)&&this.registry.get(e).applyErrors({formErrors:d(o.formErrors),inputErrors:o.inputErrors||{}}),o},Jt.prototype.reset=function(t,e){void 0===e&&(e={}),this.resetValidation(t),this.setValues(t,e)},Jt.prototype.submit=function(t){this.registry.get(t).formSubmitted()},Jt.prototype.resetValidation=function(t){var e=this.registry.get(t);e.hideErrors(t),e.namedErrors=[],e.namedFieldErrors={}},Jt.prototype.setValues=function(t,e){e&&!Array.isArray(e)&&"object"==typeof e&&this.registry.get(t).setValues(Object.assign({},e))},Jt.prototype.getUploader=function(){return this.options.uploader||!1},Jt.prototype.getUploadUrl=function(){return this.options.uploadUrl||!1},Jt.prototype.getFileUrlKey=function(){return this.options.fileUrlKey||"url"},Jt.prototype.createUpload=function(t,e){return new s(t,e,this.options)};var Xt=new Jt;/* harmony default export */ __webpack_exports__["default"] = (Xt);


/***/ }),

/***/ "./node_modules/@braid/vue-formulate/node_modules/is-plain-object/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@braid/vue-formulate/node_modules/is-plain-object/index.js ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isobject */ "./node_modules/@braid/vue-formulate/node_modules/isobject/index.js");
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



function isObjectObject(o) {
  return Object(isobject__WEBPACK_IMPORTED_MODULE_0__["default"])(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/@braid/vue-formulate/node_modules/isobject/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@braid/vue-formulate/node_modules/isobject/index.js ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-vue/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/dist/index.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js"),t={functional:!0,props:{data:{type:Object,default:function(){return{}}},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:!1}},render:function(t,r){var n=r.props,o=r.data,i=r.children;return t("a",Object.assign({},o,{attrs:Object.assign({},o.attrs,{href:n.href}),on:Object.assign({},o.on||{},{click:function(t){o.on&&o.on.click&&o.on.click(t),e.shouldIntercept(t)&&(t.preventDefault(),e.Inertia.visit(n.href,{data:n.data,method:n.method,replace:n.replace,preserveScroll:n.preserveScroll,preserveState:n.preserveState}))}})}),i)}},r={created:function(){var t=this;if(this.$options.remember){Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),"string"==typeof this.$options.remember&&(this.$options.remember={data:[this.$options.remember]}),"string"==typeof this.$options.remember.data&&(this.$options.remember={data:[this.$options.remember.data]});var r=this.$options.remember.key instanceof Function?this.$options.remember.key():this.$options.remember.key,n=e.Inertia.restore(r);this.$options.remember.data.forEach(function(o){void 0!==n&&void 0!==n[o]&&(t[o]=n[o]),t.$watch(o,function(){e.Inertia.remember(t.$options.remember.data.reduce(function(e,r){var n;return Object.assign({},e,((n={})[r]=t[r],n))},{}),r)},{immediate:!0,deep:!0})})}}},n={},o={name:"Inertia",props:{initialPage:{type:Object,required:!0},resolveComponent:{type:Function,required:!0},transformProps:{type:Function,default:function(e){return e}}},data:function(){return{component:null,props:{},key:null}},created:function(){var t=this;n=this,e.Inertia.init({initialPage:this.initialPage,resolveComponent:this.resolveComponent,updatePage:function(e,r,n){var o=n.preserveState;t.component=e,t.props=t.transformProps(r),t.key=o?t.key:Date.now()}})},render:function(e){if(this.component){if(this.component.layout){var t=e(this.component,{key:this.key,props:this.props});return"function"==typeof this.component.layout?this.component.layout(e,t):e(this.component.layout,[t])}return e(this.component,{key:this.key,props:this.props})}},install:function(o){Object.defineProperty(o.prototype,"$inertia",{get:function(){return e.Inertia}}),Object.defineProperty(o.prototype,"$page",{get:function(){return n.props}}),o.mixin(r),o.component("InertiaLink",t)}};exports.InertiaApp=o,exports.InertiaLink=t;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/inertia/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/axios/index.js")),i=e(__webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js")),n={modal:null,listener:null,show:function(e){var t=this,i=document.createElement("html");i.innerHTML=e,i.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var n=document.createElement("iframe");n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",n.contentWindow.document.open(),n.contentWindow.document.write(i.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};i.configure({showSpinner:!1});var o={delay:null,loading:!1,start:function(){var e=this;clearTimeout(this.delay),this.delay=setTimeout(function(){e.loading=!0,i.set(0),i.start()},250)},increment:function(){this.loading&&i.inc(.4)},stop:function(){clearTimeout(this.delay),this.loading&&(i.done(),this.loading=!1)}};exports.Inertia={resolveComponent:null,updatePage:null,version:null,visitId:null,cancelToken:null,page:null,init:function(e){var t=e.initialPage,i=e.updatePage;this.resolveComponent=e.resolveComponent,this.updatePage=i,window.history.state&&"back_forward"===this.navigationType()?this.setPage(window.history.state):window.sessionStorage.getItem("inertia.hardVisit")?(window.sessionStorage.removeItem("inertia.hardVisit"),this.setPage(t,{preserveState:!0})):(t.url+=window.location.hash,this.setPage(t)),window.addEventListener("popstate",this.restoreState.bind(this))},navigationType:function(){if(window.performance&&window.performance.getEntriesByType("navigation").length)return window.performance.getEntriesByType("navigation")[0].type},isInertiaResponse:function(e){return e&&e.headers["x-inertia"]},cancelActiveVisits:function(){this.cancelToken&&this.cancelToken.cancel(this.cancelToken),this.cancelToken=t.CancelToken.source()},createVisitId:function(){return this.visitId={},this.visitId},visit:function(e,i){var s=this;void 0===i&&(i={});var r=i.method;void 0===r&&(r="get");var a=i.data;void 0===a&&(a={});var d=i.replace;void 0===d&&(d=!1);var c=i.preserveScroll;void 0===c&&(c=!1);var l=i.preserveState;void 0===l&&(l=!1);var h=i.only;void 0===h&&(h=[]),o.start(),this.cancelActiveVisits();var u=this.createVisitId();return t({method:r,url:e.toString(),data:"get"===r.toLowerCase()?{}:a,params:"get"===r.toLowerCase()?a:{},cancelToken:this.cancelToken.token,headers:Object.assign({},{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},h.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":h.join(",")}:{},this.version?{"X-Inertia-Version":this.version}:{})}).then(function(e){if(s.isInertiaResponse(e))return e.data;n.show(e.data)}).catch(function(e){if(!t.isCancel(e))return 409===e.response.status&&e.response.headers["x-inertia-location"]?(o.stop(),s.hardVisit(!0,e.response.headers["x-inertia-location"])):s.isInertiaResponse(e.response)?e.response.data:e.response?(o.stop(),void n.show(e.response.data)):Promise.reject(e)}).then(function(e){if(e)return h.length&&(e.props=Object.assign({},s.page.props,e.props)),s.setPage(e,{visitId:u,replace:d,preserveScroll:c,preserveState:l})})},hardVisit:function(e,t){window.sessionStorage.setItem("inertia.hardVisit",!0),e?window.location.replace(t):window.location.href=t},setPage:function(e,t){var i=this;void 0===t&&(t={});var n=t.visitId;void 0===n&&(n=this.createVisitId());var s=t.replace;void 0===s&&(s=!1);var r=t.preserveScroll;void 0===r&&(r=!1);var a=t.preserveState;return void 0===a&&(a=!1),this.page=e,o.increment(),Promise.resolve(this.resolveComponent(e.component)).then(function(t){n===i.visitId&&(a="function"==typeof a?a(e.props):a,r="function"==typeof r?r(e.props):r,i.version=e.version,i.setState(e,s,a),i.updatePage(t,e.props,{preserveState:a}),i.setScroll(r),o.stop())})},setScroll:function(e){e||document.querySelectorAll("html,body,[scroll-region]").forEach(function(e){return e.scrollTo(0,0)})},setState:function(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1),t||e.url===""+window.location.pathname+window.location.search?window.history.replaceState(Object.assign({},{cache:i&&window.history.state?window.history.state.cache:{}},e),"",e.url):window.history.pushState(Object.assign({},{cache:{}},e),"",e.url)},restoreState:function(e){e.state&&this.setPage(e.state)},replace:function(e,t){return void 0===t&&(t={}),this.visit(e,Object.assign({},{preserveState:!0},t,{replace:!0}))},reload:function(e){return void 0===e&&(e={}),this.replace(window.location.href,e)},post:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"post",data:t}))},put:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"put",data:t}))},patch:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"patch",data:t}))},delete:function(e,t){return void 0===t&&(t={}),this.visit(e,Object.assign({},t,{method:"delete"}))},remember:function(e,t){void 0===t&&(t="default");var i=Object.assign({},window.history.state);i.cache=i.cache||{},i.cache[t]=e,this.setState(i)},restore:function(e){if(void 0===e&&(e="default"),window.history.state.cache&&window.history.state.cache[e])return window.history.state.cache[e]}},exports.shouldIntercept=function(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Badge.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Badge.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Badge',
  props: {
    color: {
      type: String,
      "default": 'teal'
    },
    size: {
      type: String,
      "default": 'base'
    },
    dot: {
      type: Boolean,
      "default": false
    },
    uppercase: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    getClasses: function getClasses() {
      var badgeClasses = '';
      var dotClasses = '';

      switch (this.color) {
        case 'gray':
          badgeClasses += 'bg-gray-100 text-gray-800';
          dotClasses += 'text-gray-400';
          break;

        case 'dark-gray':
          badgeClasses += 'bg-gray-700 text-gray-200';
          dotClasses += 'text-gray-300';
          break;

        case 'red':
          badgeClasses += 'bg-red-100 text-red-800';
          dotClasses += 'text-red-400';
          break;

        case 'orange':
          badgeClasses += 'bg-orange-100 text-orange-800';
          dotClasses += 'text-orange-400';
          break;

        case 'yellow':
          badgeClasses += 'bg-yellow-100 text-yellow-800';
          dotClasses += 'text-yellow-400';
          break;

        case 'green':
          badgeClasses += 'bg-green-100 text-green-800';
          dotClasses += 'text-green-400';
          break;

        case 'teal':
          badgeClasses += 'bg-teal-100 text-teal-800';
          dotClasses += 'text-teal-400';
          break;

        case 'blue':
          badgeClasses += 'bg-blue-100 text-blue-800';
          dotClasses += 'text-blue-400';
          break;

        case 'pink':
          badgeClasses += 'bg-pink-100 text-pink-800';
          dotClasses += 'text-pink-400';
          break;
      }

      switch (this.size) {
        case 'base':
          badgeClasses += ' px-2.5 py-0.5 text-xs leading-4';
          break;

        case 'large':
          badgeClasses += ' px-3 py-0.5 text-sm leading-5';
          break;

        case 'xl':
          badgeClasses += ' px-4 py-1 font-bold text-base leading-5';
          break;
      }

      if (this.uppercase) {
        badgeClasses += ' uppercase tracking-wider font-semibold';
      }

      return {
        badge: badgeClasses,
        dot: dotClasses
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseButton',
  props: {
    color: String,
    quiet: Boolean,
    a: Boolean,
    icon: Boolean,
    link: Boolean,
    data: Object,
    href: String,
    method: String
  },
  methods: {
    getClasses: function getClasses() {
      switch (this.color) {
        case 'gray':
          return 'text-gray-500 focus:shadow-outline-gray ' + (this.quiet ? 'hover:bg-gray-200' : 'bg-gray-200 hover:bg-gray-300');

        case 'green':
          return 'text-green-500 focus:shadow-outline-green ' + (this.quiet ? 'hover:bg-green-100' : 'bg-green-100 hover:bg-green-200');

        case 'blue':
          return 'text-blue-500 focus:shadow-outline-blue ' + (this.quiet ? 'hover:bg-blue-100' : 'bg-blue-100 hover:bg-blue-200');

        case 'red':
          return 'text-red-500 focus:shadow-outline-red ' + (this.quiet ? 'hover:bg-red-100' : 'bg-red-100 hover:bg-red-200');

        case 'orange':
          return 'text-orange-500 focus:shadow-outline-orange ' + (this.quiet ? 'hover:bg-orange-100' : 'bg-orange-100 hover:bg-orange-200');

        case 'teal':
          return 'text-teal-500 focus:shadow-outline-teal ' + (this.quiet ? 'hover:bg-teal-100' : 'bg-teal-100 hover:bg-teal-200');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Icon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Icon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Icon',
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/is-url/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-url/index.js ***!
  \**************************************/
/***/ (function(module, exports) {


/**
 * Expose `isUrl`.
 */

module.exports = isUrl;

/**
 * RegExps.
 * A URL must match #1 and then at least one of #2/#3.
 * Use two levels of REs to avoid REDOS.
 */

var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;

var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isUrl(string){
  if (typeof string !== 'string') {
    return false;
  }

  var match = string.match(protocolAndDomainRE);
  if (!match) {
    return false;
  }

  var everythingAfterProtocol = match[1];
  if (!everythingAfterProtocol) {
    return false;
  }

  if (localhostDomainRE.test(everythingAfterProtocol) ||
      nonLocalhostDomainRE.test(everythingAfterProtocol)) {
    return true;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.js":
/*!*************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.js ***!
  \*************************************************/
/***/ (function(module, exports) {

// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
var url = '-_'
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
var i = 36
while (i--) {
  // 36 is radix. Number.prototype.toString(36) returns number
  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
  url += i.toString(36)
}
// Loop from 36 to 10 (from Z to A in Base36).
i = 36
while (i-- - 10) {
  url += i.toString(36).toUpperCase()
}

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator with bigger collision probability.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
module.exports = function (size) {
  var id = ''
  i = size || 21
  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (i--) {
    // `| 0` is compact and faster alternative for `Math.floor()`
    id += url[Math.random() * 64 | 0]
  }
  return id
}


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/portal-vue/dist/portal-vue.common.js":
/*!***********************************************************!*\
  !*** ./node_modules/portal-vue/dist/portal-vue.common.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from && force === false) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.default = index;
exports.Portal = Portal;
exports.PortalTarget = PortalTarget;
exports.MountingPortal = MountingPortal;
exports.Wormhole = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-auto-resize/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vue-auto-resize/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const autoSizeHeight = el => {
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}
const handler = e => {
  autoSizeHeight(e.target)
}

/* harmony default export */ __webpack_exports__["default"] = ({
  bind(el) {
    el.addEventListener('input', handler)
  },

  inserted(el) {
    autoSizeHeight(el)
  },

  unbind(el) {
    el.removeEventListener('input', handler)
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticClass: "inline-flex items-center font-medium rounded-full",
      class: _vm.getClasses().badge
    },
    [
      _vm.dot
        ? _c(
            "svg",
            {
              staticClass: "-ml-0.5 mr-1.5 h-2 w-2",
              class: _vm.getClasses().dot,
              attrs: { fill: "currentColor", viewBox: "0 0 8 8" }
            },
            [_c("circle", { attrs: { cx: "4", cy: "4", r: "3" } })]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default", [_vm._v("label")])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.link
    ? _c(
        "inertia-link",
        {
          staticClass:
            "inline-flex items-center inline-block space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none",
          class: [_vm.getClasses(), _vm.icon ? "p-2" : "py-3 px-4"],
          attrs: { data: _vm.data, href: _vm.href, method: _vm.method }
        },
        [_vm._t("default")],
        2
      )
    : _vm.a
    ? _c(
        "a",
        {
          staticClass:
            "inline-flex items-center inline-block space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none",
          class: [_vm.getClasses(), _vm.icon ? "p-2" : "py-3 px-4"],
          attrs: { href: _vm.href }
        },
        [_vm._t("default")],
        2
      )
    : _c(
        "button",
        {
          staticClass:
            "inline-flex items-center space-x-2 text-sm font-semibold font-bold whitespace-no-wrap transition rounded focus:outline-none",
          class: [_vm.getClasses(), _vm.icon ? "p-2" : "py-3 px-4"],
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.$emit("click")
            }
          }
        },
        [_vm._t("default")],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.name === "book"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
          }
        })
      ])
    : _vm.name === "book-solid"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          }
        })
      ])
    : _vm.name === "cheveron-down"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          }
        })
      ])
    : _vm.name === "cheveron-right"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
            "clip-rule": "evenodd",
            "fill-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "dashboard"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
          }
        })
      ])
    : _vm.name === "location"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          }
        })
      ])
    : _vm.name === "office"
    ? _c(
        "svg",
        { attrs: { width: "100", height: "100", viewBox: "0 0 100 100" } },
        [
          _c("path", {
            attrs: {
              "fill-rule": "evenodd",
              d:
                "M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"
            }
          })
        ]
      )
    : _vm.name === "printer"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"
          }
        })
      ])
    : _vm.name === "shopping-cart"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          }
        })
      ])
    : _vm.name === "store-front"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"
          }
        })
      ])
    : _vm.name === "trash"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            }
          })
        ]
      )
    : _vm.name === "users"
    ? _c("svg", { attrs: { viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
          }
        })
      ])
    : _vm.name === "mail"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }
          })
        ]
      )
    : _vm.name === "chart-bar"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            }
          })
        ]
      )
    : _vm.name === "people"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            }
          })
        ]
      )
    : _vm.name === "selector"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "chat"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
          }
        })
      ])
    : _vm.name === "trending-up"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [_c("path", { attrs: { d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" } })]
      )
    : _vm.name === "eye"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", { attrs: { d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" } }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            }
          })
        ]
      )
    : _vm.name === "info"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          })
        ]
      )
    : _vm.name === "thumb-down"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
          }
        })
      ])
    : _vm.name === "thumb-up"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            d:
              "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          }
        })
      ])
    : _vm.name === "building"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            }
          })
        ]
      )
    : _vm.name === "pound"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          })
        ]
      )
    : _vm.name === "home"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }
          })
        ]
      )
    : _vm.name === "question-circle"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          })
        ]
      )
    : _vm.name === "x"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [_c("path", { attrs: { d: "M6 18L18 6M6 6l12 12" } })]
      )
    : _vm.name === "x-circle"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          })
        ]
      )
    : _vm.name === "warning"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            }
          })
        ]
      )
    : _vm.name === "scale"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            }
          })
        ]
      )
    : _vm.name === "bell"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            }
          })
        ]
      )
    : _vm.name === "add-circle"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          })
        ]
      )
    : _vm.name === "badge-check"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "shield-check"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
          })
        ]
      )
    : _vm.name === "cog"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" } })
        ]
      )
    : _vm.name === "user-circle"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "calendar"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "shield-exclamation"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            }
          })
        ]
      )
    : _vm.name === "check-circle"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
          })
        ]
      )
    : _vm.name === "check"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "template"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            }
          })
        ]
      )
    : _vm.name === "edit"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            }
          })
        ]
      )
    : _vm.name === "location-marker"
    ? _c("svg", { attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [
        _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d:
              "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
            "clip-rule": "evenodd"
          }
        })
      ])
    : _vm.name === "mail"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }
          })
        ]
      )
    : _vm.name === "phone"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            }
          })
        ]
      )
    : _vm.name === "support"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            }
          })
        ]
      )
    : _vm.name === "download"
    ? _c(
        "svg",
        {
          attrs: {
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./resources/js/Pages lazy ^\.\/.*$ namespace object ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		3,
		7
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		3,
		7
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		3,
		8
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		3,
		8
	],
	"./Auth/Unapproved": [
		"./resources/js/Pages/Auth/Unapproved.vue",
		6
	],
	"./Auth/Unapproved.vue": [
		"./resources/js/Pages/Auth/Unapproved.vue",
		6
	],
	"./Posts/Index": [
		"./resources/js/Pages/Posts/Index.vue",
		1,
		4,
		0,
		2,
		5
	],
	"./Posts/Index.vue": [
		"./resources/js/Pages/Posts/Index.vue",
		1,
		4,
		0,
		2,
		5
	],
	"./Users/Edit": [
		"./resources/js/Pages/Users/Edit.vue",
		1,
		0,
		9
	],
	"./Users/Edit.vue": [
		"./resources/js/Pages/Users/Edit.vue",
		1,
		0,
		9
	],
	"./Users/Show": [
		"./resources/js/Pages/Users/Show.vue",
		1,
		4,
		0,
		2,
		10
	],
	"./Users/Show.vue": [
		"./resources/js/Pages/Users/Show.vue",
		1,
		4,
		0,
		2,
		10
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _braid_vue_formulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @braid/vue-formulate */ "./node_modules/@braid/vue-formulate/dist/formulate.esm.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! portal-vue */ "./node_modules/portal-vue/dist/portal-vue.common.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(portal_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/Icon */ "./resources/js/components/ui/Icon.vue");
/* harmony import */ var _components_ui_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/Badge */ "./resources/js/components/ui/Badge.vue");
/* harmony import */ var _components_ui_BaseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/BaseButton */ "./resources/js/components/ui/BaseButton.vue");
/* harmony import */ var vue_auto_resize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-auto-resize */ "./node_modules/vue-auto-resize/index.js");









vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false;
var axios = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
  baseUrl: 'https://pninim.yiddishe-kop.com'
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_braid_vue_formulate__WEBPACK_IMPORTED_MODULE_1__["default"], {
  uploader: axios,
  uploadUrl: '/upload'
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive('auto-resize', vue_auto_resize__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({
  methods: {
    route: window.route
  }
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(portal_vue__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_4__["InertiaApp"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('BaseButton', _components_ui_BaseButton__WEBPACK_IMPORTED_MODULE_7__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('Icon', _components_ui_Icon__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('Badge', _components_ui_Badge__WEBPACK_IMPORTED_MODULE_6__["default"]);
var appEl = document.getElementById('app');
var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  metaInfo: {
    titleTemplate: function titleTemplate(title) {
      return title ? "".concat(title, " - Halpern CRM") : 'Halpern CRM';
    }
  },
  render: function render(h) {
    return h(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_4__["InertiaApp"], {
      props: {
        initialPage: JSON.parse(appEl.dataset.page),
        resolveComponent: function resolveComponent(name) {
          return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name)).then(function (module) {
            return module["default"];
          });
        }
      }
    });
  }
}).$mount(appEl);

/***/ }),

/***/ "./resources/js/components/ui/Badge.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/ui/Badge.vue ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=753d9d93& */ "./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93&");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/Badge.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/Badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/Badge.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ui/Badge.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Badge.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93& ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=template&id=753d9d93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Badge.vue?vue&type=template&id=753d9d93&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_753d9d93___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ui/BaseButton.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ui/BaseButton.vue ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=template&id=41b130a3& */ "./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3&");
/* harmony import */ var _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/BaseButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/BaseButton.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3& ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseButton.vue?vue&type=template&id=41b130a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/BaseButton.vue?vue&type=template&id=41b130a3&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_41b130a3___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ui/Icon.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/ui/Icon.vue ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=79b0928e& */ "./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e&");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/Icon.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/Icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/Icon.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ui/Icon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Icon.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e& ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=template&id=79b0928e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Icon.vue?vue&type=template&id=79b0928e&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_79b0928e___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yehudaneufeld/Documents/SoftwareDevelopment/Personel-projects/pninim/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/yehudaneufeld/Documents/SoftwareDevelopment/Personel-projects/pninim/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });