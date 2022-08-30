"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_router_configRoute_js"],{

/***/ "./resources/js/src/layouts/admin/index.js":
/*!*************************************************!*\
  !*** ./resources/js/src/layouts/admin/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./resources/js/src/layouts/components/container/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./resources/js/src/layouts/components/footer/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/sidemenu/Bar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./resources/js/src/layouts/admin/menu.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var AdminLayout = function AdminLayout(props) {
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "page",
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, props), {}, {
      menuElements: _menu__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

/***/ }),

/***/ "./resources/js/src/layouts/admin/menu.js":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/admin/menu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constant */ "./resources/js/src/utilities/constant.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var menuAdmin = [{
  id: 'dashbord',
  icon: function icon() {
    return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "side-menu__icon"
    });
  },
  title: 'Tableau de bord',
  exact: true,
  navLink: '/admins',
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ACCOUNTING, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.JOURNALIST, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.OBSERVER]
}, {
  header: "Gestion de compte",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN],
  navItems: [{
    id: 'users',
    icon: function icon() {
      return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "side-menu__icon"
      });
    },
    title: 'Usagers',
    navLink: '/handlers/account-users',
    exact: true
  }, {
    id: 'admins',
    icon: function icon() {
      return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "side-menu__icon"
      });
    },
    title: 'Administrateurs',
    navLink: '/handlers/account-admins',
    exact: true
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuAdmin);

/***/ }),

/***/ "./resources/js/src/layouts/blank/index.js":
/*!*************************************************!*\
  !*** ./resources/js/src/layouts/blank/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var BlankLayout = function BlankLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "blank-img",
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "page",
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankLayout);

/***/ }),

/***/ "./resources/js/src/layouts/client/index.js":
/*!**************************************************!*\
  !*** ./resources/js/src/layouts/client/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./resources/js/src/layouts/components/container/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./resources/js/src/layouts/components/footer/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./resources/js/src/layouts/client/menu.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ClientLayout = function ClientLayout(props) {
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "page",
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, props), {}, {
      menuElements: _menu__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientLayout);

/***/ }),

/***/ "./resources/js/src/layouts/client/menu.js":
/*!*************************************************!*\
  !*** ./resources/js/src/layouts/client/menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constant */ "./resources/js/src/utilities/constant.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var menuClient = [{
  id: 'dashbord',
  icon: function icon() {
    return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "side-menu__icon"
    });
  },
  title: 'Tableau de bord',
  exact: true,
  navLink: '/users',
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.USER]
}, {
  id: 'newspapers',
  icon: function icon() {
    return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "side-menu__icon"
    });
  },
  title: 'Journaux',
  navLink: '/users/newspapers',
  exact: true,
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.USER]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuClient);

/***/ }),

/***/ "./resources/js/src/layouts/components/container/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/layouts/components/container/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./resources/js/src/layouts/components/header/index.js");
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header */ "./resources/js/src/layouts/components/page-header/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../sidebar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







var ContainerBackEnd = function ContainerBackEnd(_ref) {
  var children = _ref.children,
      menuElements = _ref.menuElements;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "page-main",
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../sidebar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      menuElements: menuElements
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "app-content",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "side-app",
        children: children
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerBackEnd);

/***/ }),

/***/ "./resources/js/src/layouts/components/footer/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/layouts/components/footer/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var Footer = function Footer(props) {
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("footer", {
    className: "footer",
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "row align-items-center flex-row-reverse",
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "col-md-12 col-sm-12 text-center",
          children: ["Copyright \xA9 2020 ", /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            children: "Yoha"
          }), ". Designed by ", /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            children: " Spruko Technologies Pvt.Ltd "
          }), " All rights reserved."]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/js/src/layouts/components/header/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/layouts/components/header/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_hook_useApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/hook/useApp */ "./resources/js/src/utilities/hook/useApp.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../box-message'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language */ "./resources/js/src/layouts/components/language/index.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification */ "./resources/js/src/layouts/components/notification/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../profile-connecte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../sidemenu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());











var Header = function Header(props) {
  var setting = (0,_utilities_hook_useApp__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "app-header header",
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "container-fluid",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "d-flex",
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "header-brand d-md-none",
          href: "index.html"
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          to: "#",
          onClick: function onClick() {
            return setting.setSidenavToggled(!(setting !== null && setting !== void 0 && setting.sidenavToggled));
          },
          "aria-label": "Hide Sidebar",
          className: "app-sidebar__toggle",
          "data-toggle": "sidebar",
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
              d: "M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"
            })]
          })
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "d-flex ml-auto header-right-icons header-search-icon",
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../profile-connecte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./resources/js/src/layouts/components/language/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/layouts/components/language/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/drop-down-menu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/drop-down-toggle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








var AppLanguage = function AppLanguage(props) {
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "dropdown d-none d-xl-flex country-selector",
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        as: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/drop-down-toggle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        className: "d-flex nav-link leading-none text-dark",
        variant: "secondary",
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
          className: "zmdi zmdi-map mr-2 align-self-center",
          style: {
            fontSize: 30
          }
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
            className: "text-dark",
            children: "English"
          })
        })]
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        as: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/drop-down-menu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        variant: "dark",
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            className: "dropdown-item d-flex pb-3",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "French"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            className: "dropdown-item d-flex pb-3",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Germany"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            className: "dropdown-item d-flex pb-3",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Italy"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            className: "dropdown-item d-flex pb-3",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Russia"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
            href: "#",
            className: "dropdown-item d-flex pb-3",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Spain"
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLanguage);

/***/ }),

/***/ "./resources/js/src/layouts/components/notification/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/layouts/components/notification/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




var Notification = function Notification(props) {
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "dropdown d-none d-md-flex notifications",
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
      className: "nav-link icon",
      "data-toggle": "dropdown",
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none"
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
          d: "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z",
          opacity: ".3"
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
          d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
        })]
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: "pulse1 bg-success"
      })]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow",
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "notifications-menu",
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar mr-3 br-3 align-self-center avatar-md cover-image bg-primary brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fe fe-mail"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: " Commented on your post "
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "3 hours ago"
            })]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar avatar-md br-3 mr-3 align-self-center cover-image bg-secondary brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fe fe-download"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: " New file has been Uploaded "
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "5 hour ago"
            })]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar avatar-md br-3 mr-3 align-self-center cover-image bg-warning brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fe fe-user"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: " User account has Updated"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "20 mins ago"
            })]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar avatar-md br-3 mr-3 align-self-center cover-image bg-info brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fe fe-shopping-cart"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: " New Order Recevied"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "1 hour ago"
            })]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar avatar-md br-3 mr-3 align-self-center cover-image bg-danger brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fa fa-commenting-o"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: " 3 New Comments"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "1 day ago"
            })]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
          className: "dropdown-item d-flex pb-4",
          href: "#",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "avatar avatar-md br-3 mr-3 align-self-center cover-image bg-success brround",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
              className: "fe fe-server"
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "font-weight-bold",
              children: "Server Rebooted"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "small text-muted d-flex",
              children: "2 hour ago"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
        href: "#",
        className: "dropdown-item text-center",
        children: "View all Notification"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./resources/js/src/layouts/components/page-header/formatItemName.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/layouts/components/page-header/formatItemName.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatItemName = function formatItemName(name) {
  switch (name) {
    case 'access':
      return 'identifiants';

    case 'account-users':
      return 'compte usagers';

    case 'account-admins':
      return 'compte administrateurs';

    case 'add':
      return 'ajout';

    case 'show':
      return 'détail';

    case 'edit':
      return 'édition';

    case 'user':
      return 'utilisateur';

    case 'users':
      return 'utilisateurs';

    case 'admin':
      return 'administrateur';

    case 'admins':
      return 'administrateurs';

    default:
      return "".concat(name);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatItemName);

/***/ }),

/***/ "./resources/js/src/layouts/components/page-header/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/layouts/components/page-header/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./resources/js/src/data/index.js");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/constant */ "./resources/js/src/utilities/constant.js");
/* harmony import */ var _formatItemName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatItemName */ "./resources/js/src/layouts/components/page-header/formatItemName.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var PageHeader = function PageHeader(_ref) {
  var _HANDLER_STORAGE$GET$, _HANDLER_STORAGE$GET, _ref2, _urlPaths;

  var children = _ref.children,
      title = _ref.title;
  var location = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var user = (_HANDLER_STORAGE$GET$ = (_HANDLER_STORAGE$GET = _data__WEBPACK_IMPORTED_MODULE_1__["default"].GET(_utilities_constant__WEBPACK_IMPORTED_MODULE_2__.USER_SESSION, 'object')) === null || _HANDLER_STORAGE$GET === void 0 ? void 0 : _HANDLER_STORAGE$GET.data) !== null && _HANDLER_STORAGE$GET$ !== void 0 ? _HANDLER_STORAGE$GET$ : null;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([]),
      _useState2 = _slicedToArray(_useState, 2),
      urlPaths = _useState2[0],
      setUrlPaths = _useState2[1];

  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    if (location !== null && location !== void 0 && location.pathname) {
      var _paths$filter, _paths;

      var paths = location.pathname.split('/');
      paths = paths ? (_paths$filter = (_paths = paths) === null || _paths === void 0 ? void 0 : _paths.filter(function (path) {
        return path !== '' && path !== 'accounts' && path !== 'handlers';
      })) !== null && _paths$filter !== void 0 ? _paths$filter : [] : [];
      setUrlPaths(paths);
    }
  }, [location === null || location === void 0 ? void 0 : location.pathname]);
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "page-header",
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h1", {
          className: "page-title",
          children: title
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ol", {
          className: "breadcrumb",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
            className: "breadcrumb-item",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              to: "".concat((user === null || user === void 0 ? void 0 : user.role) === 'user' ? '/users' : '/admins'),
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                className: "zmdi zmdi-home zmdi-hc-lg"
              })
            })
          }), (urlPaths[urlPaths.length - 1] !== 'users' || urlPaths[urlPaths.length - 1] !== 'admins') && urlPaths.length >= 1 ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: [(_ref2 = (urlPaths === null || urlPaths === void 0 ? void 0 : urlPaths.length) > 1 ? urlPaths : []) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (urlPath, index) {
              return index !== urlPaths.length - 1 ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
                className: "breadcrumb-item",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  to: "#",
                  children: (0,_formatItemName__WEBPACK_IMPORTED_MODULE_3__["default"])(urlPath === null || urlPath === void 0 ? void 0 : urlPath.trim())
                })
              }, index) : '';
            }), ((urlPaths === null || urlPaths === void 0 ? void 0 : urlPaths.length) > 0 ? true : null) ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
              className: "breadcrumb-item active",
              "aria-current": "page",
              children: (0,_formatItemName__WEBPACK_IMPORTED_MODULE_3__["default"])((_urlPaths = urlPaths[urlPaths.length - 1]) === null || _urlPaths === void 0 ? void 0 : _urlPaths.trim())
            }) : null]
          }) : null]
        })]
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "ml-auto pageheader-btn",
        children: children
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./resources/js/src/layouts/website/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/layouts/website/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var WebsiteLayout = function WebsiteLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    children: ["WebsiteLayout", /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteLayout);

/***/ }),

/***/ "./resources/js/src/router/components/LayoutRoute.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/router/components/LayoutRoute.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RequireAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequireAuth */ "./resources/js/src/router/components/RequireAuth.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var LayoutRoute = function LayoutRoute(_ref) {
  var children = _ref.children,
      layoutComponent = _ref.layoutComponent,
      isProtectRoute = _ref.isProtectRoute,
      isAuthorizedRoute = _ref.isAuthorizedRoute;
  var location = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var LayoutComponent = layoutComponent;

  if (isProtectRoute) {
    if (!isAuthorizedRoute) {
      return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        to: "/unauthorize",
        state: {
          from: location
        },
        replace: true
      });
    }

    return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_RequireAuth__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(LayoutComponent, {
        children: children
      })
    });
  }

  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(LayoutComponent, {
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutRoute);

/***/ }),

/***/ "./resources/js/src/router/components/RequireAuth.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/router/components/RequireAuth.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_hook_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/hook/useAuth */ "./resources/js/src/utilities/hook/useAuth.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var RequireAuth = function RequireAuth(_ref) {
  var _auth$user;

  var children = _ref.children;
  var auth = (0,_utilities_hook_useAuth__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var location = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  if (!(auth !== null && auth !== void 0 && (_auth$user = auth.user) !== null && _auth$user !== void 0 && _auth$user.token)) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      to: "/login",
      state: {
        from: location
      },
      replace: true
    });
  }

  return children;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireAuth);

/***/ }),

/***/ "./resources/js/src/router/configRoute.js":
/*!************************************************!*\
  !*** ./resources/js/src/router/configRoute.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/admin */ "./resources/js/src/layouts/admin/index.js");
/* harmony import */ var _layouts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/client */ "./resources/js/src/layouts/client/index.js");
/* harmony import */ var _layouts_blank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/blank */ "./resources/js/src/layouts/blank/index.js");
/* harmony import */ var _layouts_website__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/website */ "./resources/js/src/layouts/website/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./resources/js/src/router/routes/index.js");
/* harmony import */ var _components_LayoutRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LayoutRoute */ "./resources/js/src/router/components/LayoutRoute.js");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/constant */ "./resources/js/src/utilities/constant.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data */ "./resources/js/src/data/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());










var Layouts = {
  Admin: _layouts_admin__WEBPACK_IMPORTED_MODULE_0__["default"],
  Client: _layouts_client__WEBPACK_IMPORTED_MODULE_1__["default"],
  Blank: _layouts_blank__WEBPACK_IMPORTED_MODULE_2__["default"],
  Website: _layouts_website__WEBPACK_IMPORTED_MODULE_3__["default"]
};

var ConfigRoute = function ConfigRoute() {
  var _HANDLER_STORAGE$GET$, _HANDLER_STORAGE$GET;

  var user = (_HANDLER_STORAGE$GET$ = (_HANDLER_STORAGE$GET = _data__WEBPACK_IMPORTED_MODULE_8__["default"].GET(_utilities_constant__WEBPACK_IMPORTED_MODULE_7__.USER_SESSION, 'object')) === null || _HANDLER_STORAGE$GET === void 0 ? void 0 : _HANDLER_STORAGE$GET.data) !== null && _HANDLER_STORAGE$GET$ !== void 0 ? _HANDLER_STORAGE$GET$ : null;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (route, index) {
      var _route$permissions;

      var path = route === null || route === void 0 ? void 0 : route.path;
      var ComponentView = route === null || route === void 0 ? void 0 : route.element;
      var RouteLayout = route !== null && route !== void 0 && route.layout ? Layouts["".concat(route === null || route === void 0 ? void 0 : route.layout)] : _layouts_blank__WEBPACK_IMPORTED_MODULE_2__["default"];
      var authorizedRole = (_route$permissions = route === null || route === void 0 ? void 0 : route.permissions) !== null && _route$permissions !== void 0 ? _route$permissions : [];
      var isAuthorized = false;

      if (authorizedRole.length > 0) {
        isAuthorized = authorizedRole.includes(user === null || user === void 0 ? void 0 : user.role) ? true : authorizedRole.includes(_utilities_constant__WEBPACK_IMPORTED_MODULE_7__.ROLES.ALL) ? true : false;
      } // if (path.match(/^\/login/) && isUserLoggedIn()) {
      //     return (
      //         <Navigate to="/unauthorize" state={{ from: location }} replace />
      //     );
      // }


      return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        path: path,
        element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_LayoutRoute__WEBPACK_IMPORTED_MODULE_6__["default"], {
          layoutComponent: RouteLayout,
          isProtectRoute: route.layout === "Admin" || route.layout === "Client",
          isAuthorizedRoute: isAuthorized,
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ComponentView, {})
        })
      }, index);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigRoute);

/***/ }),

/***/ "./resources/js/src/router/routes/admin.js":
/*!*************************************************!*\
  !*** ./resources/js/src/router/routes/admin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constant */ "./resources/js/src/utilities/constant.js");


var adminRoutes = [{
  path: "/admins",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_dashboard_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/dashboard */ "./resources/js/src/pages/admin/dashboard/index.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ACCOUNTING, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.JOURNALIST, _utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.OBSERVER]
}, {
  path: "/handlers/account-users",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_user_all_usager_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/user/all/usager */ "./resources/js/src/pages/admin/user/all/usager.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN]
}, {
  path: "/handlers/account-admins",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_user_all_admin_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/user/all/admin */ "./resources/js/src/pages/admin/user/all/admin.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN]
}, {
  path: "/handlers/account-admins/add",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_user_add_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/user/add */ "./resources/js/src/pages/admin/user/add/index.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN]
}, {
  path: "/handlers/account-admins/edit",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_user_edit_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/user/edit */ "./resources/js/src/pages/admin/user/edit/index.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN]
}, {
  path: "/handlers/users/show",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_admin_user_show_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/user/show */ "./resources/js/src/pages/admin/user/show/index.js"));
  }),
  layout: "Admin",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.ADMIN]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminRoutes);

/***/ }),

/***/ "./resources/js/src/router/routes/client.js":
/*!**************************************************!*\
  !*** ./resources/js/src/router/routes/client.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constant */ "./resources/js/src/utilities/constant.js");


var clientRoutes = [{
  path: "/users",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_client_dashboard_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/client/dashboard */ "./resources/js/src/pages/client/dashboard/index.js"));
  }),
  layout: "Client",
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_1__.ROLES.USER]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientRoutes);

/***/ }),

/***/ "./resources/js/src/router/routes/index.js":
/*!*************************************************!*\
  !*** ./resources/js/src/router/routes/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin */ "./resources/js/src/router/routes/admin.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./resources/js/src/router/routes/client.js");
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other */ "./resources/js/src/router/routes/other.js");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website */ "./resources/js/src/router/routes/website.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var appRoutes = [].concat(_toConsumableArray(_website__WEBPACK_IMPORTED_MODULE_3__["default"]), _toConsumableArray(_client__WEBPACK_IMPORTED_MODULE_1__["default"]), _toConsumableArray(_admin__WEBPACK_IMPORTED_MODULE_0__["default"]), _toConsumableArray(_other__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appRoutes);

/***/ }),

/***/ "./resources/js/src/router/routes/other.js":
/*!*************************************************!*\
  !*** ./resources/js/src/router/routes/other.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./resources/js/src/data/index.js");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/constant */ "./resources/js/src/utilities/constant.js");
var _HANDLER_STORAGE$GET$, _HANDLER_STORAGE$GET;




var user = (_HANDLER_STORAGE$GET$ = (_HANDLER_STORAGE$GET = _data__WEBPACK_IMPORTED_MODULE_1__["default"].GET(_utilities_constant__WEBPACK_IMPORTED_MODULE_2__.USER_SESSION, 'object')) === null || _HANDLER_STORAGE$GET === void 0 ? void 0 : _HANDLER_STORAGE$GET.data) !== null && _HANDLER_STORAGE$GET$ !== void 0 ? _HANDLER_STORAGE$GET$ : null;
var otherRoutes = [{
  path: "/unauthorize",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_others_unauthorize_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/others/unauthorize */ "./resources/js/src/pages/others/unauthorize/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "*",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_others_not-found_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/others/not-found */ "./resources/js/src/pages/others/not-found/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "/accounts/profile",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_others_profile_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/others/profile */ "./resources/js/src/pages/others/profile/index.js"));
  }),
  layout: "".concat((user === null || user === void 0 ? void 0 : user.role) == 'user' ? 'Client' : 'Admin'),
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.ACCOUNTING, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.ADMIN, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.JOURNALIST, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.OBSERVER, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.USER]
}, {
  path: "/accounts/access",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_others_profile-access_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/others/profile-access */ "./resources/js/src/pages/others/profile-access/index.js"));
  }),
  layout: "".concat((user === null || user === void 0 ? void 0 : user.role) == 'user' ? 'Client' : 'Admin'),
  permissions: [_utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.ACCOUNTING, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.ADMIN, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.JOURNALIST, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.OBSERVER, _utilities_constant__WEBPACK_IMPORTED_MODULE_2__.ROLES.USER]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (otherRoutes);

/***/ }),

/***/ "./resources/js/src/router/routes/website.js":
/*!***************************************************!*\
  !*** ./resources/js/src/router/routes/website.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var websiteRoutes = [{
  path: "/",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_home_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/home */ "./resources/js/src/pages/website/home/index.js"));
  }),
  layout: "Website",
  permissions: []
}, {
  path: "/login",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_login_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/login */ "./resources/js/src/pages/website/login/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "/register",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_register_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/register */ "./resources/js/src/pages/website/register/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "/account/verified",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_verify-account_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/verify-account */ "./resources/js/src/pages/website/verify-account/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "/forgot-password",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_forgot-password_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/forgot-password */ "./resources/js/src/pages/website/forgot-password/index.js"));
  }),
  layout: "Blank",
  permissions: []
}, {
  path: "/password/reset/:token",
  element: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    return __webpack_require__.e(/*! import() */ "resources_js_src_pages_website_forgot-password-confirm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/website/forgot-password-confirm */ "./resources/js/src/pages/website/forgot-password-confirm/index.js"));
  }),
  layout: "Blank",
  permissions: []
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websiteRoutes);

/***/ }),

/***/ "./resources/js/src/utilities/hook/useApp.js":
/*!***************************************************!*\
  !*** ./resources/js/src/utilities/hook/useApp.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/appContext */ "./resources/js/src/utilities/context/appContext.js");



var useApp = function useApp() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_context_appContext__WEBPACK_IMPORTED_MODULE_1__.AppContext);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApp);

/***/ }),

/***/ "./resources/js/src/utilities/hook/useAuth.js":
/*!****************************************************!*\
  !*** ./resources/js/src/utilities/hook/useAuth.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/authContext */ "./resources/js/src/utilities/context/authContext.js");



var useAuth = function useAuth() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_context_authContext__WEBPACK_IMPORTED_MODULE_1__.AuthContext);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);

/***/ })

}]);