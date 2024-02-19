function printRectangularFrame(words) {
    // Find the length of the longest word
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // Print top border
    console.log("*".repeat(maxLength + 4));

    // Print middle lines with words
    for (let word of words) {
        console.log(`* ${word}${' '.repeat(maxLength - word.length)} *`);
    }

    // Print bottom border
    console.log("*".repeat(maxLength + 4));
}

const input = prompt("Enter several words separated by commas:");
const wordsArray = input.split(",").map(word => word.trim());

printRectangularFrame(wordsArray);