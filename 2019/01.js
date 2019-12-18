let vals = document.documentElement.innerText.split("\n");
let total = 0;
vals.forEach(el => {
  total += parseInt(el) ? Math.floor(parseInt(el)/3) - 2 : 0;
});
console.log(total);
