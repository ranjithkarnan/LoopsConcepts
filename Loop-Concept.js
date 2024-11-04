//Loop Statement in Java Script 

// For loop
// While loop
// Do while loop
// For in loop
// For of loop

// For loop:

Syntax:
for(inlinevariable;condition;steps){
console.log();
}

for(let i = 10; i>=1; i--){
    if(i % 2 !== 0)
    {
        console.log("Odd Number #"+ i);
    }
}

// while loop:

let i = 22;

while (i>1)
{
    if(i % 2 !== 0)
    {
        console.log("Odd Number #"+ i);
    }
    i--;
}

// do- while loop:

// Sytax : 
// do {
//     code
// }    while();

let a = 20;
do {
        if(a % 2 == 0)
    {
        console.log("Odd Number #"+ i);
    }
    a--;
}while(a>10);


// for in loop
const person = {
    name: " Anbu",
    Age : 29,
    Gender : "Male"
};

for (let key in person){
    console.log( key +" : " , person[key]);
}


let colors = [ 'Red', 'Blue', 'Yellow']
for(let key in colors){
    console.log(colors[key]);
    
}

// for of loop

let colorss = [ 'Red', 'Blue', 'Yellow']
for (let mute of colors){
    console.log("color : "+ mute);
    
}
