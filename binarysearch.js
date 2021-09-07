//best Case O(1)
//Averge Case O(log n)
//Worst Case O(log n)
function binarySearch(arr, find) {
    var len = arr.length;
    var left = 0;
    var right = len - 1;
    while (left <= right) {
        var mid = Math.floor((right + left) / 2);
        if (arr[mid] == find) {
           
            console.log(find + ' found in the position ' + mid);
            return find;

        } else if (arr[mid] < find) {

            left = mid + 1;
        } else {

            right = mid - 1;
        }

    }
    console.log('out of the array');
}

//array is not sorted in this progrom
//You have to sorted the array

var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var find = 18;
binarySearch(arr, find)

