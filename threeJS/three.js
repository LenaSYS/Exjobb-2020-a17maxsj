function threejs() {
    console.log("Starting Three module")
    const mmValue = [];
    console.log(dList[1].lan);


    //Get the smallest and biggest values
    for (var i = 0; i < dList.length; i++) {
        mmValue.push(dList[i].dValue);
    }

    var minRange = Math.min.apply(Math, mmValue);
    var maxRange = Math.max.apply(Math, mmValue);


    var camera, scene, renderer;
    camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);
    camera.position.z = 100;



    scene = new THREE.Scene();



    var renderer = new THREE.WebGLRenderer({ canvas: artifactCanvas });
    renderer.setSize(900, 700);

    document.body.appendChild(renderer.domElement);


    for (var i = 0; i < dList.length; i++) {


        //Draw dot in the right place depending on the county
        if (dList[i].lan === "01") {
            drawCircle(1, 1, 1, 0xFF0000);
        } else if (dList[i].lan === "03") {
            drawCircle(1, 4, 4, 0xFF0000);
        } else if (dList[i].lan === "04") {
            drawCircle(6, 10, 10, 0xFF0000);
        }



    }

    // Function that draws the circles
    function drawCircle(size, x, y, color) {


        var geometry = new THREE.SphereGeometry(size, 0, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        var material1 = new THREE.MeshBasicMaterial();
        var material2 = new THREE.MeshBasicMaterial();
        var sphere = [new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material2)];

        sphere[0].material.color.setHex(color);

        sphere[0].position.set(x, y, 0);

        scene.add(sphere[0]);
    }


    function render() {
        console.log("Rendering SVG...");
        renderer.render(scene, camera);
    }

    render();


}