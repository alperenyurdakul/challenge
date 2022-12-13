/*
return true only if all values are unique,otherwise false
using Array,Object,string method lastIndexOf()
not Set Data Structure
*/



//1-) I use the Array methods

function uniqueArray(str){

    let values = [];
    for(let letter of str){
        if(values.indexOf(letter) !== -1 ){
            return true;
        }
        values.push(letter);
    }   
    return false;

}

// 2-) I use the Object methods

function uniqueObject(str){
    for(let i = 0;i<str.length;i++){
        if(str.lastIndexOf(str[i]) !==i){
            return true;
        }
    }

    return false;

}


console.log(uniqueArray("abcdea"));
console.log(uniqueObject("abcdea"));

