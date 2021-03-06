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


import ApiClient from '../ApiClient';





/**
* The RestListPeersAddressesResponse model module.
* @module model/RestListPeersAddressesResponse
* @version 1.0
*/
export default class RestListPeersAddressesResponse {
    /**
    * Constructs a new <code>RestListPeersAddressesResponse</code>.
    * @alias module:model/RestListPeersAddressesResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestListPeersAddressesResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestListPeersAddressesResponse} obj Optional instance to populate.
    * @return {module:model/RestListPeersAddressesResponse} The populated <code>RestListPeersAddressesResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestListPeersAddressesResponse();

            
            
            

            if (data.hasOwnProperty('PeerAddresses')) {
                obj['PeerAddresses'] = ApiClient.convertToType(data['PeerAddresses'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} PeerAddresses
    */
    PeerAddresses = undefined;








}


