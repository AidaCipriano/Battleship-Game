import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { DragControls } from 'three/addons/controls/DragControls.js';
import { Coordenada } from "./Coordenada.js";
import { CoordenadaJugador } from './CoordenadaJugador.js';
import { Coordenada1 } from "./Coordenada1.js";
import { CoordenadaJugador1 } from './CoordenadaJugador1.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const group = new THREE.Group();

// Crear un audioListener y agregarlo a la cámara (un oyente virtual para todos los sonidos de la escena)
const oyente = new THREE.AudioListener();
camera.add(oyente);
// Crear un cargador de audio para cargar archivos de audio
const cargadorAudio = new THREE.AudioLoader();
// Crear, cargar y reproducir la música de fondo
const musicaFondo = new THREE.Audio(oyente);

// Escucha el clic del usuario para iniciar la reproducción de música
document.addEventListener('click', iniciarReproduccion);

function iniciarReproduccion() {
    // Cargar el archivo de audio
    cargadorAudio.load('../musica/MusicaDeJuego.mp3', function (buffer) {
        musicaFondo.setBuffer(buffer);
        musicaFondo.setLoop(true);
        musicaFondo.setVolume(0.5);
        musicaFondo.play();
    });

    // Elimina el evento de clic después de iniciarse la reproducción (opcional)
    document.removeEventListener('click', iniciarReproduccion);

}

scene.background = new THREE.Color(0x8FFFFF);
camera.position.z = 13;
camera.position.y = 0;
camera.position.x = 0;

let tirosIa = 0;
let tirosJugador = 0;


// Variables para el proceso de colisiones

let Box;
Box = new THREE.Box3();


var objModelos3d;
var Modelos3dBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

Modelos3dBB.golpes = 3;
Modelos3dBB.nombre = "Barco 1";

const renderer = new THREE.WebGLRenderer();
/*renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);*/
startResize();

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

//************************************** */




// Barda central del juego
const geometry_cube3 = new THREE.BoxGeometry(6.5, 0.5, 0.5);
const material_cube3 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 });
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
const material_cube4 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 });
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


// Barda inferior del juego
const geometry_cube6 = new THREE.BoxGeometry(7.5, 0.5, 0.5);
const material_cube6 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 });
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
const material_cube2 = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0 });
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
/********************************************************** */
//bomba1

const geometry_sphere = new THREE.SphereGeometry(0.25, 32, 32);
const material_sphere = new THREE.MeshPhongMaterial({ color: 0x000000 });
const sphere = new THREE.Mesh(geometry_sphere, material_sphere);
sphere.position.set(1, -6.3, 0.5);
var sphereBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
sphereBB.setFromObject(sphere);
scene.add(sphere);

//bomba2
const geometry_sphere2 = new THREE.SphereGeometry(0.25, 32, 32);
const material_sphere2 = new THREE.MeshPhongMaterial({ color: 0x000000 });
const sphere2 = new THREE.Mesh(geometry_sphere2, material_sphere2);
sphere2.position.set(1, -6.3, 0.5);
var sphere2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
sphere2BB.setFromObject(sphere2);
scene.add(sphere2);

// DRAG SPHERES//
let dControl;
let orbit;

orbit = new OrbitControls(camera, renderer.domElement)
dControl = new DragControls([sphere, sphere2], camera, renderer.domElement)

dControl.addEventListener('dragstart', () => {

    orbit.enabled = false
})

//Arreglo 
var arrySphere = [];
for (var i = 0; i < 100; i++) {

    const geometry_sphere = new THREE.SphereGeometry(1, 32, 16);
    const material_sphere = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const sphere = new THREE.Mesh(geometry_sphere, material_sphere);

    sphere.position.x = Math.floor(Math.random() * 100 - 50);
    sphere.position.z = Math.floor(Math.random() * 100 - 50);
    sphere.scale.copy = (new THREE.Vector3(0.01, 0.01, 0.01));

    scene.add(sphere);

    arrySphere.push(sphere);

}

scene.add(group);
/******************************************************** */

// Direccional Luces Ambiente
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

//Cilindro ROJO
const geometryCI = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI = new THREE.MeshPhongMaterial({ color: 0xC42012/*,transparent: true, opacity: 0*/ });
const cylinder = new THREE.Mesh(geometryCI, materialCI);
cylinder.scale.set(0.05, 0.05, 0.05);
scene.add(cylinder);

//Cilindro CELESTE
const geometryCI1 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI1 = new THREE.MeshPhongMaterial({ color: 0x63D5EB/*,transparent: true, opacity: 0*/ });
const cylinder01 = new THREE.Mesh(geometryCI1, materialCI1);
cylinder01.scale.set(0.05, 0.076, 0.05);
scene.add(cylinder01);

//Cilindro MORADO
const geometryCI2 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI2 = new THREE.MeshPhongMaterial({ color: 0x8E02D9/*,transparent: true, opacity: 0*/ });
const cylinder02 = new THREE.Mesh(geometryCI2, materialCI2);
cylinder02.scale.set(0.05, 0.1, 0.05);
scene.add(cylinder02);

//Cilindro AMARILLO
const geometryCI3 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI3 = new THREE.MeshPhongMaterial({ color: 0xE6DC75/*,transparent: true, opacity: 0*/ });
const cylinder03 = new THREE.Mesh(geometryCI3, materialCI3);
cylinder03.scale.set(0.05, 0.125, 0.05);
scene.add(cylinder03);

//Cilindro AZUL
const geometryCI4 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI4 = new THREE.MeshPhongMaterial({ color: 0x2661E0/*,transparent: true, opacity: 0*/ });
const cylinder04 = new THREE.Mesh(geometryCI4, materialCI4);
cylinder04.scale.set(0.05, 0.075, 0.05);
//AQUI QUEDA EN VERTICAl
cylinder04.rotation.z = Math.PI / 2;
scene.add(cylinder04);

//Cilindro IA QUIERO QUE ESTE CILINDRO se mueva NARANJAA
const geometryCI5 = new THREE.CylinderGeometry(5, 5, 24, 32);
const materialCI5 = new THREE.MeshPhongMaterial({ color: 0xF09337, transparent: true, opacity: 0 });
const cylinder05 = new THREE.Mesh(geometryCI5, materialCI5);
cylinder05.scale.set(0.05, 0.022, 0.05);
cylinder05.position.set(0.09, 6.7, -.09);
scene.add(cylinder05);


//ROTACIONES RANDOM
const randomAngle01 = Math.random();
const randomAngle02 = Math.random();
const randomAngle03 = Math.random();
const randomAngle04 = Math.random();
const randomAngle05 = Math.random();
const randomAngle = Math.random();
// Aplica la rotación al cilindro entre 90 grados y cero
cylinder01.rotation.z = randomAngle01 < 0.5 ? 0 : Math.PI / 2;
cylinder02.rotation.z = randomAngle02 < 0.5 ? 0 : Math.PI / 2;
cylinder03.rotation.z = randomAngle03 < 0.5 ? 0 : Math.PI / 2;
cylinder04.rotation.z = randomAngle04 < 0.5 ? 0 : Math.PI / 2;
cylinder05.rotation.z = randomAngle05 < 0.5 ? 0 : Math.PI / 2;
cylinder.rotation.z = randomAngle < 0.5 ? 0 : Math.PI / 2;

let ArrayRojo = [];
let ArrayAmarillo = [];
let ArrayAzul = [];
let ArrayCeleste = [];
let ArrayMorado = [];

//CILINDRO ROJO posiciones aleatorias al inicio del juego 
if (cylinder.rotation.z > 0) { // horizontal si es mayor a cero
    const coordenadasKeysSinJ = Object.keys(Coordenada).filter(key => !key.startsWith('J'));
    const coordenadared = coordenadasKeysSinJ[Math.floor(Math.random() * coordenadasKeysSinJ.length)];
    const coorRandomRed = Coordenada[coordenadared];
    cylinder.position.set(coorRandomRed[0] + 0.28, coorRandomRed[1], 0);

    const letra = coordenadared[0];
    const numero = coordenadared[1];
    const numero2 = coordenadared[2];

    if (numero2 == undefined) {
        const codigoInicial = letra.charCodeAt(0);

        for (let i = 0; i < 2; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero;
            ArrayRojo.push(letrasNumeros);
        }
    }
    else {
        const codigoInicial = letra.charCodeAt(0);

        for (let i = 0; i < 2; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero + numero2;
            ArrayRojo.push(letrasNumeros);
        }
    }
    // console.log(ArrayRojo);
} else {//vertical si es cero
    const coorKeysSin10 = Object.keys(Coordenada).filter(key => !key.endsWith('10'));
    const coordenadared01 = coorKeysSin10[Math.floor(Math.random() * coorKeysSin10.length)];
    const coorRandomRed01 = Coordenada[coordenadared01];
    cylinder.position.set(coorRandomRed01[0], coorRandomRed01[1] - .28, 0);

    const coorKeys = Object.keys(Coordenada);
    const indexAMA = coorKeys.indexOf(coordenadared01);

    if (indexAMA !== -1) {
        ArrayRojo = coorKeys.slice(indexAMA, indexAMA + 2);
        // console.log(ArrayRojo);
    } else {
        console.log("La coordenadaAMA no se encontró en el arreglo.");
    }
}

//cilindro AZUL
if (cylinder04.rotation.z > 0) { // horizontal si es mayor a cero
    const coorKeySinIyJ = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I'));
    const coordenadaAzul = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
    const coorRandomAzul = Coordenada[coordenadaAzul];
    cylinder04.position.set(coorRandomAzul[0] + 0.59, coorRandomAzul[1], 0);

    const letra = coordenadaAzul[0];
    const numero = coordenadaAzul[1];
    const numero2 = coordenadaAzul[2];

    if (numero2 == undefined) {
        const codigoInicial = letra.charCodeAt(0);

        for (let i = 0; i < 3; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero;
            ArrayAzul.push(letrasNumeros);
        }
    }
    else {
        const codigoInicial = letra.charCodeAt(0);

        for (let i = 0; i < 3; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero + numero2;
            ArrayAzul.push(letrasNumeros);
        }
    }
    // console.log(ArrayAzul);

} else {//vertical si es cero
    const coorKeySin9y10 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10'));
    const coordenadared0 = coorKeySin9y10[Math.floor(Math.random() * coorKeySin9y10.length)];
    const coorRandomRed0 = Coordenada[coordenadared0];
    cylinder04.position.set(coorRandomRed0[0], coorRandomRed0[1] - .59, 0);

    const coorKeys = Object.keys(Coordenada);
    const indexAMA = coorKeys.indexOf(coordenadared0);
    // Verifica si la coordenadaAMA está en el arreglo
    if (indexAMA !== -1) {
        ArrayAzul = coorKeys.slice(indexAMA, indexAMA + 3);

    } else {
        console.log("La coordenadaAMA no se encontró en el arreglo.");
    }

}

//CILINDRO CELESTE
if (cylinder01.rotation.z > 0) { // horizontal si es mayor a cero
    const coorKeySinIyJ = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I'));
    const coordenadaCel = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
    const coorRandomCel = Coordenada[coordenadaCel];
    cylinder01.position.set(coorRandomCel[0] + 0.59, coorRandomCel[1], 0);

    const letra = coordenadaCel[0];
    const numero = coordenadaCel[1];
    const numero2 = coordenadaCel[2];

    if (numero2 == undefined) {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 3; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero;
            ArrayCeleste.push(letrasNumeros);
        }
    }
    else {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 3; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero + numero2;
            ArrayCeleste.push(letrasNumeros);
        }
    }
    // console.log(ArrayCeleste);

} else {//vertical si es cero
    const coordenadaLimitada01 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10'));
    const coor01 = coordenadaLimitada01[Math.floor(Math.random() * coordenadaLimitada01.length)];
    const coorRandom01 = Coordenada[coor01];
    cylinder01.position.set(coorRandom01[0], coorRandom01[1] - .59, 0);

    const coorKeys = Object.keys(Coordenada);
    const indexAMA = coorKeys.indexOf(coor01);
    // Verifica si la coordenadaAMA está en el arreglo
    if (indexAMA !== -1) {
        ArrayCeleste = coorKeys.slice(indexAMA, indexAMA + 3);

    } else {
        console.log("La coordenadaAMA no se encontró en el arreglo.");
    }

}

//CILINDRO MORADO
if (cylinder02.rotation.z > 0) { // horizontal si es mayor a cero
    const coorKeySinIjh = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H'));
    const coordenadaMor = coorKeySinIjh[Math.floor(Math.random() * coorKeySinIjh.length)];
    const coorRandomMor = Coordenada[coordenadaMor];
    cylinder02.position.set(coorRandomMor[0] + 0.9, coorRandomMor[1], 0);

    const letra = coordenadaMor[0];
    const numero = coordenadaMor[1];
    const numero2 = coordenadaMor[2];

    if (numero2 == undefined) {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 4; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero;
            ArrayMorado.push(letrasNumeros);
        }
    }
    else {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 4; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero + numero2;
            ArrayMorado.push(letrasNumeros);
        }
    }

} else {//vertical si es cero
    const coorLim02 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10') && !key.endsWith('8'));
    const coor02 = coorLim02[Math.floor(Math.random() * coorLim02.length)];
    const coorRandom02 = Coordenada[coor02];
    cylinder02.position.set(coorRandom02[0], coorRandom02[1] - .9, 0);

    const coorKeys = Object.keys(Coordenada);
    const indexAMA = coorKeys.indexOf(coor02);
    // Verifica si la coordenadaAMA está en el arreglo
    if (indexAMA !== -1) {
        ArrayMorado = coorKeys.slice(indexAMA, indexAMA + 4);

    } else {
        console.log("La coordenadaAMA no se encontró en el arreglo.");
    }
}

//CILINDRO AMARILLA
if (cylinder03.rotation.z > 0) { // horizontal si es mayor a cero
    const coorKeySinIjhG = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H') && !key.startsWith('G'));
    const coordenadaAMA = coorKeySinIjhG[Math.floor(Math.random() * coorKeySinIjhG.length)];
    const coorRandomAMA = Coordenada[coordenadaAMA];
    cylinder03.position.set(coorRandomAMA[0] + 1.19, coorRandomAMA[1], 0);


    const letra = coordenadaAMA[0];
    const numero = coordenadaAMA[1];
    const numero2 = coordenadaAMA[2];
    if (numero2 == undefined) {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 5; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero;
            ArrayAmarillo.push(letrasNumeros);
        }
    }
    else {
        const codigoInicial = letra.charCodeAt(0);
        for (let i = 0; i < 5; i++) {
            const codigoLetra = codigoInicial + i;
            const letraGenerada = String.fromCharCode(codigoLetra);
            const letrasNumeros = letraGenerada + numero + numero2;
            ArrayAmarillo.push(letrasNumeros);
        }
    }


} else { // vertical si es cero
    const coorLim03 = Object.keys(Coordenada).filter(key => !key.endsWith('7') && !key.endsWith('8') && !key.endsWith('9') && !key.endsWith('10'));
    const coor03 = coorLim03[Math.floor(Math.random() * coorLim03.length)];
    const coorRandom03 = Coordenada[coor03];
    cylinder03.position.set(coorRandom03[0], coorRandom03[1] - 1.19, 0);

    const coorKeys = Object.keys(Coordenada);
    const indexAMA = coorKeys.indexOf(coor03);
    // Verifica si la coordenadaAMA está en el arreglo
    if (indexAMA !== -1) {
        ArrayAmarillo = coorKeys.slice(indexAMA, indexAMA + 5);

    } else {
        console.log("La coordenadaAMA no se encontró en el arreglo.");
    }

}
let tienenRepetidosEntreEllos = false;
tienenRepetidosEntreEllos = tienenRepetidos(ArrayAmarillo, ArrayAzul, ArrayCeleste, ArrayMorado, ArrayRojo);
console.log('BOLEANO FUNCION REPETIDA ', tienenRepetidosEntreEllos);

while (tienenRepetidosEntreEllos == true) {
    ArrayRojo = [];
    ArrayAmarillo = [];
    ArrayAzul = [];
    ArrayCeleste = [];
    ArrayMorado = [];
    //CILINDRO ROJO posiciones aleatorias al inicio del juego 
    if (cylinder.rotation.z > 0) { // horizontal si es mayor a cero
        const coordenadasKeysSinJ = Object.keys(Coordenada).filter(key => !key.startsWith('J'));
        const coordenadared = coordenadasKeysSinJ[Math.floor(Math.random() * coordenadasKeysSinJ.length)];
        const coorRandomRed = Coordenada[coordenadared];
        cylinder.position.set(coorRandomRed[0] + 0.28, coorRandomRed[1], 0);

        const letra = coordenadared[0];
        const numero = coordenadared[1];
        const numero2 = coordenadared[2];

        if (numero2 == undefined) {
            const codigoInicial = letra.charCodeAt(0);

            for (let i = 0; i < 2; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero;
                ArrayRojo.push(letrasNumeros);
            }
        }
        else {
            const codigoInicial = letra.charCodeAt(0);

            for (let i = 0; i < 2; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero + numero2;
                ArrayRojo.push(letrasNumeros);
            }
        }
        //    console.log(ArrayRojo);

    } else {//vertical si es cero
        const coorKeysSin10 = Object.keys(Coordenada).filter(key => !key.endsWith('10'));
        const coordenadared01 = coorKeysSin10[Math.floor(Math.random() * coorKeysSin10.length)];
        const coorRandomRed01 = Coordenada[coordenadared01];
        cylinder.position.set(coorRandomRed01[0], coorRandomRed01[1] - .28, 0);

        const coorKeys = Object.keys(Coordenada);
        const indexAMA = coorKeys.indexOf(coordenadared01);

        if (indexAMA !== -1) {
            ArrayRojo = coorKeys.slice(indexAMA, indexAMA + 2);
            //       console.log(ArrayRojo);
        } else {
            console.log("La coordenadaAMA no se encontró en el arreglo.");
        }

    }
    //cilindro azul
    if (cylinder04.rotation.z > 0) { // horizontal si es mayor a cero
        const coorKeySinIyJ = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I'));
        const coordenadaAzul = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
        const coorRandomAzul = Coordenada[coordenadaAzul];
        cylinder04.position.set(coorRandomAzul[0] + 0.59, coorRandomAzul[1], 0);

        const letra = coordenadaAzul[0];
        const numero = coordenadaAzul[1];
        const numero2 = coordenadaAzul[2];

        if (numero2 == undefined) {
            const codigoInicial = letra.charCodeAt(0);

            for (let i = 0; i < 3; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero;
                ArrayAzul.push(letrasNumeros);
            }
        }
        else {
            const codigoInicial = letra.charCodeAt(0);

            for (let i = 0; i < 3; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero + numero2;
                ArrayAzul.push(letrasNumeros);
            }
        }
        //    console.log(ArrayAzul);

    } else {//vertical si es cero
        const coorKeySin9y10 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10'));
        const coordenadared0 = coorKeySin9y10[Math.floor(Math.random() * coorKeySin9y10.length)];
        const coorRandomRed0 = Coordenada[coordenadared0];
        cylinder04.position.set(coorRandomRed0[0], coorRandomRed0[1] - .59, 0);

        const coorKeys = Object.keys(Coordenada);
        const indexAMA = coorKeys.indexOf(coordenadared0);
        // Verifica si la coordenadaAMA está en el arreglo
        if (indexAMA !== -1) {
            ArrayAzul = coorKeys.slice(indexAMA, indexAMA + 3);

        } else {
            console.log("La coordenadaAMA no se encontró en el arreglo.");
        }

    }
    //CILINDRO CELESTE
    if (cylinder01.rotation.z > 0) { // horizontal si es mayor a cero
        const coorKeySinIyJ = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I'));
        const coordenadaCel = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
        const coorRandomCel = Coordenada[coordenadaCel];
        cylinder01.position.set(coorRandomCel[0] + 0.59, coorRandomCel[1], 0);

        const letra = coordenadaCel[0];
        const numero = coordenadaCel[1];
        const numero2 = coordenadaCel[2];

        if (numero2 == undefined) {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 3; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero;
                ArrayCeleste.push(letrasNumeros);
            }
        }
        else {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 3; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero + numero2;
                ArrayCeleste.push(letrasNumeros);
            }
        }

    } else {//vertical si es cero
        const coordenadaLimitada01 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10'));
        const coor01 = coordenadaLimitada01[Math.floor(Math.random() * coordenadaLimitada01.length)];
        const coorRandom01 = Coordenada[coor01];
        cylinder01.position.set(coorRandom01[0], coorRandom01[1] - .59, 0);

        const coorKeys = Object.keys(Coordenada);
        const indexAMA = coorKeys.indexOf(coor01);
        // Verifica si la coordenadaAMA está en el arreglo
        if (indexAMA !== -1) {
            ArrayCeleste = coorKeys.slice(indexAMA, indexAMA + 3);

        } else {
            console.log("La coordenadaAMA no se encontró en el arreglo.");
        }

    }
    //CILINDRO MORADO
    if (cylinder02.rotation.z > 0) { // horizontal si es mayor a cero
        const coorKeySinIjh = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H'));
        const coordenadaMor = coorKeySinIjh[Math.floor(Math.random() * coorKeySinIjh.length)];
        const coorRandomMor = Coordenada[coordenadaMor];
        cylinder02.position.set(coorRandomMor[0] + 0.9, coorRandomMor[1], 0);

        const letra = coordenadaMor[0];
        const numero = coordenadaMor[1];
        const numero2 = coordenadaMor[2];

        if (numero2 == undefined) {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 4; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero;
                ArrayMorado.push(letrasNumeros);
            }
        }
        else {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 4; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero + numero2;
                ArrayMorado.push(letrasNumeros);
            }
        }


    } else {//vertical si es cero
        const coorLim02 = Object.keys(Coordenada).filter(key => !key.endsWith('9') && !key.endsWith('10') && !key.endsWith('8'));
        const coor02 = coorLim02[Math.floor(Math.random() * coorLim02.length)];
        const coorRandom02 = Coordenada[coor02];
        cylinder02.position.set(coorRandom02[0], coorRandom02[1] - .9, 0);

        const coorKeys = Object.keys(Coordenada);
        const indexAMA = coorKeys.indexOf(coor02);
        // Verifica si la coordenadaAMA está en el arreglo
        if (indexAMA !== -1) {
            ArrayMorado = coorKeys.slice(indexAMA, indexAMA + 4);

        } else {
            console.log("La coordenadaAMA no se encontró en el arreglo.");
        }
    }
    //CILINDRO AMARILLA
    if (cylinder03.rotation.z > 0) { // horizontal si es mayor a cero
        const coorKeySinIjhG = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H') && !key.startsWith('G'));
        const coordenadaAMA = coorKeySinIjhG[Math.floor(Math.random() * coorKeySinIjhG.length)];
        const coorRandomAMA = Coordenada[coordenadaAMA];
        cylinder03.position.set(coorRandomAMA[0] + 1.19, coorRandomAMA[1], 0);


        const letra = coordenadaAMA[0];
        const numero = coordenadaAMA[1];
        const numero2 = coordenadaAMA[2];
        if (numero2 == undefined) {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 5; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero;
                ArrayAmarillo.push(letrasNumeros);
            }
        }
        else {
            const codigoInicial = letra.charCodeAt(0);
            for (let i = 0; i < 5; i++) {
                const codigoLetra = codigoInicial + i;
                const letraGenerada = String.fromCharCode(codigoLetra);
                const letrasNumeros = letraGenerada + numero + numero2;
                ArrayAmarillo.push(letrasNumeros);
            }
        }


    } else { // vertical si es cero
        const coorLim03 = Object.keys(Coordenada).filter(key => !key.endsWith('7') && !key.endsWith('8') && !key.endsWith('9') && !key.endsWith('10'));
        const coor03 = coorLim03[Math.floor(Math.random() * coorLim03.length)];
        const coorRandom03 = Coordenada[coor03];
        cylinder03.position.set(coorRandom03[0], coorRandom03[1] - 1.19, 0);

        const coorKeys = Object.keys(Coordenada);
        const indexAMA = coorKeys.indexOf(coor03);
        // Verifica si la coordenadaAMA está en el arreglo
        if (indexAMA !== -1) {
            ArrayAmarillo = coorKeys.slice(indexAMA, indexAMA + 5);

        } else {
            console.log("La coordenadaAMA no se encontró en el arreglo.");
        }

    }
    tienenRepetidosEntreEllos = tienenRepetidos(ArrayAmarillo, ArrayAzul, ArrayCeleste, ArrayMorado, ArrayRojo);
    console.log('hola soy el while', tienenRepetidosEntreEllos);
}

function tienenRepetidos(array1, array2, array3, array4, array5) {
    let todosLosElementos = [array1, array2, array3, array4, array5].flat();
    console.log("CUANDO TERMINA EL WHILE ME DA ESTOS ELEMENTOS", todosLosElementos);
    const elementosUnicos = new Set();
    for (const elemento of todosLosElementos) {
        if (elementosUnicos.has(elemento)) {
            return true;
        } else {
            elementosUnicos.add(elemento);
        }
    }
    return false;
}

//LETRAS CON FUENTE
const tex = new TextGeometry();
const load = new FontLoader();

// ARRIBA
crearTexto(-8, 7.3, 'A  B C D E  F G  H  I  J');
crearTexto(-9, 6.5, '1');
crearTexto(-9, 5.9, '2');
crearTexto(-9, 5.3, '3');
crearTexto(-9, 4.7, '4');
crearTexto(-9, 4.1, '5');
crearTexto(-9, 3.5, '6');
crearTexto(-9, 2.9, '7');
crearTexto(-9, 2.3, '8');
crearTexto(-9, 1.7, '9');
crearTexto(-9, 1.1, '10');

//ABAJO 
crearTexto(-8, -6.2, 'A  B C D E  F G  H  I  J');
crearTexto(-9, -0.1, '1');
crearTexto(-9, -.7, '2');
crearTexto(-9, -1.3, '3');
crearTexto(-9, -1.9, '4');
crearTexto(-9, -2.5, '5');
crearTexto(-9, -3.1, '6');
crearTexto(-9, -3.7, '7');
crearTexto(-9, -4.3, '8');
crearTexto(-9, -4.9, '9');
crearTexto(-9, -5.5, '10');

//ARRIBA
crearTexto(-0.2, 7.3, 'A  B C D E  F G  H  I  J');
crearTexto(-1.1, 6.5, '1');
crearTexto(-1.1, 5.9, '2');
crearTexto(-1.1, 5.3, '3');
crearTexto(-1.1, 4.7, '4');
crearTexto(-1.1, 4.1, '5');
crearTexto(-1.1, 3.5, '6');
crearTexto(-1.1, 2.9, '7');
crearTexto(-1.1, 2.3, '8');
crearTexto(-1.1, 1.7, '9');
crearTexto(-1.1, 1.1, '10');

//ABAJO
crearTexto(-0.2, -6.2, 'A  B C D E  F G  H  I  J');
crearTexto(-1.1, -0.1, '1');
crearTexto(-1.1, -.7, '2');
crearTexto(-1.1, -1.3, '3');
crearTexto(-1.1, -1.9, '4');
crearTexto(-1.1, -2.5, '5');
crearTexto(-1.1, -3.1, '6');
crearTexto(-1.1, -3.7, '7');
crearTexto(-1.1, -4.3, '8');
crearTexto(-1.1, -4.9, '9');
crearTexto(-1.1, -5.5, '10');



//planos JUGADOR 01 DONDE VES TUS BARCOS
const widthSegments = 10;  // El número de segmentos en el ancho
const heightSegments = 10; // El número de segmentos en el alto

const geometryPlane = new THREE.PlaneGeometry(6, 6, widthSegments, heightSegments);
const materialPlane = new THREE.MeshBasicMaterial({ color: 0x35C158, wireframe: true });
const plane = new THREE.Mesh(geometryPlane, materialPlane);
plane.position.set(-5, -2.6, 0);
scene.add(plane);

//PLANO JUGADORES 02 DONDE ATACAS
const widthSegments02 = 10;  // El número de segmentos en el ancho
const heightSegments02 = 10; // El número de segmentos en el alto

const geometryPlane02 = new THREE.PlaneGeometry(6, 6, widthSegments02, heightSegments02);
const materialPlane02 = new THREE.MeshBasicMaterial({ color: 0x35C158, wireframe: true });
const plane02 = new THREE.Mesh(geometryPlane02, materialPlane02);
plane02.position.set(2.8, -2.6, 0);
scene.add(plane02);

// PLANOS ENEMIGO 
//DONDE VES TUS BARCOS
const widthSeg = 10;  // El número de segmentos en el ancho
const heightSeg = 10; // El número de segmentos en el alto

const geoPlane = new THREE.PlaneGeometry(6, 6, widthSeg, heightSeg);
const matPlane = new THREE.MeshBasicMaterial({ color: 0x352CF0, wireframe: true });
const planeE1 = new THREE.Mesh(geoPlane, matPlane);
planeE1.position.set(-5, 4, 0);
scene.add(planeE1);

//DONDE ATACAS
const widthSeg02 = 10;  // El número de segmentos en el ancho
const heightSeg02 = 10; // El número de segmentos en el alto

const geometryPlaneE02 = new THREE.PlaneGeometry(6, 6, widthSeg02, heightSeg02);
const materialPlaneE02 = new THREE.MeshBasicMaterial({ color: 0x352CF0, wireframe: true });
const planeE02 = new THREE.Mesh(geometryPlaneE02, materialPlaneE02);
planeE02.position.set(2.8, 4, 0);
scene.add(planeE02);

/*************************************** */

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

let winner = "";

const jugadorActual1 = scene.getObjectByName("whites"); //currentUser.uid

//Valor que hay que mover inicialmente para que la pieza quede en la casilla E4 (no es exactamente en el medio pero sirve)
const X_OFFSET = 1.2;
const Y_OFFSET = 1.2;

//Valor que se mueve una ficha para avanzar una casilla
const UNITIES = 2.38;

const DEV = false;

const COORDINATES = {
    A: X_OFFSET + -UNITIES * 4,
    B: X_OFFSET + -UNITIES * 3,
    C: X_OFFSET + -UNITIES * 2,
    D: X_OFFSET + -UNITIES * 1,
    E: X_OFFSET + UNITIES * 0,
    F: X_OFFSET + UNITIES * 1,
    G: X_OFFSET + UNITIES * 2,
    H: X_OFFSET + UNITIES * 3,
    ONE: Y_OFFSET + UNITIES * 3,
    TWO: Y_OFFSET + UNITIES * 2,
    THREE: Y_OFFSET + UNITIES * 1,
    FOUR: Y_OFFSET + UNITIES * 0,
    FIVE: Y_OFFSET + -UNITIES * 1,
    SIX: Y_OFFSET + -UNITIES * 2,
    SEVEN: Y_OFFSET + -UNITIES * 3,
    EIGHT: Y_OFFSET + -UNITIES * 4,
};

console.log('AQUI ME DA UNAS COORDENADAS', COORDINATES);
const playerCollitionArray = [];
playerCollitionArray[0] == "";

var transparentMaterial = new THREE.MeshPhongMaterial({
    color: new THREE.Color(0.0, 0.0, 1.0),
    opacity: 0.0,
    transparent: true
});

//PLAYER1
const geometría = new THREE.BoxGeometry(1, 1, 1);
const Material = new THREE.MeshPhongMaterial({ color: 0xDB1B24 });
const player1 = new THREE.Mesh(geometría, Material);
player1.castShadow = true;
player1.position.set(0.09, 0.10, 0);
player1.scale.set(0.4, 0.4, 0.1);
player1.name = "Jugador 1";

var cube2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube2BB.setFromObject(player1);

scene.add(player1);
//AQUI TERMINA PLAYER 1

//player 2
const geometría2 = new THREE.BoxGeometry(1, 1, 1);
const Material2 = new THREE.MeshPhongMaterial({ color: 0x4B4BDB });
const player2 = new THREE.Mesh(geometría2, Material2);
player2.castShadow = true;

player2.position.set(5.48, 0.1, 0);
player2.scale.set(0.4, 0.4, 0.1);
player2.name = "Jugador 2";
//player2.material.color = new THREE.Color(1, 0, 0, 4);

var cube3BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube3BB.setFromObject(player2);

scene.add(player2);

//IA LA MAQUINA Y SU CUBO
const geoIA = new THREE.BoxGeometry(1, 1, 1);
const MaIA = new THREE.MeshPhongMaterial();
const playerIA = new THREE.Mesh(geoIA, MaIA);
playerIA.castShadow = true;
//color: 0x95DB61
playerIA.position.set(1000, 1000, 0);
playerIA.scale.set(0.4, 0.4, 0.1);
playerIA.name = "Jugador IA";
//playerIA.material.color = new THREE.Color(1, 0, 0, 4);

var cube3BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube3BB.setFromObject(playerIA);

scene.add(playerIA);
// LA MAQUINA TERMINA AQUI

function bombaIARandom() {
    const coordenadasKeys = Object.keys(Coordenada1);
    const coordenadaRandomKey = coordenadasKeys[Math.floor(Math.random() * coordenadasKeys.length)];
    const coordenadaRandom = Coordenada1[coordenadaRandomKey];
    //50%
    const caeEnArray = Math.random() < 0.9;

    // cae en el 50%, selecciona una posición de los arrays concatenados
    const arrays = ArrayAmarillo.concat(ArrayAzul, ArrayCeleste, ArrayMorado, ArrayRojo);
    const posicionAleatoria = caeEnArray ? arrays[Math.floor(Math.random() * arrays.length)] : coordenadaRandomKey;

    const nuevoCubo = playerIA.clone();
    nuevoCubo.scale.set(0.4, 0.4, 0.1);

    const impacto = verificarImpactoIA(posicionAleatoria);
    console.log("impacto IA",impacto);
    if (impacto) {
        nuevoCubo.material = new THREE.MeshPhongMaterial({ color: 0x29A64D }); // Verde para impacto
    } else {
        nuevoCubo.material = new THREE.MeshPhongMaterial({ color: 0xB6C3D9 }); // Gris para bomba al agua
    }

    nuevoCubo.position.set(coordenadaRandom[0], coordenadaRandom[1], 0);
    scene.add(nuevoCubo);
    verificarImpactoIA(posicionAleatoria);

    var objetivo = document.getElementById('Puntos');
    if (objetivo) {
        objetivo.innerHTML = "Puntos Enemigo: " + tirosIa + " Puntos Jugadores: " + tirosJugador;
    } else {
        console.error("error");
    }

    setTimeout(cambiarTurno, 1000); // 1 segundo tarda
}

function verificarImpactoIA(posicion) {
    const arraysBarcosJugadores = resultados.barco1.concat(resultados.barco2, resultados.barco3, resultados.barco4, resultados.barco5);
    console.log("arraysCilindrosJuntos: ", arraysBarcosJugadores);
    if (arraysBarcosJugadores.includes(posicion)) {
        console.log(`¡Impacto en la posición ${posicion}!`);
        tirosIa++;
        revisaImpactos();
        return true;
        /* var objetivo = document.getElementById('Impacto');
         if (objetivo) {
             objetivo.innerHTML = "Maquina !Impacto un Barco posición: " + posicion + "!";
 
         } else {
             console.error("error");
         }*/
    } else {
        console.log(`No hay impacto en la posición ${posicion}.`);
        return false;
        /* var objetivo = document.getElementById('Impacto');
         if (objetivo) {
             objetivo.innerHTML = "Maquina Bomba al Agua posición: " + posicion + " :C";
         } else {
             console.error("error");
         }*/
    }
}


// aqui agrega la bomba color gris la que no le atina al barco
function clonarplayer1() {
    const nuevoJugador1 = player1.clone();
    let player1pX = nuevoJugador1.position.x;
    let player1pY = nuevoJugador1.position.y;
    console.log('player1 Clonado', player1pX, player1pY);
    // Encuentra la posición en la nomenclatura
    let posicionCubo = encontrarPosicion(player1pX, player1pY);
    const impacto = verificaImpacto(posicionCubo);
    console.log("impacto JUGADOR1",impacto);
    
    if (impacto) {
        nuevoJugador1.material = new THREE.MeshPhongMaterial({ color: 0x29A64D }); // Verde para impacto
    } else {
        nuevoJugador1.material = new THREE.MeshPhongMaterial({ color: 0xB6C3D9 }); // Gris para bomba al agua
    }
    console.log("La posición del cubo es:", posicionCubo);

    scene.add(nuevoJugador1);
}
// aqui agrega la bomba color gris la que no le atina al barco
function clonarJugador2() {
    const nuevoJugador2 = player2.clone();
    let player2pX = nuevoJugador2.position.x;
    let player2pY = nuevoJugador2.position.y;
    console.log('coordenadas player2', player2pX, player2pY);
    // Encuentra la posición en la nomenclatura
    let posicionCubo2 = encontrarPosicion(player2pX, player2pY);

    const impacto = verificaImpacto2(posicionCubo2);
    console.log("impacto JUGADOR2",impacto);
   
    if (impacto) {
        nuevoJugador2.material = new THREE.MeshPhongMaterial({ color: 0x29A64D }); // Verde para impacto
    } else {
        nuevoJugador2.material = new THREE.MeshPhongMaterial({ color: 0xB6C3D9 }); // Gris para bomba al agua
    }
    console.log("Posicion Jugador2:", posicionCubo2);
    scene.add(nuevoJugador2);
}

//aqui se hara la funcion para que encuentre las coordenadas en donde se encuentra basado en la nomenclatura 
function encontrarPosicion(x, y) {
    const redondear = (num) => Math.round(num * 100) / 100;

    const coordenadasIguales = (coord1, coord2) => {
        const tolerancia = 0.10;
        return Math.abs(coord1 - coord2) < tolerancia;

    };
    // Itera sobre las coordenadas y verifica si coinciden dentro de la tolerancia
    for (let key in CoordenadaJugador1) {
        const coordX = redondear(CoordenadaJugador1[key][0]);
        const coordY = redondear(CoordenadaJugador1[key][1]);

        if (coordenadasIguales(coordX, redondear(x)) && coordenadasIguales(coordY, redondear(y))) {

            return key; // Devuelve la clave A1 ,A2 asi en la nomenclatura declarada
        }
    }
    return "Coordenada no encontrada";
}
//#region Funciones de jugabilidad
function checkLimits(side, position) {
    const posX = position.x;
    const posY = position.y;
    switch (side) {
        case 'left': {
            if (posX > 0.1) {
                return true;
            }
            else {
                return false;
            }
            break;
        }
        case 'right': {
            if (posX < 5) {
                return true;
            }
            else {
                return false;
            }
            break;
        }
        case 'top': {
            if (posY < 0) {
                return true;
            }
            else {
                return false;
            }
            break;
        }
        case 'down': {
            if (posY > -5) {
                return true;
            }
            else {
                return false;
            }
            break;
        }
    }
}

//FUNCIONALIDAD DE IMPACTOS//
//JUGADOR 1
//AQUI YA SE MIRA EL IMPACTO AL BARCO
function verificaImpacto(player1posicion) {
    const arrays = ArrayAmarillo.concat(ArrayAzul, ArrayCeleste, ArrayMorado, ArrayRojo);
    console.log("arraysCilindrosJuntos: ", arrays);
    if (arrays.includes(player1posicion)) {
        console.log(`¡Impacto en la posición ${player1posicion}!`);
        var objetivo = document.getElementById('Impacto');
        if (objetivo) {
            objetivo.innerHTML = "Jugador 1 !Impacto un Barco posición: " + player1posicion + "!";
            tirosJugador++;
            revisaImpactos();
        } else {
            console.error("error");
        }
        return true;
    } else {
        console.log(`No hay impacto en la posición ${player1posicion}.`);
        var objetivo = document.getElementById('Impacto');
        if (objetivo) {
            objetivo.innerHTML = "Jugador 1 Bomba al Agua posición: " + player1posicion + " :C";
        } else {
            console.error("error");
        }
        return false;
    }

}
//AQUI SE MIRA EL IMPACTO AL BARCO
function verificaImpacto2(player2posicion) {
    const arrays2 = ArrayAmarillo.concat(ArrayAzul, ArrayCeleste, ArrayMorado, ArrayRojo);
    console.log("ARRAY2: ", arrays2);
    if (arrays2.includes(player2posicion)) {
        console.log(`¡Impacto en la posición ${player2posicion}!`);
        var objetivo = document.getElementById('Impacto');
        if (objetivo) {
            objetivo.innerHTML = "!Jugador 2 Impacto un Barco posición: " + player2posicion + "!";
            tirosJugador++;
            revisaImpactos();
        } else {
            console.error("error");
        }
        return true;
    } else {
        console.log(`No hay impacto en la posición ${player2posicion}.`);
        var objetivo = document.getElementById('Impacto');
        if (objetivo) {
            objetivo.innerHTML = "Jugador 2 Bomba al Agua posición: " + player2posicion + " :C";
        } else {
            console.error("error");
        }
        return false;
    }
}

//FUNCIONES PARA MOSTRAR MODAL//
revisaImpactos();
function revisaImpactos() {
    if (tirosJugador >= 17) {
        
        const modalPerdiste = document.getElementById("ganasteModal");
        $(modalPerdiste).modal('show');
        console.log('Han ganado los jugadores');
        console.log("¡El jugador ha ganado!");

    } else if (tirosIa >= 17) {
       
        const modalPerdiste = document.getElementById("perdisteModal");
        $(modalPerdiste).modal('show');

        console.log('Han ganado el Enemigo');
        console.log("¡El Enemigo ha ganado!");
    }
}

//FUNCIONALIDAD DE TURNOS//
let turnoActual = 'jugador1'; // Inicia el turno con el Jugador 1

// Función para cambiar de turno
function cambiarTurno() {
    console.log('Cambiando turno...');
    if (turnoActual === 'jugador1') {
        console.log('Turno del jugador 1');
        desactivarEventosJugador2();
        activarEventosJugador1();
        turnoActual = 'jugadoria2';
    }
    else if (turnoActual === 'jugador2') {
        console.log('Turno del jugador 2');
        desactivarEventosJugador1();
        activarEventosJugador2();
        turnoActual = 'jugadoria';
    } else if (turnoActual === 'jugadoria') {
        console.log('Turno Computadora');
        desactivarEventosJugador1();
        desactivarEventosJugador2();
        bombaIARandom();
        turnoActual = 'jugador1';
    }
    else if (turnoActual === 'jugadoria2') {
        console.log('Turno Computadora');
        desactivarEventosJugador1();
        desactivarEventosJugador2();
        bombaIARandom();
        turnoActual = 'jugador2';
    }
}

//FUNCIONES DE EVENTOS DE BOTONES
let juegoComenzado = false;
const startButton = document.getElementById('comenzarJuego');
function startgame() {
    startButton.addEventListener('click', () => {
        if (!juegoComenzado) {
            console.log('El juego a comenzado, empieza jugador 1');
            juegoComenzado = true;
            turnoActual = 'jugador1';
            cambiarTurno();
            nextButton.disabled = true;
            startButton.disabled = true;
        }

    });
}
startgame();

let next = false;
const nextButton = document.getElementById('siguienteTablero');
function nextBoard() {
    nextButton.addEventListener('click', () => {
        if (!next) {
            console.log('Siguiente tablero');
            location.reload();
            next = true;
        }

    });
}

nextBoard()

//INIT2 JUGADOR 2 INICIA
function init2() {
    const keydownListener = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                moverJugador('top', 0.6, player2);
                break;

            case 'ArrowDown':
                moverJugador('down', -0.6, player2);
                break;

            case 'ArrowLeft':
                moverJugador('left', -0.6, player2);
                break;

            case 'ArrowRight':
                moverJugador('right', 0.6, player2);
                break;

            case '1':
                clonarJugador2();
                cambiarTurno();
                break;
        }
    };
    document.addEventListener('keydown', keydownListener);

    function moverJugador(direction, amount, jugador) {
        if (checkLimits(direction, jugador.position)) {
            if (direction === 'top' || direction === 'down') {
                jugador.position.y += amount;
            } else if (direction === 'left' || direction === 'right') {
                jugador.position.x += amount;
            }
        }
    }
    return keydownListener;
}
const jugador2KeydownListener = init2();

function desactivarEventosJugador2() {
    document.removeEventListener('keydown', jugador2KeydownListener);
}

function activarEventosJugador2() {
    document.addEventListener('keydown', jugador2KeydownListener);
}
//INIT2 TERMINA AQUI


// INIT JUGADOR 1 MOVIMIENTO
function init() {
    const keydownListener = (event) => {
        switch (event.key) {
            case ('w'):
            case ('W'):
                moverJugador('top', 0.6);
                break;

            case ('s'):
            case ('S'):
                moverJugador('down', -0.6);
                break;

            case ('a'):
            case ('A'):
                moverJugador('left', -0.6);
                break;

            case ('d'):
            case ('D'):
                moverJugador('right', 0.6);
                break;

            case ('q'):
            case ('Q'):
                clonarplayer1();
                cambiarTurno();
                break;
        }
    };

    document.addEventListener('keydown', keydownListener);

    function moverJugador(direction, amount) {
        if (checkLimits(direction, player1.position)) {
            if (direction === 'top' || direction === 'down') {
                player1.position.y += amount;
            } else if (direction === 'left' || direction === 'right') {
                player1.position.x += amount;
            }
        }
    }

    return keydownListener;
}
const jugador1KeydownListener = init();

function desactivarEventosJugador1() {
    document.removeEventListener('keydown', jugador1KeydownListener);
}

function activarEventosJugador1() {
    document.addEventListener('keydown', jugador1KeydownListener);
}
// AQUI TERMINA EL JUGADOR 1 MOVIEMIENTO

desactivarEventosJugador1();
desactivarEventosJugador2();

function animate() {
    cube2BB.copy(player1.geometry.boundingBox).applyMatrix4(player1.matrixWorld);
    cube3BB.copy(player2.geometry.boundingBox).applyMatrix4(player2.matrixWorld);

    var posicionY01 = cylinder05.position.y;
    var posicionX01 = cylinder05.position.x;

    for (var item of group.children) {

        if (item.position.y > 0 && item.position.y < 20) {
            item.position.y += 0.1;
        }
        else {
            item.position.y = Math.floor(Math.random() * 10);
        }
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}


function cilindro() {
    // Escuchar eventos de teclado para mover "Modelos3D"
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'i':
                cylinder05.position.y += 0.6; // Mover hacia arriba
                break;
            case 'k':
                cylinder05.position.y -= 0.6; // Mover hacia abajo
                break;
            case 'j':
                cylinder05.position.x -= 0.6; // Mover hacia la izquierda
                break;
            case 'l':
                cylinder05.position.x += 0.6; // Mover hacia la derecha
                break;
        }
    });
}
cilindro();

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

const globalObj = { ArrayEspacios03: [] };
let ArrayEspacios5 = [];
let ArrayEspacios2 = [];
let ArrayEspacios3 = [];
let ArrayEspacio4 = [];

function Barco1(callback) { //BARCO 3 ESPACIOS
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco2/barco.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco2/barco.obj', function (object) {
            object.scale.copy(new THREE.Vector3(0.001, 0.001, 0.001));
            //Random 
            const randomAngle = Math.random();
            object.rotation.z = randomAngle < 0.5 ? 0 : Math.PI / 2;
            let rotado = object.rotation.z;

            console.log(rotado);

            if (object.rotation.z == 0) { // horizontal si es  cero
                const coorKeySinIyJ = Object.keys(CoordenadaJugador).filter(key => !key.startsWith('J') && !key.startsWith('I'));
                const coorEspacio3 = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
                const coorRandomE3 = CoordenadaJugador[coorEspacio3];

                object.position.set(coorRandomE3[0] + .59, coorRandomE3[1], 0);

                const letra = coorEspacio3[0];
                const numero = coorEspacio3[1];
                const numero2 = coorEspacio3[2];

                if (numero2 == undefined) {
                    const codigoInicial = letra.charCodeAt(0);

                    for (let i = 0; i < 3; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero;
                        globalObj.ArrayEspacios03.push(letrasNumeros);
                    }
                }
                else {
                    const codigoInicial = letra.charCodeAt(0);

                    for (let i = 0; i < 3; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero + numero2;
                        globalObj.ArrayEspacios03.push(letrasNumeros);
                    }
                }
            } else {//vertical si es mayor a cero
                const coorKeySin9y10 = Object.keys(CoordenadaJugador).filter(key => !key.endsWith('9') && !key.endsWith('10'));
                const coorEspacio3 = coorKeySin9y10[Math.floor(Math.random() * coorKeySin9y10.length)];
                const coorRandomRed0 = CoordenadaJugador[coorEspacio3];

                object.position.set(coorRandomRed0[0], coorRandomRed0[1] - .59, 0);

                const coorKeys = Object.keys(CoordenadaJugador);
                const indexAMA = coorKeys.indexOf(coorEspacio3);
                // Verifica si la coordenadaAMA está en el arreglo
                if (indexAMA !== -1) {
                    globalObj.ArrayEspacios03 = coorKeys.slice(indexAMA, indexAMA + 3);
                    console.log('Dentro de la funcion MODELO3D: ', globalObj.ArrayEspacios03);
                } else {
                    console.log("La coordenadaAMA no se encontró en el arreglo.");
                }
            }
            scene.add(object);
            objModelos3d = object;
            Modelos3dBB.setFromObject(objModelos3d);
            loadComplete();

            callback(globalObj.ArrayEspacios03);
        });
    });
}

function Barco2(callback2) { //BARCO DE 5 POSICIONES
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco1/Barco1.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco1/Barco1.obj', function (object) {
            object.scale.copy(new THREE.Vector3(0.03, 0.03, 0.03));
            //Rotacion Fija 
            object.rotation.x = Math.PI / 2;
            //Random 
            const randomAngle = Math.random();
            object.rotation.y = randomAngle < 0.5 ? 0 : Math.PI / 2;
            let rotado = object.rotation.y;
            console.log(rotado);

            if (object.rotation.y == 0) { // horizontal si es  cero
                const coorKeySinIjhG = Object.keys(Coordenada).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H') && !key.startsWith('G'));
                const coorEspacio5 = coorKeySinIjhG[Math.floor(Math.random() * coorKeySinIjhG.length)];
                const coorRandomE5 = CoordenadaJugador[coorEspacio5];

                object.position.set(coorRandomE5[0] + 1.19, coorRandomE5[1], 0);

                const letra = coorEspacio5[0];
                const numero = coorEspacio5[1];
                const numero2 = coorEspacio5[2];

                if (numero2 == undefined) {
                    const codigoInicial = letra.charCodeAt(0);

                    for (let i = 0; i < 5; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero;
                        ArrayEspacios5.push(letrasNumeros);
                    }
                }
                else {
                    const codigoInicial = letra.charCodeAt(0);

                    for (let i = 0; i < 5; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero + numero2;
                        ArrayEspacios5.push(letrasNumeros);
                    }
                }
                console.log(ArrayEspacios5);

            } else {//vertical si es mayor a cero
                const coorLim5 = Object.keys(Coordenada).filter(key => !key.endsWith('7') && !key.endsWith('8') && !key.endsWith('9') && !key.endsWith('10'));
                const coorEspacio5 = coorLim5[Math.floor(Math.random() * coorLim5.length)];
                const coorRandomRed0 = CoordenadaJugador[coorEspacio5];

                object.position.set(coorRandomRed0[0], coorRandomRed0[1] - 1.19, 0);

                const coorKeys = Object.keys(CoordenadaJugador);
                const indexAMA = coorKeys.indexOf(coorEspacio5);
                // Verifica si la coordenadaAMA está en el arreglo
                if (indexAMA !== -1) {
                    ArrayEspacios5 = coorKeys.slice(indexAMA, indexAMA + 5);
                    console.log(ArrayEspacios5);
                } else {
                    console.log("La coordenadaAMA no se encontró en el arreglo.");
                }
            }

            scene.add(object);

            /* objBarco2 = object;
             barco2BB.setFromObject(objBarco2);
             barco2BB = new THREE.Box3().setFromObject(objBarco2);*/
            loadComplete();
            callback2(ArrayEspacios5);
        });
        console.log(materials);
    });
}

function Barco3(callback3) {// POSICIONES 4 ESPACIOS
    const loaderBarco = new OBJLoader(manager);
    loaderBarco.load('../models/barco3/Barco3.obj',

        function (object) {
            object.scale.copy(new THREE.Vector3(0.0009, 0.0009, 0.0009));
            //object.position.set(barco3Position.x, barco3Position.y, barco3Position.z);
            object.rotation.x = Math.PI / 2;
            //object.rotation.y = Math.PI / 2;

            //Random 
            const randomAngle = Math.random();
            object.rotation.y = randomAngle < 0.5 ? 0 : Math.PI / 2;
            let rotado = object.rotation.y;
            console.log(rotado);

            if (object.rotation.y > 0) { // horizontal si es mayor a cero
                const coorKeySinIjh = Object.keys(CoordenadaJugador).filter(key => !key.startsWith('J') && !key.startsWith('I') && !key.startsWith('H'));
                const coordenadaMor = coorKeySinIjh[Math.floor(Math.random() * coorKeySinIjh.length)];
                const coorRandomMor = CoordenadaJugador[coordenadaMor];
                object.position.set(coorRandomMor[0] + 0.9, coorRandomMor[1], 0);

                const letra = coordenadaMor[0];
                const numero = coordenadaMor[1];
                const numero2 = coordenadaMor[2];

                if (numero2 == undefined) {
                    const codigoInicial = letra.charCodeAt(0);
                    for (let i = 0; i < 4; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero;
                        ArrayEspacio4.push(letrasNumeros);
                    }
                }
                else {
                    const codigoInicial = letra.charCodeAt(0);
                    for (let i = 0; i < 4; i++) {
                        const codigoLetra = codigoInicial + i;
                        const letraGenerada = String.fromCharCode(codigoLetra);
                        const letrasNumeros = letraGenerada + numero + numero2;
                        ArrayEspacio4.push(letrasNumeros);
                    }
                }
                console.log(ArrayEspacio4);

            } else {//vertical si es cero
                const coorLim02 = Object.keys(CoordenadaJugador).filter(key => !key.endsWith('9') && !key.endsWith('10') && !key.endsWith('8'));
                const coor02 = coorLim02[Math.floor(Math.random() * coorLim02.length)];
                const coorRandom02 = CoordenadaJugador[coor02];
                object.position.set(coorRandom02[0], coorRandom02[1] - .9, 0);

                const coorKeys = Object.keys(CoordenadaJugador);
                const indexAMA = coorKeys.indexOf(coor02);
                // Verifica si la coordenadaAMA está en el arreglo
                if (indexAMA !== -1) {
                    ArrayEspacio4 = coorKeys.slice(indexAMA, indexAMA + 4);
                    console.log(ArrayEspacio4);
                } else {
                    console.log("La coordenadaAMA no se encontró en el arreglo.");
                }
            }

            scene.add(object);

            /*  objBarco3 = object;
              barco3BB.setFromObject(objBarco3);
              barco3BB = new THREE.Box3().setFromObject(objBarco3);*/
            loadComplete();
            callback3(ArrayEspacio4);
        });
}

function Barco4(callback4) { // POSICIONES 2 ESPACIOS
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco4/Barco4.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco4/Barco4.obj',

            function (object) {
                object.scale.copy(new THREE.Vector3(1, 1, .8));
                object.position.set(0, 0, 0);
                object.rotation.x = Math.PI / 2;

                //Random 
                const randomAngle = Math.random();
                object.rotation.y = randomAngle < 0.5 ? 0 : Math.PI / 2;
                let rotado = object.rotation.y;
                console.log(rotado);

                if (object.rotation.y > 0) { // horizontal si es mayor a cero
                    const coordenadasKeysSinJ = Object.keys(CoordenadaJugador).filter(key => !key.startsWith('J'));
                    const coordenadared = coordenadasKeysSinJ[Math.floor(Math.random() * coordenadasKeysSinJ.length)];
                    const coorRandomRed = CoordenadaJugador[coordenadared];
                    object.position.set(coorRandomRed[0] + .1, coorRandomRed[1], 0);

                    const letra = coordenadared[0];
                    const numero = coordenadared[1];
                    const numero2 = coordenadared[2];

                    if (numero2 == undefined) {
                        const codigoInicial = letra.charCodeAt(0);

                        for (let i = 0; i < 2; i++) {
                            const codigoLetra = codigoInicial + i;
                            const letraGenerada = String.fromCharCode(codigoLetra);
                            const letrasNumeros = letraGenerada + numero;
                            ArrayEspacios2.push(letrasNumeros);
                        }
                    }
                    else {
                        const codigoInicial = letra.charCodeAt(0);

                        for (let i = 0; i < 2; i++) {
                            const codigoLetra = codigoInicial + i;
                            const letraGenerada = String.fromCharCode(codigoLetra);
                            const letrasNumeros = letraGenerada + numero + numero2;
                            ArrayEspacios2.push(letrasNumeros);
                        }
                    }
                    console.log(ArrayEspacios2);
                } else {//vertical si es cero
                    const coorKeysSin10 = Object.keys(CoordenadaJugador).filter(key => !key.endsWith('10'));
                    const coordenadared01 = coorKeysSin10[Math.floor(Math.random() * coorKeysSin10.length)];
                    const coorRandomRed01 = CoordenadaJugador[coordenadared01];
                    object.position.set(coorRandomRed01[0], coorRandomRed01[1] - .1, 0);

                    const coorKeys = Object.keys(CoordenadaJugador);
                    const indexAMA = coorKeys.indexOf(coordenadared01);

                    if (indexAMA !== -1) {
                        ArrayEspacios2 = coorKeys.slice(indexAMA, indexAMA + 2);
                        console.log(ArrayEspacios2);
                    } else {
                        console.log("La coordenadaAMA no se encontró en el arreglo.");
                    }
                }
                scene.add(object);

                /*  objBarco4 = object;
                  barco4BB.setFromObject(objBarco4);
                  barco4BB = new THREE.Box3().setFromObject(objBarco4);*/
                loadComplete();
                callback4(ArrayEspacios2);
            });
    });
}

function Barco5(callback5) { //POSICION DE 3 ESPACIOS
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco5/submarino.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco5/submarino.obj',

            function (object) {
                object.scale.copy(new THREE.Vector3(0.7, 0.7, 0.3));
                //object.position.set(barco5Position.x, barco5Position.y, barco5Position.z);
                object.rotation.x = Math.PI / 2;
                //object.rotation.y = Math.PI / 2;

                //Random 
                const randomAngle = Math.random();
                object.rotation.y = randomAngle < 0.5 ? 0 : Math.PI / 2;
                let rotado = object.rotation.y;

                console.log(rotado);

                if (rotado > 0) { // horizontal si es  cero
                    const coorKeySinIyJ = Object.keys(CoordenadaJugador).filter(key => !key.startsWith('J') && !key.startsWith('I'));
                    const coorEspacio3 = coorKeySinIyJ[Math.floor(Math.random() * coorKeySinIyJ.length)];
                    const coorRandomE3 = CoordenadaJugador[coorEspacio3];

                    object.position.set(coorRandomE3[0] + .59, coorRandomE3[1], 0);

                    const letra = coorEspacio3[0];
                    const numero = coorEspacio3[1];
                    const numero2 = coorEspacio3[2];

                    if (numero2 == undefined) {
                        const codigoInicial = letra.charCodeAt(0);

                        for (let i = 0; i < 3; i++) {
                            const codigoLetra = codigoInicial + i;
                            const letraGenerada = String.fromCharCode(codigoLetra);
                            const letrasNumeros = letraGenerada + numero;
                            ArrayEspacios3.push(letrasNumeros);
                        }
                    }
                    else {
                        const codigoInicial = letra.charCodeAt(0);

                        for (let i = 0; i < 3; i++) {
                            const codigoLetra = codigoInicial + i;
                            const letraGenerada = String.fromCharCode(codigoLetra);
                            const letrasNumeros = letraGenerada + numero + numero2;
                            ArrayEspacios3.push(letrasNumeros);
                        }
                    }
                    console.log(ArrayEspacios3);

                } else {//vertical si es mayor a cero
                    const coorKeySin9y10 = Object.keys(CoordenadaJugador).filter(key => !key.endsWith('9') && !key.endsWith('10'));
                    const coorEspacio3 = coorKeySin9y10[Math.floor(Math.random() * coorKeySin9y10.length)];
                    const coorRandomRed0 = CoordenadaJugador[coorEspacio3];

                    object.position.set(coorRandomRed0[0], coorRandomRed0[1] - .59, 0);

                    const coorKeys = Object.keys(CoordenadaJugador);
                    const indexAMA = coorKeys.indexOf(coorEspacio3);
                    // Verifica si la coordenadaAMA está en el arreglo
                    if (indexAMA !== -1) {
                        ArrayEspacios3 = coorKeys.slice(indexAMA, indexAMA + 3);
                        console.log(ArrayEspacios3);
                    } else {
                        console.log("La coordenadaAMA no se encontró en el arreglo.");
                    }
                }

                scene.add(object);

                /*   objBarco5 = object;
                   barco5BB.setFromObject(objBarco5);
                   barco5BB = new THREE.Box3().setFromObject(objBarco5);*/
                loadComplete();
                callback5(ArrayEspacios3);
            });
    });
}

function bomba() {
    // Elimina las esferas del grupo y la escena
    for (var sphere of arrySphere) {
        group.remove(sphere);
        scene.remove(sphere);
    }
    arrySphere = [];
    // Crea múltiples instancias del modelo 3D
    const numInstances = 10; // El número de instancias que deseas
    for (let i = 0; i < numInstances; i++) {
        const loaderBarco = new OBJLoader(manager);
        var mtlBarco = new MTLLoader(manager);

        mtlBarco.load('../models/bomba/bomba.mtl', function (materials) {
            materials.preload();
            loaderBarco.setMaterials(materials);
            loaderBarco.load('../models/bomba/bomba.obj', function (object) {
                object.scale.copy(new THREE.Vector3(1.2, 1.2, 1.2));

                // Asigna posiciones aleatorias a cada instancia
                object.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
                group.add(object);
            });
        });
    }
}

const resultados = {};

function callback(result) {
    resultados.barco1 = result;
    console.log("Resultado recibido:", result);

}
function callback2(result) {
    resultados.barco2 = result;
    console.log("Resultado recibido:", result);

}
function callback3(result) {
    resultados.barco3 = result;
    console.log("Resultado recibido:", result);


}
function callback4(result) {
    resultados.barco4 = result;
    console.log("Resultado recibido:", result);


}
function callback5(result) {
    resultados.barco5 = result;
    console.log("Resultado recibido:", result);

}
//limpia arreglos de los barcos
function reiniciarResultados() {
    resultados.barco1 = [];
    resultados.barco2 = [];
    resultados.barco3 = [];
    resultados.barco4 = [];
    resultados.barco5 = [];
}

Barco1(callback);
Barco2(callback2);
Barco3(callback3);
Barco4(callback4);
Barco5(callback5);
bomba();

function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function startResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', resize);
}

function stopResize() {
    window.removeEventListener('resize', resize);
}



