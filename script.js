// grabing all 5 btns

const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
const save = document.getElementById("save");
const clear = document.getElementById("clear");

// grabing number

const num = document.getElementById("num");

// declare a variable to count
// if we have saved local-storage, it will display , if we don't have any local storage , 0 will display

let count = parseInt(localStorage.getItem("count-number")) || 0;
num.textContent = count;

// Increase
inc.addEventListener("click", function () {
  count += 1;
  num.textContent = count;
});

// Decrease
dec.addEventListener("click", function () {
  count -= 1;
  num.textContent = count;
});

// Reset
res.addEventListener("click", function () {
  count = 0;
  num.textContent = count;
});

// Save - get that number
save.addEventListener("click", function () {
  localStorage.setItem("count-number", count);
});

// Clear - clear that number
clear.addEventListener("click", function () {
  localStorage.clear();
});
