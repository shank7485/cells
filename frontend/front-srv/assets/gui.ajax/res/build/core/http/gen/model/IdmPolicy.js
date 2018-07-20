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

var _IdmPolicyCondition = require('./IdmPolicyCondition');

var _IdmPolicyCondition2 = _interopRequireDefault(_IdmPolicyCondition);

var _IdmPolicyEffect = require('./IdmPolicyEffect');

var _IdmPolicyEffect2 = _interopRequireDefault(_IdmPolicyEffect);

/**
* The IdmPolicy model module.
* @module model/IdmPolicy
* @version 1.0
*/

var IdmPolicy = (function () {
    /**
    * Constructs a new <code>IdmPolicy</code>.
    * @alias module:model/IdmPolicy
    * @class
    */

    function IdmPolicy() {
        _classCallCheck(this, IdmPolicy);

        this.id = undefined;
        this.description = undefined;
        this.subjects = undefined;
        this.resources = undefined;
        this.actions = undefined;
        this.effect = undefined;
        this.conditions = undefined;
    }

    /**
    * Constructs a <code>IdmPolicy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmPolicy} obj Optional instance to populate.
    * @return {module:model/IdmPolicy} The populated <code>IdmPolicy</code> instance.
    */

    IdmPolicy.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmPolicy();

            if (data.hasOwnProperty('id')) {
                obj['id'] = _ApiClient2['default'].convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = _ApiClient2['default'].convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = _ApiClient2['default'].convertToType(data['subjects'], ['String']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = _ApiClient2['default'].convertToType(data['resources'], ['String']);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = _ApiClient2['default'].convertToType(data['actions'], ['String']);
            }
            if (data.hasOwnProperty('effect')) {
                obj['effect'] = _IdmPolicyEffect2['default'].constructFromObject(data['effect']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = _ApiClient2['default'].convertToType(data['conditions'], { 'String': _IdmPolicyCondition2['default'] });
            }
        }
        return obj;
    };

    /**
    * @member {String} id
    */
    return IdmPolicy;
})();

exports['default'] = IdmPolicy;
module.exports = exports['default'];

/**
* @member {String} description
*/

/**
* @member {Array.<String>} subjects
*/

/**
* @member {Array.<String>} resources
*/

/**
* @member {Array.<String>} actions
*/

/**
* @member {module:model/IdmPolicyEffect} effect
*/

/**
* @member {Object.<String, module:model/IdmPolicyCondition>} conditions
*/
