import ApiResource from "./ApiResource.js"
const url = "auth"

export default class AuthService extends ApiResource {
    async login(){
        const response = await new ApiResource("get","thisUrl.com");
        return response.generateFetch();
    }

    // this needs to be implemented
    register(){
        return 0;
    }
}
