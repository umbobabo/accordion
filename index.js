'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentList = require('@economist/component-list');

var _economistComponentList2 = _interopRequireDefault(_economistComponentList);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentBalloon = require('@economist/component-balloon');

var _economistComponentBalloon2 = _interopRequireDefault(_economistComponentBalloon);

var Accordion = (function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    _React$Component.apply(this, arguments);
  }

  Accordion.prototype.targetIfNeeded = function targetIfNeeded(_ref) {
    var internal = _ref.internal;

    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  };

  Accordion.prototype.renderListContent = function renderListContent(array) {
    var _this = this;

    var level = 0;
    return array.map(function (item) {
      var linkContents = item.text || item.title;
      var listItem = '';
      var commonProps = {
        href: item.href,
        key: item.title + '-' + item.href,
        unstyled: true
      };
      if (item.meta) {
        commonProps.icon = {
          icon: item.meta,
          size: '28px'
        };
      }
      if (item.internal === false) {
        listItem = _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          _extends({
            className: 'accordion__link accordion__link--external'
          }, commonProps, {
            target: '_blank'
          }),
          linkContents
        );
      } else {
        listItem = _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          _extends({ className: 'accordion__link' }, commonProps),
          linkContents
        );
      }
      // Recursive part
      if (item.children && item.children.length > 0) {
        level++;
        listItem = _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            prefix: 'accordionExpander',
            className: 'accordion__level' + level,
            unstyled: true,
            key: item.title + '-' + item.href + '-level' + level
          },
          listItem,
          _react2['default'].createElement(
            _economistComponentList2['default'],
            null,
            _this.renderListContent(item.children)
          )
        );
      }
      level = 0;
      return listItem;
    });
  };

  Accordion.prototype.render = function render() {
    var context = this.props.list;
    return _react2['default'].createElement(
      _economistComponentList2['default'],
      { className: 'accordion' },
      this.renderListContent(context)
    );
  };

  _createClass(Accordion, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        list: _react2['default'].PropTypes.array.isRequired
      };
    }
  }]);

  return Accordion;
})(_react2['default'].Component);

exports['default'] = Accordion;
module.exports = exports['default'];