//problem 1
function stitchBehaviourNVibesCalculator(stitchNaughtyLevel, stitchGoodLevel) {
    return stitchGoodLevel - stitchNaughtyLevel;
}
console.log(stitchBehaviourNVibesCalculator("10", 9000)); // Outputs: error!  Desired output: -8990


//problem 2
function appreciateAuthor(author) {
    return `Hello, ${author.name} !! I am eternally grateful that you
     have lived ${author.age} years of life, all to write amazing books just for me! *evil yet appreciative grin*`;
}
const author = { name: "Ann Leckie", age: 58 };
console.log(appreciateAuthor(author)); // Outputs: Hello, Ann Leckie !! I am eternally grateful that you have lived 58 years of life, all to write amazing books just for me! *evil yet appreciative grin*


//problem 3
function reverseThatAlienExperimentArray(arr) {
    return arr.reverse();
}
console.log(reverseThatAlienExperimentArray([626, 624, 619])); // Outputs: [619, 624, 626]
console.log(reverseThatAlienExperimentArray(["Stitch", "Angel", "Splodyhead"])); // Outputs: ["Splodyhead", "Angel", "Stitch"]


//problem 4 - THE FINAL ONE
const stitch = {
    name: "Stitch",
    code: 626,
    creator: "Jumba Jookiba",
    episode: "Lilo & Stitch: The Movie"
};

const sparky = {
    name: "Splodyhead",
    code: 619,
    maker: "Jumba Jookiba",
    episode: "Lilo & Stitch: The Series, Episode 11"
};

const angel = {
    name: "Angel",
    code: 624,
    creator: "Jumba Jookiba",
    esipode: "Lilo & Stitch: The Series, Episode 31
};

function getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(experiment) {
    return `${experiment.name} (Experiment ${experiment.code}) was created by ${experiment.creator} and appeared in "${experiment.episode}".`
}
console.log(getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(experiment))
