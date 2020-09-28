/*
// const newArry = [...dddddd, ...ssssss];

//const tests = superheroes.filter(test => test.publisher === "Marvel Comics").map(todo => todo.name)


*/


console.log(``);
console.log(`               ===== LEVEL 18 - Array methods - SuperHeroes van .map .filter .reduce =====`);
console.log(``);
console.log(``);


const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": 'unknown'
    }
];

console.log(`===== Opdracht 1: Maak een arry van alle superheroes namen =====`);
const allSuperheroesToGether = superheroes.map(item => item.name);
console.log(allSuperheroesToGether);
console.log(``);



console.log(`===== Opdracht 2: Maak een array van alle "lichte" superhelden (< 190 pounds) =====`);
const allListlightHeroes = superheroes.filter(item => item.weight < 190);
console.log(allListlightHeroes);
console.log(``);




console.log(`===== Opdracht 3: Array superhelden die 200 pounds wegen + namen =====`);
const weighTwoHundredPounds = superheroes.filter(weightHero => weightHero.weight == "200").map(nameHero => nameHero.name)
console.log(weighTwoHundredPounds);
console.log(``);




console.log(`===== Opdracht 4: Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad =====`);
const firstApearencesComic = superheroes.filter(item => item.name).map(first => first.first_appearance)
console.log(firstApearencesComic);
console.log(``);




console.log(`===== Opdracht 5a: array met alle superhelden van DC Comics.=====`);
const allDcSuperHeroes = superheroes.filter(dc_hero => dc_hero.publisher === "DC Comics");
console.log(allDcSuperHeroes);
console.log(``);

console.log(`===== Opdracht 5b: array met alle superhelden van Marvel Comics.=====`);
const allMarvelSuperHeroes = superheroes.filter(marvel_hero => marvel_hero.publisher === "Marvel Comics");
console.log(allMarvelSuperHeroes);
console.log(``);



console.log(`===== Opdracht 6: Total weight superheroes of DC Comics =====`);
const totalWeightAtDCcommics = superheroes.filter(item => item.publisher === "DC Comics").
    map(item => parseInt(item.weight)).reduce((accu, currentValue) => accu + currentValue, 0);
console.log(`Total weight superheroes of DC Comics = ${totalWeightAtDCcommics} Pounds`);
console.log(``);




console.log(`===== Opdracht 7: Doe hetzelfde met alle superhelden van Marvel Comics =====`);
const totalWeightAtMarvelComics = superheroes.filter(item => item.publisher === "Marvel Comics").
    map(item => parseInt(item.weight)).filter(value => !Number.isNaN(value)).
    reduce((acc, item) => acc + item, 0);
console.log(`Total weight superheroes of Marvel Comics = ${totalWeightAtMarvelComics} Pounds`);
console.log(``);




console.log(`===== Opdracht 8: Bonus: zoek de zwaarste superheld! =====`);
const heaviestSuperHero = [...allDcSuperHeroes, ...allMarvelSuperHeroes].
    map(gewicht => parseInt(gewicht.weight)).
    filter(gewicht => !Number.isNaN(gewicht));

console.log(Math.max(...heaviestSuperHero))
console.log(`Waarom is deze zo lastig?, kom er niet uit. nou ja ik heb toch wat :-) `);

// "name": "Hulk",  
// "publisher": "Marvel Comics",
// "alter_ego": "Bruce Banner",
// "first_appearance": "The Incredible Hulk #1",
// "weight": "1400"

console.log(``);