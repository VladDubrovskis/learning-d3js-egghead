var div = d3.select('div');
console.log(div.nodes());

var divLinks = div.selectAll('a');
console.log(divLinks.nodes());

console.log(d3.selectAll('div a').nodes());

var actionLink = d3.selectAll('.action');
console.log(actionLink.nodes());

var secondLink = d3.selectAll('a:nth-child(2)');
console.log(secondLink.nodes());

var allLinks = d3.selectAll(document.links);
console.log(allLinks.size());
