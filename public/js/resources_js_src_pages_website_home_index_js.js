"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_pages_website_home_index_js"],{

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTimeout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = (0,_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdateEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdateEffect.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateEffect);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUpdatedRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWillUnmount)
/* harmony export */ });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = (0,_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),

/***/ "./resources/js/src/components/banner-bar/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/banner-bar/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_media_county_long_line_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/media/county-long-line.png */ "./resources/js/src/assets/images/media/county-long-line.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var BannerBar = function BannerBar(_ref) {
  var title = _ref.title,
      withBg = _ref.withBg,
      btnTxt = _ref.btnTxt,
      urlBtn = _ref.urlBtn;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mcb-wrap-inner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "column mcb-column two-fifth column_column  column-margin-40px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "column_attr clearfix",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            children: title
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "column mcb-column one-third column_image",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "image_frame image_item no_link scale-with-grid no_border",
          style: styles.iconPanel,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "image_wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: "scale-with-grid",
              src: _assets_images_media_county_long_line_png__WEBPACK_IMPORTED_MODULE_1__["default"]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "column mcb-column one-fourth column_button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "button_align align_center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "button button_size_2 button_js",
            href: "news-and-events.html",
            style: withBg ? styles.btnExtraClass : {},
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "button_label",
              children: btnTxt
            })
          })
        })
      })]
    })
  });
};

var styles = {
  btnExtraClass: {
    backgroundColor: '#fff !important',
    color: '#a18e72' //50B463

  },
  iconPanel: {
    marginTop: '12px'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerBar);

/***/ }),

/***/ "./resources/js/src/components/produit/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/produit/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _assets_images_media_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/media/1.png */ "./resources/js/src/assets/images/media/1.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Produit = function Produit(_ref) {
  var isSpecial = _ref.isSpecial;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "item-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "product-grid6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "mb-2 position-absolute visible",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "badge badge-pill badge-".concat(isSpecial ? 'danger' : 'default', " mr-1 mb-1 mt-1"),
            children: "Edition ".concat(isSpecial ? 'Spéciale' : 'Ordinaire')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "product-image6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: "img-fluid",
              src: _assets_images_media_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              alt: "img"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, {
          className: "pt-5 pb-5 product-content text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
            className: "title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              children: "JO N\xB0 888888"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-muter",
            children: "Du 04-05-2022"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: "icons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "",
              "data-tip": "Ajouter au panier",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-cart-plus"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "",
              "data-tip": "Payer ce num\xE9ro",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-credit-card"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "",
              "data-tip": "Plus d'information",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "fa fa-eye"
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Produit);

/***/ }),

/***/ "./resources/js/src/pages/website/components/top-news/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/pages/website/components/top-news/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _assets_images_media_county_main_bg_without_gradient_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/images/media/county-main-bg-without-gradient.jpg */ "./resources/js/src/assets/images/media/county-main-bg-without-gradient.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var TopNews = function TopNews(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    nextLabel: "",
    prevLabel: "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "carousel-img-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "d-block w-100",
          src: _assets_images_media_county_main_bg_without_gradient_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
          alt: "Second slide"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
        className: "cesw-custom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "d-flex flex-column justify-content-center h-100",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
            children: "City Hall"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
              className: "btn btn-default-light rounded-0",
              to: "#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "button_label",
                children: "View more details"
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNews);

/***/ }),

/***/ "./resources/js/src/pages/website/home/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/pages/website/home/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_media_county_blogpost6_960x720_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/media/county-blogpost6-960x720.jpg */ "./resources/js/src/assets/images/media/county-blogpost6-960x720.jpg");
/* harmony import */ var _assets_images_media_county_home_pattern_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/media/county-home-pattern-bg.png */ "./resources/js/src/assets/images/media/county-home-pattern-bg.png");
/* harmony import */ var _assets_images_media_county_home_patternbg_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/media/county-home-patternbg-2.png */ "./resources/js/src/assets/images/media/county-home-patternbg-2.png");
/* harmony import */ var _assets_images_media_county_main_bg_without_gradient_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/media/county-main-bg-without-gradient.jpg */ "./resources/js/src/assets/images/media/county-main-bg-without-gradient.jpg");
/* harmony import */ var _assets_images_media_county_map_marker_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/media/county-map-marker-icon.png */ "./resources/js/src/assets/images/media/county-map-marker-icon.png");
/* harmony import */ var _assets_images_media_county_callendar_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/media/county-callendar-icon.png */ "./resources/js/src/assets/images/media/county-callendar-icon.png");
/* harmony import */ var _assets_images_media_county_chevron_down_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/media/county-chevron-down.png */ "./resources/js/src/assets/images/media/county-chevron-down.png");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _components_banner_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/banner-bar */ "./resources/js/src/components/banner-bar/index.js");
/* harmony import */ var _assets_images_media_county_pdf_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/media/county-pdf-icon.png */ "./resources/js/src/assets/images/media/county-pdf-icon.png");
/* harmony import */ var _components_top_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/top-news */ "./resources/js/src/pages/website/components/top-news/index.js");
/* harmony import */ var _components_produit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/produit */ "./resources/js/src/components/produit/index.js");
/* harmony import */ var _assets_images_views_pick_de_sindou_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/images/views/pick_de_sindou.jpg */ "./resources/js/src/assets/images/views/pick_de_sindou.jpg");
/* harmony import */ var _assets_images_views_amassur_assurances_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/images/views/amassur-assurances.jpg */ "./resources/js/src/assets/images/views/amassur-assurances.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



















var HomePage = function HomePage(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_top_news__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "cesw-section cesw-section-img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "cesw-panel-newsletter",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "w-lg-25s w-100s mr-lg-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("h3", {
                    children: ["Souscrire ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}), " \xE0 la newsletter"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "flex-grow-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("form", {
                    className: "d-lg-flex align-items-lg-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                      className: "flex-fill form-group mr-lg-1 mb-lg-0",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
                        "for": "inputEmail",
                        className: "sr-only",
                        children: "Email"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                        type: "text",
                        className: "form-control w-75  ml-lg-auto",
                        id: "inputEmail",
                        placeholder: "Votre adresse mail"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                      type: "submit",
                      className: "btn btn-success-light rounded-0",
                      children: "Souscrire maintenant"
                    })]
                  })
                })]
              })
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "cesw-section cesw-section-light",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            lg: 3,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                sm: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "card",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "card-body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                        className: "col-lg-3 col-md-12 feature",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                          className: "fa-stack fa-lg fa-1x feature-icons bg-success mb-3",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
                            className: "fa fa-filter fa-stack-1x text-white"
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                        className: "col-lg-9 col-md-12",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                          className: "mt-1",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h4", {
                            className: "font-weight-semibold",
                            children: "Filter par \xE9dition"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "custom-checkbox custom-control",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                              type: "checkbox",
                              "data-checkboxes": "mygroup",
                              className: "custom-control-input",
                              id: "checkbox-1",
                              checked: true
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
                              "for": "checkbox-1",
                              className: "custom-control-label",
                              children: "Sp\xE9ciale"
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                            className: "custom-checkbox custom-control",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                              type: "checkbox",
                              "data-checkboxes": "mygroup",
                              className: "custom-control-input",
                              id: "checkbox-2",
                              checked: false
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
                              "for": "checkbox-2",
                              className: "custom-control-label",
                              children: "Ordinaire"
                            })]
                          })]
                        })
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                sm: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "card service",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "card-body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                      className: "item-box text-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                        className: " text-center  mb-4 text-orange",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
                          className: "icon icon-people"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                        className: "item-box-wrap",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
                          className: "text-muted mb-0",
                          children: "Cliquer ci apr\xE8s pour devenir abonnez et recevoir les derni\xE8res journaux publier"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                          href: "#",
                          className: "btn btn-success-light rounded-0",
                          children: "Abonnez-vous"
                        })]
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                sm: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "fb-page",
                  "data-href": "https://web.facebook.com/sggcm?_rdc=1&_rdr",
                  "data-tabs": "timeline",
                  "data-width": "",
                  "data-height": "",
                  "data-small-header": "false",
                  "data-adapt-container-width": "true",
                  "data-hide-cover": "false",
                  "data-show-facepile": "true",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("blockquote", {
                    cite: "https://web.facebook.com/sggcm?_rdc=1&_rdr",
                    className: "fb-xfbml-parse-ignore",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                      href: "https://web.facebook.com/sggcm?_rdc=1&_rdr",
                      children: "Secr\xE9tariat G\xE9n\xE9ral du Gouvernement et du Conseil des Ministres du Faso"
                    })
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            lg: 9,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                sm: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "card service",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "card-body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                      className: "input-group",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Rechercher un journal ..."
                      })
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                sm: 12,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      isSpecial: true
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      isSpecial: true
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    md: 6,
                    xl: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_produit__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    sm: 12,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("nav", {
                      "aria-label": "Page navigation example",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
                        className: "pagination justify-content-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("li", {
                          className: "page-item disabled",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("a", {
                            className: "page-link",
                            href: "#",
                            tabindex: "-1",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
                              className: "fa fa-angle-left"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                              className: "sr-only",
                              children: "Previous"
                            })]
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("li", {
                          className: "page-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                            className: "page-link",
                            href: "#",
                            children: "1"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("li", {
                          className: "page-item active",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                            className: "page-link",
                            href: "#",
                            children: "2"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("li", {
                          className: "page-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                            className: "page-link",
                            href: "#",
                            children: "3"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("li", {
                          className: "page-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("a", {
                            className: "page-link",
                            href: "#",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
                              className: "fa fa-angle-right"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                              className: "sr-only",
                              children: "Next"
                            })]
                          })
                        })]
                      })
                    })
                  })]
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "cesw-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: "card-aside border-0 mb-0 shadow-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                className: "d-lg-block d-none card-aside-column br-tl-5 br-bl-5 cover-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                  src: _assets_images_views_pick_de_sindou_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
                  alt: "img"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "card-body d-flex flex-column",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h4", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                    href: "#",
                    children: "A propos du Journal Officiel"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "text-muted text-truncat",
                  children: "JOBF est une plateforme de publication du Journal Officiel du Burkina Faso et de l\u2019ensemble des textes r\xE8glementaires qui y sont publi\xE9s, Cette plateforme permet,  non seulement l\u2019achat du Journal Officiel mais aussi l\u2019abonnement sur une p\xE9riode donn\xE9e, Elle permet \xE9galement \xE0 toute personne (physique ou morale) de soumettre une demande de publication dans le Journal Officiel"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "d-flex align-items-center pt-5 mt-auto",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "ml-auto text-muted",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                      type: "submit",
                      className: "btn btn-success-light rounded-0",
                      children: "Lire la suite"
                    })
                  })
                })]
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "cesw-section cesw-section-img-tree cesw-section-light",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            md: 8,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: "ads-card border-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                src: _assets_images_views_amassur_assurances_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
                alt: "img",
                className: "w-100"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                id: "carousel-captions",
                className: "carousel slide",
                "data-ride": "carousel",
                nextLabel: "",
                prevLabel: "",
                indicators: false,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Item, {
                  className: "carousel-item active",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                    className: "my-1 mx-auto d-block h-75",
                    alt: "",
                    src: _assets_images_media_county_pdf_icon_png__WEBPACK_IMPORTED_MODULE_9__["default"],
                    "data-holder-rendered": "true"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "carousel-item-background d-none d-md-block"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Caption, {
                    className: "carousel-caption d-none d-md-block",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                      className: "mb-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                        className: "badge badge-pill badge-danger mr-1 mb-1 mt-1",
                        children: "Edition Sp\xE9ciale"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h3", {
                        children: "JO N\xB0 888888"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
                        className: "text-muter",
                        children: "Du 04-05-2022"
                      })]
                    })]
                  })]
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            md: 8,
            lg: 10,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: "card-aside border-0 mb-0 shadow-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "card-body d-flex flex-column",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h4", {
                  children: "Insertion"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "text-muted text-truncat",
                  children: "Vous etes une association, une OBNL ou un partie politique et venez etre nouvelle cr\xE9er, veuillez cliquer sur le bouton ci apres et suivre le instruction."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                  className: "d-flex align-items-center pt-5 mt-auto",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "ml-auto text-muted",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                      type: "submit",
                      className: "btn btn-success-light rounded-0",
                      children: "Insertion dans le Journal Officiel"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                className: "d-lg-block d-none card-aside-column br-tl-5 br-bl-5 cover-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                  src: _assets_images_views_pick_de_sindou_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
                  alt: "img"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sm: 12,
            md: 4,
            lg: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "card service",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                  className: "item-box text-center pt-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: " text-center  mb-4 text-orange",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("i", {
                      className: "icon icon-people"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    className: "item-box-wrap mb-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
                      className: "text-muted mb-0",
                      children: "Veuillez cliquer pour vous connectez"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
                    type: "submit",
                    className: "btn btn-success-light mb-2 rounded-0",
                    children: "Se connecter"
                  })]
                })
              })
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/css.js":
/*!*********************************************!*\
  !*** ./node_modules/dom-helpers/esm/css.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getComputedStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/esm/getComputedStyle.js");
/* harmony import */ var _hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyphenateStyle */ "./node_modules/dom-helpers/esm/hyphenateStyle.js");
/* harmony import */ var _isTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isTransform */ "./node_modules/dom-helpers/esm/isTransform.js");




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property)) || (0,_getComputedStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getPropertyValue((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
    } else if ((0,_isTransform__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getComputedStyle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/dom-helpers/esm/ownerWindow.js");

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return (0,_ownerWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, psuedoElement);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenate.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hyphenate)
/* harmony export */ });
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenateStyle.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hyphenateStyleName)
/* harmony export */ });
/* harmony import */ var _hyphenate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/esm/hyphenate.js");
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return (0,_hyphenate__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(msPattern, '-ms-');
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isTransform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTransform)
/* harmony export */ });
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerWindow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc && doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/transitionEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/transitionEnd.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var _triggerEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triggerEvent */ "./node_modules/dom-helpers/esm/triggerEvent.js");




function parseDuration(node) {
  var str = (0,_css__WEBPACK_IMPORTED_MODULE_0__["default"])(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) (0,_triggerEvent__WEBPACK_IMPORTED_MODULE_2__["default"])(element, 'transitionend', true);
  }, duration + padding);
  var remove = (0,_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = (0,_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/triggerEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/triggerEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ triggerEvent)
/* harmony export */ });
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

/***/ }),

/***/ "./resources/js/src/assets/images/media/1.png":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/media/1.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/1.png?8ada7bb3ef6a1004657802bf1b95e31b");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-blogpost6-960x720.jpg":
/*!***************************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-blogpost6-960x720.jpg ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-blogpost6-960x720.jpg?6c4903491fe5eff051aff41f65cc640c");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-callendar-icon.png":
/*!************************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-callendar-icon.png ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-callendar-icon.png?5543eaa9820bf2ac01d3f9f7fdc329b9");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-chevron-down.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-chevron-down.png ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-chevron-down.png?1b8ca9fe47374a7fadff88abdde26392");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-long-line.png":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-long-line.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-long-line.png?57e807593afc3ec792a23f57ca16799f");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-main-bg-without-gradient.jpg":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-main-bg-without-gradient.jpg ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-main-bg-without-gradient.jpg?64158cd895a41b2c279e699e5b463424");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-map-marker-icon.png":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-map-marker-icon.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-map-marker-icon.png?832479eefe668214c90581cd702c1030");

/***/ }),

/***/ "./resources/js/src/assets/images/media/county-pdf-icon.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/media/county-pdf-icon.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/county-pdf-icon.png?1beffbf3e0258c68700fc44e88eba3f4");

/***/ }),

/***/ "./resources/js/src/assets/images/views/amassur-assurances.jpg":
/*!*********************************************************************!*\
  !*** ./resources/js/src/assets/images/views/amassur-assurances.jpg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/amassur-assurances.jpg?3cb1acd316f6801d48c09960ac8a8cd8");

/***/ }),

/***/ "./resources/js/src/assets/images/views/pick_de_sindou.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/views/pick_de_sindou.jpg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/pick_de_sindou.jpg?ad9262dd4ed48570ec71e3e2e7e17325");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/react-bootstrap/esm/Carousel.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Carousel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _restart_hooks_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useUpdateEffect */ "./node_modules/@restart/hooks/esm/useUpdateEffect.js");
/* harmony import */ var _restart_hooks_useCommittedRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");
/* harmony import */ var _restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useTimeout */ "./node_modules/@restart/hooks/esm/useTimeout.js");
/* harmony import */ var _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @restart/ui/Anchor */ "./node_modules/@restart/ui/esm/Anchor.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _CarouselCaption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CarouselCaption */ "./node_modules/react-bootstrap/esm/CarouselCaption.js");
/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/esm/CarouselItem.js");
/* harmony import */ var _ElementChildren__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/esm/ElementChildren.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _transitionEndListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transitionEndListener */ "./node_modules/react-bootstrap/esm/transitionEndListener.js");
/* harmony import */ var _triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./triggerBrowserReflow */ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js");
/* harmony import */ var _TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TransitionWrapper */ "./node_modules/react-bootstrap/esm/TransitionWrapper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



















const SWIPE_THRESHOLD = 40;
const defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

const Carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((uncontrolledProps, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    bsPrefix,
    slide,
    fade,
    controls,
    indicators,
    indicatorLabels,
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval,
    keyboard,
    onKeyDown,
    pause,
    onMouseOver,
    onMouseOut,
    wrap,
    touch,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon,
    prevLabel,
    nextIcon,
    nextLabel,
    variant,
    className,
    children,
    ...props
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_6__.useUncontrolled)(uncontrolledProps, {
    activeIndex: 'onSelect'
  });
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.useBootstrapPrefix)(bsPrefix, 'carousel');
  const isRTL = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.useIsRTL)();
  const nextDirectionRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const [direction, setDirection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('next');
  const [paused, setPaused] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [isSliding, setIsSliding] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(activeIndex || 0);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
      }

      if (slide) {
        setIsSliding(true);
      }

      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_9__.forEach)(children, (child, index) => {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = (0,_restart_hooks_useCommittedRef__WEBPACK_IMPORTED_MODULE_2__["default"])(activeChildInterval);
  const prev = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  const next = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_0__["default"])(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  })); // This is used in the setInterval, so it should not invalidate.

  const nextWhenVisible = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === 'next' ? 'start' : 'end';
  (0,_restart_hooks_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(node => {
    (0,_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_10__["default"])(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }

          return;

        case 'ArrowRight':
          event.preventDefault();

          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }

          return;

        default:
      }
    }

    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    if (pause === 'hover') {
      setPaused(true);
    }

    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);
  const touchDeltaXRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);
  const touchUnpauseTimeout = (0,_restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (pause === 'hover') {
      setPaused(true);
    }

    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(event => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (pause === 'hover') {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || undefined);
    }

    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => event => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, prefix, slide && 'slide', fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: `${prefix}-indicators`,
      children: (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_9__.map)(children, (_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        type: "button",
        "data-bs-target": "" // Bootstrap requires this in their css.
        ,
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? 'active' : undefined,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: `${prefix}-inner`,
      children: (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_9__.map)(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
          in: isActive,
          onEnter: isActive ? handleEnter : undefined,
          onEntered: isActive ? handleEntered : undefined,
          addEndListener: _transitionEndListener__WEBPACK_IMPORTED_MODULE_12__["default"],
          children: (status, innerProps) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(child, { ...innerProps,
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
          })
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(child, {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(child.props.className, isActive && 'active')
        });
      })
    }), controls && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [(wrap || activeIndex !== 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = 'Carousel';
Carousel.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Carousel, {
  Caption: _CarouselCaption__WEBPACK_IMPORTED_MODULE_14__["default"],
  Item: _CarouselItem__WEBPACK_IMPORTED_MODULE_15__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CarouselCaption.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CarouselCaption.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('carousel-caption'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CarouselItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CarouselItem.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const CarouselItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = 'CarouselItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ElementChildren.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/react-bootstrap/esm/TransitionWrapper.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TransitionWrapper.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeRef, childRef);

  const attachRef = r => {
    mergedRef((0,_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_3__["default"])(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {
      ref: attachRef
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionWrapper);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/safeFindDOMNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ safeFindDOMNode)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom__WEBPACK_IMPORTED_MODULE_0__.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/transitionEndListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/transitionEndListener.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEndListener)
/* harmony export */ });
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/transitionEnd */ "./node_modules/dom-helpers/esm/transitionEnd.js");



function parseDuration(node, property) {
  const str = (0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__["default"])(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = (0,dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_1__["default"])(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ triggerBrowserReflow)
/* harmony export */ });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTERED": () => (/* binding */ ENTERED),
/* harmony export */   "ENTERING": () => (/* binding */ ENTERING),
/* harmony export */   "EXITED": () => (/* binding */ EXITED),
/* harmony export */   "EXITING": () => (/* binding */ EXITING),
/* harmony export */   "UNMOUNTED": () => (/* binding */ UNMOUNTED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNamesShape": () => (/* binding */ classNamesShape),
/* harmony export */   "timeoutsShape": () => (/* binding */ timeoutsShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/reflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/reflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceReflow": () => (/* binding */ forceReflow)
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ })

}]);