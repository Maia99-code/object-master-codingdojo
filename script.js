const pokemon = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
]);


// Filtrar Pokémon con identificación divisible por 3
const divisibleBy3 = pokemon.filter(({ id }) => id % 3 === 0);
console.log("Pokémon con identificación divisible por 3:", divisibleBy3);

// Filtrar Pokémon de tipo fuego
const fireType = pokemon.filter(({ types }) => types.includes("fire"));
console.log("Pokémon de tipo fuego:", fireType);

// Filtrar Pokémon con más de un tipo
const multipleTypes = pokemon.filter(({ types }) => types.length > 1);
console.log("Pokémon con más de un tipo:", multipleTypes);

// Obtener una matriz con solo los nombres de los Pokémon
const pokemonNames = pokemon.map(({ name }) => name);
console.log("Nombres de Pokémon:", pokemonNames);

// Obtener una matriz con solo los nombres de Pokémon con identificación mayor que 99
const namesGreaterThan99 = pokemon.filter(({ id }) => id > 99).map(({ name }) => name);
console.log("Nombres de Pokémon con identificación mayor a 99:", namesGreaterThan99);

// Obtener una matriz con solo los nombres de los Pokémon cuyo único tipo es veneno
const poisonTypeNames = pokemon.filter(({ types }) => types.length === 1 && types[0] === "poison").map(({ name }) => name);
console.log("Nombres de Pokémon de tipo veneno:", poisonTypeNames);

// Obtener una matriz con solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const firstTypeFlying = pokemon.filter(({ types }) => types.length > 1 && types[1] === "flying").map(({ types }) => types[0]);
console.log("Primer tipo de Pokémon cuyo segundo tipo es volador:", firstTypeFlying);

// Contar la cantidad de Pokémon de tipo "normal"
const normalCount = pokemon.filter(({ types }) => types.includes("normal")).length;
console.log("Cantidad de Pokémon de tipo normal:", normalCount);
