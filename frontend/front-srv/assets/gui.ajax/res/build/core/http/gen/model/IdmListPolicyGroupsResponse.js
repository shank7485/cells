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

var _IdmPolicyGroup = require('./IdmPolicyGroup');

var _IdmPolicyGroup2 = _interopRequireDefault(_IdmPolicyGroup);

/**
* The IdmListPolicyGroupsResponse model module.
* @module model/IdmListPolicyGroupsResponse
* @version 1.0
*/

var IdmListPolicyGroupsResponse = (function () {
    /**
    * Constructs a new <code>IdmListPolicyGroupsResponse</code>.
    * @alias module:model/IdmListPolicyGroupsResponse
    * @class
    */

    function IdmListPolicyGroupsResponse() {
        _classCallCheck(this, IdmListPolicyGroupsResponse);

        this.PolicyGroups = undefined;
        this.Total = undefined;
    }

    /**
    * Constructs a <code>IdmListPolicyGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmListPolicyGroupsResponse} obj Optional instance to populate.
    * @return {module:model/IdmListPolicyGroupsResponse} The populated <code>IdmListPolicyGroupsResponse</code> instance.
    */

    IdmListPolicyGroupsResponse.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmListPolicyGroupsResponse();

            if (data.hasOwnProperty('PolicyGroups')) {
                obj['PolicyGroups'] = _ApiClient2['default'].convertToType(data['PolicyGroups'], [_IdmPolicyGroup2['default']]);
            }
            if (data.hasOwnProperty('Total')) {
                obj['Total'] = _ApiClient2['default'].convertToType(data['Total'], 'Number');
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/IdmPolicyGroup>} PolicyGroups
    */
    return IdmListPolicyGroupsResponse;
})();

exports['default'] = IdmListPolicyGroupsResponse;
module.exports = exports['default'];

/**
* @member {Number} Total
*/
