const findTheOldest = function(people) {
    oldestPerson = people.reduce(function(oldestPerson, person) {
        if (typeof(person.yearOfDeath) == "undefined")
            person.yearOfDeath = 2025;
        if (oldestPerson == "" || oldestPerson.age < person.yearOfDeath - person.yearOfBirth)
        {
            oldestPerson = {name: person.name, age: person.yearOfDeath - person.yearOfBirth};
        }
        return oldestPerson;
    }, "");
    return (oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
