
export function validar(cliente){
    
   return !Object.values(cliente).every(input => input !== '');
    
  }

export  function mostrarHTML(mensaje){

    const formulario = document.querySelector('#formulario');
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
      const message = document.createElement('p');
      message.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3'
      ,'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
      message.textContent = mensaje;

      formulario.appendChild(message);
      
      setTimeout(()=>{
        message.remove();
      },3000)

    }
  }