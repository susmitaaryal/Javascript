//strings
//let str = "susmita aryal";
//console.log(str.length);
//console.log(str[0],str[1]);

//template literals
let sentence = `this is a template literal`;
console.log(sentence);

let obj ={
    item:"pen",
    price:10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log (output);
console.log("the cost of",obj.item, "is", obj.price, "rupees");

//string methods

let str = "susmita aryal";
let newstr = str.toUpperCase();
console.log(newstr)
let newstr2 = str.toLowerCase();
console.log(newstr2)
let newstr3 = str.trim();
console.log(newstr3)


let num = "01234567"
let num2 = "susmita"
console.log(num.slice(1,3));
let res = num.concat(num2);
console.log(res);
console.log(num.replace("12","su"))
console.log(num.charAt(3))