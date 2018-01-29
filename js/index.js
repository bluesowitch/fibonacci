// var n=prompt('Enter your number');
// function fibonacci(n) {
//   return n < 1 ? 0
//         : n <= 2 ? 1
//         : fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(4));

let fibSeq = parseInt(prompt('Enter your number'));

function fibonacci(fibSeq) {
    if (fibSeq === 1)
        return 1;
    if (fibSeq === 0)
       return 0;
    return fibonacci(fibSeq - 1) + fibonacci(fibSeq - 2);
}
document.write(fibonacci(fibSeq));
