let counter = 0;

// Normal Function
function processCounter() {

    // Add 1 to the counter
    counter++;
    
    console.log(counter);
}

//processCounter(); // Call the function

// Function With Parameters

function processCounterParameters(addition, division) {

    console.log("Adding", addition);
    console.log("Dividing", division)

    // Add 5 to the counter
    counter = counter + addition;
    // Divide that by 2 
    counter = counter / division;
    console.log("Counter With Parameters:", counter);
}

processCounterParameters(5, 2); // Call the function
processCounterParameters(10, 3); // Call the function
