
    
function d3js() {

    
console.log("d3");
console.log(list[0]);


  var sampleSVG = d3.select("#svg-container")
  .append("svg")
  .attr("width", 900)
  .attr("height", 700);

    var myimage = sampleSVG.append('image')
        .attr('xlink:href', 'https://cors-anywhere.herokuapp.com/https://wwwlab.iit.his.se/a17maxsj/map.svg')
        .attr('width', 900)
        .attr('height', 600)
var size = 5

drawCircle(400, 400, 10, list[0]);
drawCircle(500, 100, 5 ,list[1]);
drawCircle(450, 220, 5, list[2]);

function drawCircle(x, y, size, tip) {

        console.log('Drawing circle at', x, y, size);
        sampleSVG.append("circle")
       
        .style("stroke", "gray")
        .style("fill", "blue")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", size)
            .on("mouseover", function(){return tooltip.style("visibility", "visible");})
	        .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
            
            var tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("color", "white")
            .style("background-color", "black")
            .text(tip);
    }
  


}

