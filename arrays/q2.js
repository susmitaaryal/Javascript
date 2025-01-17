// for a given array with prices of 5 items -> [250, 645, 300, 900, 50] all the items have an offer of 1-% off on them. change the array to store final price after applying offer.

let array = [250, 645, 300, 900, 50];

let idx =0;
for( let val of items){
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;

}

console.log(val);