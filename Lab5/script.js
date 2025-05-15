document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("text").textContent = "Текст успішно змінено!";
});

document.getElementById("content").addEventListener("mouseover", function () {
    this.classList.add("highlight");
});

document.getElementById("content").addEventListener("mouseout", function () {
    this.classList.remove("highlight");
});

document.getElementById("addElementBtn").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Новий елемент списку";
    document.getElementById("list").appendChild(newItem);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
    const list = document.getElementById("list");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

let count = 0;
const maxClicks = 5;
document.getElementById("clickCounterBtn").addEventListener("click", () => {
    count++;
    if (count === maxClicks) {
        alert("Hello World!");
        count = 0;
    }
});
