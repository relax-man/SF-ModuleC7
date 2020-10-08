 export function fibonacciNumber(n) {
     if (!(Number.isInteger(n) && n > 0)) {
         return "N is not a natural number";
     }
     function numCounter(n) {
         return n <= 1 ? n : numCounter(n-1) + numCounter(n-2);
     }
     return numCounter(n);
 }