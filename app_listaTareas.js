const input = document.querySelector("#input");
const agregar = document.querySelector(".btn_agregar");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    if (text !== "") {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(borrarbtn());
        ul.appendChild(li);

        input.value = "";
        vacio.style.display = "none";
    }
});
function borrarbtn() {
    const borrar = document.createElement('button');
    borrar.textContent = "X";
    borrar.className = "btn_borrar";

    borrar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll('li');
        if(items.length === 0){
            vacio.style.display = "block";
        }
    });
    return borrar;
}