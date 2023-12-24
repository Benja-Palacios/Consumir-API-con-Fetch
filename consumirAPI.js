async function obtenerDatos(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error('❎')
        }
        const data = await res.json();
        console.log(data);
        insertarDatosEnTabla(data);
    } catch (err) {
        console.error(err);
    }
}

function insertarDatosEnTabla(data) {
    const tabla = document.getElementById("tableUsers");
    const thead = tabla.querySelector('thead');
    const tbody = tabla.querySelector('tbody');

    // Limpiar el contenido anterior de la tabla
    thead.innerHTML = '';
    tbody.innerHTML = '';

    // Crear encabezados basados en las propiedades del primer objeto
    const encabezados = Object.keys(data[0]);
    const encabezadosHTML = encabezados.map(
        encabezado => `<th>${encabezado}</th>`
    ).join('');
    thead.innerHTML = `<tr>${encabezadosHTML}</tr>`;

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdasHTML = encabezados.map(
            encabezado => `<td>${usuario[encabezado]}</td>`
        ).join('');
        fila.innerHTML = celdasHTML;
        tbody.appendChild(fila);
    });
}


obtenerDatos();