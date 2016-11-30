var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(['red', 'yellow', 'green'])

console.log(quantizeScale(22));
console.log(quantizeScale(50));
console.log(quantizeScale(88));

console.log(quantizeScale.invertExtent('red'));
console.log(quantizeScale.invertExtent('yellow'));
console.log(quantizeScale.invertExtent('green'));
