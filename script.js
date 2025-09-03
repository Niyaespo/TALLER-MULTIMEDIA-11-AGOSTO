console.log("My little soda pop");

const titulo = document.getElementById("Cool me down")

titulo.innerText = "You're so hot";

let estado0riginal = true;

titulo.addEventListener("click", ()=> {
    if(estado0riginal === true) {
titulo.innerText = "pour me up";
titulo.style.color = "blue";
}

else {
    titulo.innerText = "You're so hot";
    titulo.style.color = "purple";
}


estado0riginal = !estado0riginal;
});