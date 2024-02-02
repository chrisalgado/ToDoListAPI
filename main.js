const API_URL_CREATE_ITEMS = "https://apitodo-2yow.onrender.com/items";
const API_URL_GET_ITEMS = "https://apitodo-2yow.onrender.com/items";
const api_key = "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9";


//function to POST the data to the API, no status needed since it will be a new task it shouldn't be on process or done. 
async function saveToDo(name, description, dueDate){
    
    const headers={
        'Content-Type':application/JSON,
        'Authorization': `Bearer ${api_key}`
    }

    const data = {
        name:name, 
        description: description, 
        status: 'todo',
        dueDate, dueDate
    };

    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Respuesta de la API');
        console.log(responseData);
    }catch(error){
        console.log(`Error al realizar la solicitud a la API ${error.message}`);
    }
}

const handleNewToDo = async (name, description, dueDate) => {
    const response = await saveToDo(name, description, dueDate);
    console.log(response);
}

console.log(handleNewToDo("prueba", "descripcion", "2024-10-13")); //test

//Function to get the task. 

async function getToDos(){
    const headers={
        'Content-Type':application/JSON,
        'Authorization': `Bearer ${api_key}`
    }

    try{
        const response = await fetch(API_URL_GET_ITEMS, {
            method: 'GET',
            headers: headers,
        });
    
        if(!response.ok){
            throw new Error(`Error en la solicitud ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Respuesta de la API: ');
        console.log(responseData);
    }catch(error){
        console.error(`Error al realizar la solicitud a la API ${error.message}`);
    }

}