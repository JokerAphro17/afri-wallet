(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_pages_admin_user_edit_index_js"],{

/***/ "./node_modules/attr-accept/dist/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/attr-accept/dist/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

/***/ }),

/***/ "./resources/js/src/components/drop-file-image/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/drop-file-image/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification */ "./resources/js/src/components/notification/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
var activeStyle = {
  borderColor: '#2196f3'
};
var acceptStyle = {
  borderColor: '#00e676'
};
var rejectStyle = {
  borderColor: '#ff1744'
};
var thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};
var thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};
var thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
var img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

var onDropHandler = function onDropHandler(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });
};

var DropFileImage = function DropFileImage(_ref) {
  var images = _ref.images,
      imageUplaod = _ref.imageUplaod,
      maxFiles = _ref.maxFiles,
      _ref$returnUrl = _ref.returnUrl,
      returnUrl = _ref$returnUrl === void 0 ? true : _ref$returnUrl;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_3__.useDropzone)({
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    multiple: maxFiles && maxFiles == 1 ? false : true,
    maxFiles: maxFiles !== null && maxFiles !== void 0 ? maxFiles : 0,
    onDrop: function onDrop(acceptedImages) {
      var _images = [];
      setIsLoading(true);

      if (acceptedImages.length > 0 && acceptedImages.length <= maxFiles || !maxFiles) {
        setMessage('');
        acceptedImages.forEach( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_image) {
            var _data;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return onDropHandler(_image);

                  case 3:
                    _data = _context.sent;

                    _images.push(Object.assign(_image, {
                      preview: !returnUrl ? _data !== null && _data !== void 0 ? _data : URL.createObjectURL(_image) : URL.createObjectURL(_image)
                    }));

                    if (_images.length == acceptedImages.length) {
                      setIsLoading(false);
                      imageUplaod(_images);
                      setFiles(_images);
                    }

                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    (0,_notification__WEBPACK_IMPORTED_MODULE_1__.errorNotif)(_context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 8]]);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        setIsLoading(false);
        setMessage("Echec de chargement des images. ".concat(acceptedImages.length > maxFiles || acceptedImages.length == 0 ? "Vous ne pouvez charger que ".concat(maxFiles, " images maximum.") : ''));
      }
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFiles((images === null || images === void 0 ? void 0 : images.length) > 0 ? images : []);
  }, [images]);
  var style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStyle), isDragActive ? activeStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {});
  }, [isDragActive, isDragReject, isDragAccept]);
  var thumbs = files.map(function (file) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: thumb,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: thumbInner,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: file.preview,
          style: img
        }), file.preview]
      })
    }, file.preview);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: baseStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "Veuillez patienter ..."
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps({
        style: style
      })), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread({}, getInputProps())), isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "d\xE9ploser quelques fichiers ici ..."
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Glisser et d\xE9ploser quelques fichiers ou cliquer pour les selectionner"
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("aside", {
        style: thumbsContainer,
        children: message ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-danger",
          children: message
        }) : thumbs
      })]
    })
  });
};

DropFileImage.propTypes = {
  images: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array.isRequired),
  maxFiles: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  imageUplaod: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropFileImage);

/***/ }),

/***/ "./resources/js/src/pages/admin/user/components/FormUser.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/pages/admin/user/components/FormUser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_bf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.bf */ "./node_modules/cleave.js/dist/addons/cleave-phone.bf.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_bf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_bf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cleave.js/react */ "./node_modules/cleave.js/react.js");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cleave_js_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_drop_file_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/drop-file-image */ "./resources/js/src/components/drop-file-image/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var FormUser = function FormUser(_ref) {
  var _formProfile$lastname, _errors$lastname, _formProfile$firstnam, _errors$firstname, _formProfile$telephon, _errors$telephone, _formProfile$genre, _errors$genre, _formProfile$adresse, _errors$adresse, _formProfile$directio, _errors$direction, _formProfile$fonction, _errors$fonction, _formProfile$service, _errors$service, _formProfile$email, _errors$email, _formProfile$role, _errors$role;

  var userModel = _ref.userModel,
      errorUserModel = _ref.errorUserModel,
      isLoading = _ref.isLoading,
      onSubmitAction = _ref.onSubmitAction;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    uuid: '',
    lastname: '',
    firstname: '',
    genre: '',
    email: '',
    role: '',
    adresse: '',
    direction: '',
    service: '',
    fonction: '',
    telephone: '',
    avatar: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formProfile = _useState2[0],
      setFormProfile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    lastname: '',
    firstname: '',
    genre: '',
    email: '',
    role: '',
    adresse: '',
    direction: '',
    service: '',
    fonction: '',
    telephone: '',
    avatar: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorFormProfile = _useState4[0],
      setErrorFormProfile = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userModel) {
      var _ref2, _userModel$uuid, _ref3, _userModel$lastname, _ref4, _userModel$firstname, _ref5, _userModel$genre, _ref6, _userModel$email, _ref7, _userModel$role, _ref8, _userModel$adresse, _ref9, _userModel$direction, _ref10, _userModel$service, _ref11, _userModel$fonction, _ref12, _userModel$telephone, _ref13, _userModel$avatar;

      setFormProfile({
        uuid: (_ref2 = (_userModel$uuid = userModel === null || userModel === void 0 ? void 0 : userModel.uuid) !== null && _userModel$uuid !== void 0 ? _userModel$uuid : formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) !== null && _ref2 !== void 0 ? _ref2 : '',
        lastname: (_ref3 = (_userModel$lastname = userModel === null || userModel === void 0 ? void 0 : userModel.lastname) !== null && _userModel$lastname !== void 0 ? _userModel$lastname : formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname) !== null && _ref3 !== void 0 ? _ref3 : '',
        firstname: (_ref4 = (_userModel$firstname = userModel === null || userModel === void 0 ? void 0 : userModel.firstname) !== null && _userModel$firstname !== void 0 ? _userModel$firstname : formProfile === null || formProfile === void 0 ? void 0 : formProfile.firstname) !== null && _ref4 !== void 0 ? _ref4 : '',
        genre: (_ref5 = (_userModel$genre = userModel === null || userModel === void 0 ? void 0 : userModel.genre) !== null && _userModel$genre !== void 0 ? _userModel$genre : formProfile === null || formProfile === void 0 ? void 0 : formProfile.genre) !== null && _ref5 !== void 0 ? _ref5 : '',
        email: (_ref6 = (_userModel$email = userModel === null || userModel === void 0 ? void 0 : userModel.email) !== null && _userModel$email !== void 0 ? _userModel$email : formProfile === null || formProfile === void 0 ? void 0 : formProfile.email) !== null && _ref6 !== void 0 ? _ref6 : '',
        role: (_ref7 = (_userModel$role = userModel === null || userModel === void 0 ? void 0 : userModel.role) !== null && _userModel$role !== void 0 ? _userModel$role : formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== null && _ref7 !== void 0 ? _ref7 : '',
        adresse: (_ref8 = (_userModel$adresse = userModel === null || userModel === void 0 ? void 0 : userModel.adresse) !== null && _userModel$adresse !== void 0 ? _userModel$adresse : formProfile === null || formProfile === void 0 ? void 0 : formProfile.adresse) !== null && _ref8 !== void 0 ? _ref8 : '',
        direction: (_ref9 = (_userModel$direction = userModel === null || userModel === void 0 ? void 0 : userModel.direction) !== null && _userModel$direction !== void 0 ? _userModel$direction : formProfile === null || formProfile === void 0 ? void 0 : formProfile.direction) !== null && _ref9 !== void 0 ? _ref9 : '',
        service: (_ref10 = (_userModel$service = userModel === null || userModel === void 0 ? void 0 : userModel.service) !== null && _userModel$service !== void 0 ? _userModel$service : formProfile === null || formProfile === void 0 ? void 0 : formProfile.service) !== null && _ref10 !== void 0 ? _ref10 : '',
        fonction: (_ref11 = (_userModel$fonction = userModel === null || userModel === void 0 ? void 0 : userModel.fonction) !== null && _userModel$fonction !== void 0 ? _userModel$fonction : formProfile === null || formProfile === void 0 ? void 0 : formProfile.fonction) !== null && _ref11 !== void 0 ? _ref11 : '',
        telephone: (_ref12 = (_userModel$telephone = userModel === null || userModel === void 0 ? void 0 : userModel.telephone) !== null && _userModel$telephone !== void 0 ? _userModel$telephone : formProfile === null || formProfile === void 0 ? void 0 : formProfile.telephone) !== null && _ref12 !== void 0 ? _ref12 : '',
        avatar: (_ref13 = (_userModel$avatar = userModel === null || userModel === void 0 ? void 0 : userModel.avatar) !== null && _userModel$avatar !== void 0 ? _userModel$avatar : formProfile === null || formProfile === void 0 ? void 0 : formProfile.avatar) !== null && _ref13 !== void 0 ? _ref13 : {}
      });
    }
  }, [userModel]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (errorUserModel) {
      var _ref14, _errorUserModel$lastn, _ref15, _errorUserModel$first, _ref16, _errorUserModel$genre, _ref17, _errorUserModel$email, _ref18, _errorUserModel$role, _ref19, _errorUserModel$adres, _ref20, _errorUserModel$direc, _ref21, _errorUserModel$servi, _ref22, _errorUserModel$fonct, _ref23, _errorUserModel$telep, _ref24, _errorUserModel$avata;

      setErrorFormProfile({
        lastname: (_ref14 = (_errorUserModel$lastn = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.lastname) !== null && _errorUserModel$lastn !== void 0 ? _errorUserModel$lastn : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.lastname) !== null && _ref14 !== void 0 ? _ref14 : '',
        firstname: (_ref15 = (_errorUserModel$first = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.firstname) !== null && _errorUserModel$first !== void 0 ? _errorUserModel$first : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.firstname) !== null && _ref15 !== void 0 ? _ref15 : '',
        genre: (_ref16 = (_errorUserModel$genre = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.genre) !== null && _errorUserModel$genre !== void 0 ? _errorUserModel$genre : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.genre) !== null && _ref16 !== void 0 ? _ref16 : '',
        email: (_ref17 = (_errorUserModel$email = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.email) !== null && _errorUserModel$email !== void 0 ? _errorUserModel$email : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.email) !== null && _ref17 !== void 0 ? _ref17 : '',
        role: (_ref18 = (_errorUserModel$role = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.role) !== null && _errorUserModel$role !== void 0 ? _errorUserModel$role : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.role) !== null && _ref18 !== void 0 ? _ref18 : '',
        adresse: (_ref19 = (_errorUserModel$adres = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.adresse) !== null && _errorUserModel$adres !== void 0 ? _errorUserModel$adres : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.adresse) !== null && _ref19 !== void 0 ? _ref19 : '',
        direction: (_ref20 = (_errorUserModel$direc = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.direction) !== null && _errorUserModel$direc !== void 0 ? _errorUserModel$direc : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.direction) !== null && _ref20 !== void 0 ? _ref20 : '',
        service: (_ref21 = (_errorUserModel$servi = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.service) !== null && _errorUserModel$servi !== void 0 ? _errorUserModel$servi : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.service) !== null && _ref21 !== void 0 ? _ref21 : '',
        fonction: (_ref22 = (_errorUserModel$fonct = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.fonction) !== null && _errorUserModel$fonct !== void 0 ? _errorUserModel$fonct : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.fonction) !== null && _ref22 !== void 0 ? _ref22 : '',
        telephone: (_ref23 = (_errorUserModel$telep = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.telephone) !== null && _errorUserModel$telep !== void 0 ? _errorUserModel$telep : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.telephone) !== null && _ref23 !== void 0 ? _ref23 : '',
        avatar: (_ref24 = (_errorUserModel$avata = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.avatar) !== null && _errorUserModel$avata !== void 0 ? _errorUserModel$avata : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.avatar) !== null && _ref24 !== void 0 ? _ref24 : ''
      });
    }
  }, [errorUserModel]);

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var handlerInput = function handlerInput(e) {
    e.preventDefault();
    var target = e.target;
    var value = target === null || target === void 0 ? void 0 : target.value;
    var name = target === null || target === void 0 ? void 0 : target.name;
    setFormProfile(_objectSpread(_objectSpread({}, formProfile), {}, _defineProperty({}, name, value)));
  };

  var onSubmit = function onSubmit() {
    if (!(formProfile !== null && formProfile !== void 0 && formProfile.role)) {
      setErrorFormProfile(_objectSpread(_objectSpread({}, errorFormProfile), {}, {
        role: 'le champ role est requis.'
      }));
      return;
    }

    onSubmitAction(formProfile);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      body: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
        children: "Information personnel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Subtitle, {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations personnelles de l'utilisateur concern\xE9"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserLastname",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Nom de famille"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "lastname"
            }, register('lastname', {
              required: true
            })), {}, {
              value: (_formProfile$lastname = formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname) !== null && _formProfile$lastname !== void 0 ? _formProfile$lastname : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.lastname || errors !== null && errors !== void 0 && errors.lastname ? 'is-invalid' : ''),
              placeholder: "Renseigner le nom de famille"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.lastname || errors !== null && errors !== void 0 && errors.lastname ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$lastname = errors.lastname) === null || _errors$lastname === void 0 ? void 0 : _errors$lastname.type) === 'required' && "Ce champ nom de famille est requis" || (errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.lastname)
            }) : null]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Prenom(s)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "firstname"
            }, register('firstname', {
              required: true
            })), {}, {
              value: (_formProfile$firstnam = formProfile === null || formProfile === void 0 ? void 0 : formProfile.firstname) !== null && _formProfile$firstnam !== void 0 ? _formProfile$firstnam : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.firstname || errors !== null && errors !== void 0 && errors.firstname ? 'is-invalid' : ''),
              placeholder: "Renseigner le(s) prenom(s)"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.firstname || errors !== null && errors !== void 0 && errors.firstname ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$firstname = errors.firstname) === null || _errors$firstname === void 0 ? void 0 : _errors$firstname.type) === 'required' && "Ce champ prenom(s) est requis" || errorFormProfile.firstname
            }) : null]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Num\xE9ro de t\xE9l\xE9phone"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((cleave_js_react__WEBPACK_IMPORTED_MODULE_2___default()), {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('form-control', {
                'is-invalid': (errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.telephone) || (errors === null || errors === void 0 ? void 0 : errors.telephone)
              }),
              name: "telephone",
              value: (_formProfile$telephon = formProfile === null || formProfile === void 0 ? void 0 : formProfile.telephone) !== null && _formProfile$telephon !== void 0 ? _formProfile$telephon : '',
              placeholder: "Renseigner le num\xE9ro de t\xE9l\xE9phone",
              options: {
                phone: true,
                phoneRegionCode: 'BF'
              },
              onChange: handlerInput
            }), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.telephone || errors !== null && errors !== void 0 && errors.telephone ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$telephone = errors.telephone) === null || _errors$telephone === void 0 ? void 0 : _errors$telephone.type) === 'required' && "Ce champ telephone est requis" || errorFormProfile.telephone
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserGenre",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Genre"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Select, _objectSpread(_objectSpread({
              name: "genre",
              value: (_formProfile$genre = formProfile === null || formProfile === void 0 ? void 0 : formProfile.genre) !== null && _formProfile$genre !== void 0 ? _formProfile$genre : ''
            }, register('genre', {
              required: true
            })), {}, {
              onChange: handlerInput,
              className: "form-control ".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.genre || errors !== null && errors !== void 0 && errors.genre ? 'is-invalid' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: '',
                children: "Choisir le genre"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'Male',
                children: "Masculin"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'Female',
                children: "Feminin"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'None',
                children: "Non defini"
              })]
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.genre || errors !== null && errors !== void 0 && errors.genre ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$genre = errors.genre) === null || _errors$genre === void 0 ? void 0 : _errors$genre.type) === 'required' && "Ce champ genre est requis" || errorFormProfile.genre
            }) : null]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Adresse domicili\xE9"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "adresse"
            }, register('adresse', {
              required: false
            })), {}, {
              value: (_formProfile$adresse = formProfile === null || formProfile === void 0 ? void 0 : formProfile.adresse) !== null && _formProfile$adresse !== void 0 ? _formProfile$adresse : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.adresse || errors !== null && errors !== void 0 && errors.adresse ? 'is-invalid' : ''),
              placeholder: "Renseigner l'adresse domicili\xE9e"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.adresse || errors !== null && errors !== void 0 && errors.adresse ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$adresse = errors.adresse) === null || _errors$adresse === void 0 ? void 0 : _errors$adresse.type) === 'required' && "Ce champ adresse est requis" || errorFormProfile.adresse
            }) : null]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      body: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
        children: "Information professionnelle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Subtitle, {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations professionnelle de l'utilisateur"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserDirection",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Direction"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "direction"
            }, register('direction', {
              required: true
            })), {}, {
              value: (_formProfile$directio = formProfile === null || formProfile === void 0 ? void 0 : formProfile.direction) !== null && _formProfile$directio !== void 0 ? _formProfile$directio : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.direction || errors !== null && errors !== void 0 && errors.direction ? 'is-invalid' : ''),
              placeholder: "Renseigner la direction"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.direction || errors !== null && errors !== void 0 && errors.direction ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$direction = errors.direction) === null || _errors$direction === void 0 ? void 0 : _errors$direction.type) === 'required' && "Ce champ direction est requis" || errorFormProfile.direction
            }) : null]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserFonction",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Fonction"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "fonction"
            }, register('fonction', {
              required: true
            })), {}, {
              value: (_formProfile$fonction = formProfile === null || formProfile === void 0 ? void 0 : formProfile.fonction) !== null && _formProfile$fonction !== void 0 ? _formProfile$fonction : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.fonction || errors !== null && errors !== void 0 && errors.fonction ? 'is-invalid' : ''),
              placeholder: "Renseigner la fonction"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.fonction || errors !== null && errors !== void 0 && errors.fonction ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$fonction = errors.fonction) === null || _errors$fonction === void 0 ? void 0 : _errors$fonction.type) === 'required' && "Ce champ fonction est requis" || errorFormProfile.fonction
            }) : null]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserService",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Service"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "text",
              name: "service"
            }, register('service', {
              required: true
            })), {}, {
              value: (_formProfile$service = formProfile === null || formProfile === void 0 ? void 0 : formProfile.service) !== null && _formProfile$service !== void 0 ? _formProfile$service : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.service || errors !== null && errors !== void 0 && errors.service ? 'is-invalid' : ''),
              placeholder: "Renseigner le service"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.service || errors !== null && errors !== void 0 && errors.service ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$service = errors.service) === null || _errors$service === void 0 ? void 0 : _errors$service.type) === 'required' && "Ce champ service est requis" || errorFormProfile.service
            }) : null]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      body: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
        children: "Information d'acc\xE8s"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Subtitle, {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations permettant \xE0 l'utilisateur de se connecter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserEmail",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Adresse mail"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, _objectSpread(_objectSpread({
              type: "email",
              name: "email"
            }, register('email', {
              required: true
            })), {}, {
              value: (_formProfile$email = formProfile === null || formProfile === void 0 ? void 0 : formProfile.email) !== null && _formProfile$email !== void 0 ? _formProfile$email : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.email || errors !== null && errors !== void 0 && errors.email ? 'is-invalid' : ''),
              placeholder: "Renseigner l'adresse mail"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.email || errors !== null && errors !== void 0 && errors.email ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === 'required' && "Ce champ adresse mail est requis" || errorFormProfile.email
            }) : null]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
            className: "mb-3",
            controlId: "formUserRole",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
              children: "Role"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Select, _objectSpread(_objectSpread({
              name: "role",
              value: (_formProfile$role = formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== null && _formProfile$role !== void 0 ? _formProfile$role : ''
            }, register('role', {
              required: true
            })), {}, {
              onChange: handlerInput,
              className: "form-control ".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.role || errors !== null && errors !== void 0 && errors.role ? 'is-invalid' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: '',
                children: "Choisir le role"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'journalist',
                children: "Gestionnaire"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'accounting',
                children: "Comptable"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'admin',
                children: "Administrateur"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: 'observer',
                children: "Consultant"
              })]
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.role || errors !== null && errors !== void 0 && errors.role ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Text, {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$role = errors.role) === null || _errors$role === void 0 ? void 0 : _errors$role.type) === 'required' && "Ce champ role est requis" || errorFormProfile.role
            }) : null]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      body: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        disabled: isLoading,
        variant: userModel !== null && userModel !== void 0 && userModel.uuid ? 'secondary' : 'primary',
        type: "submit",
        children: [userModel !== null && userModel !== void 0 && userModel.uuid ? 'Modifier' : 'Enregistrer', " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          animation: "border",
          hidden: !isLoading,
          size: "sm"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormUser);

/***/ }),

/***/ "./resources/js/src/pages/admin/user/edit/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/pages/admin/user/edit/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_FormUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormUser */ "./resources/js/src/pages/admin/user/components/FormUser.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/notification */ "./resources/js/src/components/notification/index.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/request */ "./resources/js/src/api/request.js");
/* harmony import */ var _utilities_constant_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/constant/app.constant */ "./resources/js/src/utilities/constant/app.constant.js");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/client */ "./resources/js/src/api/client.js");
/* harmony import */ var _layouts_components_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/components/page-header */ "./resources/js/src/layouts/components/page-header/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var EditUser = function EditUser() {
  var _location$state;

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    uuid: "",
    lastname: "",
    firstname: "",
    genre: "",
    email: "",
    role: "",
    avatar: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formProfile = _useState2[0],
      setFormProfile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    lastname: "",
    firstname: "",
    genre: "",
    email: "",
    role: "",
    avatar: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorFormProfile = _useState4[0],
      setErrorFormProfile = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      fetchData = _useState8[0],
      setFetchData = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      message = _useState10[0],
      setMessage = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var state = location.state;

    if (state !== null && state !== void 0 && state.uuid) {
      if (!fetchData) {
        setFetchData(true);
      }

      setFormProfile(_objectSpread(_objectSpread({}, formProfile), {}, {
        uuid: state.uuid
      }));
    } else {
      navigate(-1);
    }
  }, [location === null || location === void 0 ? void 0 : (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.uuid]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (formProfile.uuid && !formProfile.lastname) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchAllUsers();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, [formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid, formProfile.lastname]);

  var fetchAllUsers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _response$data$data, _response$data, response, data, _profile;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setFetchData(true);
              _context2.next = 4;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_3__.fetchInfoUser)(formProfile.uuid);

            case 4:
              response = _context2.sent;
              data = (_response$data$data = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) !== null && _response$data$data !== void 0 ? _response$data$data : null;

              if (data) {
                _profile = _objectSpread(_objectSpread({}, data), {}, {
                  avatar: !(data !== null && data !== void 0 && data.avatar) ? {} : {
                    preview: "".concat(_utilities_constant_app_constant__WEBPACK_IMPORTED_MODULE_4__.API_STORAGE_URL, "/").concat(avatar)
                  }
                });
                setFormProfile(_profile);
              }

              setFetchData(false);
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              setFetchData(false);

              if (_typeof(_context2.t0) === 'object') {} else {
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.errorNotif)('Avertissement', _context2.t0);
              }

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function fetchAllUsers() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onUpdated = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(modelData) {
      var _formProfile$uuid, _modelData$lastname, _modelData$firstname, _modelData$genre, _modelData$email, _modelData$role, _modelData$adresse, _modelData$direction, _modelData$service, _modelData$fonction, _modelData$telephone, _modelData$avatar;

      var params, _message, _errorForm;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                uuid: (_formProfile$uuid = formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) !== null && _formProfile$uuid !== void 0 ? _formProfile$uuid : "",
                lastname: (_modelData$lastname = modelData === null || modelData === void 0 ? void 0 : modelData.lastname) !== null && _modelData$lastname !== void 0 ? _modelData$lastname : "",
                firstname: (_modelData$firstname = modelData === null || modelData === void 0 ? void 0 : modelData.firstname) !== null && _modelData$firstname !== void 0 ? _modelData$firstname : "",
                genre: (_modelData$genre = modelData === null || modelData === void 0 ? void 0 : modelData.genre) !== null && _modelData$genre !== void 0 ? _modelData$genre : "None",
                email: (_modelData$email = modelData === null || modelData === void 0 ? void 0 : modelData.email) !== null && _modelData$email !== void 0 ? _modelData$email : "",
                role: (_modelData$role = modelData === null || modelData === void 0 ? void 0 : modelData.role) !== null && _modelData$role !== void 0 ? _modelData$role : "",
                adresse: (_modelData$adresse = modelData === null || modelData === void 0 ? void 0 : modelData.adresse) !== null && _modelData$adresse !== void 0 ? _modelData$adresse : '',
                direction: (_modelData$direction = modelData === null || modelData === void 0 ? void 0 : modelData.direction) !== null && _modelData$direction !== void 0 ? _modelData$direction : '',
                service: (_modelData$service = modelData === null || modelData === void 0 ? void 0 : modelData.service) !== null && _modelData$service !== void 0 ? _modelData$service : '',
                fonction: (_modelData$fonction = modelData === null || modelData === void 0 ? void 0 : modelData.fonction) !== null && _modelData$fonction !== void 0 ? _modelData$fonction : '',
                telephone: (_modelData$telephone = modelData === null || modelData === void 0 ? void 0 : modelData.telephone) !== null && _modelData$telephone !== void 0 ? _modelData$telephone : '',
                avatar: modelData !== null && modelData !== void 0 && (_modelData$avatar = modelData.avatar) !== null && _modelData$avatar !== void 0 && _modelData$avatar.preview ? modelData.avatar : null
              };
              _context3.prev = 1;
              setIsLoading(true);
              _context3.next = 5;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_3__.updatedUserInfo)(formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid, params);

            case 5:
              (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.successNotif)('Notification', "Les informations de l'utilisateur ".concat(modelData === null || modelData === void 0 ? void 0 : modelData.lastname, " ").concat(modelData === null || modelData === void 0 ? void 0 : modelData.firstname, " a \xE9t\xE9 mise \xE0 jour avec succ\xE8s.")); // navigate('/handlers/users/show', {state: {uuid: ''});

              navigate('/handlers/account-admins');
              _context3.next = 18;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              setFormProfile(modelData);
              setIsLoading(false);
              _message = '';
              _errorForm = {
                lastname: "",
                firstname: "",
                genre: "",
                email: "",
                role: "",
                avatar: ""
              };

              if (_typeof(_context3.t0) === 'object') {
                _errorForm = (0,_api_client__WEBPACK_IMPORTED_MODULE_5__.formatPropValueToString)(_context3.t0, _errorForm);
              } else {
                _message = _context3.t0;
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.errorNotif)('Avertissement', _message);
              }

              setMessage(_message);
              setErrorFormProfile(_errorForm);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function onUpdated(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_layouts_components_page_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: 'Modifier le profil utilisateur',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "dark",
        size: "md",
        onClick: function onClick() {
          return navigate('/handlers/account-admins');
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          className: "zmdi zmdi-accounts-list-alt"
        }), ' ', "Liste des utilisateurs"]
      })
    }), fetchData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: "Veuillez patienter ..."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_FormUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
      userModel: formProfile,
      errorUserModel: errorFormProfile,
      isLoading: isLoading,
      onSubmitAction: onUpdated
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditUser);

/***/ }),

/***/ "./node_modules/cleave.js/dist/addons/cleave-phone.bf.js":
/*!***************************************************************!*\
  !*** ./node_modules/cleave.js/dist/addons/cleave-phone.bf.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

!function(){function n(n,t){var e=n.split("."),l=U;e[0]in l||!l.execScript||l.execScript("var "+e[0]);for(var r;e.length&&(r=e.shift());)e.length||void 0===t?l=l[r]?l[r]:l[r]={}:l[r]=t}function t(n,t){function e(){}e.prototype=t.prototype,n.M=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.N=function(n,e,l){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[e].apply(n,r)}}function e(n,t){null!=n&&this.a.apply(this,arguments)}function l(n){n.b=""}function r(n,t){n.sort(t||i)}function i(n,t){return n>t?1:n<t?-1:0}function u(n){var t,e=[],l=0;for(t in n)e[l++]=n[t];return e}function a(n,t){this.b=n,this.a={};for(var e=0;e<t.length;e++){var l=t[e];this.a[l.b]=l}}function o(n){return n=u(n.a),r(n,function(n,t){return n.b-t.b}),n}function s(n,t){switch(this.b=n,this.g=!!t.v,this.a=t.c,this.i=t.type,this.h=!1,this.a){case J:case K:case L:case O:case Z:case k:case Y:this.h=!0}this.f=t.defaultValue}function f(){this.a={},this.f=this.j().a,this.b=this.g=null}function p(n,t){for(var e=o(n.j()),l=0;l<e.length;l++){var r=e[l],i=r.b;if(null!=t.a[i]){n.b&&delete n.b[r.b];var u=11==r.a||10==r.a;if(r.g)for(var r=c(t,i)||[],a=0;a<r.length;a++){var s=n,f=i,h=u?r[a].clone():r[a];s.a[f]||(s.a[f]=[]),s.a[f].push(h),s.b&&delete s.b[f]}else r=c(t,i),u?(u=c(n,i))?p(u,r):b(n,i,r.clone()):b(n,i,r)}}}function c(n,t){var e=n.a[t];if(null==e)return null;if(n.g){if(!(t in n.b)){var l=n.g,r=n.f[t];if(null!=e)if(r.g){for(var i=[],u=0;u<e.length;u++)i[u]=l.b(r,e[u]);e=i}else e=l.b(r,e);return n.b[t]=e}return n.b[t]}return e}function h(n,t,e){var l=c(n,t);return n.f[t].g?l[e||0]:l}function g(n,t){var e;if(null!=n.a[t])e=h(n,t,void 0);else n:{if(e=n.f[t],void 0===e.f){var l=e.i;if(l===Boolean)e.f=!1;else if(l===Number)e.f=0;else{if(l!==String){e=new l;break n}e.f=e.h?"0":""}}e=e.f}return e}function m(n,t){return n.f[t].g?null!=n.a[t]?n.a[t].length:0:null!=n.a[t]?1:0}function b(n,t,e){n.a[t]=e,n.b&&(n.b[t]=e)}function y(n,t){var e,l=[];for(e in t)0!=e&&l.push(new s(e,t[e]));return new a(n,l)}/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function v(){f.call(this)}function _(){f.call(this)}function d(){f.call(this)}function S(){}function w(){}function x(){}/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function A(){this.a={}}function N(n){return 0==n.length||un.test(n)}function j(n,t){if(null==t)return null;t=t.toUpperCase();var e=n.a[t];if(null==e){if(e=tn[t],null==e)return null;e=(new x).a(d.j(),e),n.a[t]=e}return e}function B(n){return n=nn[n],null==n?"ZZ":n[0]}function E(n){this.H=RegExp(" "),this.C="",this.m=new e,this.w="",this.i=new e,this.u=new e,this.l=!0,this.A=this.o=this.F=!1,this.G=A.b(),this.s=0,this.b=new e,this.B=!1,this.h="",this.a=new e,this.f=[],this.D=n,this.J=this.g=F(this,this.D)}function F(n,t){var e;if(null!=t&&isNaN(t)&&t.toUpperCase()in tn){if(e=j(n.G,t),null==e)throw Error("Invalid region code: "+t);e=g(e,10)}else e=0;return e=j(n.G,B(e)),null!=e?e:an}function R(n){for(var t=n.f.length,e=0;e<t;++e){var r=n.f[e],i=g(r,1);if(n.w==i)return!1;var u;u=n;var a=r,o=g(a,1);if(-1!=o.indexOf("|"))u=!1;else{o=o.replace(on,"\\d"),o=o.replace(sn,"\\d"),l(u.m);var s;s=u;var a=g(a,2),f="999999999999999".match(o)[0];f.length<s.a.b.length?s="":(s=f.replace(new RegExp(o,"g"),a),s=s.replace(RegExp("9","g")," ")),0<s.length?(u.m.a(s),u=!0):u=!1}if(u)return n.w=i,n.B=pn.test(h(r,4)),n.s=0,!0}return n.l=!1}function $(n,t){for(var e=[],l=t.length-3,r=n.f.length,i=0;i<r;++i){var u=n.f[i];0==m(u,3)?e.push(n.f[i]):(u=h(u,3,Math.min(l,m(u,3)-1)),0==t.search(u)&&e.push(n.f[i]))}n.f=e}function C(n,t){n.i.a(t);var e=t;if(rn.test(e)||1==n.i.b.length&&ln.test(e)){var r,e=t;"+"==e?(r=e,n.u.a(e)):(r=en[e],n.u.a(r),n.a.a(r)),t=r}else n.l=!1,n.F=!0;if(!n.l){if(!n.F)if(P(n)){if(q(n))return I(n)}else if(0<n.h.length&&(e=n.a.toString(),l(n.a),n.a.a(n.h),n.a.a(e),e=n.b.toString(),r=e.lastIndexOf(n.h),l(n.b),n.b.a(e.substring(0,r))),n.h!=H(n))return n.b.a(" "),I(n);return n.i.toString()}switch(n.u.b.length){case 0:case 1:case 2:return n.i.toString();case 3:if(!P(n))return n.h=H(n),V(n);n.A=!0;default:return n.A?(q(n)&&(n.A=!1),n.b.toString()+n.a.toString()):0<n.f.length?(e=T(n,t),r=D(n),0<r.length?r:($(n,n.a.toString()),R(n)?G(n):n.l?M(n,e):n.i.toString())):V(n)}}function I(n){return n.l=!0,n.A=!1,n.f=[],n.s=0,l(n.m),n.w="",V(n)}function D(n){for(var t=n.a.toString(),e=n.f.length,l=0;l<e;++l){var r=n.f[l],i=g(r,1);if(new RegExp("^(?:"+i+")$").test(t))return n.B=pn.test(h(r,4)),t=t.replace(new RegExp(i,"g"),h(r,2)),M(n,t)}return""}function M(n,t){var e=n.b.b.length;return n.B&&0<e&&" "!=n.b.toString().charAt(e-1)?n.b+" "+t:n.b+t}function V(n){var t=n.a.toString();if(3<=t.length){for(var e=n.o&&0==n.h.length&&0<m(n.g,20)?c(n.g,20)||[]:c(n.g,19)||[],l=e.length,r=0;r<l;++r){var i=e[r];0<n.h.length&&N(g(i,4))&&!h(i,6)&&null==i.a[5]||(0!=n.h.length||n.o||N(g(i,4))||h(i,6))&&fn.test(g(i,2))&&n.f.push(i)}return $(n,t),t=D(n),0<t.length?t:R(n)?G(n):n.i.toString()}return M(n,t)}function G(n){var t=n.a.toString(),e=t.length;if(0<e){for(var l="",r=0;r<e;r++)l=T(n,t.charAt(r));return n.l?M(n,l):n.i.toString()}return n.b.toString()}function H(n){var t,e=n.a.toString(),r=0;return 1!=h(n.g,10)?t=!1:(t=n.a.toString(),t="1"==t.charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1)),t?(r=1,n.b.a("1").a(" "),n.o=!0):null!=n.g.a[15]&&(t=new RegExp("^(?:"+h(n.g,15)+")"),t=e.match(t),null!=t&&null!=t[0]&&0<t[0].length&&(n.o=!0,r=t[0].length,n.b.a(e.substring(0,r)))),l(n.a),n.a.a(e.substring(r)),e.substring(0,r)}function P(n){var t=n.u.toString(),e=new RegExp("^(?:\\+|"+h(n.g,11)+")"),e=t.match(e);return null!=e&&null!=e[0]&&0<e[0].length&&(n.o=!0,e=e[0].length,l(n.a),n.a.a(t.substring(e)),l(n.b),n.b.a(t.substring(0,e)),"+"!=t.charAt(0)&&n.b.a(" "),!0)}function q(n){if(0==n.a.b.length)return!1;var t,r=new e;n:{if(t=n.a.toString(),0!=t.length&&"0"!=t.charAt(0))for(var i,u=t.length,a=1;3>=a&&a<=u;++a)if(i=parseInt(t.substring(0,a),10),i in nn){r.a(t.substring(a)),t=i;break n}t=0}return 0!=t&&(l(n.a),n.a.a(r.toString()),r=B(t),"001"==r?n.g=j(n.G,""+t):r!=n.D&&(n.g=F(n,r)),n.b.a(""+t).a(" "),n.h="",!0)}function T(n,t){var e=n.m.toString();if(0<=e.substring(n.s).search(n.H)){var r=e.search(n.H),e=e.replace(n.H,t);return l(n.m),n.m.a(e),n.s=r,e.substring(0,n.s+1)}return 1==n.f.length&&(n.l=!1),n.w="",n.i.toString()}var U=this;e.prototype.b="",e.prototype.set=function(n){this.b=""+n},e.prototype.a=function(n,t,e){if(this.b+=String(n),null!=t)for(var l=1;l<arguments.length;l++)this.b+=arguments[l];return this},e.prototype.toString=function(){return this.b};var Y=1,k=2,J=3,K=4,L=6,O=16,Z=18;f.prototype.set=function(n,t){b(this,n.b,t)},f.prototype.clone=function(){var n=new this.constructor;return n!=this&&(n.a={},n.b&&(n.b={}),p(n,this)),n},t(v,f);var z=null;t(_,f);var Q=null;t(d,f);var W=null;v.prototype.j=function(){var n=z;return n||(z=n=y(v,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),n},v.j=v.prototype.j,_.prototype.j=function(){var n=Q;return n||(Q=n=y(_,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),n},_.j=_.prototype.j,d.prototype.j=function(){var n=W;return n||(W=n=y(d,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:_},2:{name:"fixed_line",c:11,type:_},3:{name:"mobile",c:11,type:_},4:{name:"toll_free",c:11,type:_},5:{name:"premium_rate",c:11,type:_},6:{name:"shared_cost",c:11,type:_},7:{name:"personal_number",c:11,type:_},8:{name:"voip",c:11,type:_},21:{name:"pager",c:11,type:_},25:{name:"uan",c:11,type:_},27:{name:"emergency",c:11,type:_},28:{name:"voicemail",c:11,type:_},29:{name:"short_code",c:11,type:_},30:{name:"standard_rate",c:11,type:_},31:{name:"carrier_specific",c:11,type:_},33:{name:"sms_services",c:11,type:_},24:{name:"no_international_dialling",c:11,type:_},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:v},20:{name:"intl_number_format",v:!0,c:11,type:v},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),n},d.j=d.prototype.j,S.prototype.a=function(n){throw new n.b,Error("Unimplemented")},S.prototype.b=function(n,t){if(11==n.a||10==n.a)return t instanceof f?t:this.a(n.i.prototype.j(),t);if(14==n.a){if("string"==typeof t&&X.test(t)){var e=Number(t);if(0<e)return e}return t}if(!n.h)return t;if(e=n.i,e===String){if("number"==typeof t)return String(t)}else if(e===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||X.test(t)))return Number(t);return t};var X=/^-?[0-9]+$/;t(w,S),w.prototype.a=function(n,t){var e=new n.b;return e.g=this,e.a=t,e.b={},e},t(x,w),x.prototype.b=function(n,t){return 8==n.a?!!t:S.prototype.b.apply(this,arguments)},x.prototype.a=function(n,t){return x.M.a.call(this,n,t)};/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var nn={226:["BF"]},tn={BF:[null,[null,null,"[25-7]\\d{7}",null,null,null,null,null,null,[8]],[null,null,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",null,null,null,"20491234"],[null,null,"(?:5[124-8]|[67]\\d)\\d{6}",null,null,null,"70123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],"BF",226,"00",null,null,null,null,null,null,null,[[null,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[25-7]"]]],null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};A.b=function(){return A.a?A.a:A.a=new A};var en={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},ln=RegExp("[+＋]+"),rn=RegExp("([0-9０-９٠-٩۰-۹])"),un=/^\(?\$1\)?$/,an=new d;b(an,11,"NA");var on=/\[([^\[\]])*\]/g,sn=/\d(?=[^,}][^,}])/g,fn=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),pn=/[- ]/;E.prototype.K=function(){this.C="",l(this.i),l(this.u),l(this.m),this.s=0,this.w="",l(this.b),this.h="",l(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=F(this,this.D))},E.prototype.L=function(n){return this.C=C(this,n)},n("Cleave.AsYouTypeFormatter",E),n("Cleave.AsYouTypeFormatter.prototype.inputDigit",E.prototype.L),n("Cleave.AsYouTypeFormatter.prototype.clear",E.prototype.K)}.call("object"==typeof __webpack_require__.g&&__webpack_require__.g?__webpack_require__.g:window);

/***/ }),

/***/ "./node_modules/cleave.js/dist/cleave-react-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/cleave.js/dist/cleave-react-node.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_608__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_608__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_608__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_608__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_608__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_608__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_1809__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __nested_webpack_require_1809__(1); // eslint-disable-line no-unused-vars
	var CreateReactClass = __nested_webpack_require_1809__(2);

	var NumeralFormatter = __nested_webpack_require_1809__(9);
	var DateFormatter = __nested_webpack_require_1809__(10);
	var TimeFormatter = __nested_webpack_require_1809__(11);
	var PhoneFormatter = __nested_webpack_require_1809__(12);
	var CreditCardDetector = __nested_webpack_require_1809__(13);
	var Util = __nested_webpack_require_1809__(14);
	var DefaultProperties = __nested_webpack_require_1809__(15);

	var cleaveReactClass = CreateReactClass({
	    componentDidMount: function componentDidMount() {
	        this.init();
	    },

	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var owner = this,
	            phoneRegionCode = (owner.props.options || {}).phoneRegionCode,
	            newValue = owner.props.value,
	            pps = owner.properties;

	        owner.updateRegisteredEvents(owner.props);
	        if (prevProps.value !== newValue && newValue !== undefined && newValue !== null) {
	            newValue = newValue.toString();

	            if (newValue !== owner.properties.result) {
	                owner.properties.initValue = newValue;
	                owner.onInput(newValue, true);
	            }
	        }

	        // update phone region code
	        var prevPhoneRegionCode = (prevProps.options || {}).phoneRegionCode;
	        if (prevPhoneRegionCode !== phoneRegionCode && phoneRegionCode && phoneRegionCode !== owner.properties.phoneRegionCode) {
	            owner.properties.phoneRegionCode = phoneRegionCode;
	            owner.initPhoneFormatter();
	            owner.onInput(owner.properties.result);
	        }

	        Util.setSelection(owner.element, owner.state.cursorPosition, pps.document);
	    },

	    updateRegisteredEvents: function updateRegisteredEvents(props) {
	        var owner = this,
	            _owner$registeredEven = owner.registeredEvents,
	            onKeyDown = _owner$registeredEven.onKeyDown,
	            onChange = _owner$registeredEven.onChange,
	            onFocus = _owner$registeredEven.onFocus,
	            onBlur = _owner$registeredEven.onBlur,
	            onInit = _owner$registeredEven.onInit;


	        if (props.onInit && props.onInit !== onInit) owner.registeredEvents.onInit = props.onInit;
	        if (props.onChange && props.onChange !== onChange) owner.registeredEvents.onChange = props.onChange;
	        if (props.onFocus && props.onFocus !== onFocus) owner.registeredEvents.onFocus = props.onFocus;
	        if (props.onBlur && props.onBlur !== onBlur) owner.registeredEvents.onBlur = props.onBlur;
	        if (props.onKeyDown && props.onKeyDown !== onKeyDown) owner.registeredEvents.onKeyDown = props.onKeyDown;
	    },

	    getInitialState: function getInitialState() {
	        var owner = this,
	            _owner$props = owner.props,
	            value = _owner$props.value,
	            options = _owner$props.options,
	            onKeyDown = _owner$props.onKeyDown,
	            onChange = _owner$props.onChange,
	            onFocus = _owner$props.onFocus,
	            onBlur = _owner$props.onBlur,
	            onInit = _owner$props.onInit;


	        owner.registeredEvents = {
	            onInit: onInit || Util.noop,
	            onChange: onChange || Util.noop,
	            onFocus: onFocus || Util.noop,
	            onBlur: onBlur || Util.noop,
	            onKeyDown: onKeyDown || Util.noop
	        };

	        if (!options) {
	            options = {};
	        }

	        options.initValue = value;

	        owner.properties = DefaultProperties.assign({}, options);

	        return {
	            value: owner.properties.result,
	            cursorPosition: 0
	        };
	    },

	    init: function init() {
	        var owner = this,
	            pps = owner.properties;

	        // so no need for this lib at all
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
	            owner.onInput(pps.initValue);
	            owner.registeredEvents.onInit(owner);

	            return;
	        }

	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Util.isAndroid();

	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initTimeFormatter();
	        owner.initNumeralFormatter();

	        // avoid touch input field if value is null
	        // otherwise Firefox will add red box-shadow for <input required />
	        if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) {
	            owner.onInput(pps.initValue);
	        }

	        owner.registeredEvents.onInit(owner);
	    },

	    initNumeralFormatter: function initNumeralFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new NumeralFormatter(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.prefix, pps.signBeforePrefix, pps.tailPrefix, pps.delimiter);
	    },

	    initTimeFormatter: function initTimeFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.time) {
	            return;
	        }

	        pps.timeFormatter = new TimeFormatter(pps.timePattern, pps.timeFormat);
	        pps.blocks = pps.timeFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);
	    },

	    initDateFormatter: function initDateFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function initPhoneFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	        // Cleave.AsYouTypeFormatter should be provided by
	        // external google closure lib
	        try {
	            pps.phoneFormatter = new PhoneFormatter(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
	        } catch (ex) {
	            throw new Error('Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    setRawValue: function setRawValue(value) {
	        var owner = this,
	            pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        pps.postDelimiterBackspace = false;

	        owner.onChange({
	            target: { value: value },

	            // Methods to better resemble a SyntheticEvent
	            stopPropagation: Util.noop,
	            preventDefault: Util.noop,
	            persist: Util.noop
	        });
	    },

	    getRawValue: function getRawValue() {
	        var owner = this,
	            pps = owner.properties,
	            rawValue = pps.result;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter ? pps.numeralFormatter.getRawValue(rawValue) : '';
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getISOFormatDate: function getISOFormatDate() {
	        var owner = this,
	            pps = owner.properties;

	        return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	    },

	    getISOFormatTime: function getISOFormatTime() {
	        var owner = this,
	            pps = owner.properties;

	        return pps.time ? pps.timeFormatter.getISOFormatTime() : '';
	    },

	    onInit: function onInit(owner) {
	        return owner;
	    },

	    onKeyDown: function onKeyDown(event) {
	        var owner = this,
	            pps = owner.properties,
	            charCode = event.which || event.keyCode;

	        owner.lastInputValue = pps.result;
	        owner.isBackward = charCode === 8;

	        owner.registeredEvents.onKeyDown(event);
	    },

	    onFocus: function onFocus(event) {
	        var owner = this,
	            pps = owner.properties;

	        if (pps.prefix && pps.noImmediatePrefix && !event.target.value) {
	            owner.onInput(pps.prefix);
	        }

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onFocus(event);

	        Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
	    },

	    onBlur: function onBlur(event) {
	        var owner = this,
	            pps = owner.properties;

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onBlur(event);
	    },

	    onChange: function onChange(event) {
	        var owner = this,
	            pps = owner.properties;

	        owner.isBackward = owner.isBackward || event.inputType === 'deleteContentBackward';
	        // hit backspace when last character is delimiter
	        var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);

	        if (owner.isBackward && postDelimiter) {
	            pps.postDelimiterBackspace = postDelimiter;
	        } else {
	            pps.postDelimiterBackspace = false;
	        }

	        owner.onInput(event.target.value);

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onChange(event);
	    },

	    onInput: function onInput(value, fromProps) {
	        var owner = this,
	            pps = owner.properties;

	        // case 1: delete one more character "4"
	        // 1234*| -> hit backspace -> 123|
	        // case 2: last character is not delimiter which is:
	        // 12|34* -> hit backspace -> 1|34*
	        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
	        if (!fromProps && !pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) {
	            value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
	        }

	        // phone formatter
	        if (pps.phone) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
	            } else {
	                pps.result = pps.phoneFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // numeral formatter
	        if (pps.numeral) {
	            // Do not show prefix when noImmediatePrefix is specified
	            // This mostly because we need to show user the native input placeholder
	            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) {
	                pps.result = '';
	            } else {
	                pps.result = pps.numeralFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // date
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	        // time
	        if (pps.time) {
	            value = pps.timeFormatter.getValidatedTime(value);
	        }

	        // strip delimiters
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	        // strip prefix
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);

	        // strip non-numeric characters
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	        // convert case
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	        // prevent from showing prefix when no immediate option enabled with empty input value
	        if (pps.prefix) {
	            if (pps.tailPrefix) {
	                value = value + pps.prefix;
	            } else {
	                value = pps.prefix + value;
	            }

	            // no blocks specified, no need to do formatting
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	        // update credit card props
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	        // strip over length characters
	        value = pps.maxLength > 0 ? Util.headStr(value, pps.maxLength) : value;

	        // apply blocks
	        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function updateCreditCardPropsByValue(value) {
	        var owner = this,
	            pps = owner.properties,
	            creditCardInfo;

	        // At least one of the first 4 characters has changed
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        // credit card type changed
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    updateValueState: function updateValueState() {
	        var owner = this,
	            pps = owner.properties;

	        if (!owner.element) {
	            owner.setState({ value: pps.result });
	            return;
	        }

	        var endPos = owner.element.selectionEnd;
	        var oldValue = owner.element.value;
	        var newValue = pps.result;

	        owner.lastInputValue = newValue;

	        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);

	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.setState({ value: newValue, cursorPosition: endPos });
	            }, 1);

	            return;
	        }

	        owner.setState({ value: newValue, cursorPosition: endPos });
	    },

	    render: function render() {
	        var owner = this;
	        // eslint-disable-next-line

	        var _owner$props2 = owner.props,
	            value = _owner$props2.value,
	            options = _owner$props2.options,
	            onKeyDown = _owner$props2.onKeyDown,
	            onFocus = _owner$props2.onFocus,
	            onBlur = _owner$props2.onBlur,
	            onChange = _owner$props2.onChange,
	            onInit = _owner$props2.onInit,
	            htmlRef = _owner$props2.htmlRef,
	            propsToTransfer = _objectWithoutProperties(_owner$props2, ['value', 'options', 'onKeyDown', 'onFocus', 'onBlur', 'onChange', 'onInit', 'htmlRef']);

	        return React.createElement('input', _extends({
	            type: 'text',
	            ref: function ref(_ref) {
	                owner.element = _ref;

	                if (!htmlRef) {
	                    return;
	                }

	                htmlRef.apply(this, arguments);
	            },
	            value: owner.state.value,
	            onKeyDown: owner.onKeyDown,
	            onChange: owner.onChange,
	            onFocus: owner.onFocus,
	            onBlur: owner.onBlur
	        }, propsToTransfer));
	    }
	});

	module.exports = cleaveReactClass;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_18748__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var React = __nested_webpack_require_18748__(1);
	var factory = __nested_webpack_require_18748__(3);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_19555__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __nested_webpack_require_19555__(4);

	var emptyObject = __nested_webpack_require_19555__(5);
	var _invariant = __nested_webpack_require_19555__(6);

	if (true) {
	  var warning = __nested_webpack_require_19555__(7);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (true) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (true) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (true) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (true) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (true) {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (true) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (true) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (true) {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (true) {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (true) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (true) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (true) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (true) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (true) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
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
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

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

	if (true) {
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_54526__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __nested_webpack_require_54526__(8);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

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
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	var NumeralFormatter = function NumeralFormatter(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, prefix, signBeforePrefix, tailPrefix, delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.prefix = prefix || prefix === '' ? prefix : '';
	    owner.signBeforePrefix = !!signBeforePrefix;
	    owner.tailPrefix = !!tailPrefix;
	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh: 'lakh',
	    wan: 'wan',
	    none: 'none'
	};

	NumeralFormatter.prototype = {
	    getRawValue: function getRawValue(value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function format(value) {
	        var owner = this,
	            parts,
	            partSign,
	            partSignAndPrefix,
	            partInteger,
	            partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	        // replace the first decimal mark with reserved placeholder
	        .replace(owner.numeralDecimalMark, 'M')

	        // strip non numeric letters except minus and "M"
	        // this is to ensure prefix has been stripped
	        .replace(/[^\dM-]/g, '')

	        // replace the leading minus with reserved placeholder
	        .replace(/^\-/, 'N')

	        // strip the other minus sign (if present)
	        .replace(/\-/g, '')

	        // replace the minus sign (if present)
	        .replace('N', owner.numeralPositiveOnly ? '' : '-')

	        // replace decimal mark
	        .replace('M', owner.numeralDecimalMark);

	        // strip any leading zeros
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partSign = value.slice(0, 1) === '-' ? '-' : '';
	        if (typeof owner.prefix != 'undefined') {
	            if (owner.signBeforePrefix) {
	                partSignAndPrefix = partSign + owner.prefix;
	            } else {
	                partSignAndPrefix = owner.prefix + partSign;
	            }
	        } else {
	            partSignAndPrefix = partSign;
	        }

	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if (partSign === '-') {
	            partInteger = partInteger.slice(1);
	        }

	        if (owner.numeralIntegerScale > 0) {
	            partInteger = partInteger.slice(0, owner.numeralIntegerScale);
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	            case NumeralFormatter.groupStyle.lakh:
	                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.wan:
	                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.thousand:
	                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	                break;
	        }

	        if (owner.tailPrefix) {
	            return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '') + owner.prefix;
	        }

	        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	var DateFormatter = function DateFormatter(datePattern, dateMin, dateMax) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.dateMin = dateMin.split('-').reverse().map(function (x) {
	        return parseInt(x, 10);
	    });
	    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);

	    owner.dateMax = dateMax.split('-').reverse().map(function (x) {
	        return parseInt(x, 10);
	    });
	    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);

	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function getISOFormatDate() {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getValidatedDate: function getValidatedDate(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                    case 'd':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 3) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 31) {
	                            sub = '31';
	                        }

	                        break;

	                    case 'm':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 1) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 12) {
	                            sub = '12';
	                        }

	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function getFixedDateString(value) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            date = [],
	            dayIndex = 0,
	            monthIndex = 0,
	            yearIndex = 0,
	            dayStartIndex = 0,
	            monthStartIndex = 0,
	            yearStartIndex = 0,
	            day,
	            month,
	            year,
	            fullYearDone = false;

	        // mm-dd || dd-mm
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'd':
	                        dayIndex = index;
	                        break;
	                    case 'm':
	                        monthIndex = index;
	                        break;
	                    default:
	                        yearIndex = index;
	                        break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
	            monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = this.getFixedDate(day, month, year);
	        }

	        // mm-yy || yy-mm
	        if (value.length === 4 && (datePattern[0] === 'y' || datePattern[1] === 'y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 2;
	            yearStartIndex = 2 - monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;

	            date = [0, month, year];
	        }

	        // mm-yyyy || yyyy-mm
	        if (value.length === 6 && (datePattern[0] === 'Y' || datePattern[1] === 'Y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 4;
	            yearStartIndex = 2 - 0.5 * monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = [0, month, year];
	        }

	        date = owner.getRangeFixedDate(date);
	        owner.date = date;

	        var result = date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 'd':
	                    return previous + (date[0] === 0 ? '' : owner.addLeadingZero(date[0]));
	                case 'm':
	                    return previous + (date[1] === 0 ? '' : owner.addLeadingZero(date[1]));
	                case 'y':
	                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : '');
	                case 'Y':
	                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : '');
	            }
	        }, '');

	        return result;
	    },

	    getRangeFixedDate: function getRangeFixedDate(date) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            dateMin = owner.dateMin || [],
	            dateMax = owner.dateMax || [];

	        if (!date.length || dateMin.length < 3 && dateMax.length < 3) return date;

	        if (datePattern.find(function (x) {
	            return x.toLowerCase() === 'y';
	        }) && date[2] === 0) return date;

	        if (dateMax.length && (dateMax[2] < date[2] || dateMax[2] === date[2] && (dateMax[1] < date[1] || dateMax[1] === date[1] && dateMax[0] < date[0]))) return dateMax;

	        if (dateMin.length && (dateMin[2] > date[2] || dateMin[2] === date[2] && (dateMin[1] > date[1] || dateMin[1] === date[1] && dateMin[0] > date[0]))) return dateMin;

	        return date;
	    },

	    getFixedDate: function getFixedDate(day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt(year || 0, 10);

	        if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) {
	            day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function isLeapYear(year) {
	        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    },

	    addLeadingZeroForYear: function addLeadingZeroForYear(number, fullYearMode) {
	        if (fullYearMode) {
	            return (number < 10 ? '000' : number < 100 ? '00' : number < 1000 ? '0' : '') + number;
	        }

	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	var TimeFormatter = function TimeFormatter(timePattern, timeFormat) {
	    var owner = this;

	    owner.time = [];
	    owner.blocks = [];
	    owner.timePattern = timePattern;
	    owner.timeFormat = timeFormat;
	    owner.initBlocks();
	};

	TimeFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.timePattern.forEach(function () {
	            owner.blocks.push(2);
	        });
	    },

	    getISOFormatTime: function getISOFormatTime() {
	        var owner = this,
	            time = owner.time;

	        return time[2] ? owner.addLeadingZero(time[0]) + ':' + owner.addLeadingZero(time[1]) + ':' + owner.addLeadingZero(time[2]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getTimeFormatOptions: function getTimeFormatOptions() {
	        var owner = this;
	        if (String(owner.timeFormat) === '12') {
	            return {
	                maxHourFirstDigit: 1,
	                maxHours: 12,
	                maxMinutesFirstDigit: 5,
	                maxMinutes: 60
	            };
	        }

	        return {
	            maxHourFirstDigit: 2,
	            maxHours: 23,
	            maxMinutesFirstDigit: 5,
	            maxMinutes: 60
	        };
	    },

	    getValidatedTime: function getValidatedTime(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        var timeFormatOptions = owner.getTimeFormatOptions();

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.timePattern[index]) {

	                    case 'h':
	                        if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
	                            sub = timeFormatOptions.maxHours + '';
	                        }

	                        break;

	                    case 'm':
	                    case 's':
	                        if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
	                            sub = timeFormatOptions.maxMinutes + '';
	                        }
	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedTimeString(result);
	    },

	    getFixedTimeString: function getFixedTimeString(value) {
	        var owner = this,
	            timePattern = owner.timePattern,
	            time = [],
	            secondIndex = 0,
	            minuteIndex = 0,
	            hourIndex = 0,
	            secondStartIndex = 0,
	            minuteStartIndex = 0,
	            hourStartIndex = 0,
	            second,
	            minute,
	            hour;

	        if (value.length === 6) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 's':
	                        secondIndex = index * 2;
	                        break;
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;
	            secondStartIndex = secondIndex;

	            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;

	            second = 0;
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        owner.time = time;

	        return time.length === 0 ? value : timePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 's':
	                    return previous + owner.addLeadingZero(time[2]);
	                case 'm':
	                    return previous + owner.addLeadingZero(time[1]);
	                case 'h':
	                    return previous + owner.addLeadingZero(time[0]);
	            }
	        }, '');
	    },

	    getFixedTime: function getFixedTime(hour, minute, second) {
	        second = Math.min(parseInt(second || 0, 10), 60);
	        minute = Math.min(minute, 60);
	        hour = Math.min(hour, 60);

	        return [hour, minute, second];
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = TimeFormatter;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var PhoneFormatter = function PhoneFormatter(formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function setFormatter(formatter) {
	        this.formatter = formatter;
	    },

	    format: function format(phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip non-leading +
	        phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '',
	            current,
	            validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp: [4, 5, 6],
	        amex: [4, 6, 5],
	        diners: [4, 6, 4],
	        discover: [4, 4, 4, 4],
	        mastercard: [4, 4, 4, 4],
	        dankort: [4, 4, 4, 4],
	        instapayment: [4, 4, 4, 4],
	        jcb15: [4, 6, 5],
	        jcb: [4, 4, 4, 4],
	        maestro: [4, 4, 4, 4],
	        visa: [4, 4, 4, 4],
	        mir: [4, 4, 4, 4],
	        unionPay: [4, 4, 4, 4],
	        general: [4, 4, 4, 4]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/2221–2720; 16 digits
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800; 15 digits
	        jcb15: /^(?:2131|1800)\d{0,11}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	        // starts with 22; 16 digits
	        mir: /^220[0-4]\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/,

	        // starts with 62/81; 16 digits
	        unionPay: /^(62|81)\d{0,14}/
	    },

	    getStrictBlocks: function getStrictBlocks(block) {
	        var total = block.reduce(function (prev, current) {
	            return prev + current;
	        }, 0);

	        return block.concat(19 - total);
	    },

	    getInfo: function getInfo(value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // Some credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't want to enable this option.
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var matchedBlocks = blocks[key];
	                return {
	                    type: key,
	                    blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
	                };
	            }
	        }

	        return {
	            type: 'unknown',
	            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	var Util = {
	    noop: function noop() {},

	    strip: function strip(value, re) {
	        return value.replace(re, '');
	    },

	    getPostDelimiter: function getPostDelimiter(value, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return value.slice(-delimiter.length) === delimiter ? delimiter : '';
	        }

	        // multiple delimiters
	        var matchedDelimiter = '';
	        delimiters.forEach(function (current) {
	            if (value.slice(-current.length) === current) {
	                matchedDelimiter = current;
	            }
	        });

	        return matchedDelimiter;
	    },

	    getDelimiterREByDelimiter: function getDelimiterREByDelimiter(delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    getNextCursorPosition: function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
	        // If cursor was at the end of value, just place it back.
	        // Because new value could contain additional chars.
	        if (oldValue.length === prevPos) {
	            return newValue.length;
	        }

	        return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
	    },

	    getPositionOffset: function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
	        var oldRawValue, newRawValue, lengthOffset;

	        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
	        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
	        lengthOffset = oldRawValue.length - newRawValue.length;

	        return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
	    },

	    stripDelimiters: function stripDelimiters(value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            current.split('').forEach(function (letter) {
	                value = value.replace(owner.getDelimiterREByDelimiter(letter), '');
	            });
	        });

	        return value;
	    },

	    headStr: function headStr(str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function getMaxLength(blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip prefix
	    // Before type  |   After type    |     Return value
	    // PEFIX-...    |   PEFIX-...     |     ''
	    // PREFIX-123   |   PEFIX-123     |     123
	    // PREFIX-123   |   PREFIX-23     |     23
	    // PREFIX-123   |   PREFIX-1234   |     1234
	    getPrefixStrippedValue: function getPrefixStrippedValue(value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
	        // No prefix
	        if (prefixLength === 0) {
	            return value;
	        }

	        // Value is prefix
	        if (value === prefix && value !== '') {
	            return '';
	        }

	        if (signBeforePrefix && value.slice(0, 1) == '-') {
	            var prev = prevResult.slice(0, 1) == '-' ? prevResult.slice(1) : prevResult;
	            return '-' + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
	        }

	        // Pre result prefix string does not match pre-defined prefix
	        if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        }

	        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);

	        // New value has issue, someone typed in between prefix letters
	        // Revert to pre value
	        if (value.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            return prevValue.slice(prefixLength);
	        } else if (value.slice(-prefixLength) !== prefix && tailPrefix) {
	            return prevValue.slice(0, -prefixLength - 1);
	        }

	        // No issue, strip prefix for new value
	        return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function getFirstDiffIndex(prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function getFormattedValue(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter = '';

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    // move cursor to the end
	    // the first time user focuses on an input with prefix
	    fixPrefixCursor: function fixPrefixCursor(el, prefix, delimiter, delimiters) {
	        if (!el) {
	            return;
	        }

	        var val = el.value,
	            appendix = delimiter || delimiters[0] || ' ';

	        if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) {
	            return;
	        }

	        var len = val.length * 2;

	        // set timeout to avoid blink
	        setTimeout(function () {
	            el.setSelectionRange(len, len);
	        }, 1);
	    },

	    // Check if input field is fully selected
	    checkFullSelection: function checkFullSelection(value) {
	        try {
	            var selection = window.getSelection() || document.getSelection() || {};
	            return selection.toString().length === value.length;
	        } catch (ex) {
	            // Ignore
	        }

	        return false;
	    },

	    setSelection: function setSelection(element, position, doc) {
	        if (element !== this.getActiveElement(doc)) {
	            return;
	        }

	        // cursor is already in the end
	        if (element && element.value.length <= position) {
	            return;
	        }

	        if (element.createTextRange) {
	            var range = element.createTextRange();

	            range.move('character', position);
	            range.select();
	        } else {
	            try {
	                element.setSelectionRange(position, position);
	            } catch (e) {
	                // eslint-disable-next-line
	                console.warn('The input element type does not support selection');
	            }
	        }
	    },

	    getActiveElement: function getActiveElement(parent) {
	        var activeElement = parent.activeElement;
	        if (activeElement && activeElement.shadowRoot) {
	            return this.getActiveElement(activeElement.shadowRoot);
	        }
	        return activeElement;
	    },

	    isAndroid: function isAndroid() {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function isAndroidBackspaceKeydown(lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function assign(target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function () {};

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // time
	        target.time = !!opts.time;
	        target.timePattern = opts.timePattern || ['h', 'm', 's'];
	        target.timeFormat = opts.timeFormat || '24';
	        target.timeFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateMin = opts.dateMin || '';
	        target.dateMax = opts.dateMax || '';
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
	        target.signBeforePrefix = !!opts.signBeforePrefix;
	        target.tailPrefix = !!opts.tailPrefix;

	        // others
	        target.swapHiddenInput = !!opts.swapHiddenInput;

	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = target.creditCard || target.date ? '' : opts.prefix || '';
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : '';

	        target.delimiter = opts.delimiter || opts.delimiter === '' ? opts.delimiter : opts.date ? '/' : opts.time ? ':' : opts.numeral ? ',' : opts.phone ? ' ' : ' ';
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof __webpack_require__.g === 'undefined' ? 'undefined' : _typeof(__webpack_require__.g)) === 'object' && __webpack_require__.g ? __webpack_require__.g : window;
	        target.document = opts.document || target.root.document;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        target.onValueChanged = opts.onValueChanged || function () {};

	        return target;
	    }
	};

	module.exports = DefaultProperties;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/cleave.js/react.js":
/*!*****************************************!*\
  !*** ./node_modules/cleave.js/react.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/cleave-react-node.js */ "./node_modules/cleave.js/dist/cleave-react-node.js");


/***/ }),

/***/ "./node_modules/file-selector/dist/es5/file-selector.js":
/*!**************************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file-selector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ "./node_modules/file-selector/dist/es5/file.js");


var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */
function fromEvent(evt) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];
            }
            else if (isChangeEvt(evt)) {
                return [2 /*return*/, getInputFiles(evt)];
            }
            else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {
                return [2 /*return*/, getFsHandleFiles(evt)];
            }
            return [2 /*return*/, []];
        });
    });
}
function isDataTransfer(value) {
    return isObject(value);
}
function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
}
function isObject(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); });
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        var files;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); })];
            }
        });
    });
}
function getDataTransferFiles(dt, type) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        var items, files;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(acc), false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((Array.isArray(files) ? flatten(files) : [files])), false); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject("".concat(item, " is not a File"));
    }
    var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                var files, err_1, items;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}
//# sourceMappingURL=file-selector.js.map

/***/ }),

/***/ "./node_modules/file-selector/dist/es5/file.js":
/*!*****************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMON_MIME_TYPES": () => (/* binding */ COMMON_MIME_TYPES),
/* harmony export */   "toFileWithPath": () => (/* binding */ toFileWithPath)
/* harmony export */ });
var COMMON_MIME_TYPES = new Map([
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    ['aac', 'audio/aac'],
    ['abw', 'application/x-abiword'],
    ['arc', 'application/x-freearc'],
    ['avif', 'image/avif'],
    ['avi', 'video/x-msvideo'],
    ['azw', 'application/vnd.amazon.ebook'],
    ['bin', 'application/octet-stream'],
    ['bmp', 'image/bmp'],
    ['bz', 'application/x-bzip'],
    ['bz2', 'application/x-bzip2'],
    ['cda', 'application/x-cdf'],
    ['csh', 'application/x-csh'],
    ['css', 'text/css'],
    ['csv', 'text/csv'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['epub', 'application/epub+zip'],
    ['gz', 'application/gzip'],
    ['gif', 'image/gif'],
    ['heic', 'image/heic'],
    ['heif', 'image/heif'],
    ['htm', 'text/html'],
    ['html', 'text/html'],
    ['ico', 'image/vnd.microsoft.icon'],
    ['ics', 'text/calendar'],
    ['jar', 'application/java-archive'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['js', 'text/javascript'],
    ['json', 'application/json'],
    ['jsonld', 'application/ld+json'],
    ['mid', 'audio/midi'],
    ['midi', 'audio/midi'],
    ['mjs', 'text/javascript'],
    ['mp3', 'audio/mpeg'],
    ['mp4', 'video/mp4'],
    ['mpeg', 'video/mpeg'],
    ['mpkg', 'application/vnd.apple.installer+xml'],
    ['odp', 'application/vnd.oasis.opendocument.presentation'],
    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
    ['odt', 'application/vnd.oasis.opendocument.text'],
    ['oga', 'audio/ogg'],
    ['ogv', 'video/ogg'],
    ['ogx', 'application/ogg'],
    ['opus', 'audio/opus'],
    ['otf', 'font/otf'],
    ['png', 'image/png'],
    ['pdf', 'application/pdf'],
    ['php', 'application/x-httpd-php'],
    ['ppt', 'application/vnd.ms-powerpoint'],
    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ['rar', 'application/vnd.rar'],
    ['rtf', 'application/rtf'],
    ['sh', 'application/x-sh'],
    ['svg', 'image/svg+xml'],
    ['swf', 'application/x-shockwave-flash'],
    ['tar', 'application/x-tar'],
    ['tif', 'image/tiff'],
    ['tiff', 'image/tiff'],
    ['ts', 'video/mp2t'],
    ['ttf', 'font/ttf'],
    ['txt', 'text/plain'],
    ['vsd', 'application/vnd.visio'],
    ['wav', 'audio/wav'],
    ['weba', 'audio/webm'],
    ['webm', 'video/webm'],
    ['webp', 'image/webp'],
    ['woff', 'font/woff'],
    ['woff2', 'font/woff2'],
    ['xhtml', 'application/xhtml+xml'],
    ['xls', 'application/vnd.ms-excel'],
    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    ['xml', 'application/xml'],
    ['xul', 'application/vnd.mozilla.xul+xml'],
    ['zip', 'application/zip'],
    ['7z', 'application/x-7z-compressed'],
    // Others
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['msg', 'application/vnd.ms-outlook']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/file-selector/dist/es5/index.js":
/*!******************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* reexport safe */ _file_selector__WEBPACK_IMPORTED_MODULE_0__.fromEvent)
/* harmony export */ });
/* harmony import */ var _file_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-selector */ "./node_modules/file-selector/dist/es5/file-selector.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeader */ "./node_modules/react-bootstrap/esm/CardHeader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const DivStyledAsH5 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('h5');
const DivStyledAsH6 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('h6');
const CardBody = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-body');
const CardTitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-link', {
  Component: 'a'
});
const CardText = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-text', {
  Component: 'p'
});
const CardFooter = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-footer');
const CardImgOverlay = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-img-overlay');
const defaultProps = {
  body: false
};
const Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'card');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Card, {
  Img: _CardImg__WEBPACK_IMPORTED_MODULE_6__["default"],
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: _CardHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-header');
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-img');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ElementChildren.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "hasChildOfType": () => (/* binding */ hasChildOfType),
/* harmony export */   "map": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  let index = 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  let index = 0;
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, child => {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) func(child, index++);
  });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */


function hasChildOfType(children, type) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).some(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === type);
}



/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Feedback.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Feedback.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /** Display feedback as a tooltip. */
  tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
};
const Feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FloatingLabel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FloatingLabel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const FloatingLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_FormGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Form.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Form.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var _FormFloating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormFloating */ "./node_modules/react-bootstrap/esm/FormFloating.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/esm/FormLabel.js");
/* harmony import */ var _FormRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormRange */ "./node_modules/react-bootstrap/esm/FormRange.js");
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormSelect */ "./node_modules/react-bootstrap/esm/FormSelect.js");
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/esm/FormText.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-bootstrap/esm/Switch.js");
/* harmony import */ var _FloatingLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FloatingLabel */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
};
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Form, {
  Group: _FormGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
  Control: _FormControl__WEBPACK_IMPORTED_MODULE_5__["default"],
  Floating: _FormFloating__WEBPACK_IMPORTED_MODULE_6__["default"],
  Check: _FormCheck__WEBPACK_IMPORTED_MODULE_7__["default"],
  Switch: _Switch__WEBPACK_IMPORTED_MODULE_8__["default"],
  Label: _FormLabel__WEBPACK_IMPORTED_MODULE_9__["default"],
  Text: _FormText__WEBPACK_IMPORTED_MODULE_10__["default"],
  Range: _FormRange__WEBPACK_IMPORTED_MODULE_11__["default"],
  Select: _FormSelect__WEBPACK_IMPORTED_MODULE_12__["default"],
  FloatingLabel: _FloatingLabel__WEBPACK_IMPORTED_MODULE_13__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheck.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/esm/FormCheckInput.js");
/* harmony import */ var _FormCheckLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/esm/FormCheckLabel.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _ElementChildren__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/esm/ElementChildren.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const FormCheck = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-check');
  bsSwitchPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const innerFormContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_5__.hasChildOfType)(children, _FormCheckLabel__WEBPACK_IMPORTED_MODULE_6__["default"]);

  const input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheckInput__WEBPACK_IMPORTED_MODULE_7__["default"], { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheckLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Feedback__WEBPACK_IMPORTED_MODULE_8__["default"], {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormCheck, {
  Input: _FormCheckInput__WEBPACK_IMPORTED_MODULE_7__["default"],
  Label: _FormCheckLabel__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckInput.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const FormCheckInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckInput);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckLabel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const FormCheckLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormContext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // TODO

const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormControl.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormControl.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }

   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormControl, {
  Feedback: _Feedback__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormFloating.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormFloating.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('form-floating'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormGroup.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const FormGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: context,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormLabel.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const defaultProps = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormRange.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormRange.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const FormRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", { ...props,
    type: "range",
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRange);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormSelect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormSelect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const FormSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSelect);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/FormText.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormText.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const FormText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormText);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Spinner.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Spinner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  variant,
  animation,
  size,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'spinner');
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = 'Spinner';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Switch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Switch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_FormCheck__WEBPACK_IMPORTED_MODULE_2__["default"], { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Switch, {
  Input: _FormCheck__WEBPACK_IMPORTED_MODULE_2__["default"].Input,
  Label: _FormCheck__WEBPACK_IMPORTED_MODULE_2__["default"].Label
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (className => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((p, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", { ...p,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(p.className, className)
})));

/***/ }),

/***/ "./node_modules/react-dropzone/dist/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-dropzone/dist/es/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCode": () => (/* reexport safe */ _utils_index__WEBPACK_IMPORTED_MODULE_3__.ErrorCode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useDropzone": () => (/* binding */ useDropzone)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-selector */ "./node_modules/file-selector/dist/es5/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dropzone/dist/es/utils/index.js");
var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint prefer-template: 0 */




/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: file_selector__WEBPACK_IMPORTED_MODULE_1__.fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Minimum file size (in bytes)
   */
  minSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),

  /**
   * Maximum file size (in bytes)
   */
  maxSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),

  /**
   * Enable/disable the dropzone
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropzone);
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.acceptPropAsAcceptAttr)(accept);
  }, [accept]);
  var pickerTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.pickerOptionsFromAccept)(accept);
  }, [accept]);
  var onFileDialogOpenCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.canUseFileSystemAccessAPI)()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", _utils_index__WEBPACK_IMPORTED_MODULE_3__.onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", _utils_index__WEBPACK_IMPORTED_MODULE_3__.onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isEvtWithFiles)(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isPropagationStopped)(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.allFilesAccepted)({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isEvtWithFiles)(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isEvtWithFiles)(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.fileAccepted)(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.fileMatchSize)(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [_utils_index__WEBPACK_IMPORTED_MODULE_3__.TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isEvtWithFiles)(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isPropagationStopped)(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isAbort)(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isSecurityError)(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.isIeOrEdge)()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onBlur, onBlurCb)),
        onClick: composeHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onClick, onClickCb)),
        onDragEnter: composeDragHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onChange, onDropCb)),
        onClick: composeHandler((0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.composeEventHandlers)(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop() {}



/***/ }),

/***/ "./node_modules/react-dropzone/dist/es/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-dropzone/dist/es/utils/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCode": () => (/* binding */ ErrorCode),
/* harmony export */   "FILE_INVALID_TYPE": () => (/* binding */ FILE_INVALID_TYPE),
/* harmony export */   "FILE_TOO_LARGE": () => (/* binding */ FILE_TOO_LARGE),
/* harmony export */   "FILE_TOO_SMALL": () => (/* binding */ FILE_TOO_SMALL),
/* harmony export */   "TOO_MANY_FILES": () => (/* binding */ TOO_MANY_FILES),
/* harmony export */   "TOO_MANY_FILES_REJECTION": () => (/* binding */ TOO_MANY_FILES_REJECTION),
/* harmony export */   "acceptPropAsAcceptAttr": () => (/* binding */ acceptPropAsAcceptAttr),
/* harmony export */   "allFilesAccepted": () => (/* binding */ allFilesAccepted),
/* harmony export */   "canUseFileSystemAccessAPI": () => (/* binding */ canUseFileSystemAccessAPI),
/* harmony export */   "composeEventHandlers": () => (/* binding */ composeEventHandlers),
/* harmony export */   "fileAccepted": () => (/* binding */ fileAccepted),
/* harmony export */   "fileMatchSize": () => (/* binding */ fileMatchSize),
/* harmony export */   "getInvalidTypeRejectionErr": () => (/* binding */ getInvalidTypeRejectionErr),
/* harmony export */   "getTooLargeRejectionErr": () => (/* binding */ getTooLargeRejectionErr),
/* harmony export */   "getTooSmallRejectionErr": () => (/* binding */ getTooSmallRejectionErr),
/* harmony export */   "isAbort": () => (/* binding */ isAbort),
/* harmony export */   "isEvtWithFiles": () => (/* binding */ isEvtWithFiles),
/* harmony export */   "isExt": () => (/* binding */ isExt),
/* harmony export */   "isIeOrEdge": () => (/* binding */ isIeOrEdge),
/* harmony export */   "isKindFile": () => (/* binding */ isKindFile),
/* harmony export */   "isMIMEType": () => (/* binding */ isMIMEType),
/* harmony export */   "isPropagationStopped": () => (/* binding */ isPropagationStopped),
/* harmony export */   "isSecurityError": () => (/* binding */ isSecurityError),
/* harmony export */   "onDocumentDragOver": () => (/* binding */ onDocumentDragOver),
/* harmony export */   "pickerOptionsFromAccept": () => (/* binding */ pickerOptionsFromAccept)
/* harmony export */ });
/* harmony import */ var attr_accept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! attr-accept */ "./node_modules/attr-accept/dist/es/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Error codes

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var ErrorCode = {
  FileInvalidType: FILE_INVALID_TYPE,
  FileTooLarge: FILE_TOO_LARGE,
  FileTooSmall: FILE_TOO_SMALL,
  TooManyFiles: TOO_MANY_FILES
}; // File Errors

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
}; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0,attr_accept__WEBPACK_IMPORTED_MODULE_0__["default"])(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string|string[]} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function isKindFile(item) {
  return _typeof(item) === "object" && item !== null && item.kind === "file";
} // allow the entire document to be a drag target

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread(_objectSpread({}, agg), {}, _defineProperty({}, mimeType, ext));
    }, {});
    return [{
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray(a), [mimeType], _toConsumableArray(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "FormProvider": () => (/* binding */ FormProvider),
/* harmony export */   "appendErrors": () => (/* binding */ appendErrors),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "useController": () => (/* binding */ useController),
/* harmony export */   "useFieldArray": () => (/* binding */ useFieldArray),
/* harmony export */   "useForm": () => (/* binding */ useForm),
/* harmony export */   "useFormContext": () => (/* binding */ useFormContext),
/* harmony export */   "useFormState": () => (/* binding */ useFormState),
/* harmony export */   "useWatch": () => (/* binding */ useWatch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (!path || !isObject(obj)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useFrom methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = (props) => {
    const { children, ...data } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HookFormContext.Provider, { value: data }, children));
};

var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
    const result = {};
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
                    _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var shouldSubscribeByName = (name, signalName, exact) => exact && signalName
    ? name === signalName
    : !name ||
        !signalName ||
        name === signalName ||
        convertToArrayPayload(name).some((currentName) => currentName &&
            (currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

function useSubscribe(props) {
    const _props = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    _props.current = props;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const tearDown = (subscription) => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
        const subscription = !props.disabled &&
            _props.current.subject.subscribe({
                next: _props.current.callback,
            });
        return () => tearDown(subscription);
    }, [props.disabled]);
}

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);
    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    const _mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    _name.current = name;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => _mounted.current &&
        shouldSubscribeByName(_name.current, value.name, exact) &&
        shouldRenderFormState(value, _localProxyFormState.current) &&
        updateFormState({
            ...control._formState,
            ...value,
        }), [control, exact]);
    useSubscribe({
        disabled,
        callback,
        subject: control._subjects.state,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        _mounted.current = true;
        return () => {
            _mounted.current = false;
        };
    }, []);
    return getProxyFormState(formState, control._proxyFormState, _localProxyFormState.current, false);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal) => {
    const isArray = Array.isArray(names);
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names);
    }
    if (isArray) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
            get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

var isFunction = (value) => typeof value === 'function';

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/api/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { watch } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    _name.current = name;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((formState) => {
        if (shouldSubscribeByName(_name.current, formState.name, exact)) {
            const fieldValues = generateWatchOutput(_name.current, control._names, formState.values || control._formValues);
            updateValue(isUndefined(_name.current) ||
                (isObject(fieldValues) && !objectHasFunction(fieldValues))
                ? { ...fieldValues }
                : Array.isArray(fieldValues)
                    ? [...fieldValues]
                    : isUndefined(fieldValues)
                        ? defaultValue
                        : fieldValues);
        }
    }, [control, exact, defaultValue]);
    useSubscribe({
        disabled,
        subject: control._subjects.watch,
        callback,
    });
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isUndefined(defaultValue)
        ? control._getWatch(name)
        : defaultValue);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._removeUnmounted();
    });
    return value;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, control = methods.control, shouldUnregister } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const value = useWatch({
        control,
        name,
        defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
        exact: true,
    });
    const formState = useFormState({
        control,
        name,
    });
    const _registerProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control.register(name, {
        ...props.rules,
        value,
    }));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const updateMounted = (name, value) => {
            const field = get(control._fields, name);
            if (field) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        return () => {
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            (isArrayField
                ? _shouldUnregisterField && !control._stateFlags.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    return {
        field: {
            name,
            value,
            onChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
                _registerProps.current.onChange({
                    target: {
                        value: getEventValue(event),
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            }, [name]),
            onBlur: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
                _registerProps.current.onBlur({
                    target: {
                        value: get(control._formValues, name),
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            }, [name, control]),
            ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((elm) => {
                const field = get(control._fields, name);
                if (elm && field && elm.focus) {
                    field._f.ref = {
                        focus: () => elm.focus(),
                        select: () => elm.select(),
                        setCustomValidity: (message) => elm.setCustomValidity(message),
                        reportValidity: () => elm.reportValidity(),
                    };
                }
            }, [name, control._fields]),
        },
        formState,
        fieldState: Object.defineProperties({}, {
            invalid: {
                get: () => !!get(formState.errors, name),
            },
            isDirty: {
                get: () => !!get(formState.dirtyFields, name),
            },
            isTouched: {
                get: () => !!get(formState.touchedFields, name),
            },
            error: {
                get: () => get(formState.errors, name),
            },
        }),
    };
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(currentField)) {
                focusFieldBy(currentField, callback);
            }
        }
    }
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)
    ? options.focusName ||
        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`
    : '';

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = compact(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};

var isBoolean = (value) => typeof value === 'boolean';

var isFileInput = (element) => element.type === 'file';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRadioInput = (element) => element.type === 'radio';

var isRegex = (value) => value instanceof RegExp;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (isFieldArray
        ? !Array.isArray(inputValue) || !inputValue.length
        : required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || +inputValue;
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) &&
        !isEmpty &&
        (isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (data instanceof Set) {
        copy = new Set(data);
    }
    else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) &&
        (isArray || isObject(data))) {
        copy = isArray ? [] : {};
        for (const key in data) {
            if (isFunction(data[key])) {
                copy = data;
                break;
            }
            copy[key] = cloneObject(data[key]);
        }
    }
    else {
        return data;
    }
    return copy;
}

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for (const key in obj) {
        if (!isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) && isEmptyArray(objectRef)))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, } = props;
    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._getFieldArray(name));
    const ids = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fields);
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    const _actioned = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    props.rules &&
        control.register(name, props.rules);
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ values, name: fieldArrayName, }) => {
        if (fieldArrayName === _name.current || !fieldArrayName) {
            const fieldValues = get(values, _name.current, []);
            setFields(fieldValues);
            ids.current = fieldValues.map(generateId);
        }
    }, []);
    useSubscribe({
        callback,
        subject: control._subjects.array,
    });
    const updateValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((updatedFieldArrayValues) => {
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [control, name]);
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = append(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = append(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, append, {
            argA: fillEmptyArray(value),
        });
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = prepend(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prepend(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, prepend, {
            argA: fillEmptyArray(value),
        });
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index,
        });
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        });
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to,
        }, false);
    };
    const update = (index, value) => {
        const updateValue = cloneObject(value);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue,
        }, true, false);
    };
    const replace = (value) => {
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([...updatedFieldArrayValues]);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._stateFlags.action = false;
        isWatched(name, control._names) && control._subjects.state.next({});
        if (_actioned.current) {
            if (control._options.resolver) {
                control._executeSchema([name]).then((result) => {
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError ? !error && existingError.type : error && error.type) {
                        error
                            ? set(control._formState.errors, name, error)
                            : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors,
                        });
                    }
                });
            }
            else {
                const field = get(control._fields, name);
                const validationModeBeforeSubmit = getValidationModes(control._options.mode);
                if ((!validationModeBeforeSubmit.isOnSubmit ||
                    control._formState.isSubmitted) &&
                    field &&
                    field._f) {
                    validateField(field, get(control._formValues, name), control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error) => !isEmptyObject(error) &&
                        control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name),
                        }));
                }
            }
        }
        control._subjects.watch.next({
            name,
            values: control._formValues,
        });
        control._names.focus &&
            focusFieldBy(control._fields, (key) => key.startsWith(control._names.focus));
        control._names.focus = '';
        control._proxyFormState.isValid && control._updateValid();
    }, [fields, name, control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        !get(control._formValues, name) && control._updateFieldArray(name);
        return () => {
            (control._options.shouldUnregister || shouldUnregister) &&
                control.unregister(name);
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(swap, [updateValues, name, control]),
        move: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(move, [updateValues, name, control]),
        prepend: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(prepend$1, [updateValues, name, control]),
        append: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(append$1, [updateValues, name, control]),
        remove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(remove, [updateValues, name, control]),
        insert: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(insert$1, [updateValues, name, control]),
        update: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(update, [updateValues, name, control]),
        replace: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(replace, [updateValues, name, control]),
        fields: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => fields.map((field, index) => ({
            ...field,
            [keyName]: ids.current[index] || generateId(),
        })), [fields, keyName]),
    };
}

function createSubject() {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var isHTMLElement = (value) => {
    const owner = value ? value.ownerDocument : 0;
    const ElementClass = owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement;
    return value instanceof ElementClass;
};

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : { ...markFieldsDirty(data[key]) };
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === '' || isNullOrUndefined(value)
            ? NaN
            : +value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var getRuleValue = (rule) => isUndefined(rule)
    ? undefined
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    };
    let _fields = {};
    let _defaultValues = cloneObject(_options.defaultValues) || {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _stateFlags = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    let validateFields = {};
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    const _subjects = {
        watch: createSubject(),
        array: createSubject(),
        state: createSubject(),
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
        clearTimeout(timer);
        timer = window.setTimeout(callback, wait);
    };
    const _updateValid = async (shouldSkipRender) => {
        let isValid = false;
        if (_proxyFormState.isValid) {
            isValid = _options.resolver
                ? isEmptyObject((await _executeSchema()).errors)
                : await executeBuiltInValidation(_fields, true);
            if (!shouldSkipRender && isValid !== _formState.isValid) {
                _formState.isValid = isValid;
                _subjects.state.next({
                    isValid,
                });
            }
        }
        return isValid;
    };
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method) {
            _stateFlags.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (_proxyFormState.errors &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => {
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _stateFlags.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let isFieldDirty = false;
        const output = {
            name,
        };
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (_proxyFormState.isDirty) {
            const isPreviousFormDirty = _formState.isDirty;
            _formState.isDirty = output.isDirty = _getDirty();
            isFieldDirty = isPreviousFormDirty !== output.isDirty;
        }
        if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
            const isPreviousFieldDirty = get(_formState.dirtyFields, name);
            const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
            isCurrentFieldPristine
                ? unset(_formState.dirtyFields, name)
                : set(_formState.dirtyFields, name, true);
            output.dirtyFields = _formState.dirtyFields;
            isFieldDirty =
                isFieldDirty ||
                    isPreviousFieldDirty !== get(_formState.dirtyFields, name);
        }
        if (isBlurEvent && !isPreviousFieldTouched) {
            set(_formState.touchedFields, name, isBlurEvent);
            output.touchedFields = _formState.touchedFields;
            isFieldDirty =
                isFieldDirty ||
                    (_proxyFormState.touchedFields &&
                        isPreviousFieldTouched !== isBlurEvent);
        }
        isFieldDirty && shouldRender && _subjects.state.next(output);
        return isFieldDirty ? output : {};
    };
    const shouldRenderByError = async (name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback = debounce(() => updateErrors(name, error));
            delayErrorCallback(props.delayError);
        }
        else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
        validateFields[name]--;
        if (_proxyFormState.isValidating &&
            !Object.values(validateFields).some((v) => v)) {
            _subjects.state.next({
                isValidating: false,
            });
            validateFields = {};
        }
    };
    const _executeSchema = async (name) => _options.resolver
        ? await _options.resolver({ ..._formValues }, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation))
        : {};
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _executeSchema();
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const fieldError = await validateField(field, get(_formValues, _f.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation, isFieldArrayRoot);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid &&
                        (get(fieldError, _f.name)
                            ? isFieldArrayRoot
                                ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                : set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name));
                }
                fieldValue &&
                    (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => (name && data && set(_formValues, name, data),
        !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => {
        const fieldValues = {
            ...(_stateFlags.mount
                ? _formValues
                : isUndefined(defaultValue)
                    ? _defaultValues
                    : isString(names)
                        ? { [names]: defaultValue }
                        : defaultValue),
        };
        return generateWatchOutput(names, _names, fieldValues, isGlobal);
    };
    const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.length > 1
                            ? fieldReference.refs.forEach((checkboxRef) => !checkboxRef.disabled &&
                                (checkboxRef.checked = Array.isArray(fieldValue)
                                    ? !!fieldValue.find((data) => data === checkboxRef.value)
                                    : fieldValue === checkboxRef.value))
                            : fieldReference.refs[0] &&
                                (fieldReference.refs[0].checked = !!fieldValue);
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.watch.next({
                            name,
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            const fieldValue = value[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                !isPrimitive(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: _formValues,
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                options.shouldDirty) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
                _subjects.state.next({
                    name,
                    dirtyFields: _formState.dirtyFields,
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({});
        _subjects.watch.next({
            name,
        });
    };
    const onChange = async (event) => {
        const target = event.target;
        let name = target.name;
        const field = get(_fields, name);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.watch.next({
                    name,
                    type: event.type,
                });
            if (shouldSkipValidation) {
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({});
            validateFields[name] = validateFields[name] ? +1 : 1;
            _subjects.state.next({
                isValidating: true,
            });
            if (_options.resolver) {
                const { errors } = await _executeSchema([name]);
                const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                error = errorLookupResult.error;
                name = errorLookupResult.name;
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                isValid = await _updateValid(true);
            }
            field._f.deps &&
                trigger(field._f.deps);
            shouldRenderByError(name, isValid, error, fieldState);
        }
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        _subjects.state.next({
            isValidating: true,
        });
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        }
        else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                (_proxyFormState.isValid && isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver ? { isValid } : {}),
            errors: _formState.errors,
            isValidating: false,
        });
        options.shouldFocus &&
            !validationResult &&
            focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = {
            ..._defaultValues,
            ...(_stateFlags.mount ? _formValues : {}),
        };
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
        error: get((formState || _formState).errors, name),
    });
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))
            : (_formState.errors = {});
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        set(_formState.errors, name, {
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.watch.subscribe({
            next: (info) => name(_getWatch(undefined, defaultValue), info),
        })
        : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (get(_fields, fieldName)) {
                if (!options.keepValue) {
                    unset(_fields, fieldName);
                    unset(_formValues, fieldName);
                }
                !options.keepError && unset(_formState.errors, fieldName);
                !options.keepDirty && unset(_formState.dirtyFields, fieldName);
                !options.keepTouched && unset(_formState.touchedFields, fieldName);
                !_options.shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(_defaultValues, fieldName);
            }
        }
        _subjects.watch.next({});
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled);
        set(_fields, name, {
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        field
            ? disabledIsDefined &&
                set(_formValues, name, options.disabled
                    ? undefined
                    : get(_formValues, name, getFieldValue(field._f)))
            : updateValidAndValue(name, true, options.value);
        return {
            ...(disabledIsDefined ? { disabled: options.disabled } : {}),
            ...(_options.shouldUseNativeValidation
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [
                                        ...refs.filter(live),
                                        fieldRef,
                                        ...(!!Array.isArray(get(_defaultValues, name))
                                            ? [{}]
                                            : []),
                                    ],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _stateFlags.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = cloneObject(_formValues);
        try {
            if (_options.resolver) {
                const { errors, values } = await _executeSchema();
                _formState.errors = errors;
                fieldValues = values;
            }
            else {
                await executeBuiltInValidation(_fields);
            }
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                if (onInvalid) {
                    await onInvalid({ ..._formState.errors }, e);
                }
                _options.shouldFocusError &&
                    focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
            }
            _subjects.state.next({
                isSubmitting: true,
            });
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            _formState.isSubmitted = true;
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors,
            });
        }
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, get(_defaultValues, name));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, options.defaultValue);
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, get(_defaultValues, name))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues || _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const values = formValues && !isEmptyObject(formValues)
            ? cloneUpdatedValues
            : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                for (const fieldName of _names.mount) {
                    get(_formState.dirtyFields, fieldName)
                        ? set(values, fieldName, get(_formValues, fieldName))
                        : setValue(fieldName, get(values, fieldName));
                }
            }
            else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            try {
                                if (isHTMLElement(fieldReference)) {
                                    fieldReference.closest('form').reset();
                                    break;
                                }
                            }
                            catch (_a) { }
                        }
                    }
                }
                _fields = {};
            }
            _formValues = props.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneUpdatedValues;
            _subjects.array.next({
                values,
            });
            _subjects.watch.next({
                values,
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _stateFlags.mount =
            !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
        _stateFlags.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues
                ? _formState.isDirty
                : !!(keepStateOptions.keepDefaultValues &&
                    !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues
                ? _formState.dirtyFields
                : keepStateOptions.keepDefaultValues && formValues
                    ? getDirtyFields(_defaultValues, formValues)
                    : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors
                ? _formState.errors
                : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name)._f;
        const fieldRef = field.refs ? field.refs[0] : field.ref;
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
    };
    return {
        control: {
            register,
            unregister,
            getFieldState,
            _executeSchema,
            _getWatch,
            _getDirty,
            _updateValid,
            _removeUnmounted,
            _updateFieldArray,
            _getFieldArray,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _stateFlags() {
                return _stateFlags;
            },
            set _stateFlags(value) {
                _stateFlags = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            set _formState(value) {
                _formState = value;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    if (_formControl.current) {
        _formControl.current.control._options = props;
    }
    else {
        _formControl.current = {
            ...createFormControl(props),
            formState,
        };
    }
    const control = _formControl.current.control;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => {
        if (shouldRenderFormState(value, control._proxyFormState, true)) {
            control._formState = {
                ...control._formState,
                ...value,
            };
            updateFormState({ ...control._formState });
        }
    }, [control]);
    useSubscribe({
        subject: control._subjects.state,
        callback,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!control._stateFlags.mount) {
            control._proxyFormState.isValid && control._updateValid();
            control._stateFlags.mount = true;
        }
        if (control._stateFlags.watch) {
            control._stateFlags.watch = false;
            control._subjects.state.next({});
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
    return _formControl.current;
}


//# sourceMappingURL=index.esm.mjs.map


/***/ })

}]);