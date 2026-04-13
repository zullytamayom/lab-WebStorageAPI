const btnBuscar = document.getElementById("btnBuscar");
const mostrarPokemon = document.getElementById("mostrarPokemon");
const btnFavoritos = document.getElementById("btnFavoritos");
const mostrarFavoritos = document.getElementById("mostrarFavoritos");


// btnBuscar.addEventListener("click",function(){

//    const nombre = document.getElementById("input").value;

//    console.log(nombre)
// })

btnBuscar.addEventListener("click", function () {

  const nombre = document.getElementById("input").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(res => res.json())
    .then(data => {

      console.log(data); //revisar

      mostrarPokemon.innerHTML = `
        <h3>${data.name}</h3>
        <img src="${data.sprites.front_default}">
      `;
    })
    .catch(() => {
      alert("Pokemun no encontrado");
    });

});

