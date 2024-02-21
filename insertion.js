function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j]; // This action moves elements one step to the right
          j--;
        }
        arr[j + 1] = current; // The actual 'insertion' of the current item in the array
      }
      return arr;
}

module.exports = insertionSort;