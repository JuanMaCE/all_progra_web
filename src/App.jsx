import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=256")
      .then(res => res.json())
      .then(data => setPokemons(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Pokemones by JuanMaCE</h1>
      <div className="galeria">
        {pokemons.map((p, i) => (
          <PokemonCard key={i} url={p.url} />
        ))}
      </div>
    </div>
  );
}

function PokemonCard({ url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [url]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(",")}</p>
    </div>
  );
}

export default App;
