// Sample array of names
var names = ["John", "Jane", "Jake", "Doe", "Smith"];

// Function to determine greeting based on the first letter
function greet(names) {
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        // Check if the first letter is 'j' or not
        if (firstLetter === 'j') {
            // Print Goodbye message
            console.log("Goodbye " + names[i]);
        } else {
            // Print Hello message
            console.log("Hello " + names[i]);
        }
    }
}

// Call the greet function with the provided array of names
greet(names);
