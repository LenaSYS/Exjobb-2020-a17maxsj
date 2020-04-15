function threejs() {

    console.log("lolman")

  /*
    var can = document.getElementById('artifactCanvas');
var ctx = can.getContext('2d');

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    }
    img.src = "img/map.svg";
*/

this.renderer = new THREE.WebGLRenderer( { canvas: artifactCanvas, alpha: true } );



////////////////// CAMERA
this.camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
);
this.camera.position.set(0, 0, 200);

////////////////// SCENE
this.scene = new THREE.Scene();

const scene = this.scene;
scene.background = new THREE.Color( 0xff0000 );


////////////////// LOADER
fetch( 'https://openclipart.org/download/219211/options_icon.svg' )
    .then( response => response.text() )
    .then( svg => {

      var node = document.createElementNS( 'http://www.w3.org/2000/svg', 'g' );
      var parser = new DOMParser();
      var doc = parser.parseFromString( svg, 'image/svg+xml' );

      node.appendChild( doc.documentElement );

      var object = new THREE.SVGObject( node );
      scene.add(object);

} );

render();

/*
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
  render();
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
  camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);
  camera.position.z = 100;

  
  svgObject.position.x = Math.random() * innerWidth;
  svgObject.position.y = 200;
  svgObject.position.z = Math.random() * 10000 - 5000;
  svgObject.scale.x = svgObject.scale.y = svgObject.scale.z = 0.01;

  scene = new THREE.Scene();
  scene.add(svgObject);

  

  renderer = new THREE.SVGRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight - 5);

document.body.appendChild(renderer.domElement);
}



function render() {
  console.log("Rendering SVG...");
  renderer.render(scene, camera);
}
*/
}


