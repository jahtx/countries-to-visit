"use strict";

require("core-js/modules/web.url.to-json.js");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Link = _interopRequireDefault(require("./Link.react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Link.react.test.js
test("Link changes the class when hovered", () => {
  const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Link.default, {
    page: "http://www.facebook.com"
  }, "Facebook"));

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // manually trigger the callback

  tree.props.onMouseEnter(); // re-rendering

  tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // manually trigger the callback

  tree.props.onMouseLeave(); // re-rendering

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});