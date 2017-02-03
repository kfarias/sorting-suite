function insertionSort(array)
{
    for(var i = 1; i < array.length; ++i)
    {
        var currentItem = array[i];
      for (var sorted = i - 1; sorted >= 0 && array[sorted] > currentItem; sorted--) {
        array[sorted + 1] = array[sorted];
       }

        array[sorted + 1] = currentItem;
    }

    return array;
}

insertionSort(["d", "b", "a", "c"]);

export default insertionSort;
