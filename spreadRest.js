let myArray1 = [ 1,2,3, 4,5];
let myArray2 = [ 6,7,8,9,10];


// ...

// spread - 
// let myArray3= [...myArray1,11,12,13] 
// console.log(myArray3);

function add1 (a,b,c,d,e){
    console.log(a+b+c+d+e)
}
add1(...myArray1)


function add2 (...a){
    console.log(a.reduce((a,b)=> a+b))
}
add2(1,2,3, 4,5)



