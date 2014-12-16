var scene, camera, renderer,bouton,index,center,
	textureFlare0,textureFlare1,textureFlare3,
	planetes  = [],
	mouse = new THREE.Vector2(),
	statutRot = true,
	WIDTH  	  = window.innerWidth,
	HEIGHT    = window.innerHeight,
	container = document.getElementById('container');
var clock = new THREE.Clock();
var loader = new THREE.ColladaLoader();

var Planete = function(planeteJSON)
{
    this.x = 0;
    this.y = planeteJSON.posY;
    this.z = 0;
    this.size = planeteJSON.size;
    this.sens = planeteJSON.sens;
    this.amp = planeteJSON.amp;
    this.speed = planeteJSON.speed;
};

Planete.prototype.load = function()
{ 
	var self = this;

    loader.load( 'assets/planet.dae', function ( collada ) {
        var dae = collada.scene;
        var skin = collada.skins[0];

        dae.position.set(self.x,self.y,self.z);
        dae.scale.set(self.size,self.size,self.size);
        scene.add(dae);

        self.mesh = dae;
    }); 
}

function createSystem()
{
    for (var i = 0; i < planetesArray.length; i++){
		var planet = new Planete(planetesArray[i]);
        planetes.push(planet);
        planet.load();
    }
}

function init()
{
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x000000, 3500, 15000 );
	scene.fog.color.setHSL( 0.51, 0.4, 0.01 );
	
	renderer = new THREE.WebGLRenderer(
		{	
			alpha:true,
			antialias:true
		});
    renderer.setSize(WIDTH, HEIGHT);
    
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 10000);
    camera.position.y = 50;
    camera.position.z = 1500;
    scene.add(camera);

    var ambient = new THREE.AmbientLight( 0xffffff );
	ambient.color.setHSL( 0.56, 0.53, 0.19 );
	scene.add( ambient );


	var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
	dirLight.position.set( 0, -1, 0 ).normalize();
	scene.add( dirLight );

	dirLight.color.setHSL( 0.56, 0.53, 0.29 );

    textureFlare0 = THREE.ImageUtils.loadTexture( "../textures/lensflare0_alpha.png" );
 	textureFlare2 = THREE.ImageUtils.loadTexture( "../textures/lensflare2.png" );
 	textureFlare3 = THREE.ImageUtils.loadTexture( "../textures/lensflare3.png" );

	addLight( 0.55, 0.9, 0.5, 5000, 0, -000 );
	addLight( 0.08, 0.8, 0.5,    0, 0, -000 );
	addLight( 0.995, 0.5, 0.9, 5000, 000, -000 );

    hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
	hemiLight.color.setHSL( 0.6, 1, 0.6 );
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
	hemiLight.position.set( 0, 100, 40 );
	scene.add( hemiLight );

	// dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
	// 			dirLight.color.setHSL( 0.1, 1, 0.95 );
	// 			dirLight.position.set( -1, 1.75, 1 );
	// 			dirLight.position.multiplyScalar( 50 );
	// 			scene.add( dirLight );

	// 			dirLight.castShadow = true;

	// 			dirLight.shadowMapWidth = 2048;
	// 			dirLight.shadowMapHeight = 2048;

	// 			var d = 50;

	// 			dirLight.shadowCameraLeft = -d;
	// 			dirLight.shadowCameraRight = d;
	// 			dirLight.shadowCameraTop = d;
	// 			dirLight.shadowCameraBottom = -d;

	// 			dirLight.shadowCameraFar = 3500;
	// 			dirLight.shadowBias = -0.0001;
	// 			dirLight.shadowDarkness = 0.35;
	// 			dirLight.shadowCameraVisible = true;

  	loader.options.convertUpAxis = true;
  	createSystem();
  	
    center = scene.position;
    //initialisation des controles
    controls = new THREE.FlyControls( camera, renderer.domElement );
    // parametres de controle via la souris
	controls.movementSpeed = 500;
	controls.domElement = container;
	controls.rollSpeed = 0.09;
	controls.autoForward = false;
	controls.dragToLook = true;
	controls.maxDistance = 1000;
    controls.minDistance = 100;

	renderer.setClearColor( scene.fog.color, 1 );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	window.addEventListener('resize', function() {
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });

    renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
}


function addLight( h, s, l, x, y, z ) {

	var light = new THREE.PointLight( 0xffffff, 1.5, 4500 );
	light.color.setHSL( h, s, l );
	light.position.set( x, y, z );
	scene.add( light );

	var flareColor = new THREE.Color( 0xffffff );
	flareColor.setHSL( h, s, l + 0.5 );

	var lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );

	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );

	lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
	lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
	lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
	lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

	lensFlare.customUpdateCallback = lensFlareUpdateCallback;
	lensFlare.position.copy( light.position );

	scene.add( lensFlare );

}

function lensFlareUpdateCallback( object )
{
	var f, fl = object.lensFlares.length;
	var flare;
	var vecX = -object.positionScreen.x * 2;
	var vecY = -object.positionScreen.y * 2;

	for(f = 0; f < fl; f++)
	{
	   flare = object.lensFlares[ f ];
	   flare.x = object.positionScreen.x + vecX * flare.distance;
	   flare.y = object.positionScreen.y + vecY * flare.distance;
	   flare.rotation = 0;
	}

	object.lensFlares[2].y += 0.025;
	object.lensFlares[3].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );
}


function animate()
{
    requestAnimationFrame(animate);
    TWEEN.update();
    // controls.update();
    render();
}

function render()
{
	if(statutRot){
		var timer = Date.now();
		for (var i = 0; i < planetes.length; i++){
			planetes[i].mesh.position.x = Math.cos(timer * planetes[i].speed * planetes[i].sens) * planetes[i].amp  ;
			planetes[i].mesh.position.z = Math.sin(timer * planetes[i].speed * planetes[i].sens) * planetes[i].amp  ;
			planetes[i].mesh.rotation.y;
		}
	}

	for (var i = 0; i < planetes.length; i++){
			planetes[i].mesh.rotation.y += 0.01;
		}

	var delta = clock.getDelta();

	controls.update( delta );
	if(!statutRot){
		camera.lookAt(center);
	}
	renderer.render(scene, camera);
}

function replaceCamera(x,y,z)
{
	new TWEEN.Tween(camera.position)
			.to({x:x,y:y,z:z},Math.random()*1000+1000)
			.easing(TWEEN.Easing.Exponential.InOut)
			.start();

	new TWEEN.Tween(camera.rotation)
		.to({x:0,y:0,z:0},Math.random()*1000+1000)
		.easing(TWEEN.Easing.Exponential.InOut)
		.start();

	new TWEEN.Tween(this)
		.to({},1000*2)
		.onUpdate(render)
		.start();
}

$('.test').on('click', function()
{

	index 	= $(this).data('index');

	center = planetes[index].mesh.position;
	zoomOnPlanet(index); 	
});

$('.face').on('click', function()
{
	replaceCamera(0,50,500);
});

$('.reset').on('click',function()
{
	$('#close').css('display','none');
	$('.face').css('display','block');
	
	center = scene.position;
	controls.dragToLook = false;
	statutRot = true;
	replaceCamera(0,50,500);
});

function zoomOnPlanet(i)
{
 	pas = planetes[i].size + 50;
 	x=planetes[i].mesh.position.x + pas;
 	y=planetes[i].mesh.position.y + pas;
 	z=planetes[i].mesh.position.z + pas;
 	
 	$('#close').css('display','block');
 	$('.face').css('display','none');
 	replaceCamera(x,y,z);
 	statutRot = false;
 	controls.dragToLook = true;
}

function onDocumentMouseMove( event )
{
	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onDocumentMouseDown( event )
{
	console.log('in');
	event.preventDefault();

	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	vector.unproject(camera);
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( planetes ,true);

	if ( intersects.length > 0 ) {

		alert('ok');
	}
}

function onDocumentMouseUp( event )
{
	console.log('out');
	event.preventDefault();

// 	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 ).unprojectVector( camera );

// 	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

// 	var intersects = raycaster.intersectObjects( objects );

// 	if ( intersects.length > 0 ) {

		
// 	}
}

init();
animate();




