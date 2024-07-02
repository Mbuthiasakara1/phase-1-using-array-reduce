const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 31;
newArray = batteryBatches.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(newArray);
