const api = new API();
const ui = new UI();
const app = document.getElementById('app');

const opciones = {
    "language": {
        "lengthMenu": "Mostrar _MENU_ por pagina",
        "zeroRecords": "Nothing found - sorry",
        "info": "Pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No ha registro displonible",
        "infoFiltered": "( filtrado de _MAX_ )",   
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    ui.mostrarDatosHtml();
});


 

