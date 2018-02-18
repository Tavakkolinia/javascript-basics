export const getNthElement = (index, array) => {
  for(let i = 0; i < array.length; i++) {
    return array[index]
  }
  
};


export const arrayToCSVString = (array) => {
  return array.join(',')// your code here
};

export const csvStringToArray = (string) => {
  return string.replace(/,/g, '').split('')// your code here
};

export const addToArray = (element, array) => {
  array.push(element)// your code here
};

export const addToArray2 = (element, array) => {
  const array2 = array.concat(array2);
  array2.push(element);
  return array2// your code here
};

export const removeNthElement = (index, array) => {
  return array.splice(index, 1)// your code here
};

export const numbersToStrings = (numbers) => {
  return numbers.toString().split(",");// your code here
};

export const uppercaseWordsInArray = (strings) => {
  return strings.map(function(x) {
    return x.toUpperCase();
  });
};

export const reverseWordsInArray = (strings) => {
  for(let i = strings.length - 1; i >= 0; i--) {
    return strings.map(function(x) {
      return x.split("").reverse().join("")
    });
  }
    
};

export const onlyEven = (numbers) => {
  return numbers.filter(function(x) {
    return x % 2 === 0;
  });// your code here
};

export const removeNthElement2 = (index, array) => {
  const newArray = array;
  for (let i = 0; i < array.length; i++) {
    return newArray.slice(index).concat(array);

  }
  
};

export const elementsStartingWithAVowel = (strings) => {
  // your code here
};

export const removeSpaces = (string) => {
  return string.split(" ").join("")// your code here
};

export const sumNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

  } 
  return sum;
  
  // your code here
};

export const sortByLastLetter = (strings) => {
  // your code here
};
