//Array Methods

let myArray = [ 10, 52, 85, 74, 36]

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
    let change = delete myArray[2]
    console.log(myArray);
    console.log(change);
    console.log(typeof(change));
    
    
    
    