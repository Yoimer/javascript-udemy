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

function someFun(par) {
    // code
}

var someFun = function(par) {
    //code
}

// Expressions (always produce a value, an outcome)
 3 + 4 ;
var x = 3:

//statements (just perfome an action)
if (x === 5) {
    // do somenthing
}