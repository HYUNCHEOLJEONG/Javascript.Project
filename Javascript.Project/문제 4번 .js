const TwodemensionArray = [
    ['a', null, 1, undefined],
    [NaN, true, '', 0]
  ];
  
  for (let i = 0; i < TwodemensionArray.length; i++) {
    for (let j = 0; j < TwodemensionArray[i].length; j++) {
      TwodemensionArray[i][j] = 1;
    }
  }
  
  // 한 줄씩 예쁘게 출력
  for (let row of TwodemensionArray) {
    console.log(" ", row);
  }
  