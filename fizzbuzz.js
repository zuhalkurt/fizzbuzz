function isDivisibleBy(n, m) {
    return n % m === 0;
}

for(let i = 1; i <= 255; i++) {
   
    let result = "";
    
    if (isDivisibleBy(i, 3) && i % 11 !== 0) {
        result += "Fizz";
    }
    if( isDivisibleBy(i, 5) && i % 11 !== 0) {
        result += "Buzz"
    }
    if(isDivisibleBy(i, 7) && i % 11 !== 0) {
        result += "Bang";
    }
    if (isDivisibleBy(i, 11)) {
        result += "Bong";
    }
    if (isDivisibleBy(i, 13)) {
        result += "Fezz";
    }
    if (isDivisibleBy(i, 17)) {
       result = result.split("").reverse().join("")
    }
    
    if (result === ""){
        result = i;
    } 
    
    console.log(result);  
}


