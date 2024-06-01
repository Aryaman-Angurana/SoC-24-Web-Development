let count = 0;

const btn = document.getElementById("increment-btn");


btn.onclick = () => {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

const btn2 = document.getElementById("save-btn");

btn2.onclick = () => {
    console.log(count);
}