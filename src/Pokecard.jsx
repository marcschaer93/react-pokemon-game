import "./Pokecard.css";

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h3 className="Name">{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />
      <p>Type:{type}</p>
      <p>EXP:{base_experience}</p>
    </div>
  );
}

export default Pokecard;
