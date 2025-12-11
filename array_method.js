//Array Methods

let myArray = [ 10, 101, 85, 74, 36]

//1. toString() // Covert Array to a String in a Comma Seprated Values
    // let change = myArray.toString()
    // console.log(change);
    // console.log(typeof(change));
    
//2. join()//Join all elemnts using a seprator and its type is String
    // let change = myArray.join("_") //Seprator Write in Double Quotes
    // console.log(change);
    // console.log(typeof(change));
    
//3. pop() //Pop remove the last element and update the array
    // let change = myArray.pop()
    // console.log(myArray); // Update the original array
    // console.log(change); // return popped element
    // console.log(typeof(change)); // number
    
//4. push() //Add a New Element at the End of the Array.
    // let change = myArray.push(72)
    // console.log(myArray); // Update the original array
    // console.log(change); // return new length of Array
    // console.log(typeof(change)); // number
    
//5. shift() // Remove First Element of the Array and return it.
    // let change = myArray.shift()
    // console.log(myArray); // Update the original array
    // console.log(change); // return first element
    // console.log(typeof(change)); // number

//6. unShift()// Add Element at the Start of the Array.
    // let change = myArray.unshift(55)
    // console.log(myArray);// Update the Array
    // console.log(change);//Return the Length of Array

 //7. delete // It is an Operator . it is used to delete array element
    // let change = delete myArray[0]
    // console.log(myArray);//[<1 empty item>, 52, 85, 74, 36 ]
    // console.log(myArray.length);//5[Length of Array]
    // console.log(change);//true
    // console.log(typeof(change));//Bool
    // console.log(myArray.length);//5[Length Not Change]
    
//8 concat()// Add Multiples Array in Single Array but not Change the Original Array
    // let new1 = [1, 2, 3, 4]
    // let new2 = [11, 12, 13, 14]
    // let new3 = [21, 22, 23, 24]

    // let change = new1.concat(new2, new3) // Add More than One Array
    // console.log(change); //Print All Array
    // console.log(typeof(change)); //Object

 //9. sort() // Sort an Array Alphabatically
    // let compare = (a, b) =>{
    //         return a - b ;
    // }
    // myArray.sort() 
    // console.log(myArray);
    // myArray.sort(compare)//Sort Array in Ascending Order
    // console.log(myArray);
    
//10. reverse() // Reverse an Given Array
    // myArray.reverse()
    // console.log(myArray);
    
 //11. slice() // Get SubArray
        // let change = myArray.slice(2, 4) // Return Array From Index 2 to 3(less than 4)
        // console.log(change);
        // console.log(myArray);
        
 //12. splice()   // Used to add new Elemens from give position and remove elemnts from that position and add new element
    // let change = myArray.splice(1, 3, 111, 222, 333, 444) //1. From Which Position Element is add, 2.How Many Element Delete from given position, 3.Those Element Whom you want to Print 
    // console.log(myArray);//Print Updated Array
    // console.log(change);//Print Remove Element
    // console.log(typeof(change));//Object
            

    
    