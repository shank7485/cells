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

var _CtlPeer = require('./CtlPeer');

var _CtlPeer2 = _interopRequireDefault(_CtlPeer);

var _CtlServiceStatus = require('./CtlServiceStatus');

var _CtlServiceStatus2 = _interopRequireDefault(_CtlServiceStatus);

/**
* The CtlService model module.
* @module model/CtlService
* @version 1.0
*/

var CtlService = (function () {
    /**
    * Constructs a new <code>CtlService</code>.
    * @alias module:model/CtlService
    * @class
    */

    function CtlService() {
        _classCallCheck(this, CtlService);

        this.Name = undefined;
        this.Version = undefined;
        this.Description = undefined;
        this.Tag = undefined;
        this.Controllable = undefined;
        this.Status = undefined;
        this.RunningPeers = undefined;
    }

    /**
    * Constructs a <code>CtlService</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CtlService} obj Optional instance to populate.
    * @return {module:model/CtlService} The populated <code>CtlService</code> instance.
    */

    CtlService.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CtlService();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = _ApiClient2['default'].convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = _ApiClient2['default'].convertToType(data['Version'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = _ApiClient2['default'].convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Tag')) {
                obj['Tag'] = _ApiClient2['default'].convertToType(data['Tag'], 'String');
            }
            if (data.hasOwnProperty('Controllable')) {
                obj['Controllable'] = _ApiClient2['default'].convertToType(data['Controllable'], 'Boolean');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = _CtlServiceStatus2['default'].constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('RunningPeers')) {
                obj['RunningPeers'] = _ApiClient2['default'].convertToType(data['RunningPeers'], [_CtlPeer2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {String} Name
    */
    return CtlService;
})();

exports['default'] = CtlService;
module.exports = exports['default'];

/**
* @member {String} Version
*/

/**
* @member {String} Description
*/

/**
* @member {String} Tag
*/

/**
* @member {Boolean} Controllable
*/

/**
* @member {module:model/CtlServiceStatus} Status
*/

/**
* @member {Array.<module:model/CtlPeer>} RunningPeers
*/
