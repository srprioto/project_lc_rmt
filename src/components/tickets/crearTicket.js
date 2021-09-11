const crearTicket = async (msg, type = "R-Cedi-01") => { 

    const url = dominio() + "tickets" + "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjIxMDM4ODc3LCJleHAiOjE2MjEwNDAzMTd9.-GhclnJSW2tU-wosrwV6B2ZYAJgvHoYr8HIjnNicFHw";

    const data = {            
        description: msg,
        type: type
    };

    const headers = {
        'Content-Type': 'application/json'
    }

    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .finally( () => {

        toastSuccess("Ticket enviado");
    
    })

}


export default crearTicket;









