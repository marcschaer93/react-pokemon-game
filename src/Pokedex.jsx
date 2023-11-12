import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemons }) {
  return (
    <div className="Pokedex">
      {pokemons.map((p) => (
        <div key={p.id}>
          <Pokecard {...p} />
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
