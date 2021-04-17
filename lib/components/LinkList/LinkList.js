"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

var _reactBootstrap = require("react-bootstrap");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const GET_COUNTRIES = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query GetCountries {\n    countries {\n      code\n      name\n      capital\n    }\n  }\n"])));

const LinkList = () => {
  // using hooks in a functional component
  const [name, setName] = (0, _react.useState)("");

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const {
    loading,
    error,
    data
  } = (0, _client.useQuery)(GET_COUNTRIES, {
    variables: {
      limit: 5
    }
  });
  if (loading) return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  if (error) return /*#__PURE__*/_react.default.createElement("div", null, "Error!");
  return /*#__PURE__*/_react.default.createElement(_client.ApolloConsumer, null, client => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Form.default, null, /*#__PURE__*/_react.default.createElement(_Form.default.Group, null, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Select"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    id: "country-selection",
    onChange: handleNameInput,
    as: "select",
    size: "lg",
    custom: true
  }, data.countries.map(country => /*#__PURE__*/_react.default.createElement("option", {
    key: country.code,
    value: country.capital
  }, country.name))))), /*#__PURE__*/_react.default.createElement("div", null, name ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    bg: "dark text-light"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, "You should visit the capital, which is \xA0", /*#__PURE__*/_react.default.createElement("strong", null, name), ".")) : null)));
};

var _default = LinkList;
exports.default = _default;