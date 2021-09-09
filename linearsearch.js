// best-case complexity is O(1) 
// Worst-case complexity is O(n)

function linearSearch(arr, find) {
    var i;
    var len = arr.length;
    for(i = 0 ; i < len ; i ++){
        if(arr[i] == find){
            console.log(`${find} is found in the location of ${i}`);
            break;
        }
    }
    if (i == len) {
        console.log('out of the array');
    }

}
//array is sorted in this progrom
//You have to sorted the array
var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var find = 10;
linearSearch(arr, find)
