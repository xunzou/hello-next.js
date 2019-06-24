webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/_next@8.1.0@next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.0.9@react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);


 // import fetch from 'isomorphic-unfetch';

 // const Post = props => (
//     <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// )
// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();
//   console.log(`Fetched show: ${show.name}`);
//   return { show };
// };

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.router.query.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is the blog post content."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, null));
});
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.6e044686ba6db28d3dd1.hot-update.js.map