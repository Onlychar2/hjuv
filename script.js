const formulario = document.getElementById('formulario');

const registro = document.getElementById('registro');

const exito = document.getElementById('exito');

formulario.addEventListener('submit',async(e) => {
  e.preventDefault();
 const respuesta = await fetch('https://api.sheetbest.com/sheets/2ff7ce54-0dd8-46ab-9bf5-9f06e791563b', {
    method: 'POST',
    mode: 'cors',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Nombre" : formulario.nombre.value,
       "Correo" : formulario.correo.value,
       "telefono" : formulario.telefono.value
      })
  });
  console.log(respuesta);
  
   registro.classList.remove('activo');
  exito.classList.add('activo');
});