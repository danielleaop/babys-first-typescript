//problem 1
function stitchBehaviourNVibesCalculator(stitchNaughtyLevel: number, stitchGoodLevel: number): number {
    return stitchGoodLevel - stitchNaughtyLevel;
}
console.log(stitchBehaviourNVibesCalculator(10, 9000)); //  Desired output: -8990 ✅


//problem 2
interface Author{
name: string;
age: number;
}
function appreciateAuthor(author: Author): string {
    return `Hello, ${author.name} !! I am eternally grateful that you
     have lived ${author.age} years of life, all to write amazing books just for me! *evil yet appreciative grin*`;
}
const author = { name: "Ann Leckie", age: 58 };
console.log(appreciateAuthor(author)); // Outputs: Hello, Ann Leckie !! I am eternally grateful that you have lived 58 years of life, all to write amazing books just for me! *evil yet appreciative grin*✅


//problem 3 - THE FINAL ONE

interface Experiment {
    name: string;
    code: number;
    creator: string;
    episode: string;
}

// Correct the experiment objects
const stitch: Experiment = {
    name: "Stitch",
    code: 626,
    creator: "Jumba Jookiba",
    episode: "Lilo & Stitch: The Movie"
};

const sparky: Experiment = {
    name: "Splodyhead",
    code: 619,
    creator: "Jumba Jookiba", // Changed maker to creator
    episode: "Lilo & Stitch: The Series, Episode 11"
};

const angel: Experiment = {
    name: "Angel",
    code: 624,
    creator: "Jumba Jookiba",
    episode: "Lilo & Stitch: The Series, Episode 31" // Fixed typo "esipode" to "episode"
};

// Function to get secret info
function getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(experiment: Experiment): string {
    return `${experiment.name} (Experiment ${experiment.code}) was created by ${experiment.creator} and appeared in "${experiment.episode}".`;
}

// Example usage
console.log(getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(stitch));
console.log(getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(sparky));
console.log(getSuperTopSecretInfoOnExperimentsTotallyDidNotStealFromJumba(angel)); //Stitch (Experiment 626) was created by Jumba Jookiba and appeared in "Lilo & Stitch: The Movie". Splodyhead (Experiment 619) was created by Jumba Jookiba and appeared in "Lilo & Stitch: The Series, Episode 11". Angel (Experiment 624) was created by Jumba Jookiba and appeared in "Lilo & Stitch: The Series, Episode 31".✅

