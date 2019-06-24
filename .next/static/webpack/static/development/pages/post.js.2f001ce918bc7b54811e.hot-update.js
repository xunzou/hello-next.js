webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.1@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/_next@8.1.0@next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.0.9@react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);



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

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3563813142"
  }, props.router.query.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3563813142"
  }, "This is the blog post content."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3563813142" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n     "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3563813142"
  }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzdHVkeVxcaGVsbG8tbmV4dFxccGFnZXNcXHBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEN1QixBQUc2QixBQUlDLEFBS1QsQUFJSCxTQUNDLEdBSlosT0FLMkIsQ0FkM0Isd0JBZUEsTUFYYSxXQUNiIiwiZmlsZSI6IkQ6XFxzdHVkeVxcaGVsbG8tbmV4dFxccGFnZXNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcblxyXG4vLyBjb25zdCBQb3N0ID0gcHJvcHMgPT4gKFxyXG4vLyAgICAgPExheW91dD5cclxuLy8gICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XHJcbi8vICAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cclxuLy8gICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz5cclxuXHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcclxuLy8gICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YCk7XHJcblxyXG4vLyAgIHJldHVybiB7IHNob3cgfTtcclxuLy8gfTtcclxuXHJcblxyXG5jb25zdCBQb3N0ID0gd2l0aFJvdXRlcihwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMT57cHJvcHMucm91dGVyLnF1ZXJ5LmlkfTwvaDE+XHJcbiAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC48L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XHJcbiAgICAgIDxNYXJrZG93blxyXG4gICAgICAgIHNvdXJjZT17YFxyXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXHJcblllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxyXG5BbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxyXG5cclxuIyMjIFRoaXMgaXMgYSB0aXRsZVxyXG5cclxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cclxuICAgICBgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAubWFya2Rvd24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdfQ== */\n/*@ sourceURL=D:\\study\\hello-next\\pages\\post.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.2f001ce918bc7b54811e.hot-update.js.map