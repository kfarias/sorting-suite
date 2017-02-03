// make a variable setting the index[0] of the array to current
//set the next number in the index to next
//compare the current number to the next
//if the current is greater than the next switch their places in the array
//then continue on untill the whole array is sorted.

const bubbleSort = (bubbleArray) => {

  do {
    var sorted = true;
    bubbleArray.forEach(function(value,index,totalArray) {
      if (value > totalArray[index + 1]) {
        sorted = false;
        bubbleArray[index] = totalArray[index + 1];
        bubbleArray[index + 1] = value;
      }
    })

  } while (!sorted);

  return bubbleArray;
}

export default bubbleSort;
