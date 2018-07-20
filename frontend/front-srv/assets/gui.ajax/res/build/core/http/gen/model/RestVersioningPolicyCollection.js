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

var _TreeVersioningPolicy = require('./TreeVersioningPolicy');

var _TreeVersioningPolicy2 = _interopRequireDefault(_TreeVersioningPolicy);

/**
* The RestVersioningPolicyCollection model module.
* @module model/RestVersioningPolicyCollection
* @version 1.0
*/

var RestVersioningPolicyCollection = (function () {
    /**
    * Constructs a new <code>RestVersioningPolicyCollection</code>.
    * @alias module:model/RestVersioningPolicyCollection
    * @class
    */

    function RestVersioningPolicyCollection() {
        _classCallCheck(this, RestVersioningPolicyCollection);

        this.Policies = undefined;
    }

    /**
    * Constructs a <code>RestVersioningPolicyCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestVersioningPolicyCollection} obj Optional instance to populate.
    * @return {module:model/RestVersioningPolicyCollection} The populated <code>RestVersioningPolicyCollection</code> instance.
    */

    RestVersioningPolicyCollection.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestVersioningPolicyCollection();

            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = _ApiClient2['default'].convertToType(data['Policies'], [_TreeVersioningPolicy2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/TreeVersioningPolicy>} Policies
    */
    return RestVersioningPolicyCollection;
})();

exports['default'] = RestVersioningPolicyCollection;
module.exports = exports['default'];
