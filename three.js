function threejs() {

    console.log("lolman")

  
    var can = document.getElementById('artifactCanvas');
var ctx = can.getContext('2d');

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    }
    img.src = "map.svg";


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( { canvas: artifactCanvas } );
document.body.appendChild(renderer.domElement);

var size = 3;
var geometry = new THREE.SphereGeometry(size, 0, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material1 = new THREE.MeshBasicMaterial();
var material2 = new THREE.MeshBasicMaterial();
var sphere = [new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material2)];

sphere[0].position.set(0, 40, 0);
sphere[1].position.set(0, 0, 0);

scene.add(sphere[0]);
scene.add(sphere[1]);

camera.position.z = 100;


sphere[0].material.color.setHex( 0xff0000 );



var render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};


render();


}


