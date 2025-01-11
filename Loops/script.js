//print 1 to 5
for(let i=1; i<=5; i++){
    console.log("susmita aryal")
}
console.log("loop has ended.")


//calculate sum of 1 to n
let sum=0;
for(let i=1; i<=5;i++){
    sum = sum + i;
}
console.log("sum=",sum);


//using while
let a = 1;
while (a<=10){
    console.log("susmita aryal");
    a++;
}


//using do while
let i = 1;
do{
    console.log("susmita");
    i++;
}
while(i<=10);


//using for-of loop
let str = "susmita aryal"
for(let i of str){
    console.log("i=",i);
}


//using for in loop
let student = {
    name: "susmita aryal",
    age: 20,
    cgpa: 8.4,
    isPass: true,
};

for(let i in student){
    console.log(i);
}