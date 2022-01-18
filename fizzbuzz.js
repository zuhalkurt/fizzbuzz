function isDivisibleBy(n, m) {
    return n % m === 0;
}

for(let i = 1; i <= 100; i++) {
    
    let result = "";
    
    if (isDivisibleBy(i, 3)) {
        result += "Fizz"
    }
    if( isDivisibleBy(i, 5)) {
        result += "Buzz"
    }
    if (result === ""){
        result = i;
    } 
    return result;
}
