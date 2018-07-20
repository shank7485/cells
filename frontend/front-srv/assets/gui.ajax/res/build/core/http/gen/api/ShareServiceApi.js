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

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelRestCell = require('../model/RestCell');

var _modelRestCell2 = _interopRequireDefault(_modelRestCell);

var _modelRestDeleteCellResponse = require('../model/RestDeleteCellResponse');

var _modelRestDeleteCellResponse2 = _interopRequireDefault(_modelRestDeleteCellResponse);

var _modelRestDeleteShareLinkResponse = require('../model/RestDeleteShareLinkResponse');

var _modelRestDeleteShareLinkResponse2 = _interopRequireDefault(_modelRestDeleteShareLinkResponse);

var _modelRestListSharedResourcesRequest = require('../model/RestListSharedResourcesRequest');

var _modelRestListSharedResourcesRequest2 = _interopRequireDefault(_modelRestListSharedResourcesRequest);

var _modelRestListSharedResourcesResponse = require('../model/RestListSharedResourcesResponse');

var _modelRestListSharedResourcesResponse2 = _interopRequireDefault(_modelRestListSharedResourcesResponse);

var _modelRestPutCellRequest = require('../model/RestPutCellRequest');

var _modelRestPutCellRequest2 = _interopRequireDefault(_modelRestPutCellRequest);

var _modelRestPutShareLinkRequest = require('../model/RestPutShareLinkRequest');

var _modelRestPutShareLinkRequest2 = _interopRequireDefault(_modelRestPutShareLinkRequest);

var _modelRestShareLink = require('../model/RestShareLink');

var _modelRestShareLink2 = _interopRequireDefault(_modelRestShareLink);

/**
* ShareService service.
* @module api/ShareServiceApi
* @version 1.0
*/

var ShareServiceApi = (function () {

  /**
  * Constructs a new ShareServiceApi. 
  * @alias module:api/ShareServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function ShareServiceApi(apiClient) {
    _classCallCheck(this, ShareServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * Delete a share room
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteCellResponse} and HTTP response
   */

  ShareServiceApi.prototype.deleteCellWithHttpInfo = function deleteCellWithHttpInfo(uuid) {
    var postBody = null;

    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error("Missing the required parameter 'uuid' when calling deleteCell");
    }

    var pathParams = {
      'Uuid': uuid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestDeleteCellResponse2['default'];

    return this.apiClient.callApi('/share/cell/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete a share room
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteCellResponse}
   */

  ShareServiceApi.prototype.deleteCell = function deleteCell(uuid) {
    return this.deleteCellWithHttpInfo(uuid).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Delete Share Link
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteShareLinkResponse} and HTTP response
   */

  ShareServiceApi.prototype.deleteShareLinkWithHttpInfo = function deleteShareLinkWithHttpInfo(uuid) {
    var postBody = null;

    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error("Missing the required parameter 'uuid' when calling deleteShareLink");
    }

    var pathParams = {
      'Uuid': uuid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestDeleteShareLinkResponse2['default'];

    return this.apiClient.callApi('/share/link/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete Share Link
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteShareLinkResponse}
   */

  ShareServiceApi.prototype.deleteShareLink = function deleteShareLink(uuid) {
    return this.deleteShareLinkWithHttpInfo(uuid).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Load a share room
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
   */

  ShareServiceApi.prototype.getCellWithHttpInfo = function getCellWithHttpInfo(uuid) {
    var postBody = null;

    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error("Missing the required parameter 'uuid' when calling getCell");
    }

    var pathParams = {
      'Uuid': uuid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestCell2['default'];

    return this.apiClient.callApi('/share/cell/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Load a share room
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
   */

  ShareServiceApi.prototype.getCell = function getCell(uuid) {
    return this.getCellWithHttpInfo(uuid).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Load a share link with all infos
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
   */

  ShareServiceApi.prototype.getShareLinkWithHttpInfo = function getShareLinkWithHttpInfo(uuid) {
    var postBody = null;

    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error("Missing the required parameter 'uuid' when calling getShareLink");
    }

    var pathParams = {
      'Uuid': uuid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestShareLink2['default'];

    return this.apiClient.callApi('/share/link/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Load a share link with all infos
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
   */

  ShareServiceApi.prototype.getShareLink = function getShareLink(uuid) {
    return this.getShareLinkWithHttpInfo(uuid).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * List Shared Resources for current user or all users
   * @param {module:model/RestListSharedResourcesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListSharedResourcesResponse} and HTTP response
   */

  ShareServiceApi.prototype.listSharedResourcesWithHttpInfo = function listSharedResourcesWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling listSharedResources");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestListSharedResourcesResponse2['default'];

    return this.apiClient.callApi('/share/resources', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * List Shared Resources for current user or all users
   * @param {module:model/RestListSharedResourcesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListSharedResourcesResponse}
   */

  ShareServiceApi.prototype.listSharedResources = function listSharedResources(body) {
    return this.listSharedResourcesWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Put or Create a share room
   * @param {module:model/RestPutCellRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
   */

  ShareServiceApi.prototype.putCellWithHttpInfo = function putCellWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putCell");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestCell2['default'];

    return this.apiClient.callApi('/share/cell', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Put or Create a share room
   * @param {module:model/RestPutCellRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
   */

  ShareServiceApi.prototype.putCell = function putCell(body) {
    return this.putCellWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Put or Create a share room
   * @param {module:model/RestPutShareLinkRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
   */

  ShareServiceApi.prototype.putShareLinkWithHttpInfo = function putShareLinkWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putShareLink");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestShareLink2['default'];

    return this.apiClient.callApi('/share/link', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Put or Create a share room
   * @param {module:model/RestPutShareLinkRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
   */

  ShareServiceApi.prototype.putShareLink = function putShareLink(body) {
    return this.putShareLinkWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return ShareServiceApi;
})();

exports['default'] = ShareServiceApi;
module.exports = exports['default'];
