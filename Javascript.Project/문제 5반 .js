const hof=(a)=>(b)=>(c)=>(a+b)*c;
const first =hof(3);
const second = first(4);
const third = second(5);

console.log(third);

const hof2=function(A){
return function(B){
    return function(C){
        return (A+B)*C;
         }
    }
}
console.log(hof2(3)(4)(5));

const hof3 = function(a,b,c){
    return (a+b)*c;
}
console.log(hof3(3,4,5));
console.log('\n');

