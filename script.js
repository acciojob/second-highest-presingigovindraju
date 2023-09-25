//your JS code here. If required.
function secondHighest(arr) {
    // Check if the array is empty or has only 1 element
    if (arr.length <= 1) {
        return -Infinity;
    }

    let max = arr[0]; // Initialize max as the first element
    let secondMax = -Infinity; // Initialize secondMax as negative infinity

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            // Update both max and secondMax
            secondMax = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > secondMax) {
            // Update secondMax if the current element is greater than the current secondMax but less than max
            secondMax = arr[i];
        }
    }

    // If secondMax is still negative infinity, it means all elements are the same
    if (secondMax === -Infinity) {
        return -Infinity;
    }

    return secondMax;
}
