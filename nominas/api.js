class API{

    /**
     * @data nomina_fijos
     * @format JSON
     * @return Nombre,Departamento,Funcion,Estatus,Sueldo_Bruto.
     */
    async obtenerDatos(){
        const url = 'https://map.gob.do/api/datos_abiertos/data=nomina_fijos&format=json';
        const urlObtenerDatos =  await fetch(url);
        const  datos = await urlObtenerDatos.json();
        return{
            datos
         }
      }
    }
    