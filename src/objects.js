export const createPerson = (name, age) => {
  const person = {
  
  }
  person.name = name;
  person.age = age;
  
  return person;
};


export const getName = (object) => {
  return object.name;// your code here
};

export const getProperty = (property, object) => {
  return object[property];// your code here
};

export const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

export const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

export const getAges = (people) => {
  return people.map(person => {
    return person.age;
  });
};

export const findByName = (name, people) => {
  return people.find(person => {
    return person.name === name;
  });
};

export const findHondas = (cars) => {
  
  
};

export const averageAge = (people) => {
  return people.map(function(person) {
    return person.age;
  }).reduce(function(a, b) {
    return a + b; }, 0) / people.length;
};

export const createTalkingPerson = (name, age) => {
  // your code here
};
