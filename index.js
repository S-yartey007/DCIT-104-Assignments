// Determine whether a number is prime or not
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false;
        }
      
    } return true;

}
// Averages the prime numbers
function averageOfPrime(num) {
    let j = 0;
    let sum = 0;
    let average;
    for(let i = 2; i < num; i++) {
        if(isPrime(i)) {
            sum+= i;
            j++;
        }
    }
   return average = sum/j;
}
averageOfPrime();



// I certify that I wrote this piece of code myself without any outside help.





