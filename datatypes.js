

//Primitive Datatypes - NN SS BB U

// let a = 54;
// let b = null;
// let c = "Rohit Sisodiya"
// let d = Symbol("I am a Symbol")
// let e = true;
// let f = BigInt(295) + BigInt(15)
// let g = undefined //let g;

// console.log(a, b, c, d, e, f, g)
// console.log( typeof a)
// console.log( typeof b)
// console.log( typeof c)
// console.log( typeof d)
// console.log( typeof e)
// console.log( typeof f)
// console.log( typeof g)

//Non-Primitive Datatype
//Objects
const details = {
    "Name" : "Rohit Sisodiya",
    "Age" : 20,
    "Stream" : "MERN Stack",
    "Address" : {
        "State" : "Rajasthan",
        "City" : "Jaipur",
        "Area" : "Shastri Nagar"
    } 
}

console.log(details["Name"])
console.log(details["Address"])
console.log(details["Address"]['Area'])