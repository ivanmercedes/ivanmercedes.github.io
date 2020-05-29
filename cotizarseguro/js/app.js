// // constructor para seguro
// function Seguro(marca,anio,tipo){
//     this.marca = marca;
//     this.anio = anio;
//     this.tipo = tipo;

// }

// // todo lo que se muestra
// function Interfaz(){}

// //
// Seguro.prototype.cotizarSeguro = function(){
//     /**
//      *  1 = americano 1.15
//      *  2 = asiatico 1.05
//      *  3 = europeo 1.35
//      */
//     let cantidad;
//     const base = 2000;
  
//     switch(this.marca){
//         case '1':
//              cantidad = base * 1.15;
//              break;
//         case '2':
//              cantidad = base * 1.05;
//              break;
//         case '3':
//              cantidad = base * 1.35;
//              break;
//    }
//     const diferencia = new Date().getFullYear() - this.anio;
//     // cada ano de diferencia hay que reducir el valor del seguro un 3%
//     cantidad -= ((diferencia * 3) * cantidad) / 100;
//     /**
//      *  si el seguro es basico se multiplica por  30% mas
//      *  si es completo 50% mas
//      */
//     if(this.tipo ==='basico'){
//         cantidad *= 1.30;
//     }else{
//         cantidad *= 1.50;
//     }
//     return cantidad;
// }

// // mensaje que se muetra en el html
// Interfaz.prototype.mostrarError = function(mensaje,tipo){
//     const div = document.createElement('div');

//     if(tipo === 'error'){
//         div.classList.add('mensaje','error');
//     }else{
//         div.classList.add('mensaje','correcto');
//     }
//     div.innerHTML = `${mensaje}`;
//     formulario.insertBefore(div,document.querySelector('.form-group'));
//     setTimeout(function(){
//       document.querySelector('.mensaje').remove();
//     },3000);
// }

// // imprime el resultado 
// Interfaz.prototype.mostrarResultado = function(seguro,total){
//     const resultado = document.querySelector('#resultado');
//     let marca;
//     switch(seguro.marca){
//         case '1':
//             marca = 'Americano';
//          break; 
//          case '2':
//             marca = 'Asiatico';
//          break;   
//          case '3':
//             marca = 'Europeo';
//          break;     
//     }
//     // Crear div
//     const div = document.createElement('div');
//     // insertar la informacion
//     div.innerHTML = `
//        <p class="header"> Tu resumen: </p>
//        <p> Marca: ${marca}  </p>
//        <p>Ano: ${seguro.anio}  </p>
//        <p> Tipo: ${seguro.tipo}  </p>
//        <p> Total: $ ${total}  </p>
//     `;
//      const spinner = document.querySelector('#cargando img');
//      spinner.style.display = 'block';
//      setTimeout(function(){
//         spinner.style.display = 'none'; 
//         resultado.appendChild(div);
//      },3000);
// }

// // EventListeners
// const formulario = document.getElementById('cotizar-seguro');

// formulario.addEventListener('submit', function(e){
//     e.preventDefault();
//     // leer la marca selecionada del select
//     const marca = document.getElementById('marca');
//     const marcaSeleccionada = marca.options[marca.selectedIndex].value;
//     // Leer el ano seleccionado
//     const anio = document.getElementById('anio');
//     const anioSeleccionada = anio.options[anio.selectedIndex].value;
//     // lee el valor del radio button
//     const tipo = document.querySelector('input[name="tipo"]:checked').value;

//     // crear instancia de interfaz
//     const interfaz = new Interfaz();
    
//     // revisar que los campos no este vacio
//     if(marcaSeleccionada ==='' || anioSeleccionada==='' || tipo ===''){
//        // intaciar error
//        interfaz.mostrarError('Faltan datos revisa el formulario y prueba de nuevo','error');
//     //    console.log('error');
//     }else{
//        // limpiar resultado anteriores
//        const resultado = document.querySelector('#resultado div');
//        if(resultado !=null){
//            resultado.remove();
//        }
//       //intaciar seguro y mostrar interfaz
//       //   console.log('bien')
//       const seguro = new Seguro(marcaSeleccionada,anioSeleccionada,tipo);
//       // cotizar el seguro
//       const cantidad = seguro.cotizarSeguro();
//       // mostrar el resultado
//       interfaz.mostrarResultado(seguro,cantidad);
//       interfaz.mostrarError('Cotizando...','exito');

//     }

//    // console.log(tipo)
// });


// const max = new Date().getFullYear(),
//       min = max -20;

// const selectAnios = document.getElementById('anio');

// for(let i = max; i >= min; i--){
//     let option = document.createElement('option');
//     option.value = i;
//     option.innerHTML =i;
//     selectAnios.appendChild(option);
// }

/**
 * convirtiendo a emacs 6
 *  
 */



// constructor para seguro
class Seguro{
    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    cotizarSeguro(){
        /**
         *  1 = americano 1.15
         *  2 = asiatico 1.05
         *  3 = europeo 1.35
         */
        let cantidad;
        const base = 2000;
      
        switch(this.marca){
            case '1':
                 cantidad = base * 1.15;
                 break;
            case '2':
                 cantidad = base * 1.05;
                 break;
            case '3':
                 cantidad = base * 1.35;
                 break;
       }
        const diferencia = new Date().getFullYear() - this.anio;
        // cada ano de diferencia hay que reducir el valor del seguro un 3%
        cantidad -= ((diferencia * 3) * cantidad) / 100;
        /**
         *  si el seguro es basico se multiplica por  30% mas
         *  si es completo 50% mas
         */
        if(this.tipo ==='basico'){
            cantidad *= 1.30;
        }else{
            cantidad *= 1.50;
        }
        return cantidad;
    }

}

// todo lo que se muestra
class Interfaz{
    // mensaje que se muetra en el html
    mostrarError(mensaje,tipo){
        const div = document.createElement('div');
    
        if(tipo === 'error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div,document.querySelector('.form-group'));
        setTimeout(function(){
          document.querySelector('.mensaje').remove();
        },3000);
    }

    // imprime el resultado 
     mostrarResultado(seguro,total){
    const resultado = document.querySelector('#resultado');
    let marca;
    switch(seguro.marca){
        case '1':
            marca = 'Americano';
         break; 
         case '2':
            marca = 'Asiatico';
         break;   
         case '3':
            marca = 'Europeo';
         break;     
    }
    // Crear div
    const div = document.createElement('div');
    // insertar la informacion
    div.innerHTML = `
       <p class="header"> Tu resumen: </p>
       <p> Marca: ${marca}  </p>
       <p>Ano: ${seguro.anio}  </p>
       <p> Tipo: ${seguro.tipo}  </p>
       <p> Total: $ ${total}  </p>
    `;
     const spinner = document.querySelector('#cargando img');
     spinner.style.display = 'block';
     setTimeout(function(){
        spinner.style.display = 'none'; 
        resultado.appendChild(div);
     },3000);
}
    
}

 
 


// EventListeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // leer la marca selecionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    // Leer el ano seleccionado
    const anio = document.getElementById('anio');
    const anioSeleccionada = anio.options[anio.selectedIndex].value;
    // lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // crear instancia de interfaz
    const interfaz = new Interfaz();
    
    // revisar que los campos no este vacio
    if(marcaSeleccionada ==='' || anioSeleccionada==='' || tipo ===''){
       // intaciar error
       interfaz.mostrarError('Faltan datos revisa el formulario y prueba de nuevo','error');
    //    console.log('error');
    }else{
       // limpiar resultado anteriores
       const resultado = document.querySelector('#resultado div');
       if(resultado !=null){
           resultado.remove();
       }
      //intaciar seguro y mostrar interfaz
      //   console.log('bien')
      const seguro = new Seguro(marcaSeleccionada,anioSeleccionada,tipo);
      // cotizar el seguro
      const cantidad = seguro.cotizarSeguro();
      // mostrar el resultado
      interfaz.mostrarResultado(seguro,cantidad);
      interfaz.mostrarError('Cotizando...','exito');

    }

   // console.log(tipo)
});


const max = new Date().getFullYear(),
      min = max -20;

const selectAnios = document.getElementById('anio');

for(let i = max; i >= min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML =i;
    selectAnios.appendChild(option);
}




