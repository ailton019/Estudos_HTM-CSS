let count = 0;

document.getElementById("increase").addEventListener("click", function() {
    count++;
    document.getElementById("display").textContent = count;
});

document.getElementById("decrease").addEventListener("click", function() {
    count--;
    document.getElementById("display").textContent = count;
});
