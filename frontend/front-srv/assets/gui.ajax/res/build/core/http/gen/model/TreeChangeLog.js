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

var _TreeNodeChangeEvent = require('./TreeNodeChangeEvent');

var _TreeNodeChangeEvent2 = _interopRequireDefault(_TreeNodeChangeEvent);

/**
* The TreeChangeLog model module.
* @module model/TreeChangeLog
* @version 1.0
*/

var TreeChangeLog = (function () {
    /**
    * Constructs a new <code>TreeChangeLog</code>.
    * @alias module:model/TreeChangeLog
    * @class
    */

    function TreeChangeLog() {
        _classCallCheck(this, TreeChangeLog);

        this.Uuid = undefined;
        this.Description = undefined;
        this.MTime = undefined;
        this.Size = undefined;
        this.Data = undefined;
        this.OwnerUuid = undefined;
        this.Event = undefined;
    }

    /**
    * Constructs a <code>TreeChangeLog</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TreeChangeLog} obj Optional instance to populate.
    * @return {module:model/TreeChangeLog} The populated <code>TreeChangeLog</code> instance.
    */

    TreeChangeLog.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeChangeLog();

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = _ApiClient2['default'].convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = _ApiClient2['default'].convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('MTime')) {
                obj['MTime'] = _ApiClient2['default'].convertToType(data['MTime'], 'String');
            }
            if (data.hasOwnProperty('Size')) {
                obj['Size'] = _ApiClient2['default'].convertToType(data['Size'], 'String');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = _ApiClient2['default'].convertToType(data['Data'], 'Blob');
            }
            if (data.hasOwnProperty('OwnerUuid')) {
                obj['OwnerUuid'] = _ApiClient2['default'].convertToType(data['OwnerUuid'], 'String');
            }
            if (data.hasOwnProperty('Event')) {
                obj['Event'] = _TreeNodeChangeEvent2['default'].constructFromObject(data['Event']);
            }
        }
        return obj;
    };

    /**
    * @member {String} Uuid
    */
    return TreeChangeLog;
})();

exports['default'] = TreeChangeLog;
module.exports = exports['default'];

/**
* @member {String} Description
*/

/**
* @member {String} MTime
*/

/**
* @member {String} Size
*/

/**
* @member {Blob} Data
*/

/**
* @member {String} OwnerUuid
*/

/**
* @member {module:model/TreeNodeChangeEvent} Event
*/
