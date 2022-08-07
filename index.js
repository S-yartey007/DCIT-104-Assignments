// Determine whether a number is prime or not
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false;
        }
      
    } return true;

}
// Sums the prime numbers
function sumOfPrime(num) {
    let sum = 0;
    for(let i = 2; i < num; i++) {
        if(isPrime(i)) {
            sum+= i;
        }
    }
    console.log(sum);
}

sumOfPrime();





