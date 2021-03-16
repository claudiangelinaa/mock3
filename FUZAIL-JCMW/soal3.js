function cekkoin(koin){
  let arrayCoin = [25,10,5,1]
  let numberOfCoin = 0
  let currentCoin = koin

  while(currentCoin > 0){
    for(let i=0; i<arrayCoin.length;i++){
      if(currentCoin>= arrayCoin[i]){
        currentCoin = currentCoin - arrayCoin[i]
        numberOfCoin++
        break;
      }
    }
  }
  return numberOfCoin
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))