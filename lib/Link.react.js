"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Link.react.js
const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

class Link extends _react.default.Component {
  constructor(props) {
    super(props);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.state = {
      class: STATUS.NORMAL
    };
  }

  _onMouseEnter() {
    this.setState({
      class: STATUS.HOVERED
    });
  }

  _onMouseLeave() {
    this.setState({
      class: STATUS.NORMAL
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: this.state.class,
      href: this.props.page || "#",
      onMouseEnter: this._onMouseEnter,
      onMouseLeave: this._onMouseLeave
    }, this.props.children);
  }

}

exports.default = Link;