module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _checkbox = __webpack_require__(1);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function newValuesAfterChange(values, box) {
	  if (box.checked) {
	    return values.concat(box.value);
	  }

	  return values.filter(function (value) {
	    return value !== box.value;
	  });
	}

	function checkboxGroup(React) {
	  var CheckboxGroup = function (_React$Component) {
	    _inherits(CheckboxGroup, _React$Component);

	    function CheckboxGroup(props) {
	      _classCallCheck(this, CheckboxGroup);

	      var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

	      _this.state = { values: props.values };
	      _this._handleSelection = _this._handleSelection.bind(_this);
	      return _this;
	    }

	    _createClass(CheckboxGroup, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return {
	          name: this.props.name,
	          values: this.state.values,
	          onChange: this._handleSelection
	        };
	      }
	    }, {
	      key: '_handleSelection',
	      value: function _handleSelection(event) {
	        var values = newValuesAfterChange(this.state.values, event.target);
	        this.setState({ values: values });
	        this.props.onSelection(values);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return this.props.children((0, _checkbox2.default)(React));
	      }
	    }]);

	    return CheckboxGroup;
	  }(React.Component);

	  CheckboxGroup.defaultProps = {
	    onSelection: function onSelection() {},
	    values: []
	  };

	  CheckboxGroup.propTypes = {
	    name: React.PropTypes.string,
	    values: React.PropTypes.array,
	    onSelection: React.PropTypes.func,
	    children: React.PropTypes.func.isRequired
	  };

	  CheckboxGroup.childContextTypes = {
	    values: React.PropTypes.array,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func
	  };

	  return CheckboxGroup;
	}

	exports.default = checkboxGroup;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function checkbox(React) {
	  function Checkbox(props, context) {
	    var values = context.values;
	    var onChange = context.onChange;
	    var name = context.name;

	    var checked = values.includes(props.value);

	    return React.createElement("input", _extends({}, props, {
	      type: "checkbox",
	      checked: checked,
	      name: name,
	      onChange: onChange
	    }));
	  }

	  Checkbox.propTypes = {
	    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.bool])
	  };

	  Checkbox.contextTypes = {
	    values: React.PropTypes.array,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func
	  };

	  return Checkbox;
	}

	exports.default = checkbox;

/***/ }
/******/ ]);