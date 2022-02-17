const maxProfit = function(prices) {
  if(prices.length === 1 || !prices) return 0;

  let buy = prices[0];
  let sell = prices[1];
  let profit = 0;

  for(let i = 1; i < prices.length; i++){
     profit = Math.max(profit, sell - buy);
     buy = Math.min(buy, sell);
     sell = prices[i+1];
  }
  console.log(profit)
  return profit;

}
// maxProfit([7,1,5,3,6,4]) => 5
