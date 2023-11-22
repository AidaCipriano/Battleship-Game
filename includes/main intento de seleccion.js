import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  

// Variables para el proceso de colisiones
var objModelos3d;
let Modelos3dBB;
Modelos3dBB = new THREE.Box3(); //.setFromObject(objModelos3d);
var previousModelPosition = new THREE.Vector3();

var objBarco2;
let barco2BB;
barco2BB = new THREE.Box3(); //.setFromObject(objModelos3d);
var previousBarco2Position = new THREE.Vector3();

var objBarco3;
let barco3BB;
barco3BB = new THREE.Box3(); //.setFromObject(objModelos3d);
var previousBarco3Position = new THREE.Vector3();

var objBarco4;
let barco4BB;
barco4BB = new THREE.Box3(); //.setFromObject(objModelos3d);
var previousBarco4Position = new THREE.Vector3();

var objBarco5;
let barco5BB;
barco5BB = new THREE.Box3(); //.setFromObject(objModelos3d);
var previousBarco5Position = new THREE.Vector3();


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Manager
const manager = new THREE.LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
};

manager.onLoad = function () {
    console.log('Loading complete!');
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
};

manager.onError = function (url) {
    console.log('There was an error loading ' + url);
};

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

// Crear un cubo para colisiones
const geometry_cube2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material_cube2 = new THREE.MeshPhongMaterial({ color: 0x493d80 });
const cube2 = new THREE.Mesh(geometry_cube2, material_cube2);
cube2.scale.set(2, 2, 2);
cube2.position.x = 3;  //en 3 colisiona 
cube2.position.y = 0;
cube2.position.z = 0;

var cube2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube2BB.setFromObject(cube2);






// Direccional
const light = new THREE.DirectionalLight(0xFFFFFF);
light.position.set(1, 2, 3);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xFFFFFF);
light1.position.set(0, 3, 0);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xFFFFFF);
light2.position.set(1, 5, -30);
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xFFFFFF);
light3.position.set(-5, 0, 0);
scene.add(light3);

// Cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0;
scene.add(cube);



const geometry_2 = new THREE.BoxGeometry(1, 1, 1);
const material_2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube_2 = new THREE.Mesh(geometry_2, material_2);
scene.add(cube_2);


scene.background = new THREE.Color(0xF4B443);

camera.position.z = 9;
camera.position.y = 0.5;
cube_2.position.x = 5;
///////////////////////
/**************************************************** PLANOS*/

//planos JUGADOR 01 DONDE VES TUS BARCOS
const widthSegments = 10;  // El número de segmentos en el ancho
const heightSegments = 10; // El número de segmentos en el alto

const geometryPlane = new THREE.PlaneGeometry(6, 5, widthSegments, heightSegments);
const materialPlane = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const plane = new THREE.Mesh(geometryPlane, materialPlane);
plane.position.set(-5,-2,0 );
scene.add(plane);

//PLANO JUGADORES 02 DONDE ATACAS
const widthSegments02 = 10;  // El número de segmentos en el ancho
const heightSegments02 = 10; // El número de segmentos en el alto

const geometryPlane02 = new THREE.PlaneGeometry(6, 5, widthSegments02, heightSegments02);
const materialPlane02 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const plane02 = new THREE.Mesh(geometryPlane02, materialPlane02);
plane02.position.set(3,-2,0 );
scene.add(plane02);

// PLANOS ENEMIGO 
//DONDE VES TUS BARCOS
const widthSeg = 10;  // El número de segmentos en el ancho
const heightSeg = 10; // El número de segmentos en el alto

const geoPlane = new THREE.PlaneGeometry(6, 5, widthSeg, heightSeg);
const matPlane = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const planeE1 = new THREE.Mesh(geoPlane, matPlane);
planeE1.position.set(-5,4,0 );
scene.add(planeE1);

//DONDE ATACAS
const widthSeg02 = 10;  // El número de segmentos en el ancho
const heightSeg02 = 10; // El número de segmentos en el alto

const geometryPlaneE02 = new THREE.PlaneGeometry(6, 5, widthSeg02, heightSeg02);
const materialPlaneE02 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const planeE02 = new THREE.Mesh(geometryPlaneE02, materialPlaneE02);
planeE02.position.set(3,4,0);
scene.add(planeE02);




/** **************************************************/

Modelos3D();
 Barco2();
 Barco3();
 Barco4();
 Barco5();

 function detectCollision() {

    
    /// prueba con cubo//
    if (Modelos3dBB.intersectsBox(cube2BB)) {
        console.log('Colisión detectada entre Modelos3D y cube2');
        
        // Revierte la posición del modelo al estado anterior a la colisión
        objModelos3d.position.copy(previousModelPosition);
        // Actualiza la caja delimitadora del modelo
        Modelos3dBB.setFromObject(objModelos3d);
    }

    if (barco2BB.intersectsBox(cube2BB)) {
        console.log('Colisión detectada entre barco2 y cube2');

        objBarco2.position.copy(previousBarco2Position);
        barco2BB.setFromObject(objBarco2);
    }
  /// prueba con cubo//

    if (Modelos3dBB.intersectsBox(barco2BB)) {
        console.log('Colisión detectada entre Modelos3D y barco2');
        
        objModelos3d.position.copy(previousModelPosition);
        objBarco2.position.copy(previousBarco2Position);
        
        Modelos3dBB.setFromObject(objModelos3d);
        barco2BB.setFromObject(objBarco2);
    }

    if (Modelos3dBB.intersectsBox(barco3BB)) {
        console.log('Colisión detectada entre Modelos3D y barco3');
        
        objBarco3.position.copy(previousBarco3Position);
        objModelos3d.position.copy(previousModelPosition);

        Modelos3dBB.setFromObject(objModelos3d);
        barco3BB.setFromObject(objBarco3);
    }

    if (Modelos3dBB.intersectsBox(barco4BB)) {
        console.log('Colisión detectada entre Modelos3D y barco4');
        
        objBarco4.position.copy(previousBarco4Position);
        objModelos3d.position.copy(previousModelPosition);

        Modelos3dBB.setFromObject(objModelos3d);
        barco4BB.setFromObject(objBarco4);
    }

    if (Modelos3dBB.intersectsBox(barco5BB)) {
        console.log('Colisión detectada entre Modelos3D y barco5');
        
        objBarco5.position.copy(previousBarco5Position);
        objModelos3d.position.copy(previousModelPosition);

        Modelos3dBB.setFromObject(objModelos3d);
        barco5BB.setFromObject(objBarco5);
    }

    if (barco2BB.intersectsBox(barco3BB)) {
        console.log('Colisión detectada entre barco2 y barco3');
        
        objBarco3.position.copy(previousBarco3Position);
        objBarco2.position.copy(previousBarco2Position);

        barco3BB.setFromObject(objBarco3);
        barco2BB.setFromObject(objBarco2);
    }


    if (barco2BB.intersectsBox(barco4BB)) {
        console.log('Colisión detectada entre barco2 y barco4');
        
        objBarco4.position.copy(previousBarco4Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco4BB.setFromObject(objBarco4);
    }

    if (barco2BB.intersectsBox(barco5BB)) {
        console.log('Colisión detectada entre barco2 y barco5');
        
        objBarco5.position.copy(previousBarco5Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco5BB.setFromObject(objBarco5);
    }

    if (barco3BB.intersectsBox(barco4BB)) {
        console.log('Colisión detectada entre barco3 y barco4');
        
        objBarco4.position.copy(previousBarco4Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco4BB.setFromObject(objBarco4);
    }

    if (barco3BB.intersectsBox(barco5BB)) {
        console.log('Colisión detectada entre barco3 y barco5');
        
        objBarco5.position.copy(previousBarco5Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco5BB.setFromObject(objBarco5);
    }


}

// Mantén un estado para el modelo seleccionado
// Mantén un estado para el modelo seleccionado
let selectedObject = null;
const colorOriginal = 0xff0000; // Color original del modelo
const colorSeleccionado = 0x00ff00; // Color cuando está seleccionado

// Escucha eventos de clic para seleccionar/deseleccionar modelos
/*renderer.domElement.addEventListener('click', onModelClick);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onModelClick(event) {
    // Calcula la posición del clic en el mundo 3D
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Actualiza el raycaster y realiza la intersección de objetos
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects([objModelos3d, objBarco2, objBarco3, objBarco4, objBarco5]);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        if (selectedObject === clickedObject) {
            // Deselecciona el modelo y restaura el color original
            selectedObject = null;
            console.log('Modelo deseleccionado');
            
            if (clickedObject && clickedObject.material && clickedObject.material.color) {
                clickedObject.material.color.set(colorOriginal);
            }
        } else {
            // Selecciona el modelo y cambia el color
            selectedObject = clickedObject;
            console.log('Modelo seleccionado');
            
            if (clickedObject && clickedObject.material && clickedObject.material.color) {
                clickedObject.material.color.set(colorSeleccionado);
            }
            init()
            animate()
            
            // Aquí, puedes agregar código para mover el objeto seleccionado
            // Por ejemplo, muévelo a una nueva posición
        }
    }
}
*/


 
function init() {
    // Escuchar eventos de teclado para mover "Modelos3D"
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                modelos3DPosition.y += 0.1; // Mover hacia arriba
                break;
            case 's':
                modelos3DPosition.y -= 0.1; // Mover hacia abajo
                break;
            case 'a':
                modelos3DPosition.x -= 0.1; // Mover hacia la izquierda
                break;
            case 'd':
                modelos3DPosition.x += 0.1; // Mover hacia la derecha
                break;
        }

        // Actualizar la posición del modelo
        objModelos3d.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
        Modelos3dBB.setFromObject(objModelos3d); // Actualiza el BoundingBox del modelo

        // Luego, puedes llamar a detectCollision() para verificar colisiones
        detectCollision();
    });
}



    
function animate() {
    previousModelPosition.copy(objModelos3d.position);
    Modelos3dBB.setFromObject(objModelos3d);
    objModelos3d.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);

    previousBarco2Position.copy(objBarco2.position);
    barco2BB.setFromObject(objBarco2);
    objBarco2.position.set(barco2Position.x, barco2Position.y, barco2Position.z);

    previousBarco3Position.copy(objBarco3.position);
    barco2BB.setFromObject(objBarco2);
    objBarco2.position.set(barco2Position.x, barco2Position.y, barco2Position.z);

    previousBarco4Position.copy(objBarco4.position);
    barco4BB.setFromObject(objBarco4);
    objBarco4.position.set(barco4Position.x, barco4Position.y, barco4Position.z);

    previousBarco5Position.copy(objBarco5.position);
    barco5BB.setFromObject(objBarco5);
    objBarco5.position.set(barco5Position.x, barco5Position.y, barco5Position.z);

init();
    // Verifica la colisión
    detectCollision();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Representar posición actual de Modelos3D
const modelos3DPosition = {
    x: 1,
    y: 0,
    z: 0
};

// Representar posición actual de Barco2
const barco2Position = {
    x: 3,
    y: 5,
    z: 0
};

const barco3Position = {
    x: 4,
    y: 0,
    z: 0
};

const barco4Position = {
    x: 8,
    y: 0,
    z: 0
};

const barco5Position = {
    x: 11,
    y: 0,
    z: 0
};



// animate();  segun yo va dentro del carga de objeto


function Modelos3D() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco2/barco.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco2/barco.obj', function  (object) {
            object.scale.copy(new THREE.Vector3(0.001, 0.001, 0.001));
            object.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
        
            scene.add(object);

    
                
                objModelos3d=object;
                Modelos3dBB.setFromObject(objModelos3d); // Actualiza el BoundingBox del modelo
                Modelos3dBB = new THREE.Box3().setFromObject(objModelos3d);
             
                animate();
            // });
        });
        console.log(materials);
    });
}

function Barco2() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco1/Barco1.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco1/Barco1.obj', function (object) {
            object.scale.copy(new THREE.Vector3(0.02, 0.02, 0.02));
            object.position.set(barco2Position.x, barco2Position.y, barco2Position.z);
            
            // Ahora puedes aplicar la rotación vertical
            object.rotation.x = Math.PI / 2;

            // Añade el objeto al escenario después de aplicar la rotación
            scene.add(object);

            objBarco2 = object;
            barco2BB.setFromObject(objBarco2); // Actualiza el BoundingBox del modelo
            barco2BB = new THREE.Box3().setFromObject(objBarco2);
           
            animate();
        });
        console.log(materials);
    });
}
 function Barco3(){
     const loaderBarco = new OBJLoader(manager);
    // var mtlBarco = new MTLLoader(manager);

     //mtlBarco.load('models/barco3/Barco3.mtl',function (materials){
         //materials.preload();
       //  loaderBarco.setMaterials(materials);
         loaderBarco.load('../models/barco3/Barco3.obj',
        
         function ( object ){
             object.scale.copy( new THREE.Vector3(0.001,0.001,0.001));
             object.position.set(barco3Position.x, barco3Position.y, barco3Position.z);
             object.rotation.x = Math.PI / 2;
             object.rotation.y = Math.PI / 2;
             scene.add( object );

        
             objBarco3=object;
             barco3BB.setFromObject(objBarco3); // Actualiza el BoundingBox del modelo
             barco3BB = new THREE.Box3().setFromObject(objBarco3);
          
             animate();

         });
        // console.log(materials);
    // });
 }
 function Barco4(){
     const loaderBarco = new OBJLoader(manager);
     var mtlBarco = new MTLLoader(manager);

     mtlBarco.load('../models/barco4/Barco4.mtl',function (materials){
         materials.preload();
         loaderBarco.setMaterials(materials);
         loaderBarco.load('../models/barco4/Barco4.obj',
        
         function ( object ){
             object.scale.copy( new THREE.Vector3(1,1,1));
             object.position.set(barco4Position.x, barco4Position.y, barco4Position.z);
             object.rotation.x = Math.PI / 2;
             object.rotation.y = Math.PI / 2;
             scene.add( object );


            
             objBarco4=object;
             barco4BB.setFromObject(objBarco4); // Actualiza el BoundingBox del modelo
             barco4BB = new THREE.Box3().setFromObject(objBarco4);
          
             animate();

         });
         console.log(materials);
     });
 }

 function Barco5(){
     const loaderBarco = new OBJLoader(manager);
     var mtlBarco = new MTLLoader(manager);

     mtlBarco.load('../models/barco5/submarino.mtl',function (materials){
         materials.preload();
         loaderBarco.setMaterials(materials);
         loaderBarco.load('../models/barco5/submarino.obj',
        
         function ( object ){
             object.scale.copy( new THREE.Vector3(0.7,0.7,0.7));
             object.position.set(barco5Position.x, barco5Position.y, barco5Position.z);
             object.rotation.x = Math.PI / 2;
             object.rotation.y = Math.PI / 2;
             scene.add( object );

              
             objBarco5=object;
             barco5BB.setFromObject(objBarco5); // Actualiza el BoundingBox del modelo
             barco5BB = new THREE.Box3().setFromObject(objBarco5);
            
             animate();
             

        });
        console.log(materials);
     });
 }


//init();
