const mobile = {
    brand: 'Redmi',
    price:40000,
    ram: '12gb',
    cemera: '200mp',
    betary: 5000,
    isNew: true
}


// for of : array
// for in : object 

for (const prop in mobile){
    console.log(prop)
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,":", mobile[key]);
}