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
scene.add(cube2BB);
scene.add(cube2);


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


scene.background = new THREE.Color(0x15A4CE);

camera.position.z = 5;
cube_2.position.x = 5;
///////////////////////

Modelos3D();
 Barco2();
 Barco3();
 Barco4();
 Barco5();

 function detectCollision() {
    if (Modelos3dBB.intersectsBox(cube2BB)) {
        console.log('Colisión detectada entre Modelos3D y cube2');
        
        // Revierte la posición del modelo al estado anterior a la colisión
        objModelos3d.position.copy(previousModelPosition);
        
        // Actualiza la caja delimitadora del modelo
        Modelos3dBB.setFromObject(objModelos3d);
    }
}
function init() {
    // Escuchar eventos de teclado para mover "Modelos3D"
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                modelos3DPosition.z -= 0.1; // Mover hacia adelante
                break;
            case 's':
                modelos3DPosition.z += 0.1; // Mover hacia atrás
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

//var isMovingUp = true;
//var maxY = 1; // Maximum vertical position
//var minY = -3; // Minimum vertical position
    
function animate() {
   
    /*if (objModelos3d) {
        if (isMovingUp) {
            objModelos3d.position.y += 0.01;
        } else {
            objModelos3d.position.y -= 0.01;
        }

        
        if (objModelos3d.position.y >= maxY) {
            isMovingUp = false;
        } else if (objModelos3d.position.y <= minY) {
            isMovingUp = true;
        }
*/
previousModelPosition.copy(objModelos3d.position);
Modelos3dBB.setFromObject(objModelos3d);
objModelos3d.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
        // Actualiza la posición de cube2 para que siga al modelo
        // cube2.position.copy(objModelos3d.position);
    
        // Verifica la colisión
        detectCollision();
    

    // Actualiza la posición de cube2 para que siga al modelo
    // cube2.position.copy(objModelos3d.position);

    // Verifica la colisión
    if (Modelos3dBB.intersectsBox(cube2BB)) {
        // Colisión detectada con 'cube2'
        // Realiza acciones o maneja la colisión aquí
        // Por ejemplo, puedes detener el movimiento del modelo
        // objModelos3d.position.copy(previousModelPosition);
    }

    // Resto del código de animación
    // ...
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Representar posición actual de Modelos3D
const modelos3DPosition = {
    x: 4,
    y: 0,
    z: 0
};

// Representar posición actual de Barco2
const barco2Position = {
    x: 3,
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
            object.rotation.x = ((Math.PI / 2) * -1);
            scene.add(object);

            // Escuchar eventos de teclado para mover "Modelos3D"
            // document.addEventListener('keydown', (event) => {
            //     switch (event.key) {
            //         case 'w':
            //             modelos3DPosition.z -= 0.1; // Mover hacia adelante
            //             break;
            //         case 'a':
            //             modelos3DPosition.z += 0.1; // Mover hacia atrás
            //             break;
            //         case 's':
            //             modelos3DPosition.x -= 0.1; // Mover hacia la izquierda
            //             break;
            //         case 'd':
            //             modelos3DPosition.x += 0.1; // Mover hacia la derecha
            //             break;
            //     }
                // Actualizar la posición del modelo
                object.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
                objModelos3d=object;
                Modelos3dBB.setFromObject(objModelos3d); // Actualiza el BoundingBox del modelo
                Modelos3dBB = new THREE.Box3().setFromObject(objModelos3d);
                animate();
            // });
        });
        console.log(materials);
    });
}

 function Barco2(){
     const loaderBarco = new OBJLoader(manager);
     var mtlBarco = new MTLLoader(manager);

     mtlBarco.load('../models/barco1/Barco1.mtl',function (materials){
         materials.preload();
         loaderBarco.setMaterials(materials);
         loaderBarco.load('../models/barco1/Barco1.obj', function (object) {
             object.scale.copy( new THREE.Vector3(0.01,0.01,0.01));
             object.position.set(barco2Position.x, barco2Position.y, barco2Position.z);
             scene.add( object );

             // Escuchar eventos de teclado para mover "Barco2"
             document.addEventListener('keydown', (event) => {
              switch (event.key) {
                    case 'ArrowUp':
                         barco2Position.z -= 0.1; // Mover hacia adelante
                         break;
                     case 'ArrowDown':
                        barco2Position.z += 0.1; // Mover hacia atrás
                         break;
                     case 'ArrowLeft':
                        barco2Position.x -= 0.1; // Mover hacia la izquierda
                        break;
                    case 'ArrowRight':
                        barco2Position.x += 0.1; // Mover hacia la derecha
                        break;
                }
                // Actualizar la posición del modelo
                object.position.set(barco2Position.x, barco2Position.y, barco2Position.z);
            });
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
             object.position.set(-3, 0, 0);
             scene.add( object );

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
             object.position.set(-5, 2, 0);
             scene.add( object );

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
            object.position.set(1, -1, 0);
             scene.add( object );

        });
        console.log(materials);
     });
 }


init();