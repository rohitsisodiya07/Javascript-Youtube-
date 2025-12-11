let myArray = [1, 2, 3, 4, 5]

//1.For Loop [Basic]
// for( let i = 0 ; i < myArray.length ; i++){
//     console.log(myArray[i]);   
// }

//2.ForEach Loop
// myArray.forEach((element => {
//     console.log(element * element );    
// }))

//3.Array From
    // let change = Array.from("Rohit") // Create any Object to Array
    // console.log(change); 
    
//4.for-of // Used to Get Values from an Array
    // for(let values of myArray){
    //     console.log(values);    
    // }

//5. for-in // Used to Get the Keys in Array
    for( let keys in myArray){
        console.log(myArray[keys]);
        
    }