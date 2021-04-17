"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/main.scss");

var _spinningGlobe = _interopRequireDefault(require("./images/spinning-globe.gif"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _LinkList = _interopRequireDefault(require("./components/LinkList/LinkList"));

require("bootstrap/dist/css/bootstrap.min.css");

var _client = require("@apollo/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = new _client.ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new _client.InMemoryCache()
});

function App() {
  return /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
    client: client
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "App text-left"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    bg: "primary",
    variant: "dark"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default.Brand, {
    href: "/"
  }, "Oh The Places You'll Go!"), /*#__PURE__*/_react.default.createElement(_Nav.default, {
    className: "mr-auto"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "#features",
    disabled: true
  }, "Features"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-sm mt-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _spinningGlobe.default,
    className: "pocketSizeImage",
    alt: "gratuitiously spinning globe"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-sm"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Countries to Visit:"), /*#__PURE__*/_react.default.createElement(_LinkList.default, null))));
}

var _default = App;
exports.default = _default;