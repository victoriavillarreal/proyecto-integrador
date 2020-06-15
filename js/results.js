window.onload = function() {

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var resultadosBuscador = queryStringObj.get("q");

    function traemeResultados (event){
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + resultadosBuscador)
    
        .then(function(response){
            return response.json();
        })

        .then(function(informacionBuscador){
            console.log(informacionBuscador);

            var resultado = document.querySelector(".search-results");
            
        
            var contenidoResultado = "";

            for (let i = 0; i < informacionBuscador.data.length; i++) {
                var element = informacionBuscador.data[i];
                var cancionId = element.id;

                contenidoResultado += "<div class='caja uk-animation-toggle'>";
                contenidoResultado += "<img src='" + element.artist.picture_big + "' alt='' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                contenidoResultado += "<a href='detail.html?cancionId=" + cancionId +"'>";
                contenidoResultado += "<p class='uk-card uk-card-default  uk-animation-slide-bottom-small'>" + element.title + "</p>";
                contenidoResultado += "</a>"
                contenidoResultado += "</div>";

                console.log(element.type);
            
            }

            resultado.innerHTML = contenidoResultado;


        

        })

        .catch(function(error){
            console.log("El error fue " + error)
        })

    }

    resultadosBuscador = traemeResultados();
  




// no borrar    
}
// no borrar    
