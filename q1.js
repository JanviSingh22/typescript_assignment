function greetUser(user) {
    return "Hello, ".concat(user.firstName, " ").concat(user.lastName, "!");
}
var user = { firstName: "Sara", lastName: "Ali" };
console.log(greetUser(user));
