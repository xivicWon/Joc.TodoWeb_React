import {API_BASE_URL} from "../AppConfig";


export function call(api, method, data ){

    const url = API_BASE_URL + api;
    const options = {
        headers : new Headers(
            {"Content-Type" :"application/json"}
        ),        
        method : method 
    }

    options.body = data && JSON.stringify(data);

    return fetch(url, options )
        .then( res => {
            console.log(res)
            if( !res.ok){
                return Promise.reject("ERROR")
            }
            return res.json()
        })
}
