window.onload = function() {

    var resultadoPlaylist = window.localStorage.getItem('playlist');

    playlist = JSON.parse(resultadoPlaylist);


    console.log(playlist);

    for (let i = 0; i < playlist.length; i++) {
        var element = playlist[i];

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + element)

        .then (function (respuesta) {
            return respuesta.json();
        })
        .then (function (informacionPlaylist) {
            console.log(informacionPlaylist);
            var element = informacionPlaylist;
            var cancionId = element.id;
            var artistId = element.artist.id;
            var playlistCancionId = element.id;

            var contenedorPlaylist = document.querySelector(".secciones");
            var contenidoPlaylist = "";

            contenidoPlaylist +='<div class="container-can">'
            contenidoPlaylist += '<iframe scrolling="no" frameborder="1px" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+cancionId+'&app_id=1" width="700" height="350"></iframe>'
            contenidoPlaylist += "<div class='canciones'>";
            contenidoPlaylist += "<a href='detail.html?cancionId=" + cancionId +"' class='vermas'> VER MÁS </a>";
            contenidoPlaylist += "<a href='playlist.html?playlistCancionId=" + playlistCancionId + "' class='agregar'><p>Add to playlist</p></a> ";
            contenidoPlaylist += "</div>";
            contenidoPlaylist += "</div>";
            


            contenedorPlaylist.innerHTML += contenidoPlaylist;

            

            
            var resultadoPlaylist = window.localStorage.getItem('playlist');

            playlist = JSON.parse(resultadoPlaylist);

            var agregar = document.querySelector('.agregar');

            if (playlist.includes(playlistCancionId)) {
                document.querySelector('.agregar').innerHTML = "Remove from playlist";
                document.querySelector('.agregar').style.textTransform = "uppercase";
                document.querySelector('.agregar').style.padding = "1%";
                document.querySelector('.agregar').style.width = "80%";
                document.querySelector('.agregar').style.backgroundColor = "grey";
                document.querySelector('.agregar').style.color = "black";
                document.querySelector('.agregar').style.marginTop = "3%";
                
            }
    
            agregar.addEventListener('click', function(agregarTrack){
                agregarTrack.preventDefault();
        
                if (playlist.includes(playlistCancionId)) {
                    var array = playlist.indexOf(playlistCancionId);
                    playlist.splice(array,1);
                } else{
                    playlist.push(playlistCancionId);
            }
    
            
    
            console.log(playlist);
    
            window.localStorage.setItem('playlist', JSON.stringify(playlist));
    
            console.log(playlist);
    
        })


    })

    
        
}




// no borrar
}
// no borrar