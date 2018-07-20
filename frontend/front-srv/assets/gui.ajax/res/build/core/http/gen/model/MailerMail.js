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

var _MailerUser = require('./MailerUser');

var _MailerUser2 = _interopRequireDefault(_MailerUser);

/**
* The MailerMail model module.
* @module model/MailerMail
* @version 1.0
*/

var MailerMail = (function () {
    /**
    * Constructs a new <code>MailerMail</code>.
    * @alias module:model/MailerMail
    * @class
    */

    function MailerMail() {
        _classCallCheck(this, MailerMail);

        this.From = undefined;
        this.To = undefined;
        this.Cc = undefined;
        this.DateSent = undefined;
        this.Subject = undefined;
        this.ContentPlain = undefined;
        this.ContentHtml = undefined;
        this.ContentMarkdown = undefined;
        this.Attachments = undefined;
        this.ThreadUuid = undefined;
        this.ThreadIndex = undefined;
        this.TemplateId = undefined;
        this.TemplateData = undefined;
        this.Retries = undefined;
        this.sendErrors = undefined;
    }

    /**
    * Constructs a <code>MailerMail</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MailerMail} obj Optional instance to populate.
    * @return {module:model/MailerMail} The populated <code>MailerMail</code> instance.
    */

    MailerMail.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailerMail();

            if (data.hasOwnProperty('From')) {
                obj['From'] = _MailerUser2['default'].constructFromObject(data['From']);
            }
            if (data.hasOwnProperty('To')) {
                obj['To'] = _ApiClient2['default'].convertToType(data['To'], [_MailerUser2['default']]);
            }
            if (data.hasOwnProperty('Cc')) {
                obj['Cc'] = _ApiClient2['default'].convertToType(data['Cc'], [_MailerUser2['default']]);
            }
            if (data.hasOwnProperty('DateSent')) {
                obj['DateSent'] = _ApiClient2['default'].convertToType(data['DateSent'], 'String');
            }
            if (data.hasOwnProperty('Subject')) {
                obj['Subject'] = _ApiClient2['default'].convertToType(data['Subject'], 'String');
            }
            if (data.hasOwnProperty('ContentPlain')) {
                obj['ContentPlain'] = _ApiClient2['default'].convertToType(data['ContentPlain'], 'String');
            }
            if (data.hasOwnProperty('ContentHtml')) {
                obj['ContentHtml'] = _ApiClient2['default'].convertToType(data['ContentHtml'], 'String');
            }
            if (data.hasOwnProperty('ContentMarkdown')) {
                obj['ContentMarkdown'] = _ApiClient2['default'].convertToType(data['ContentMarkdown'], 'String');
            }
            if (data.hasOwnProperty('Attachments')) {
                obj['Attachments'] = _ApiClient2['default'].convertToType(data['Attachments'], ['String']);
            }
            if (data.hasOwnProperty('ThreadUuid')) {
                obj['ThreadUuid'] = _ApiClient2['default'].convertToType(data['ThreadUuid'], 'String');
            }
            if (data.hasOwnProperty('ThreadIndex')) {
                obj['ThreadIndex'] = _ApiClient2['default'].convertToType(data['ThreadIndex'], 'String');
            }
            if (data.hasOwnProperty('TemplateId')) {
                obj['TemplateId'] = _ApiClient2['default'].convertToType(data['TemplateId'], 'String');
            }
            if (data.hasOwnProperty('TemplateData')) {
                obj['TemplateData'] = _ApiClient2['default'].convertToType(data['TemplateData'], { 'String': 'String' });
            }
            if (data.hasOwnProperty('Retries')) {
                obj['Retries'] = _ApiClient2['default'].convertToType(data['Retries'], 'Number');
            }
            if (data.hasOwnProperty('sendErrors')) {
                obj['sendErrors'] = _ApiClient2['default'].convertToType(data['sendErrors'], ['String']);
            }
        }
        return obj;
    };

    /**
    * @member {module:model/MailerUser} From
    */
    return MailerMail;
})();

exports['default'] = MailerMail;
module.exports = exports['default'];

/**
* @member {Array.<module:model/MailerUser>} To
*/

/**
* @member {Array.<module:model/MailerUser>} Cc
*/

/**
* @member {String} DateSent
*/

/**
* @member {String} Subject
*/

/**
* @member {String} ContentPlain
*/

/**
* @member {String} ContentHtml
*/

/**
* @member {String} ContentMarkdown
*/

/**
* @member {Array.<String>} Attachments
*/

/**
* @member {String} ThreadUuid
*/

/**
* @member {String} ThreadIndex
*/

/**
* @member {String} TemplateId
*/

/**
* @member {Object.<String, String>} TemplateData
*/

/**
* @member {Number} Retries
*/

/**
* @member {Array.<String>} sendErrors
*/
