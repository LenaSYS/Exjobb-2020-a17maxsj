function d3js() {
    console.log("Starting D3 module");
    const mmValue = [];


    //Select container
    var mapContainer = d3.select("#svg-container")
        .append("svg")
        .attr("width", 900)
        .attr("height", 700)
        .call(d3.behavior.zoom().on("zoom", function() {
            mapContainer.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
        }))
        .append("g")

    //Draw svg map of sweden
    var myimage = mapContainer.append('image')
        .attr('xlink:href', 'img/map.svg')
        .attr('width', 900)
        .attr('height', 600);

    //Get the smallest and biggest values
    for (var i = 0; i < dList.length; i++) {
        mmValue.push(dList[i].dValue);
    }

    var minRange = Math.min.apply(Math, mmValue);
    var maxRange = Math.max.apply(Math, mmValue);

    // Select color of heatmap dot based on value
    for (var i = 0; i < dList.length; i++) {
        // console.log(i + "value: " + dList[i].dValue)

        //set the scale for each value
        var unscaled = mmValue[i];
        var scaled = scalenum(unscaled, 5, 30, minRange, maxRange);

        // console.log(scaled.toFixed(2));

        if (dList[i].dValue >= 1000) {
            dColor = "#630601";
            dSize = scaled;
        } else if (dList[i].dValue >= 750) {
            dColor = "#A7120D";
            dSize = scaled;
        } else if (dList[i].dValue >= 500) {
            dColor = "#DE2921";
            dSize = scaled;
        } else if (dList[i].dValue >= 100) {
            dColor = "#F26A48";
            dSize = scaled;
        } else if (dList[i].dValue >= 50) {
            dColor = "#F59373";
            dSize = scaled;
        } else if (dList[i].dValue <= 50) {
            dColor = "#F8BCA2";
            dSize = scaled;

        } else {
            console.log("color picker error");

        }


        //Draw dot in the right place depending on the county
        if (dList[i].lan === "01") {
            drawCircle(460, 430, dSize, "Stockholm: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "03") {
            drawCircle(450, 410, dSize, "Uppsala: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "04") {
            drawCircle(435, 445, dSize, "Södermanland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "05") {
            drawCircle(420, 470, dSize, "Östergötland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "06") {
            drawCircle(400, 500, dSize, "Jönköping: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "07") {
            drawCircle(405, 525, dSize, "Kronoberg: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "08") {
            drawCircle(425, 510, dSize, "Kalmar: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "09") {
            drawCircle(465, 505, dSize, "Gotland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "10") {
            drawCircle(418, 542, dSize, "Blekinge: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "12") {
            drawCircle(390, 550, dSize, "Skåne: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "13") {
            drawCircle(380, 525, dSize, "Halland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "14") {
            drawCircle(380, 475, dSize, "Västra götaland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "17") {
            drawCircle(380, 420, dSize, "Värmland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "18") {
            drawCircle(410, 430, dSize, "Örebro: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "19") {
            drawCircle(430, 420, dSize, "Västmanland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "20") {
            drawCircle(405, 380, dSize, "Dalarna: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "21") {
            drawCircle(435, 370, dSize, "Gävleborg: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "22") {
            drawCircle(449, 300, dSize, "Västernorrland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "23") {
            drawCircle(400, 300, dSize, "Jämtland: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "24") {
            drawCircle(450, 220, dSize, "Västerbotten: " + dList[i].dValue, dColor);
        } else if (dList[i].lan === "25") {
            drawCircle(480, 120, dSize, "Norrbotten: " + dList[i].dValue, dColor);
        } else {
            console.log("fail");
            break;
        }


    }
    // Function to scale values for the dots
    function scalenum(unscaledNum, minAllowed, maxAllowed, min, max) {
        return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
    }

    // Function that draws the circles
    function drawCircle(x, y, size, tip, dotColor) {

        // console.log('Drawing circle at', x, y, size, dotColor);
        mapContainer.append("circle")

        .style("stroke", "gray")
            .style("fill", dotColor)
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", size)
            .style("opacity", 0.7)
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