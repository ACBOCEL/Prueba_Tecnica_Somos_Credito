const API_URL = 'http://localhost:3006';

// DOM
const sucursalesLista = document.getElementById('sucursales-lista');
const sucursalForm = document.getElementById('sucursal-form');
const sucursalIdInput = document.getElementById('sucursal-id');
const nombreInput = document.getElementById('nombre');
const direccionInput = document.getElementById('direccion');
const telefonoInput = document.getElementById('telefono');
const estadoInput = document.getElementById('estado');
const btnCancelar = document.getElementById('btn-cancelar');

// Primera Carga
document.addEventListener('DOMContentLoaded', () => {
    cargarSucursales();
    sucursalForm.addEventListener('submit', manejarEnvio);
    btnCancelar.addEventListener('click', resetForm);
});


// Mostrar sucursales existentes
async function cargarSucursales() {
    try {
        const response = await fetch(`${API_URL}/sucursales`);
        if (!response.ok) {
            throw new Error('La respuesta de la red no fue exitosa');
        }
        const sucursales = await response.json();
        mostrarSucursales(sucursales);
    } catch (error) {
        console.error('Error al cargar sucursales:', error);
        sucursalesLista.innerHTML = '<p>Error al cargar datos.</p>';
    }
}

function mostrarSucursales(sucursales) {
    sucursalesLista.innerHTML = ''; 
    if (sucursales.length === 0) {
        sucursalesLista.innerHTML = '<p>No hay sucursales registradas.</p>';
        return;
    }

    sucursales.forEach(sucursal => {
        const item = document.createElement('div');
        item.className = 'sucursal-item';
        
        const estadoTexto = sucursal.estado 
            ? '<span class="estado-activo">Activo</span>' 
            : '<span class="estado-inactivo">Inactivo</span>';

        item.innerHTML = `
            <div>
                <h3>${sucursal.nombre_suc}</h3>
                <p><strong>Dirección:</strong> ${sucursal.direccion}</p>
                <p><strong>Teléfono:</strong> ${sucursal.telefono}</p>
                <p><strong>Estado:</strong> ${estadoTexto}</p>
            </div>
            <div class="acciones">
                <button onclick="prepararEdicion(${sucursal.id})">Editar</button>
                <button onclick="eliminarSucursal(${sucursal.id})">Eliminar</button>
            </div>
        `;
        sucursalesLista.appendChild(item);
    });
}


// Crear y actualizar 
async function manejarEnvio(e) {
    e.preventDefault();

    // Recolectar datos del formulario
    const sucursalData = {
        nombre_suc: nombreInput.value,
        direccion: direccionInput.value,
        telefono: telefonoInput.value,
        estado: estadoInput.checked // 
    };

    const id = sucursalIdInput.value;
    let url = `${API_URL}/sucursales`;
    let method = 'POST';

    if (id) {
        url = `${API_URL}/sucursales/${id}`;
        method = 'PUT';
    }

    try {
        await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sucursalData)
        });
        
        resetForm();
        cargarSucursales(); 

    } catch (error) {
        console.error('Error al guardar sucursal:', error);
    }
}

// Eliminar Sucursal
async function eliminarSucursal(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta sucursal?')) {
        return;
    }

    try {
        await fetch(`${API_URL}/sucursales/${id}`, {
            method: 'DELETE'
        });
        cargarSucursales();
    } catch (error) {
        console.error('Error al eliminar sucursal:', error);
    }
}


// Editar y resetear Froms
async function prepararEdicion(id) {
    try {
        // Obtenemos los datos frescos de esa sucursal
        const response = await fetch(`${API_URL}/sucursales/${id}`);
        const sucursal = await response.json();

        // Llenar el formulario con los datos
        sucursalIdInput.value = sucursal.id;
        nombreInput.value = sucursal.nombre_suc;
        direccionInput.value = sucursal.direccion;
        telefonoInput.value = sucursal.telefono;
        estadoInput.checked = sucursal.estado;

        btnCancelar.classList.remove('hidden');
        sucursalForm.querySelector('h2').innerText = 'Editando Sucursal';

    } catch (error) {
        console.error('Error al cargar datos para editar:', error);
    }
}

function resetForm() {
    sucursalForm.reset();
    sucursalIdInput.value = '';
    btnCancelar.classList.add('hidden');
    sucursalForm.querySelector('h2').innerText = 'Crear Nueva Sucursal';
}