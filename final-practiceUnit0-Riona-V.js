/*
Imagine the application only accepts image uploads of pngs or jpgs. 
When the user uploads a file, check if the file extension is png or jpg using endsWith().
If not, void the upload and prompt them to upload a valid file.
Keep doing this until a valid file is uploaded using a do-while loop so it runs at least once.
This covers STRINGING CHARACTERS TOGETHER, CONTROL STRUCTURES AND LOGIC, and WORKING WITH LOOPS.
*/
let userUpload = "character1.png"; // example upload
let isFileValid = false; // starting condition

do { // start a do-while loop. We want this to run at least once no matter what so we get one image uploaded.

    console.log("Please upload a file. Supported filetypes are .png and .jpg"); // prompt user for a file

    if (userUpload.endsWith(".png") || userUpload.endsWith(".jpg")) { // check file extension using if-statement

        console.log("File uploaded.");
        isFileValid = true; // valid upload, trigger break condition.

    } else {

        userUpload = " "; // void the file
        console.log("This is not a supported filetype."); // print error message
    
    }

} while (!isFileValid); // will run until a valid file is uploaded.



/*
The user has now uploaded a valid file. Create a dynamically-sizing array to hold image filenames. 
Push the valid file into the array using push().
This covers BUILDING ARRAYS and USING ARRAYS.
*/
let imageArray = []; // create an array  with no defined size
imageArray.push(userUpload); // add the filename to the array

// now assume the user has uploaded many files...
imageArray.push(userUpload);
imageArray.push(userUpload);
imageArray.push(userUpload);
console.log("Image array length: " + imageArray.length); // there should be 4 images in the array


// ...and wants to delete the first image in their list. 
imageArray.shift();

// there should be only 3 images left. 
console.log("Image array length: " + imageArray.length);



/*
Imagine a slightly more complex scenario where instead of an array of images, there is an array of objects.
This covers VALUES, DATA TYPES, AND OPERATIONS.
*/
let objectArray = []; // create an array

let firstObject = { // here, the first upload will become an object that contains info about its name and relationships
    filename: "character1.png",
    connections: ["character 2", "character 4", "character 5"]
};

objectArray.push(firstObject); // push the upload into the array

console.log("First image information: " + objectArray[0].filename, objectArray[0].connections); // check the upload's information from within the array
