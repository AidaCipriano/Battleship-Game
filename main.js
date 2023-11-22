import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DragControls } from 'three/addons/controls/DragControls.js';

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

//************************************** */
// Barda central del juego
const geometry_cube3 = new THREE.BoxGeometry(6.5, 0.5, 0.5);
const material_cube3 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF,transparent: true, opacity: 0});
const cube3 = new THREE.Mesh(geometry_cube3, material_cube3);
cube3.scale.set(2, 1, 1);
cube3.position.x = -1;  
cube3.position.y = 0.7;
cube3.position.z = 0;
cube3.rotation.y = Math.PI / 2
cube3.rotation.z = Math.PI / 2
var cube3BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube3BB.setFromObject(cube3);
scene.add(cube3);


// Barda izquierda del juego
const geometry_cube4 = new THREE.BoxGeometry(6.5, 0.5, 0.5);
const material_cube4 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF,transparent: true, opacity: 0});
const cube4 = new THREE.Mesh(geometry_cube4, material_cube4);
cube4.scale.set(2, 1, 1);
cube4.position.x = -8.7;  
cube4.position.y = 0.7;
cube4.position.z = 0;
cube4.rotation.y = Math.PI / 2
cube4.rotation.z = Math.PI / 2
var cube4BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube4BB.setFromObject(cube4);
scene.add(cube4);

//bomba1

const geometry_sphere = new THREE.SphereGeometry(0.5, 32, 32);
const material_sphere = new THREE.MeshPhongMaterial({ color: 0x000000 });
const sphere = new THREE.Mesh(geometry_sphere, material_sphere);
sphere.position.set(1, -6.3, 0.5);
scene.add(sphere);

  
// DRAG CUBE2//
let dControl;
let orbit;
orbit = new OrbitControls(camera, renderer.domElement)
dControl = new DragControls([sphere],camera,renderer.domElement)

dControl.addEventListener('dragstart',()=>{

    orbit.enabled = false
})

// Barda superior del juego
const geometry_cube5 = new THREE.BoxGeometry(7.5, 0.5, 0.5);
const material_cube5 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF,transparent: true, opacity: 0});
const cube5 = new THREE.Mesh(geometry_cube5, material_cube5);
cube5.scale.set(2, 1, 1);
cube5.position.x = -1;  
cube5.position.y = 7.7;
cube5.position.z = 0;
var cube5BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube5BB.setFromObject(cube5);
scene.add(cube5);

// Barda inferior del juego
const geometry_cube6 = new THREE.BoxGeometry(7.5, 0.5, 0.5);
const material_cube6 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF,transparent: true, opacity: 0});
const cube6 = new THREE.Mesh(geometry_cube6, material_cube6);
cube6.scale.set(2, 1, 1);
cube6.position.x = -1;  
cube6.position.y = -6.3;
cube6.position.z = 0.5;
var cube6BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube6BB.setFromObject(cube6);
scene.add(cube6);


// Barda derecha del juego
const geometry_cube2 = new THREE.BoxGeometry(6.5, 0.5, 0.5);
const material_cube2 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
const cube2 = new THREE.Mesh(geometry_cube2, material_cube2);
cube2.scale.set(2, 1, 1);
cube2.position.x = 6.5; 
cube2.position.y = 0.7;
cube2.position.z = 0;
cube2.rotation.y = Math.PI / 2
cube2.rotation.z = Math.PI / 2
var cube2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube2BB.setFromObject(cube2);
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

//Cilindro IA
const geometryCI = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI = new THREE.MeshPhongMaterial({ color: 0xC42012 });
const cylinder = new THREE.Mesh(geometryCI, materialCI);
cylinder.scale.set(0.05, 0.05, 0.05);


cylinder.position.set((-2.9) - (-0.28), 6.7, 0);//la posicion x siempre debe restar -.028 por el cilindro y su tamaño (FORMULA PARA CILINDRO DE 2 ESPACIOS)
cylinder.rotation.z = Math.PI / 2;
scene.add(cylinder);

//Cilindro IA
const geometryCI1 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI1 = new THREE.MeshPhongMaterial({ color: 0x63D5EB });
const cylinder01 = new THREE.Mesh(geometryCI1, materialCI1);
cylinder01.scale.set(0.05, 0.076, 0.05);
cylinder01.position.set(-7.07, 5.74, 0);
cylinder01.rotation.z = Math.PI / 2;
scene.add(cylinder01);

//Cilindro IA
const geometryCI2 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI2 = new THREE.MeshPhongMaterial({ color: 0x8E02D9 });
const cylinder02 = new THREE.Mesh(geometryCI2, materialCI2);
cylinder02.scale.set(0.05, 0.1, 0.05);
cylinder02.position.set(-6.8, 5.23, 0); // baja en 0.5 
cylinder02.rotation.z = Math.PI / 2;
scene.add(cylinder02);

//Cilindro IA
const geometryCI3 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI3 = new THREE.MeshPhongMaterial({ color: 0xE6DC75 });
const cylinder03 = new THREE.Mesh(geometryCI3, materialCI3);
cylinder03.scale.set(0.05, 0.125, 0.05);
cylinder03.position.set(-6.49, 4.7, 0); // baja en 0.5 
cylinder03.rotation.z = Math.PI / 2;
scene.add(cylinder03);

//Cilindro IA
const geometryCI4 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI4 = new THREE.MeshPhongMaterial({ color: 0x2661E0 });
const cylinder04 = new THREE.Mesh(geometryCI4, materialCI4);
cylinder04.scale.set(0.05, 0.075, 0.05);
cylinder04.position.set(-7.07, 4.2, 0); // baja en 0.5 
cylinder04.rotation.z = Math.PI / 2;
scene.add(cylinder04);

//Cilindro IA QUIERO QUE ESTE CILINDRO se mueva 
const geometryCI5 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI5 = new THREE.MeshPhongMaterial({ color: 0xF09337 });
const cylinder05 = new THREE.Mesh(geometryCI5, materialCI5);
cylinder05.scale.set(0.05, 0.022, 0.05);
cylinder05.position.set(-7.7, 6.7, 0); // baja en 0.5 
cylinder05.rotation.z = Math.PI / 2;
scene.add(cylinder05);



const tex = new TextGeometry();
const load = new FontLoader();

// ARRIBA
crearTexto(-8, 7.3, 'A  B C D E  F G  H  I  J');
crearTexto(-9,6.5, '1');
crearTexto(-9,5.9, '2');
crearTexto(-9,5.3, '3');
crearTexto(-9,4.7, '4');
crearTexto(-9,4.1, '5');
crearTexto(-9,3.5, '6');
crearTexto(-9,2.9, '7');
crearTexto(-9,2.3, '8');
crearTexto(-9,1.7, '9');
crearTexto(-9,1.1, '10');


//ABAJO 
crearTexto(-8, -6.2, 'A  B C D E  F G  H  I  J');
crearTexto(-9,-0.1, '1');
crearTexto(-9,-.7, '2');
crearTexto(-9,-1.3, '3');
crearTexto(-9,-1.9, '4');
crearTexto(-9,-2.5, '5');
crearTexto(-9,-3.1, '6');
crearTexto(-9,-3.7, '7');
crearTexto(-9,-4.3, '8');
crearTexto(-9,-4.9, '9');
crearTexto(-9,-5.5, '10');

//ARRIBA
crearTexto(-0.2, 7.3, 'A  B C D E  F G  H  I  J');
crearTexto(-1.1,6.5, '1');
crearTexto(-1.1,5.9, '2');
crearTexto(-1.1,5.3, '3');
crearTexto(-1.1,4.7, '4');
crearTexto(-1.1,4.1, '5');
crearTexto(-1.1,3.5, '6');
crearTexto(-1.1,2.9, '7');
crearTexto(-1.1,2.3, '8');
crearTexto(-1.1,1.7, '9');
crearTexto(-1.1,1.1, '10');

//ABAJO
crearTexto(-0.2, -6.2, 'A  B C D E  F G  H  I  J');
crearTexto(-1.1,-0.1, '1');
crearTexto(-1.1,-.7, '2');
crearTexto(-1.1,-1.3, '3');
crearTexto(-1.1,-1.9, '4');
crearTexto(-1.1,-2.5, '5');
crearTexto(-1.1,-3.1, '6');
crearTexto(-1.1,-3.7, '7');
crearTexto(-1.1,-4.3, '8');
crearTexto(-1.1,-4.9, '9');
crearTexto(-1.1,-5.5, '10');



scene.background = new THREE.Color(0x15A4CE);
camera.position.z = 11;
camera.position.y = 0;
camera.position.x = 0;


//planos JUGADOR 01 DONDE VES TUS BARCOS
const widthSegments = 10;  // El número de segmentos en el ancho
const heightSegments = 10; // El número de segmentos en el alto
const geometryPlane = new THREE.PlaneGeometry(6, 6, widthSegments, heightSegments);
const materialPlane = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const plane = new THREE.Mesh(geometryPlane, materialPlane);
plane.position.set(-5, -2.6, 0);
scene.add(plane);

//PLANO JUGADORES 02 DONDE ATACAS
const widthSegments02 = 10;  // El número de segmentos en el ancho
const heightSegments02 = 10; // El número de segmentos en el alto
const geometryPlane02 = new THREE.PlaneGeometry(6, 6, widthSegments02, heightSegments02);
const materialPlane02 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const plane02 = new THREE.Mesh(geometryPlane02, materialPlane02);
plane02.position.set(2.8, -2.6, 0);
scene.add(plane02);

// PLANOS ENEMIGO 
//DONDE VES TUS BARCOS
const widthSeg = 10;  // El número de segmentos en el ancho
const heightSeg = 10; // El número de segmentos en el alto
const geoPlane = new THREE.PlaneGeometry(6, 6, widthSeg, heightSeg);
const matPlane = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const planeE1 = new THREE.Mesh(geoPlane, matPlane);
planeE1.position.set(-5, 4, 0);
scene.add(planeE1);

//DONDE ATACAS
const widthSeg02 = 10;  // El número de segmentos en el ancho
const heightSeg02 = 10; // El número de segmentos en el alto
const geometryPlaneE02 = new THREE.PlaneGeometry(6, 6, widthSeg02, heightSeg02);
const materialPlaneE02 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const planeE02 = new THREE.Mesh(geometryPlaneE02, materialPlaneE02);
planeE02.position.set(2.8, 4, 0);
scene.add(planeE02);


function crearTexto(posicionX, posicionY, texto) {
    const load = new FontLoader();
    
    load.load('./../fonts/Roboto_Bold.json', function (font) {
        const geo = new TextGeometry(texto, {
            font: font,
            size: 0.46,
            height: 0,
        });

        const textMesh = new THREE.Mesh(geo, [
            new THREE.MeshPhongMaterial({ color: 0x429EE6 }),
            new THREE.MeshPhongMaterial({ color: 0xffffff })
        ]);

        scene.add(textMesh);
        textMesh.position.set(posicionX, posicionY, 0);
    }, undefined, function (error) {
        console.error('Error cargando la fuente:', error);
    });
}


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
        return false;
    }


    if (barco2BB.intersectsBox(barco4BB)) {
        console.log('Colisión detectada entre barco2 y barco4');

        objBarco4.position.copy(previousBarco4Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco4BB.setFromObject(objBarco4);
        return false;
    }

    if (barco2BB.intersectsBox(barco5BB)) {
        console.log('Colisión detectada entre barco2 y barco5');

        objBarco5.position.copy(previousBarco5Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco5BB.setFromObject(objBarco5);
        return false;
    }

    if (barco3BB.intersectsBox(barco4BB)) {
        console.log('Colisión detectada entre barco3 y barco4');

        objBarco4.position.copy(previousBarco4Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco4BB.setFromObject(objBarco4);
        return false;
    }

    if (barco3BB.intersectsBox(barco5BB)) {
        console.log('Colisión detectada entre barco3 y barco5');

        objBarco5.position.copy(previousBarco5Position);
        objBarco2.position.copy(previousBarco2Position);

        barco2BB.setFromObject(objBarco2);
        barco5BB.setFromObject(objBarco5);
        return false;
    }

    if (
        Modelos3dBB.intersectsBox(cube2BB) ||
        Modelos3dBB.intersectsBox(cube3BB) ||
        Modelos3dBB.intersectsBox(cube4BB) ||
        Modelos3dBB.intersectsBox(cube5BB) ||
        Modelos3dBB.intersectsBox(cube6BB)
    ) {
        console.log('Colisión detectada entre Modelos3D y alguna de las cajas');
        objModelos3d.position.copy(previousModelPosition);
        Modelos3dBB.setFromObject(objModelos3d);
        return false;
    }

    if (
        barco2BB.intersectsBox(cube2BB) ||
        barco2BB.intersectsBox(cube3BB) ||
        barco2BB.intersectsBox(cube4BB) ||
        barco2BB.intersectsBox(cube5BB) ||
        barco2BB.intersectsBox(cube6BB)
    ) {
        console.log('Colisión detectada entre barco2BB y alguna de las cajas');
  
        objBarco2.position.copy(previousBarco2Position);
        barco2BB.setFromObject(objBarco2);
        return false;
    }

    if (
        barco3BB.intersectsBox(cube2BB) ||
        barco3BB.intersectsBox(cube3BB) ||
        barco3BB.intersectsBox(cube4BB) ||
        barco3BB.intersectsBox(cube5BB) ||
        barco3BB.intersectsBox(cube6BB)
    ) {
        console.log('Colisión detectada entre barco3BB y alguna de las cajas');
  
        objBarco3.position.copy(previousBarco3Position);
        barco3BB.setFromObject(objBarco3);
        return false;
    }

    
    if (
        barco4BB.intersectsBox(cube2BB) ||
        barco4BB.intersectsBox(cube3BB) ||
        barco4BB.intersectsBox(cube4BB) ||
        barco4BB.intersectsBox(cube5BB) ||
        barco4BB.intersectsBox(cube6BB)
    ) {
        console.log('Colisión detectada entre barco4BB y alguna de las cajas');
        objBarco4.position.copy(previousBarco4Position);
        barco4BB.setFromObject(objBarco4);
        return false;
    }

    if (
        barco5BB.intersectsBox(cube5BB) ||
        barco5BB.intersectsBox(cube3BB) ||
        barco5BB.intersectsBox(cube4BB) ||
        barco5BB.intersectsBox(cube5BB) ||
        barco5BB.intersectsBox(cube6BB)
    ) {
        console.log('Colisión detectada entre barco5BB y alguna de las cajas');
  
        objBarco5.position.copy(previousBarco5Position);
        barco5BB.setFromObject(objBarco5);
        return false;
    }


}

function movcil() {
    // Escuchar eventos de teclado para mover "Modelos3D"
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                cylinder05.position.y += 0.6; // Mover hacia arriba
                break;
            case 'ArrowDown':
                cylinder05.position.y -= 0.6 // Mover hacia abajo
                break;
            case 'ArrowLeft':
                cylinder05.position.x -= 0.6; // Mover hacia la izquierda
                break;
            case 'ArrowRight':
                cylinder05.position.x += 0.6; // Mover hacia la derecha
                break;
            case 'c':
                var vari = Math.PI / 2;
                cylinder05.rotation.z += vari; // Mover hacia la derecha
                break;

        }
    });
}

function init() {
    // Escuchar eventos de teclado para mover "Modelos3D"
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                modelos3DPosition.y += 0.8; // Mover hacia arriba
                break;
            case 's':
                modelos3DPosition.y -= 0.8; // Mover hacia abajo
                break;
            case 'a':
                modelos3DPosition.x -= 0.8; // Mover hacia la izquierda
                break;
            case 'd':
                modelos3DPosition.x += 0.8; // Mover hacia la derecha
                break;
            case 'r':
                // Rotar hacia arriba (en sentido horario) en el eje X
                var vari = Math.PI / 2;
                objModelos3d.rotation.z += vari;
                break;
        }

        // Actualizar la posición del modelo
        objModelos3d.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
        Modelos3dBB.setFromObject(objModelos3d); // Actualiza el BoundingBox del modelo

        // Luego, puedes llamar a detectCollision() para verificar colisiones
        detectCollision();
    });
}


// Llama a la función init para configurar los eventos de teclado
init();
movcil();
//init2();



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

    // Verifica la colisión
    detectCollision();
    // aqui agrego las coordenadas
    var posicionY = cylinder05.position.y;
    var posicionX = cylinder05.position.x;
    var objetivo = document.getElementById('follow-text');
    if (objetivo) {
        objetivo.innerHTML = "x:" + posicionX.toString() + "//  y: " + posicionY.toString();
    } else {
        console.error("El elemento con ID 'follow-text' no se encontró en el documento.");
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Representar posición actual de Modelos3D
const modelos3DPosition = {
    x: 0,
    y: 0,
    z: 0
};

// Representar posición actual de Barco2
const barco2Position = {
    x: 5,
    y: 0,
    z: 0
};

const barco3Position = {
    x: 10,
    y: 0,
    z: 0
};

const barco4Position = {
    x: 15,
    y: 0,
    z: 0
};

const barco5Position = {
    x: 20,
    y: 0,
    z: 0
};



// animate();  segun yo va dentro del carga de objeto
let loadedModelCount = 0;
const totalModels = 5; // El número total de modelos que se deben cargar

// Llama a la función animate después de cargar todos los modelos
function loadComplete() {
    loadedModelCount++;
    if (loadedModelCount === totalModels) {
        animate(); // Llama a animate cuando todos los modelos estén cargados
    }
}


function Modelos3D() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco2/barco.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco2/barco.obj', function (object) {
            object.scale.copy(new THREE.Vector3(0.001, 0.001, 0.001));
            object.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);

            scene.add(object);



            objModelos3d = object;
            Modelos3dBB.setFromObject(objModelos3d);
            Modelos3dBB = new THREE.Box3().setFromObject(objModelos3d);
            loadComplete();
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
            barco2BB.setFromObject(objBarco2);
            barco2BB = new THREE.Box3().setFromObject(objBarco2);
            loadComplete();
        });
        console.log(materials);
    });
}
function Barco3() {
    const loaderBarco = new OBJLoader(manager);
    // var mtlBarco = new MTLLoader(manager);

    //mtlBarco.load('models/barco3/Barco3.mtl',function (materials){
    //materials.preload();
    //  loaderBarco.setMaterials(materials);
    loaderBarco.load('../models/barco3/Barco3.obj',

        function (object) {
            object.scale.copy(new THREE.Vector3(0.001, 0.001, 0.001));
            object.position.set(barco3Position.x, barco3Position.y, barco3Position.z);
            object.rotation.x = Math.PI / 2;
            object.rotation.y = Math.PI / 2;
            scene.add(object);


            objBarco3 = object;
            barco3BB.setFromObject(objBarco3);
            barco3BB = new THREE.Box3().setFromObject(objBarco3);
            loadComplete();

        });
    // console.log(materials);
    // });
}
function Barco4() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco4/Barco4.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco4/Barco4.obj',

            function (object) {
                object.scale.copy(new THREE.Vector3(1, 1, 1));
                object.position.set(barco4Position.x, barco4Position.y, barco4Position.z);
                object.rotation.x = Math.PI / 2;
                object.rotation.y = Math.PI / 2;
                scene.add(object);



                objBarco4 = object;
                barco4BB.setFromObject(objBarco4);
                barco4BB = new THREE.Box3().setFromObject(objBarco4);
                loadComplete();

            });
        console.log(materials);
    });
}
function Barco5() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco5/submarino.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco5/submarino.obj',

            function (object) {
                object.scale.copy(new THREE.Vector3(0.7, 0.7, 0.7));
                object.position.set(barco5Position.x, barco5Position.y, barco5Position.z);
                object.rotation.x = Math.PI / 2;
                object.rotation.y = Math.PI / 2;
                scene.add(object);


                objBarco5 = object;
                barco5BB.setFromObject(objBarco5);
                barco5BB = new THREE.Box3().setFromObject(objBarco5);
                loadComplete();

            });
        console.log(materials);
    });
}

Modelos3D();
Barco2();
Barco3();
Barco4();
Barco5();


//init();
