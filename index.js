let primeNumbers = [];
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false;
        }
      
    } return true;

}
function sumOfPrime(num) {
    let sum = 0;
    for(let i = 2; i < num; i++) {
        if(isPrime(i)) {
            sum+= i;
        }
    }
    return sum;
}
console.log(sumOfPrime(1));





