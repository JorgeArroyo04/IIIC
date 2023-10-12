document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("data-form");
    const registros = document.getElementById("registros");
    const agregarBtn = document.getElementById("agregar-btn");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
    });

    agregarBtn.addEventListener("click", function() {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const dni = document.getElementById("dni").value;
        const genero = document.getElementById("genero").value;

        if (nombre && edad && dni && genero) {
            const registro = document.createElement("div");
            registro.className = "registro";
            registro.innerHTML = `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Edad:</strong> ${edad}</p>
                <p><strong>DNI:</strong> ${dni}</p>
                <p><strong>Género:</strong> ${genero}</p>
                <button class="eliminar-btn">Eliminar</button>
            `;

            registro.querySelector(".eliminar-btn").addEventListener("click", function() {
                registro.remove();
            });

            registros.appendChild(registro);

            // Reiniciar el formulario
            form.reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});
