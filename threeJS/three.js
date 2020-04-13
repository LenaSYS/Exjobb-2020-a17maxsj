function threejs() {

    console.log("lolman")

  
    var can = document.getElementById('artifactCanvas');
var ctx = can.getContext('2d');

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    }
    img.src = "img/map.svg";

/*
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
*/
THREE.LegacySVGLoader = function(manager) {

  this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

};

THREE.LegacySVGLoader.prototype = {

  constructor: THREE.LegacySVGLoader,

  load: function(url, onLoad, onProgress, onError) {

    var scope = this;

    var parser = new DOMParser();

    var loader = new THREE.FileLoader(scope.manager);
    loader.load(url, function(svgString) {

      var doc = parser.parseFromString(svgString, 'image/svg+xml'); // application/xml

      onLoad(doc.documentElement);

    }, onProgress, onError);

  }

};

var svgManager = new THREE.LegacySVGLoader();
var url = 'https://cors-anywhere.herokuapp.com/https://wwwlab.iit.his.se/a17maxsj/map.svg';

function svg_loading_done_callback(doc) {
  init(new THREE.SVGObject(doc));
  animate();
};

svgManager.load(url,
  svg_loading_done_callback,
  function() {
    console.log("Loading SVG...");
  },
  function() {
    console.log("Error loading SVG!");
  });

var camera, scene, renderer;

function init(svgObject) {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
  camera.position.z = 1500;

  svgObject.position.x = Math.random() * innerWidth;
  svgObject.position.y = 200;
  svgObject.position.z = Math.random() * 10000 - 5000;
  svgObject.scale.x = svgObject.scale.y = svgObject.scale.z = 0.01;

  scene = new THREE.Scene();
  scene.add(svgObject);

  var ambient = new THREE.AmbientLight(0x80ffff);
  scene.add(ambient);
  var directional = new THREE.DirectionalLight(0xffff00);
  directional.position.set(-1, 0.5, 0);
  scene.add(directional);
  renderer = new THREE.SVGRenderer();
  renderer.setClearColor(0xf0f0f0);
  renderer.setSize(window.innerWidth, window.innerHeight - 5);
  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  var time = Date.now() * 0.0002;
  camera.position.x = Math.sin(time) * 200;
  camera.position.z = Math.cos(time) * 200;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
}


