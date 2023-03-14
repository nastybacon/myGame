let canvas; // Canvas einbinden
let ctx; // malen
let character = new Image(); // Bild des Charakters

function init() {
    canvas = document.getElementById('canvas') // canvas laden
    ctx = canvas.getContext('2d');


    character.src = '../img/2_walk/2_WALK_000.png' // Bild vom Wizz einfügen


    ctx.drawImage(character, 20, 20, 50, 150); // Koordinaten und Parameter des Bildes
}