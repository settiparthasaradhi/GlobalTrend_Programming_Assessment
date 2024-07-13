const capitalizeFirstLetters=(str)=>str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const sentence = "partha saradhi! how you doing?.";
const capitalizedSentence = capitalizeFirstLetters(sentence);
console.log(capitalizedSentence); 
