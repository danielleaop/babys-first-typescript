//problem 1
function add(a, b) {
    return a + b;
}
console.log(add(5, "10")); // Outputs: 510 (string concatenation)


//problem 2
function greetUser(user) {
    return `Hello, ${user.name}`;
}
const user = { name: "John", age: 25 };
console.log(greetUser(user)); // Outputs: Hello, John


//problem 3
function buildName(firstName, lastName) {
    return `${firstName} ${lastName || "Doe"}`;
}

console.log(buildName("John")); // Outputs: John Doe


//problem 4
function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3])); // Outputs: [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Outputs: ["c", "b", "a"]


//problem 5
function processPayment(payment) {
    if (payment.type === "card") {
        console.log(`Processing card payment of ${payment.amount}`);
    } else if (payment.type === "cash") {
        console.log(`Processing cash payment of ${payment.amount}`);
    }
}
processPayment({ type: "card", amount: 100 });


