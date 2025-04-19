const arr = ['가','라','다','라','마','라'];


const result = arr.indexOf('라');
arr.splice(3,1);
arr.splice(result,1);
const result2 =arr.lastIndexOf('라');
arr.splice(result2,1);
console.log(arr);
