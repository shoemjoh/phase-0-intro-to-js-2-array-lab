// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const otherCats = [name, ...cats];
    return otherCats;
}

function removeLastCat() {
    const shorterCats = cats.slice(0, cats.length - 1);
    return shorterCats;
}

function removeFirstCat() {
    const backCats = cats.slice(1, cats.length);
    return backCats;
}