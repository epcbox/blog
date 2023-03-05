import axios from "axios";
export const apiRoot = "api";

export default class ApiResource{

    constructor(method, url, body = null, conf = null){
        this.method = method;
        this.url    = url;
        this.body   = body;
        this.conf   = conf;

    }

    async generateFetch(){
        const config = {
            responseType: this.conf,
            headers: {
                "Content-Type": "application/json",
            }
        }

        try{
            let res;

            switch(this.method.toUpperCase()){
                case 'GET':
                    // return("pa eso?")
                    res = await axios.get(`${apiRoot}/${this.url}`, config, this.body);
                    break

                case 'POST':
                    res = await axios.post(`${apiRoot}/${this.url}`, config, this.body);
                    break

                case 'PUT':
                    res = await axios.put(`${apiRoot}/${this.url}`, config, this.body);
                    break

                case 'DELETE':
                    res = await axios.delete(`${apiRoot}/${this.url}`, config, this.body);
                    break

            }

            if (res !== undefined){
                return res;
            }
        }catch(e){
            return e;
        }
    }
}
