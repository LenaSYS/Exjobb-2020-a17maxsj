function threejs() {
    console.log("Starting Three module")
    const mmValue = [];
    var t0 = performance.now()

    //Get the smallest and biggest values
    for (var i = 0; i < dList.length; i++) {
        mmValue.push(dList[i].dValue);
    }

    var minRange = Math.min.apply(Math, mmValue);
    var maxRange = Math.max.apply(Math, mmValue);

    var camera = new THREE.OrthographicCamera(1100 / -2, 900 / 2, 1100 /
        2, 900 / -2, 0, 5);
    var scene = new THREE.Scene();

    var renderer = new THREE.WebGLRenderer({ canvas: artifactCanvas, alpha: true, antialias: true });
    renderer.setSize(1100, 900);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableRotate = false;






    for (var i = 0; i < dList.length; i++) {
        //console.log(dList[i].lan);



        var unscaled = mmValue[i];
        var scaled = scalenum(unscaled, 5, 30, minRange, maxRange);

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
            drawCircle(60, -30, dSize, dColor);
        } else if (dList[i].lan === "03") {
            drawCircle(50, -10, dSize, dColor);
        } else if (dList[i].lan === "04") {
            drawCircle(35, -45, dSize, dColor);
        } else if (dList[i].lan === "05") {
            drawCircle(20, -70, dSize, dColor);
        } else if (dList[i].lan === "06") {
            drawCircle(0, -100, dSize, dColor);
        } else if (dList[i].lan === "07") {
            drawCircle(5, -125, dSize, dColor);
        } else if (dList[i].lan === "08") {
            drawCircle(25, -110, dSize, dColor);
        } else if (dList[i].lan === "09") {
            drawCircle(65, -105, dSize, dColor);
        } else if (dList[i].lan === "10") {
            drawCircle(18, -142, dSize, dColor);
        } else if (dList[i].lan === "12") {
            drawCircle(-10, -150, dSize, dColor);
        } else if (dList[i].lan === "13") {
            drawCircle(-20, -125, dSize, dColor);
        } else if (dList[i].lan === "14") {
            drawCircle(-20, -75, dSize, dColor);
        } else if (dList[i].lan === "17") {
            drawCircle(-20, -20, dSize, dColor);
        } else if (dList[i].lan === "18") {
            drawCircle(10, -30, dSize, dColor);
        } else if (dList[i].lan === "19") {
            drawCircle(30, -20, dSize, dColor);
        } else if (dList[i].lan === "20") {
            drawCircle(5, 20, dSize, dColor);
        } else if (dList[i].lan === "21") {
            drawCircle(35, 30, dSize, dColor);
        } else if (dList[i].lan === "22") {
            drawCircle(49, 100, dSize, dColor);
        } else if (dList[i].lan === "23") {
            drawCircle(0, 100, dSize, dColor);
        } else if (dList[i].lan === "24") {
            drawCircle(50, 180, dSize, dColor);
        } else if (dList[i].lan === "25") {
            drawCircle(80, 280, dSize, dColor);
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
    function drawCircle(x, y, size, color) {
        var geometry = new THREE.CircleGeometry(size, 32);
        var material = new THREE.MeshBasicMaterial({ color: color, transparent: true });
        var circle = new THREE.Mesh(geometry, material);
        circle.position.x = x;
        circle.position.y = y;
        material.opacity = 0.7;
        scene.add(circle);
    }


    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    var t1 = performance.now()
    var result = t1 - t0;

    console.log("Call to three took " + (t1 - t0) + " milliseconds.")
    localStorage.setItem("perf", result.toFixed(4));

}