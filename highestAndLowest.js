function highAndLow(numbers){
  let arr = numbers.split(' ')
  let sorted = arr.sort(function(a,b){return a - b })
  return `${sorted[sorted.length-1]} ${sorted[0]}`
}
