const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Soumyajit";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Frontend Developer";
    }, 4000);

}
textLoad();