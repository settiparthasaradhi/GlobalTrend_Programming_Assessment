const toTitleCase=(str)=>str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const sentence = "partha saradhi! this is a test.";
const titleCasedSentence = toTitleCase(sentence);
console.log(titleCasedSentence);
