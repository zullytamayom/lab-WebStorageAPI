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






function updateFavoritesList() {
    // Obtener contenedor
    const contenedor = document.getElementById("mostrarFavoritos");

    // Limpiar contenido previo
    contenedor.innerHTML = "";

    // Obtener favoritos desde localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Recorrer favoritos
    favoritos.forEach(pokemon => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${pokemon.name}</p>
            <img src="${pokemon.image}" width="100">
        `;

        contenedor.appendChild(div);
    });
}