/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LogRelType = require('./LogRelType');

var _LogRelType2 = _interopRequireDefault(_LogRelType);

/**
* The LogTimeRangeCursor model module.
* @module model/LogTimeRangeCursor
* @version 1.0
*/

var LogTimeRangeCursor = (function () {
    /**
    * Constructs a new <code>LogTimeRangeCursor</code>.
    * Ease implementation of data navigation for a chart.
    * @alias module:model/LogTimeRangeCursor
    * @class
    */

    function LogTimeRangeCursor() {
        _classCallCheck(this, LogTimeRangeCursor);

        this.Rel = undefined;
        this.RefTime = undefined;
        this.Count = undefined;
    }

    /**
    * Constructs a <code>LogTimeRangeCursor</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LogTimeRangeCursor} obj Optional instance to populate.
    * @return {module:model/LogTimeRangeCursor} The populated <code>LogTimeRangeCursor</code> instance.
    */

    LogTimeRangeCursor.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogTimeRangeCursor();

            if (data.hasOwnProperty('Rel')) {
                obj['Rel'] = _LogRelType2['default'].constructFromObject(data['Rel']);
            }
            if (data.hasOwnProperty('RefTime')) {
                obj['RefTime'] = _ApiClient2['default'].convertToType(data['RefTime'], 'Number');
            }
            if (data.hasOwnProperty('Count')) {
                obj['Count'] = _ApiClient2['default'].convertToType(data['Count'], 'Number');
            }
        }
        return obj;
    };

    /**
    * @member {module:model/LogRelType} Rel
    */
    return LogTimeRangeCursor;
})();

exports['default'] = LogTimeRangeCursor;
module.exports = exports['default'];

/**
* @member {Number} RefTime
*/

/**
* @member {Number} Count
*/
