


import (movies) from "movies js’;
document getElemeraById('finForm) addEventListener('submit, function (event) {
  event preventDefault() // Evita o envio do.  formulário//Obtém a idade e categorias Selecionadas 
  let age parseInt(document getElementById('age') value); // Converte a idade para número
  let categories=document.querySelectorAll(‘input[name="category"].checked’);
  let selectedCategories [];
  for (let1-0,1 categories length; i++) {
  selected Categories push(categones() value);
}
// Fitra os filmes com base ne ldade e categorias 
let finered Movies,
If(age 1 && age <=9){
  //Filtra Nimes adequados para idade de 0 a 9
   filteredMovies = movies.filter(
     (movie)=>
       movie ageftatirig 9 && selected Categories includes movie genre)
 );
}else{
  //Fillra filmes com base na categoria a idade
  filteredMovies = movies filter
    (movie)=>
       selected Categories includes movie genre) && movie.ageRating <= age
);
//Limpa os resultados anteriores
let movieResults=
document.getElementById('movieResults"),
movie Results innerHTML="

// Exibe os filmes
for (let i = 0; filderedMovies.length; i++) {
  let movie = filleredMovies[i];
  let movieDiv = document.createElement('div');
  movieDiv.classList.add('movie');
  movieDiv.innerHTML = `
    <h3>$(movie.title)</h3>
    <p><strong>Género:</strong>               $(movie.genre)</p>
    <p><strong>Sinopse:</strong> $(movie.synopsis)</p> 
    <iframe width="560" height="315" src="S(movie trailer)"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write, encrypted-media, gyroscope,
picture-in-picture" allowfullscreen></iframe>
` ;
movieResults.appendChild(movieDiv);
}
  // Se não houver filmes compatíveis
  if (filteredMovies.length === 0) (
     movieResults.innerHTML = '<p>Nenhum filme encontrado para as categorias Selecionadas.</p>';
 }
});
