/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactMotion = require('react-motion');

var ANIMATION = { stiffness: 300, damping: 40 };
var ORIGIN = 0;
var TARGET = 100;

var makeEditorMinimise = function makeEditorMinimise(Target) {
    return (function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            _React$Component.call(this, props);
            this.state = {};
        }

        _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            this.setState({
                minimised: nextProps.minimised
            });
        };

        _class.prototype.render = function render() {
            var _this = this;

            var minimised = this.state.minimised;

            var motionStyle = {
                scale: minimised ? _reactMotion.spring(ORIGIN, ANIMATION) : TARGET
            };

            var transform = this.props.style.transform || "";

            return React.createElement(
                _reactMotion.Motion,
                { style: motionStyle, onRest: this.props.onMinimise },
                function (_ref) {
                    var scale = _ref.scale;

                    var float = scale / 100;

                    return React.createElement(Target, _extends({}, _this.props, {
                        scale: scale,
                        style: _extends({}, _this.props.style, {
                            transition: "none",
                            transform: transform + ' scale(' + float + ')'
                        })
                    }));
                }
            );
        };

        return _class;
    })(React.Component);
};

exports['default'] = makeEditorMinimise;
module.exports = exports['default'];
