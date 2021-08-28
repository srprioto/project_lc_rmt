// get full
const gets = (url) => {

    return fetch(`${url}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Accept": "application/json",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, post, get',
            'Access-Control-Allow-Headers': 'Content-Type',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjIxMDM4ODc3LCJleHAiOjE2MjEwNDAzMTd9.-GhclnJSW2tU-wosrwV6B2ZYAJgvHoYr8HIjnNicFHw'
        }
    })
    .then(response => response.json())
    .then((response) => {   
        return response;
    })
    .catch(error => { console.log('request failed', error); }); // Syntax error: unexpected end of input

}


// get solo
const get = (url, id) => {

}


const post = (url) => {

}


const put = (url, id, value) => {
    
}


const destroy = (url, id) => {

}

















export default { 
    gets, get, post, put, destroy
};