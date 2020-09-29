const arrange = (arr) => {
  const result = [];

  // repeat as long as there is element remaining
  while (arr.length) {
    // get the first row of the array, push into result
    result.push(...arr.shift());

    // make a loop for the remaining arrays, start from the first row to the last row
    // in each iteration, pop the last element and push it into result.
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].pop());
    }

    // pop the last array, reverse it and push to result
    result.push(...(arr.pop() || []).reverse());

    // same as the for loop above, but in reverse
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i].shift());
    }
  }

  return result;
};
