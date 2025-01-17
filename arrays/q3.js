//create an array to store companies -> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"

// remove the first company from the array

// remove uber and add ola in its place

// add amazon at the end


let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

companies.shift();
console.log(companies);

companies.splice(2, 1, "ola");
console.log(companies);

companies.push("amazon");
console.log(companies);