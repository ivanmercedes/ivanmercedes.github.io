class UI {
    constructor() {
          
         this.api = new API();
         // crear los marker con layer group
         this.markers = new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }  

    mostrarEstablecimientos(){
         this.api.obtenerDatos()
            .then(datos=>{
               const resultado = datos.respuestaJSON.results;
               this.mostrarPines(resultado);
            });
    }

    mostrarPines(datos){
        // limpiar los markers
        this.markers.clearLayers();
        // recorrer los datos de establecimientos
        datos.forEach(dato =>{
            const {latitude, longitude, calle, regular, premium} = dato;

            // crear popup
            const opcionesPopUp = L.popup().setContent(
                `<p><b>Calle:</b> ${calle}</p>
                <p><b>Regular:</b> ${regular}</p>
                <p><b>Premium:</b> ${premium}</p>
                `
            );
            // agregar pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);

            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
            .then(datos =>{
                const resultados = datos.respuestaJSON.results;
                //
                this.filtrarSugerencias(resultados,busqueda);
            });
    }
    // filtra las sugerencias en base al input
    filtrarSugerencias(resultado,busqueda){
        // filtrar con .filtrer
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
         
        // mostrar los pines
        this.mostrarPines(filtro);

    }
    
}