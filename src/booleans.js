export const negate = (a) => {
  return !a// your code here
};
export const both = (a, b) => {
  return a && b// your code here
};

export const either = (a, b) => {
  return a || b// your code here
};

export const none = (a, b) => {
  if(!a && !b) {
    return true
  } else {
    return false
  }
  
  };

export const one = (a, b) => {
  if((a && !b) || (!a && b)) {
    return true;
  } else {
    return false;
  }

  
// your code here
};

export const truthiness = (a) => {
  if(!!a) {
    return true;
  } else {
    return false;
  }
  // your code here
};

export const isEqual = (a, b) => {
  return a === b// your code here
};

export const isGreaterThan = (a, b) => {
  return a > b// your code here
};

export const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true
  } else {
    return false
  }// your code here
};

export const isOdd = (a) => {
  if(a % 2 !== 0) {
    return true
  } else {
    return false
  }
  // your code here
};

export const isEven = (a) => {
  if(a % 2 == 0) {
    return true
  } else {
    return false
  }
  // your code here
};

export const isSquare = (a) => {
  if(Math.sqrt(a) % 1 === 0) {
    return true
  } else {
    return false
  }// your code here
};

export const startsWith = (char, string) => {
  if(string.startsWith(char)) {
    return true
  } else {
    return false
  }// your code here
};

export const containsVowels = (string) => {
  if( string.includes(['a', 'e', 'i', 'o','u', 'A', 'I', 'E', 'O', 'U'], 0)) {
    return true;
  } else {
    return false;
  }
};

export const isLowerCase = (string) => {
  if(string === string.toLowerCase()) {
    return true
  } else {
    return false }// your code here
};
