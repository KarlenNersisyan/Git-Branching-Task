const findByVal = (array, value) => {
  isTrue = true;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      isTrue = true;
      break;
    } else {
      isTrue = false;
    }
  }
  if (isTrue === false) {
    return "There is no such member in the array.";
  }

  if (array.length === 0) {
    return -1;
  }

  const middleIndex = Math.floor(array.length / 2);
  if (value === array[middleIndex]) {
    return middleIndex;
  }

  if (value > array[middleIndex]) {
    return middleIndex + findByVal(array.slice(middleIndex), value);
  }

  return findByVal(array.slice(0, middleIndex), value);
};

const array = [-5, -1, 0, 1, 5, 7, 777]; //
console.log(findByVal(array, 7)); //  array[?] === 7 ---> 5
console.log(findByVal(array, -58)); // There is no such member in the array.
