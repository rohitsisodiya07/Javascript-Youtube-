//Array are Store more than 1 value and differt types of data

let myArray = ["Rohit", 21, false, null, undefined]

// console.log(myArray[0]);//Indexing Start From 0
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);//Print Undefined Because 6 Element Not Present in Array
myArray[5] = "Sisodiya" //Adding New Value to the Array

// console.log(myArray.length); // print length of String

myArray[2] = true //Arrays are Mutable. WArray Can be Changed
myArray[3] = 72 
// console.log(myArray);
// console.log(typeof(myArray)); // In Js Arrays are Objects

//Access Array Element Using For Loop
for( let i = 0 ; i < myArray.length ; i++){

    console.log(myArray[i]);
    
}


