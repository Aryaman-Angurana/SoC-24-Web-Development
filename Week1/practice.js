let count = 0;

const btn = document.getElementById("increment-btn");


btn.onclick = () => {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

const btn2 = document.getElementById("save-btn");
const entry = document.getElementById("entries");

btn2.onclick = () => {
    entry.textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = count;
}