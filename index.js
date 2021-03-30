// Write your solution here!
let cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

 function appendCat(name) {
    return [...cats, "Broom"];
}

function prependCat(name) {
        return["Arnold", ...cats];
}

function removeLastCat(name) {
        return [...cats.slice(0, 2)];
}

function removeFirstCat(name) {
return cats.slice(1, 3);
}