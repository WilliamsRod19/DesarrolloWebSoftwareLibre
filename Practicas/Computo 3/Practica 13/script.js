const contentFilas = document.querySelector("#filas-content");
const templateFilas = document.querySelector("#filas-template");

const contentDetalles = document.querySelector("#detalles-content");
const templateDetalles = document.querySelector("#detalles-template");

const btnGuardar = document.querySelector("#btn-guardar");
const btnCancelar = document.querySelector("#btn-cancelar");
const txtNombre = document.getElementById("txtNombre");
const txtCantidad = document.getElementById("txtCantidad");
const txtPrecio = document.getElementById("txtPrecio");
const fragment = document.createDocumentFragment();

let productos = [];

// Validaciones
function validarCampos() {
    const nombre = txtNombre.value.trim();
    const cantidad = txtCantidad.value.trim();
    const precio = txtPrecio.value.trim();

    // Verifica que los campos no estén en blanco
    if (!nombre) {
        alert("El campo 'Nombre' no puede estar vacío.");
        return false;
    }

    // Verifica que la cantidad sea un número entero positivo
    if (!/^\d+$/.test(cantidad)) {
        alert("El campo 'Cantidad' debe ser un número entero positivo.");
        return false;
    }

    // Verifica que el precio sea un número decimal válido
    if (!/^\d+(\.\d+)?$/.test(precio)) {
        alert("El campo 'Precio' debe ser un número válido.");
        return false;
    }

    return true;
}

// Evento para guardar los productos
btnGuardar.addEventListener("click", () => {
    if (!validarCampos()) {
        return; // Detiene la ejecución si hay errores
    }

    productos.push({
        id: productos.length + 1,
        name: txtNombre.value.trim(),
        stock: parseInt(txtCantidad.value.trim()), // Convertir a número entero
        price: parseFloat(txtPrecio.value.trim()) // Convertir a número decimal
    });

    filasTabla();
    mostrarDetalles();
    vaciarControles();
});

btnCancelar.addEventListener("click", () => {
    vaciarControles();
});

function filasTabla() {
    contentFilas.textContent = "";

    // Recorremos la lista de productos
    productos.forEach(item => {
        const clone = templateFilas.content.cloneNode(true);
        clone.querySelector(".id").textContent = item.id;
        clone.querySelector(".name").textContent = item.name;
        clone.querySelector(".stock").textContent = item.stock;
        clone.querySelector(".price").textContent = `$ ${item.price.toFixed(2)}`;
        clone.querySelector(".btn-remover").dataset.id = item.id;
        fragment.appendChild(clone);
    });

    contentFilas.appendChild(fragment);
    agregarBotonRemover();
}

function mostrarDetalles() {
    contentDetalles.textContent = "";

    productos.forEach(item => {
        const clone = templateDetalles.content.cloneNode(true);
        clone.querySelector("#producto").textContent = item.name;
        clone.querySelector("#sumatoria").textContent = `$ ${(item.price * item.stock).toFixed(2)}`;
        fragment.appendChild(clone);
    });

    contentDetalles.appendChild(fragment);
}

function agregarBotonRemover() {
    const buttons = document.querySelectorAll(".btn-remover");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let id = parseInt(btn.dataset.id);
            removerProducto(id);
            filasTabla();
            mostrarDetalles();
        });
    });
}

function removerProducto(id) {
    productos = productos.filter(item => item.id !== id);
}

function vaciarControles() {
    txtNombre.value = "";
    txtCantidad.value = "";
    txtPrecio.value = "";
}

// Inicialización
filasTabla();
mostrarDetalles();
