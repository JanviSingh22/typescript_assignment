type User = {

    firstName: string;
    lastName: string;
};

function greetUser(user) {
  return `Hello, ${user.firstName} ${user.lastName}!`;
}

const user: User = { firstName: "Sara", lastName: "Ali" };