let hunger = 50;
let happiness = 50;
let level = 0;
let hungerActive = false;

const hungerEl = document.getElementById("hunger");
const happinessEl = document.getElementById("happiness");
const levelEl = document.getElementById("level");
const pokemonImage = document.querySelector(".pokemon-card__image");
const pokemonNameEl = document.querySelector(".pokemon-card__name");
const countdownEl = document.getElementById("countdown");
const feedButton = document.querySelector(".pokemon-card__button--feed");
const playButton = document.querySelector(".pokemon-card__button--play");
const trainButton = document.querySelector(".pokemon-card__button--train");
let pokemonName = "";
let hungerTimer = "";

console.log(axios);

async function hatchEgg() {
  const hatchTime = 30;
  disableButtons();

  pokemonImage.src =
    "https://archives.bulbagarden.net/media/upload/4/45/Spr_4d_Egg.png";
  pokemonName = "Egg";
  pokemonNameEl.textContent = pokemonName;

  hungerEl.parentElement.classList.add("pokemon-card__stat--hidden");
  happinessEl.parentElement.classList.add("pokemon-card__stat--hidden");
  levelEl.parentElement.classList.add("pokemon-card__stat--hidden");
  countdownEl.classList.remove("pokemon-card__stat--hidden");

  console.log("Egg is hatching...");

  for (let remainingTime = hatchTime; remainingTime >= 0; remainingTime--) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = seconds < 10 ? `0${seconds}` : seconds;

    countdownEl.textContent = `Hatching in: ${minutes}:${formattedTime}`;

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  countdownEl.classList.add("pokemon-card__stat--hidden");
  hungerEl.parentElement.classList.remove("pokemon-card__stat--hidden");
  happinessEl.parentElement.classList.remove("pokemon-card__stat--hidden");
  levelEl.parentElement.classList.remove("pokemon-card__stat--hidden");

  console.log("Egg hatched!");
  await getRandomPokemon();
  resetStat();
  enableButtons();
}

function disableButtons() {
  feedButton.disabled = true;
  playButton.disabled = true;
  trainButton.disabled = true;
}

function enableButtons() {
  feedButton.disabled = false;
  playButton.disabled = false;
  trainButton.disabled = false;
}

async function getRandomPokemon() {
  try {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    displayPokemon(response.data);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    pokemonNameEl.textContent = "Error loading Pokemon";
    pokemonImage.src = "";
  }
}

async function displayPokemon(pokemon) {
  pokemonName = pokemon.name;
  pokemonNameEl.textContent = pokemonName;
  pokemonImage.src = pokemon.sprites.front_default;
  console.log(`Name: ${pokemon.name}`);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Starting hunger timer...");
  startHunger();
}

function resetStat() {
  hunger = 50;
  happiness = 50;
  level = 0;
  updateStat();
}

function updateStat() {
  hungerEl.textContent = hunger;
  happinessEl.textContent = happiness;
  levelEl.textContent = level;
}

function checkHunger() {
  if (hunger === 90) {
    alert(`${pokemonName} is starving!`);
  }
}

async function startHunger() {
  if (hungerActive) return;
  hungerActive = true;

  while (true) {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.max(happiness - 5, 0);

    if (hunger === 100 && happiness === 0) {
      hungerActive = false;
      alert(`${pokemonName} has run away!`);
      console.log("Restarting with a new egg...");
      await hatchEgg();
      return;
    }

    updateStat();
    checkHunger();
    checkHappiness();
    console.log(`Hunger increased! ${hunger}`);
    console.log(`Happiness decreased! ${happiness}`);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

function checkHappiness() {
  if (happiness === 10) {
    alert(`${pokemonName} is depressed.`);
  }
}

function feedPokemon() {
  hunger = Math.max(hunger - 10, 0);
  updateStat();

  pokemonImage.classList.add("pokemon-card__image--feeding");
  pokemonImage.addEventListener(
    "animationend",
    () => {
      pokemonImage.classList.remove("pokemon-card__image--feeding");
    },
    { once: true }
  );

  console.log(`hunger: ${hunger}`);
}

function playPokemon() {
  happiness = Math.min(happiness + 25, 100);
  updateStat();

  pokemonImage.classList.add("pokemon-card__image--playing");
  pokemonImage.addEventListener(
    "animationend",
    () => {
      pokemonImage.classList.remove("pokemon-card__image--playing");
    },
    { once: true }
  );

  console.log(`happiness: ${happiness}`);
}

let trainLevelUp = 0;

function levelPokemon() {
  trainLevelUp++;
  if (trainLevelUp % 3 === 0) {
    level++;
    levelEl.textContent = `${level}`;

    pokemonImage.classList.add("pokemon-card__image--training");
    pokemonImage.addEventListener(
      "animationend",
      () => {
        pokemonImage.classList.remove("pokemon-card__image--training");
      },
      { once: true }
    );

    console.log(`level: ${level}`);
  } else {
    console.log(`Train count: ${trainLevelUp}`);
  }
}

document
  .querySelector(".pokemon-card__button--feed")
  .addEventListener("click", feedPokemon);
document
  .querySelector(".pokemon-card__button--play")
  .addEventListener("click", playPokemon);
document
  .querySelector(".pokemon-card__button--train")
  .addEventListener("click", levelPokemon);

hatchEgg();
