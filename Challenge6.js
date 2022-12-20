//unique values using Set() data structure

function unique(str) {

    let tempStr = new Set()

    for (let i = 0; i < str.length; i++) {

        if(tempStr.has(str[i])){

            return false

        }
        tempStr.add(str[i])

    }

    return true;

}

console.log(unique("abcd"))
//return true


console.log(unique("abcdade"))
//return false ad = duplicate