function toggleDropdown() {
    console.log("Se ha hecho clic en el botón.");
    // Obtenemos el menú desplegable
    let dropdownMenu = document.getElementById("dropdownMenu");

    // Verificamos si el menú desplegable está actualmente visible o no
    let isVisible = dropdownMenu.classList.contains("show");

    // Si está visible, lo ocultamos; si está oculto, lo mostramos
    if (isVisible) {
        dropdownMenu.classList.remove("show"); // Ocultar el menú desplegable
    } else {
        dropdownMenu.classList.add("show"); // Mostrar el menú desplegable
    }
}

// Función constructora para el acordeón
function Accordion() {
    // Obtenemos todos los botones del acordeón
    let accordionButtons = document.querySelectorAll('.accordion-button');

    // Iteramos sobre cada botón y le agregamos un evento 'click'
    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtenemos el elemento colapsable asociado al botón
            var collapseTarget = document.querySelector(button.getAttribute('data-bs-target'));

            // Ocultamos todos los elementos colapsables del acordeón
            document.querySelectorAll('.accordion-collapse').forEach(function (collapse) {
                collapse.classList.remove('show');
            });

            // Mostramos solo el elemento colapsable asociado al botón actual
            collapseTarget.classList.add('show');
        });
    });
}

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const saveChangesBtn = document.getElementById('saveChangesBtn');

// Agregamos un event listener para el evento 'click'
openModalBtn.addEventListener('click', function () {
    // Utilizamos el método 'show' del modal para mostrarlo
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
});

closeModalBtn.addEventListener('click', function () {
    let myModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    myModal.hide();
});

saveChangesBtn.addEventListener('click', function () {
    alert('Cambios guardados.');
    let myModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    myModal.hide();
});
