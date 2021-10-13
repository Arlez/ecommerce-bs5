const modalImagen = document.querySelector('#modal-imagen');
if(modalImagen){
    const divImagen = document.querySelector('.modal-body');
    const img = document.createElement('IMG');
    
    modalImagen.addEventListener('show.bs.modal', e=>{
        const enlace = e.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
    
        img.src = `img/${rutaImagen}.jpg`;
        img.classList.add('img-fluid');
        img.alt = 'Imagen Galeria';
        divImagen.appendChild(img);
    });
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()