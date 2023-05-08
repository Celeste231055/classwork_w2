let valOne = 5;
if(valOne >= 0){
    console.log("Positive " + valOne)
} else(){
    console.log("Negative " + valOne)
}

let valTwo = 3;
if(valTwo %2 === 0){
    // 6/2 = 3 no remainder === even number divisible by 2
    //7/2 remainder = 1
    console.log("Even number")
} else(){
    console.log("Odd number")
}

let str = "";
if(str === ""){
    console.log("Empty string")
} else(){
    console.log("Not empty string")
}

let success = true;
if(success){
    console.log("Success :)")
} else(){
    console.log("Failure :(")
}

let num = 10;
if(num > 5 && num < 15){
    //must use num twice
    console.log("Between 5 and 15")
} else(){
    console.log("Not between 5 and 15")
}

let age = 18;
if(age >= 18){
    console.log("You may enter the club")
} else{
    console.log("You must be 18 or older to enter")
}

let value = 10;
for(let i = 0; i < value; i++){
    console.log(i)
}
for(let i = 10; i >= 0; i--){

}
let arrayName = ["Tamotoes", "Letuce", "Pickles", "Cheese"];
//bonus point calory count
for(let i = 0; i < arrayName.length; i++ ){
    console.log(arrayName[i])
}

let arrayNum = [5, 50, 46, 33, 57]
let total = 0;
for (let i = 0; i < arrayNum.length; i++){
    //total = total + arrayNum[i]; 
    total += arrayNum[i];
    console.log(total) //shows numbers being added
}
console.log(total) //gives only one total

for(let i = 0; i < arrayName.length; i++){
    let option = arrayName[i];
    if(option === "Letuce"){
        console.log("Letuce is available")
    }
}