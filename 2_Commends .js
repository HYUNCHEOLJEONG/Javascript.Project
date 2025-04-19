const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("첫 번째 숫자를 입력하세요: ", function(answer1) {
  rl.question("두 번째 숫자를 입력하세요: ", function(answer2) {
    let num1 = parseInt(answer1);
    let num2 = parseInt(answer2);

    if (num1 === num2) {
      console.log("두 숫자는 같습니다.");
    } else if (num1 > num2) {
      console.log("더 큰 수는: " + num1);
    } else {
      console.log("더 큰 수는: " + num2);
    }

    rl.close();
  });
});
