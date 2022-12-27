//Unique object property values

let products = [
    { title: 'Iphone8', company: 'Apple' },
    { title: 'Galaxy', company: 'Samsung' },
    { title: 'Iphone7', company: 'Apple' },
    { title: 'HTC Phone', company: 'htc' }

];


function getUnique(arr) {

    return [...arr.reduce((acc, curr) => {

        acc.add(curr.company);

        return acc;
    }, new Set())]

}

console.log(getUnique(products));