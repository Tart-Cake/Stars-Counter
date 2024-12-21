// Default initalization
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

let welcomeEl = document.getElementById("name-p");
let master = "Mohamed", greetings = "Hello and welcome our beloved creator ";

// The life
function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    let saveCount = count + " - ";
    // textContent attribute give you everything about the element without caring about the styling unlike innerText that don't retrive any hidden elements including spaces.
    saveEl.textContent += saveCount;
    count = 0;
    countEl.innerText = count;
    console.log(count);
}

function greet() {
    welcomeEl.innerText = greetings + master;
}

