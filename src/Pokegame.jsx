import Pokedex from "./Pokedex";
import "./Pokegame.css";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to split cards into two hands
function splitPokemons(pokemons) {
  // Shuffle the cards array
  const shuffledCards = shuffleArray([...pokemons]);

  // Calculate the midpoint for splitting
  const midpoint = Math.ceil(shuffledCards.length / 2);

  // Split the cards into two hands
  const leftHand = shuffledCards.slice(0, midpoint);
  const rightHand = shuffledCards.slice(midpoint);

  return [leftHand, rightHand];
}

const pokemons = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const [leftHand, rightHand] = splitPokemons(pokemons);

function Pokegame() {
  let leftEXP = 0;
  leftHand.forEach((p) => {
    leftEXP += p.base_experience;
  });

  let rightEXP = 0;
  rightHand.forEach((p) => {
    rightEXP += p.base_experience;
  });

  const leftIsWinner = leftEXP > rightEXP;
  const rightIsWinner = rightEXP > leftEXP;

  return (
    <div className="pokegame">
      <div className="lefthand">
        <h4>Left Hand</h4>
        {leftIsWinner ? (
          <h3 className="winner">Winner! 👑</h3>
        ) : (
          <h3 className="loser">Loser!</h3>
        )}
        <p>Total EXP: {leftEXP}</p>
        <Pokedex pokemons={leftHand} />
      </div>

      <div className="righthand">
        <h4>Right Hand</h4>
        {rightIsWinner ? (
          <h3 className="winner">Winner! 👑</h3>
        ) : (
          <h3 className="loser">Loser!</h3>
        )}
        <p>Total EXP: {rightEXP}</p>
        <Pokedex pokemons={rightHand} />
      </div>
    </div>
  );
}

export default Pokegame;
