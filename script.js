// lecture: variables

/*var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge); */


//lecture: variables 2

/*var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log (job);

job = 'teacher';

isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';

job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');

//console.log (lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// Lecture: operators
var now = 2016;
var birthYear = now - 26;

birthYear = now -26 * 2;

//2016 -52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5 ) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26

console.log(ageJohn);
console.log(ageMark);

ageJohn++;
console.log(ageJohn);

ageMark *= 2;
console.log(ageMark);*/

/////////////////////////////////////////////////////
// Lecture: if/else statements

/*var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)'); 
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}


if(isMarried) {
    console.log('YES!');
}

if(23 === "23") {
    console.log('Something to print...')
} else {
    console.log("Not equal!")
}*/


////////////////////////////////////////////////////////////////////////////////////
// Lecture: boolean logic and switch

/*var age = 25;

if(age < 20) {
    console.log('John is a teenager');
} else if ((age > 20) && (age < 30)) {
    console.log('John is a young man');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does john do?');

switch(job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.'); 
}*/

//////////////////////////////Challenge////////////////////////


// SOLUTION

/*var heightJohn = 190;
var heightMike = 250;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = (heightJohn) + (ageJohn * 5);
var scoreMike = (heightMike) + (ageMike * 5);*/

/*if(scoreJohn > scoreMike) {
    console.log('John is the winner');
} else if(scoreMike > scoreJohn) {
    console.log('Mike is the winner');
} else
    console.log('There is a draw');*/

/*var heightMary = 158;
var ageMary = 31;
var scoreMary = (heightMary) + (ageMary * 5 );

if ((scoreJohn > scoreMike) && (scoreJohn > scoreMary)) {
    console.log('John winds the dame with ' + scoreJohn + ' points!');
} else if((scoreMike > scoreJohn) && (scoreMike > scoreMary)) {
    console.log('Mike winds the game with ' + scoreMike + ' points!');    
} else if ((scoreMary > scoreJohn) && (scoreMary > scoreMike)) {
    console.log('Mary winds the game with ' + scoreMAry + ' points!');
} else {
    console.log('It\'s a draw');
}*/

////////////////////////////////////////////////////////////////////////
// Lecture : Functions


/*function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 2018);
*/

//////////////////////////////////////////////////////////////////
// Lecture : Statement and expressions

/*function someFun(par) {
    // code
}

var someFun = function(par) {
    //code
}

// Expressions (always produce a value, an outcome)
//3 + 4 ;
var x = 3;

//statements (just perfome an action)
if (x === 5) {
    // do somenthing
}*/

//////////////////////////////////////////////////////////////////
// Lecture : Arrays

/*var names = ['John', 'Jane', 'Mark'];

var years = new Array(1990, 1696, 1948);

//console.log(names[2]);
//names[1] = 'Ben';
//console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

console.log(john);

//.push adds element at the end of the array
john.push('blue');

//.unshift adds element at the beginning of the array
john.unshift('Mr')
console.log(john);

//.pop removes the last element of the array
john.pop();
console.log(john);

//.shift remove the first element of the array
john.shift();
console.log(john);

//.indexOf returns the postion of the element in the array
//if this element exits
//if if does not, it returns -1.
//to see what indexOf returns,
//let's use alert (this is one way to see it)
////alert(john.indexOf('Smith'));

//let's try an statement to find out if an element exists in
//the array
//an statement does not produce any inmediate output

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}*/

//////////////////////////////////////////////////////////////////
// Lecture : Objects

// order does not matter (it is not indexed as array is)
/*var john = {
    //key  //value
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

// one one to print it out
console.log(john.job);

// another way (Pythonic way like a list)
console.log(john['job']);

// assigning a variable value as a key
var xyz = 'yearOfBirth';

console.log(john[xyz]);

// data mutuation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

// another way to declare an object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);*/

 //////////////////////////////////////////////////////////////////
// Lecture : Objects and methods

/* v1.0
var john = {
    //key  //value
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1988,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    // this is another way to declare a function 
    //it has the same efect like a traditional way
    // this is the way to declare in an object
    calculateAge: function(yearOfBirth) {
        //return 2018 - yearOfBirth;
        // this reserved word means this object(john in this case)
        return 2018 - this.yearOfBirth;
    }
};


// this is the the traditional way to declare a function
//var calculateAge = function(yearOfBirth) {
//}

// displays family property
//console.log(john.family);

// displays a function call
// using dot notation
//console.log(john.calculateAge(2001));

// displays calculateAge by using
// the reserved key this inside the object
// note thae the property yearOfBirth is
// hardcorded
console.log(john.calculateAge());

// creating and assigning the age property
// in john object

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

//v2.0
/*var john = {
    //key  //value
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1988,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    // this is another way to declare a function 
    //it has the same efect like a traditional way
    // this is the way to declare it in an object
    calculateAge: function(yearOfBirth) {
        // creates a new property (age)
        // and assigns the value of yearOfBirth
        this.age = 2018 - this.yearOfBirth;
    }
};

// creates a new property (age)
// and assigns the value of yearOfBirth
// not calling it here, would not create the age property
john.calculateAge();
console.log(john);*/

 //////////////////////////////////////////////////////////////////
// Lecture : Loops

// for loops
/*for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// using the length method
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/

// printing out backwars the content of the array
//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*for(var i = (names.length - 1); i >= 0; i--) {
    console.log(names[i]);
}*/

// while loops
/*var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if(i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}*/

/////////////////////////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where
persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of persons
4. Use another loop to log into the console whether each person is of full age (18 or older),
as well as their age.

5. Finally, create a function called printFullAge which receives
the vector of years as an argument, executes the steps 2.,
3. and 4. and returns a vector of true/false
boolean values: true if the person is of full
age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different vectors and store the results in 
two variables: full_1 and full_2

Example inputs: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from
an array, like y[i], but also to set values in
an array, like y[i] = ... You can also use the specific
array methods.

*/

/*var years = [2001, 1985, 1994, 2014, 1973];
var ages = [];

// declare i this first time
// there is not need to do so any longer
for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];
}

for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
    } else {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
    }
}*/


function printFullAge(years) {

    var ages = [];
    var fullAges = [];

    // declare i this first time
    // there is not need to do so any longer
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
