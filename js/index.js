window.onload = function() {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/tracks")
    
        .then (function (respuesta) {
            return respuesta.json();
        })
        .then (function (informacionTracks) {
            console.log(informacionTracks);
    
            var track = document.querySelector(".tracks");
            
            var contenidoTrack = "";
    
    
    
            for (let i = 0; i < informacionTracks.data.length; i++) {
                var element = informacionTracks.data[i];
                var cancionId = element.id;
                var playlistCancionId = element.id;
    
                if (window == onload) {
                    contenidoTrack += "<div uk-spinner></div>"
                } else {
                    contenidoTrack += "<div class='caja uk-text-center uk-animation-toggle uk-card  uk-card-body'>";
                contenidoTrack += '<div class="uk-inline-clip uk-transition-toggle uk-light">';
                contenidoTrack += "<img src='" + element.artist.picture_big + "' alt='' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                contenidoTrack += '<div class="uk-position-center">';
                contenidoTrack += '</div>'
                contenidoTrack += '</div>'
                contenidoTrack += "<a href='detail.html?cancionId=" + cancionId +"'>";
                contenidoTrack += "<p class='uk-card uk-card-default  uk-animation-slide-bottom-small'>" + element.title + "</p>";
                contenidoTrack += "</a>";
                contenidoTrack += "</div>";
                }  
    
            }
    
            track.innerHTML = contenidoTrack;
    
            
        })
        .catch (function (error){
            console.log("El error fue" + error);
        })
    
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/albums/albums")
    
        .then (function (respuestaAlbums) {
            return respuestaAlbums.json();
        })
        .then (function (informacionAlbums) {
            console.log(informacionAlbums);
    
            var album = document.querySelector(".albums");
            
            var contenidoAlbum = "";
    
            for (let i = 0; i < informacionAlbums.data.length; i++) {
                var element = informacionAlbums.data[i];
                var albumId = element.id;
    
                if (window == onload) {
                    contenidoAlbum += "<div uk-spinner></div>"
                } else {
    
                    contenidoAlbum += "<div class='caja uk-animation-toggle'>";
                    contenidoAlbum += "<img src='" + element.cover + "' alt='' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                    contenidoAlbum += "<a href='detail.html?albumId=" + albumId +"'>";
                    contenidoAlbum += "<p>" + element.title + "</p>";
                    contenidoAlbum += "</a>";
                    contenidoAlbum += "</div>";
                }
            }
    
            album.innerHTML = contenidoAlbum;
    
        })
    
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artists/artists")
    
        .then (function (respuestaArtists) {
            return respuestaArtists.json();
        })
        .then (function (informacionArtists) {
            console.log(informacionArtists);
    
            var artists = document.querySelector(".artists");
            
            var contenidoArtists = "";
    
            for (let i = 0; i < informacionArtists.data.length; i++) {
                var element = informacionArtists.data[i];
                var artistId = element.id;
    
    
                if (window == onload) {
                    contenidoArtists += "<div uk-spinner></div>"
                } else {
                    contenidoArtists += "<div class='caja uk-animation-toggle'>";
                    contenidoArtists += "<img src='" + element.picture_big + "' alt='' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                    contenidoArtists += "<a href='detail.html?artistId=" + artistId +"'>";
                    contenidoArtists += "<p>" + element.name + "</p>";
                    contenidoArtists += "</a>";
                    contenidoArtists += "</div>";
                }
            }
    
            artists.innerHTML = contenidoArtists;
    
        })
    
    
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/playlists/playlists")
    
        .then (function (respuestaPlaylists) {
            return respuestaPlaylists.json();
        })
        .then (function (informacionPlaylists) {
            console.log(informacionPlaylists);
    
            var playlists = document.querySelector(".playlists");
            
            var contenidoPlaylists = "";
    
            for (let i = 0; i < informacionPlaylists.data.length; i++) {
                var element = informacionPlaylists.data[i];
                var playlistId = element.id;
    
    
                if (window == onload) {
                    contenidoPlaylists += "<div uk-spinner></div>"
                } else {
                    contenidoPlaylists += "<div class='caja uk-animation-toggle'>";
                    contenidoPlaylists += "<img src='" + element.picture_big + "' alt='' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                    contenidoPlaylists += "<a href='detail.html?playlistId=" + playlistId +"'>";
                    contenidoPlaylists += "<p>" + element.title + "</p>";
                    contenidoPlaylists += "</a>";
                    contenidoPlaylists += "</div>";
                }
            }
    
            playlists.innerHTML = contenidoPlaylists;
    
        })
    
    
        //js buscador
        document.addEventListener("touchstart", function(){}, true);
        //js buscador
    
    
        //PAGINA DE BIENVENIDA
    
        
        var titulo = document.querySelector('#titulo');
    
    
       var saludo = document.getElementById('saludo');
    
       var span = document.querySelector('.bienvenida span');
       var container = document.querySelector(".container")
       var all = document.querySelector('body');
    
        var personajes = document.querySelector('.personajes');
    
          personajes.style.display = "block";
          container.style.display = "flex";
          document.body.style.backgroundImage = "url('img/fondo.jpg')";
          document.body.style.height = "fit-content";
          document.body.style.backgroundSize = "initial";
    
    
    
    
    
    


    
    
    // no borrar
}
    // no borrar