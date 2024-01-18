
/*
El funcionamiento para GoogleMaps requiere que se tenga una KEY para
el trabajo con cualquier herramienta de Google. (Para ello se requiere
un registro previo para este servicio directamente con una cuenta 
gmail).

La documentación para la API de GoogleMaps se resume en una función para 
crear un objeto desde Google.

Este es únicamente un ejemplo de las opciones que presenta la libreria 
de Google.maps, en la página de Google existen diversas opciones depen-
diendo de qué uso se le quiera dar a esta API
*/

function iniciarMap(){
    //Creación de una coordenada para mostrar el área principal del mapa
    var coord = {lat:19.4284700 ,lng: -99.1276600};
    //Creación del mapa a través de un "Objeto"
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    //Creación de un marcador. Requiere igualmente las coordenadas a mostrar
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

}



