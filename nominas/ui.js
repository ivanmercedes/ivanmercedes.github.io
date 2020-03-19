 class UI{
    //Insertar tabla
    insetarTabla(info){
      
     

      const div = document.createElement('div');
      div.className = 'shadow-lg bg-white p-3 animated once zoomIn table-responsive delay-1s rounded';  
      const table = document.createElement('table');
      table.id ='datosPublicos';
      table.className = 'table table- table- table-hover';
      
      // cabecera
      const cabecera = document.createElement('thead');
      table.appendChild(cabecera);
      const th = ['Nombre','Departamento','Funcion','Salario'];
      const trTh = document.createElement('tr');
      
      th.forEach(elementos=>{
        const tr = document.createElement('th');
        tr.innerText = elementos;
        trTh.appendChild(tr);
      });
      
      cabecera.appendChild(trTh);
      const tbody = document.createElement('tbody');
      info.datos.forEach(elementos=>{
        const tr = document.createElement('tr');
        // tr.className = 'bg-primary text-white';
        tr.innerHTML = `
        <td>${elementos.Nombre}</td>
        <td>${elementos.Departamento}</td>
        <td>${elementos.Funcion}</td>
        <td>$ ${new Intl.NumberFormat().format(elementos.Sueldo_Bruto)}</td>
        `;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      div.appendChild(table);
      app.appendChild(div);

      $('#datosPublicos').DataTable(opciones);
    }

    // muestra los datos en el html
    mostrarDatosHtml(){
        api.obtenerDatos()
        .then(datos=>{
            this.cargadoDatos();
           setTimeout(()=>{
               app.querySelector('div').remove();
                this.estadisticas(datos);
                this.insetarTabla(datos);
           },3000);
          
        });
     }

     cargadoDatos(){
        const div = document.createElement('div');
        div.className = 'sk-folding-cube';
        const template = `   
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        `;
        div.innerHTML = template;
        app.appendChild(div);
     }

     estadisticas(info){
        
         const div = document.createElement('div');
         div.className ='row mb-4 animated once bounceInDown delay-1s';
         
         const col = `
          <div class="col-md-3">
            <div class="bg-white p-4 shadow-lg rounded text-center">
              <span class="h2"><i class="fas fa-users"></i> ${info.datos.length}</span>
            </div> 
          </div>
          <div class="col-md-4">
          <div class="bg-white p-4 shadow-lg rounded text-center">
            <span class="h2"><i class="fas fa-dollar-sign"></i> ${this.totalPagos(info.datos)}</span>
          </div> 
        </div>
         `;
         div.innerHTML = col;
         app.appendChild(div);
     }

     totalPagos(info){
        let r = info.reduce((a,b) => a + (b['Sueldo_Bruto'] || 0),0);
        r = parseFloat(r).toFixed(0);
        r = new Intl.NumberFormat().format(r);
        return r;
     }
 }