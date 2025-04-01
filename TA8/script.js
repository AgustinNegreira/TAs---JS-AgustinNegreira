function findTheOldest(people) {
    let oldestPersonAge = 0;
    let oldestPersonName = "";
    people.forEach(person => {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestPersonAge){
            oldestPersonAge = age;
            oldestPersonName = person.name;
        }
    });
    return `The oldest person is ${oldestPersonName} with the age of ${oldestPersonAge}`
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Agustin",
        yearOfBirth: 2004,
        yearOfDeath: 2080
    },
    {
        name: "Carlos",
        yearOfBirth: 1860,
        yearOfDeath: 1960
    },
]

console.log(findTheOldest(people));