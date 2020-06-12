//While loop that prints out all the even numbers between 0 to 100:

console.log('While loop 1:');

let i = 0;

while (i <= 100) {
    i += 2;
    console.log(i)
}

//While loop that Prints every 3rd number backwards from 1 to 100:

console.log('While loop 2:');

let x = 100;

while (x >= 0) {
    x -= 3;

    if (x >= 0 ) {
        console.log(x);
    }
}

//For loop that prints every other number from 1 to 100:

console.log('For loop 1:');

for (let y = 1; y <= 100; y += 2) {
    console.log(y);
}

//For loop that prints evey number from 0 to 100 + (check conditions in word doc):

console.log('For loop 2:');

for (let z = 0; z <= 100; z++) {
    
    if (z % 3 == 0 && !(z % 5 == 0)) {

        console.log('Hello');

    } else if (z % 5 == 0 && !(z % 3 == 0)){

        console.log('World');

    } else if (z % 3 == 0 && z % 5 == 0){

        console.log('Hello World');

    } else {
        
        console.log(z);

    }
}