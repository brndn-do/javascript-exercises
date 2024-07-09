const findTheOldest = function(people) {
    return people.reduce((acc, curr) => {
        function getAge(person) {
            let date = new Date();
            let yearOfDeath = date.getFullYear();
            if (person.yearOfDeath) {
                yearOfDeath = person.yearOfDeath;
            }
            return yearOfDeath - person.yearOfBirth;
        }
        if (getAge(curr) > getAge(acc)) {
            return curr;
        }
        return acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
