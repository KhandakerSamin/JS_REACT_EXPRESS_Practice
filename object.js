// object
// Object type : non-premitive 

const bottle = {
    brand: "Apple",
    price: 200 ,
    isClean: true,
    color: 'white'
}


// Object Property : 

const parson = {
    name: "Samin yeasar",
    age: 22,
    profession: "Developer",
    salary: 25000,
    merried: true
}



// dot notation

// console.log(parson);
// console.log(parson.profession);
// const income = parson.salary;
// console.log(income)


// braket notation 


// console.log(parson['age']);
// const boyos = parson['age'];
// console.log(boyos);



const computer = {
    brand : 'lenevo',
    price: 35000,
    processor:'ryzen',
    ssd: '512GB',
    monitor:'HP'
}

const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);



// Nasted Object : 


const school ={
    name: 'BR Govt',
    class:[ 1,2,3,4,5,6,7,8,9,10],
    events: ['science fair', 'anual fucntion', 'orosh'],
    unique: {
        color: 'red',
        result: {
            gpa:30,
            merit: 'top'
        }
    }
}

// console.log(school.unique.color);
// school.unique.result.merit= 'toop toop toop most in'
// console.log(school.unique.result.merit);
// delete school.class;
// console.log(school);