let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ulel");
let count = 0;

let children = []

for (let index = 0; index < localStorage.length; index++) {
    const ele = localStorage.getItem("" + index);
    myLeads.push(ele);
    let element = document.createElement("li");
    let chl = document.createElement("a");
    chl.referrerPolicy = "noopener noreferrer";
    chl.href = ele;
    chl.target = "_blank";
    chl.text = ele;
    element.append(chl);
    ulEl.appendChild(element);
    count += 1;
    children.push(element);
}

inputBtn.addEventListener("click", () => {
    let a = " ";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs[0]);
        a = tabs[0].url;
        console.log(a);
        if (!myLeads.includes(a)){
            myLeads.push(a);
            let element = document.createElement("li");
            let chl = document.createElement("a");
            chl.referrerPolicy = "noopener noreferrer";
            chl.href = a;
            chl.target = "_blank";
            chl.text = a;
            element.append(chl)
            ulEl.appendChild(element);
            localStorage.setItem("" + count, a);
            count += 1;
            children.push(element);
        }
        inputEl.value = "";
    })
})

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    localStorage.clear();
    count = 0;
    while (children.length > 0) {
        ulEl.removeChild(children[0]);
        children.shift();
        myLeads.shift();
    }
})