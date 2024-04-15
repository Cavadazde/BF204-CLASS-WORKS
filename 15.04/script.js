const incBtn = document.querySelector(".inc");
const counts = document.querySelector(".count");
const decBtn = document.querySelector(".dec");
const resBtn = document.querySelector(".reset");

let count = localStorage.getItem("count") || 0;
counts.textContent = count;

incBtn.addEventListener("click", () => {
    count++;
    counts.textContent = count;
    localStorage.setItem("count", count);
});

decBtn.addEventListener("click", () => {
    count--;
    counts.textContent = count;
    localStorage.setItem("count", count);
});

resBtn.addEventListener("click", () => {
    count = 0;
    counts.textContent = count;
    localStorage.setItem("count", count);
});
