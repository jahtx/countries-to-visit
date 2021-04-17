"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _LinkList = _interopRequireDefault(require("./LinkList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  (0, _reactDom.unmountComponentAtNode)(container);
  container.remove();
  container = null;
});
it("renders with or without a name", () => {
  (0, _testUtils.act)(() => {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_LinkList.default, null), container);
  });
  expect(container.textContent).toBe("Hey, stranger");
  (0, _testUtils.act)(() => {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_LinkList.default, {
      name: "Jenny"
    }), container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");
  (0, _testUtils.act)(() => {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_LinkList.default, {
      name: "Margaret"
    }), container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});