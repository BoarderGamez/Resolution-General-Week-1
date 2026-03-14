let ap = 0;
const button = document.getElementById("headpat");
const countDisplay = document.getElementById("pat-count")
button.addEventListener("click",() => {
    ap = ap+1;

    if (ap ===1) {
        button.textContent=`patpat Nya ${count} OO!`;
    } else {
        button.textContent=`patpat Nya ${count} OwO!`;
    }
})