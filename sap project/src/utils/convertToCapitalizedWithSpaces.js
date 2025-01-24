export default function convertToCapitalizedWithSpaces(text, key) {

    const replacements = {
        Bg: 'Background',
        DEFAULT: 'Roundness of Small Fields',
        textarea: 'Roundness of Big Fields of Large Height',
        th: 'Table Header',
    };

    // Perform specific replacements
    text = text.replace(/Bg|DEFAULT|textarea|th/g, (match) => replacements[match]);

    // Add space before uppercase letters, capitalize the first letter of each word
    text = text
        .replace(/([A-Z])/g, ' $1')           // Add space before uppercase letters
        .replace(/^./, (str) => str?.toUpperCase()) // Capitalize the first letter
        .trim();                             // Remove any leading or trailing spaces

    if (key === "colorKey") {
        // Append ' Color' at the end of the text
        text += " Color";
    }

    return text;
}