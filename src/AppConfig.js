let beHost 
const hostname = window && window.location && window.location.hostname;

if( hostname === 'localhost'){
    beHost = 'http://localhost:8080';
}

export const API_BASE_URL = `${beHost}`;