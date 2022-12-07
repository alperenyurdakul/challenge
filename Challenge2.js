//if the value is increasing, it is an arithmetic sequence. => print arithmetic array
//if it's multiplied by a constant value, it's a geometric sequence.  => print geometric array
// return -1 if array is not stable

function mathSequences(arr){

    let arith = new Set();
    let geo = new Set();


    for(let i=1;i<arr.length;i++){
        let number1 = arr[i] -arr[i - 1];
        arith.add(number1);

        let number2 = arr[i] / arr[i - 1];
        geo.add(number2);
    }



   if(arith.size === 1){
    return "Arithmetic"
   }
   if(geo.size === 1){
    return "Geometric"
   }
    return -1;

}

console.log(mathSequences([10,20,30,40]));
console.log(mathSequences([2,4,8,16]));
console.log(mathSequences([2,5,8,89]));
