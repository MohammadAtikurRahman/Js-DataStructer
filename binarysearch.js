function binarySearch(arr,find){



    var len = arr.length;

    var left = 0;
    var right = len - 1;
    var mid = Math.floor((right+left)/2);
         
 
    console.log('lenght ' +len);
    console.log('mid ' +mid);
    console.log('left ' +left);
    console.log('right ' +right);



    while(left <= right){


        if (arr[mid] == find) {

            console.log(find+ 'found in the position' +mid);

        } else if (arr[mid] < find) {


        } else {

            right = mid - 1;



        }



    }
    
  

   console.log('out of the array');







}


var arr = ['1','2','3','4','5','6','7','8','9','10'];
var find = 7;

binarySearch(arr,find)

