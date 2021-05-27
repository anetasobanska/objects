const aneta = {
    firstName: 'Aneta',
    lastName: 'Sobanska',
    birthYear: 1977,
    friends: ['Beata', 'Kasia', 'Roger'],
    job: 'web developer',
    hasDriverLicense: true,

    calcAge: function () { 
        this.age = 2021 - this.birthYear;
        return this.age;
     },

     getSummary: function(){
         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and she has ${this.hasDriverLicense ? 'a' : 'no'} driver\'s license`;
     }
}

// Aneta has 3 friends, and his best friend is called Kasia.
console.log(`${aneta.firstName} has ${aneta.friends.length} friends and his best friend is called ${aneta.friends[1]}`);

// Aneta is a 44-years-old web developer and she has/no driver's license. 
console.log(aneta.getSummary());

const bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,

    calcBmi: function () { 
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
     }
}
const sam = {
    firstName: 'Sam',
    lastName: 'Lebovski',
    mass: 92,
    height: 1.95,

    calcBmi: function () { 
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
     }
}

bob.calcBmi();
sam.calcBmi();

if(sam.calcBmi() > bob.calcBmi()){
    console.log(`Sam's BMI (${sam.bmi}) is heigher than Bob's (${bob.bmi})`);
} else {
        console.log(`Bob's (${bob.bmi}) is heigher than Sam's BMI (${sam.bmi}) `);
};
