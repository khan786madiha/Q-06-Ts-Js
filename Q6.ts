// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// why space is not equal in \t


console.log("welcometoIQKnowledge");
console.log("welcome\tto\tIQ\tKnowledge");  

console.log("welcome\nto\nIQ\nKnowledge");

console.log("Ayeshaisaverybeautifulandintellegentgirl");

console.log("Ayesha\tis\ta\tvery\tbeautiful\tand\tintellegent\tgirl");

console.log("Ayesha\nis\na\nvery\nbeautiful\nand\nintellegent\ngirl");


// backslash t is use for creating space
// bachslash n is use for brack the words and lines

let personNameWithWhitespace: string = "\t\n   John Doe   \n\t"; // Example name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);

// Stripping whitespace using trim()
let strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
