function d3js() {

console.log("d3");



  var sampleSVG = d3.select("#svg-container")
  .append("svg")
  .attr("width", 900)
  .attr("height", 700);




    var myimage = sampleSVG.append('image')
        .attr('xlink:href', 'https://cors-anywhere.herokuapp.com/https://wwwlab.iit.his.se/a17maxsj/map.svg')
        .attr('width', 900)
        .attr('height', 600)
var size = 5

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "red")
    .attr("r", size)
    .attr("cx", 480 )
    .attr("cy", 150)
    
}