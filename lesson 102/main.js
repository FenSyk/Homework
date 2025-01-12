let user = {
    name: "Дмитрий",
    age: 30
};

user.greet = function(name) {
    return `Hello "${name}"`;
};

console.log(user.greet("Дмитрий"));

let users = [
    { name: "Иван", isAdmin: false },
    { name: "Мария", isAdmin: true },
    { name: "Сергей", isAdmin: false },
    { name: "Ольга", isAdmin: false }
];

let simpleUserCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUserCount++;
    }
}

console.log(simpleUserCount);
