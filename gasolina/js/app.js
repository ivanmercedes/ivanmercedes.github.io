 const ui = new UI();

 document.addEventListener('DOMContentLoaded', ()=>{
           ui.mostrarEstablecimientos();
 }); 


 // hablitar busqueda de establecimientos

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input',()=>{
   if(buscador.value.length > 5){
       ui.obtenerSugerencias(buscador.value);
   }else{
    ui.mostrarEstablecimientos();
   }   
});