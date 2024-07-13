// Third Question
const flattenArray=(nestedArray)=> {
    const flattened = [];
    const flatten=(arr)=>{
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]))  flatten(arr[i]);
            else  flattened.push(arr[i]);
        }
    }
    flatten(nestedArray);
    return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); 
