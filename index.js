let counter = 0
let countEl = document.getElementById("count")


function increment() {
    counter += 1
    countEl.innerText = counter

}

let saveEl = document.getElementById("save-el")

function save() {
    saveString = counter + " - "
    saveEl.textContent += saveString
    counter = 0
    countEl.innerText = counter

}





