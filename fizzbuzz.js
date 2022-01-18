function isDivisibleBy(n, m) {
    return n % m === 0;
}

function startsWithB(string) {
    return string.startsWith("B");
}

for (let i = 1; i <= 300; i++) {
    let result = [];

    if (isDivisibleBy(i, 3)) {
        result.push("Fizz");
    }
    if (isDivisibleBy(i, 5)) {
        result.push("Buzz");
    }
    if (isDivisibleBy(i, 7)) {
        result.push("Bang");
    }
    if (isDivisibleBy(i, 11)) {
        result = ["Bong"];
    }
    if (isDivisibleBy(i, 13)) {
        result.splice(
            result.findIndex(startsWithB),
            0,
            "Fezz"
        );
    }
    if (isDivisibleBy(i, 17)) {
        result.reverse();
    }

    if (result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}



