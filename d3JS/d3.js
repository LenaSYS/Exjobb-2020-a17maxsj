function d3js() {


    console.log("d3");
    console.log(dList[0]);


    var sampleSVG = d3.select("#svg-container")
        .append("svg")
        .attr("width", 900)
        .attr("height", 700)
        .call(d3.behavior.zoom().on("zoom", function() {
            sampleSVG.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
        }))
        .append("g")


    var myimage = sampleSVG.append('image')
        .attr('xlink:href', 'img/map.svg')
        .attr('width', 900)
        .attr('height', 600);

    var i;
    for (i = 0; i < dList.length; i++) {
        console.log(i + "medelålder: " + dList[i].dValue)

        if (dList[i].lan === "01") {
            drawCircle(460, 430, 5, "Stockholm: " + dList[i].dValue);
        } else if (dList[i].lan === "03") {
            drawCircle(450, 410, 5, "Uppsala: " + dList[i].dValue);
        } else if (dList[i].lan === "04") {
            drawCircle(435, 445, 5, "Södermanland: " + dList[i].dValue);
        } else if (dList[i].lan === "05") {
            drawCircle(420, 470, 5, "Östergötland: " + dList[i].dValue);
        } else if (dList[i].lan === "06") {
            drawCircle(400, 500, 5, "Jönköping: " + dList[i].dValue);
        } else if (dList[i].lan === "07") {
            drawCircle(405, 525, 5, "Kronoberg: " + dList[i].dValue);
        } else if (dList[i].lan === "08") {
            drawCircle(425, 510, 5, "Kalmar: " + dList[i].dValue);
        } else if (dList[i].lan === "09") {
            drawCircle(465, 505, 5, "Gotland: " + dList[i].dValue);
        } else if (dList[i].lan === "10") {
            drawCircle(418, 542, 5, "Blekinge: " + dList[i].dValue);
        } else if (dList[i].lan === "12") {
            drawCircle(390, 550, 5, "Skåne: " + dList[i].dValue);
        } else if (dList[i].lan === "13") {
            drawCircle(380, 525, 5, "Halland: " + dList[i].dValue);
        } else if (dList[i].lan === "14") {
            drawCircle(380, 475, 5, "Västra götaland: " + dList[i].dValue);
        } else if (dList[i].lan === "17") {
            drawCircle(380, 420, 5, "Värmland: " + dList[i].dValue);
        } else if (dList[i].lan === "18") {
            drawCircle(410, 430, 5, "Örebro: " + dList[i].dValue);
        } else if (dList[i].lan === "19") {
            drawCircle(430, 420, 5, "Västmanland: " + dList[i].dValue);
        } else if (dList[i].lan === "20") {
            drawCircle(405, 380, 5, "Dalarna: " + dList[i].dValue);
        } else if (dList[i].lan === "21") {
            drawCircle(435, 370, 5, "Gävleborg: " + dList[i].dValue);
        } else if (dList[i].lan === "22") {
            drawCircle(449, 300, 5, "Västernorrland: " + dList[i].dValue);
        } else if (dList[i].lan === "23") {
            drawCircle(400, 300, 5, "Jämtland: " + dList[i].dValue);
        } else if (dList[i].lan === "24") {
            drawCircle(450, 220, 5, "Västerbotten: " + dList[i].dValue);
        } else if (dList[i].lan === "25") {
            drawCircle(480, 120, 5, "Norrbotten: " + dList[i].dValue);
        } else {
            console.log("fail");
            break;
        }


    }
    /* test draw
    drawCircle(400, 400, 10, dList[0]);
    drawCircle(500, 100, 5 ,dList[1]);
    drawCircle(450, 220, 5, dList[2]);
    */

    function drawCircle(x, y, size, tip) {

        console.log('Drawing circle at', x, y, size);
        sampleSVG.append("circle")

        .style("stroke", "gray")
            .style("fill", "blue")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", size)
            .on("mouseover", function() { return tooltip.style("visibility", "visible"); })
            .on("mousemove", function() { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
            .on("mouseout", function() { return tooltip.style("visibility", "hidden"); });

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