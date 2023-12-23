async function obtenerDatos(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) {
            throw new Error('❎')
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err)
    }
}

obtenerDatos();