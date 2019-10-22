
//spread operator

var arr = [1,2,3,4,5];
var arr1;

//now if u want to copy the arr into arr1 then

arr1 = [...arr];

console.log(arr1);    //output will be [1, 2, 3, 4, 5]

arr1 = [6,7];

arr = [...arr,...arr1];

console.log(arr);   //output will be [1, 2, 3, 4, 5, 6, 7]
