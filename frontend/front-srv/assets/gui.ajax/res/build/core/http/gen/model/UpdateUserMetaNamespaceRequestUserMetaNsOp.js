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

"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* Enum class UpdateUserMetaNamespaceRequestUserMetaNsOp.
* @enum {}
* @readonly
*/

var UpdateUserMetaNamespaceRequestUserMetaNsOp = (function () {
    function UpdateUserMetaNamespaceRequestUserMetaNsOp() {
        _classCallCheck(this, UpdateUserMetaNamespaceRequestUserMetaNsOp);

        this.PUT = "PUT";
        this.DELETE = "DELETE";
    }

    /**
    * Returns a <code>UpdateUserMetaNamespaceRequestUserMetaNsOp</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UpdateUserMetaNamespaceRequestUserMetaNsOp} The enum <code>UpdateUserMetaNamespaceRequestUserMetaNsOp</code> value.
    */

    UpdateUserMetaNamespaceRequestUserMetaNsOp.constructFromObject = function constructFromObject(object) {
        return object;
    };

    return UpdateUserMetaNamespaceRequestUserMetaNsOp;
})();

exports["default"] = UpdateUserMetaNamespaceRequestUserMetaNsOp;
module.exports = exports["default"];

/**
 * value: "PUT"
 * @const
 */

/**
 * value: "DELETE"
 * @const
 */
