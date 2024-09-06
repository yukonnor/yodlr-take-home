import axios from "axios";

const BASE_URL = "http://localhost:3000"; // replace with env variable later

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class YodlrApi {
    // Note: In future could have token / auth attributes and methods here.
    //       For now, this isn't needed as the API route is open to public

    /** General 'request' method to make a request to any provided endpoint. */

    static async request(endpoint, data = {}, method = "get") {
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {}; // no headers needed at this time
        const params = method === "get" ? data : {};

        try {
            const response = await axios({ url, method, data, params, headers });
            return response.data;
        } catch (err) {
            console.log("API request retured error or failed...");
            console.log(err);
            let message = err.response.data.error.message;
            // return err.response.data.error;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Register user
     *  accepts: userData { firstName, lastName, email }
     *  returns: { id, email, firstName, lastName, state } */

    static async register(userData) {
        let response = await this.request("users", userData, "post");
        return response;
    }

    /** Get users
     *  returns: [{ id, email, firstName, lastName, state }, ...] */

    static async getUsers() {
        let response = await this.request(`users`, {}, "get");
        return response;
    }
}

export default YodlrApi;
