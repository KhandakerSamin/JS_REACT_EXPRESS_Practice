// for(let num = 0 ; num < 10; num++ ){
//     console.log(num)
// }
// for(let num = 100 ; num > 50; num-- ){
//     console.log(num)
// }

// for(let i = 1 ; i <= 20 ; i ++){
//     console.log(i)
// }

// let sum = 0;
// for( let i = 50 ; i <= 100 ; i++){
//  sum = sum+i;
// }

// console.log("Total Sum " , sum) ; 

const sentence = "I am learing full-stack web development"

for(const letter of sentence){
    // console.log(letter)
}


// let reverse = "";

// for(const letter of sentence){
//     reverse = letter + reverse;
// }
// console.log(reverse)


// Sortcut

const reverse = sentence.split("").reverse().join("");
console.log(reverse)