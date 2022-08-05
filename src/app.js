/* eslint-disable */
import "bootstrap";
import "./style.css";

const palos = ["♥", "♠", "♦", "♣"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"];

const generarPaloRandom = () => {
  let palo = Math.floor(Math.random() * 4);
  let dibujoPalo = "";
  switch (palo) {
    case 0:
      dibujoPalo = "♥";
      break;
    case 1:
      dibujoPalo = "♠";
      break;
    case 2:
      dibujoPalo = "♦";
      break;
    case 3:
      dibujoPalo = "♣";
      break;
    default:
      break;
  }
  return dibujoPalo;
};

const generarNumeroRandom = () => {
  let numero = Math.floor(Math.random() * 13) + 1;
  if (numero > 10) {
    let letra = "";
    switch (numero) {
      case 11:
        letra = "J";
        break;
      case 12:
        letra = "Q";
        break;
      case 13:
        letra = "K";
        break;
      default:
        break;
    }
    return letra;
  }
  return numero;
};

const generarCarta = () => {
  let numero = document.querySelector(".mi-numero");
  numero.innerHTML = `<p>${generarNumeroRandom()}</p>`;
  let icono = document.querySelector(".mi-icono");
  icono.innerHTML = `<p>${generarPaloRandom()}</p>`;
  if (icono.innerText === "♥" || icono.innerText === "♦")
    icono.style.color = "red";
  else if (icono.innerText === "♠" || icono.innerText === "♣")
    icono.style.color = "black";
  let iconoBottom = document.querySelector(".mi-icono-bottom");
  iconoBottom.innerText = icono.innerText;
  iconoBottom.style.color = icono.style.color;
};

let botonCarta = document.querySelector(".botonCartaNueva");
botonCarta.addEventListener("click", () => {
  generarCarta();
});

window.onload = function() {
  generarCarta();
};

/*setInterval(() => {
  generarCarta();
}, 10000);*/

function armarInputs() {
  //creo el formulario donde elegir las medidas
  let form = document.createElement("form");

  let labelAncho = document.createElement("label");
  labelAncho.innerText = "Ingrese el ancho";
  labelAncho.style.padding = "5px";
  labelAncho.style.color = "white";

  let labelAlto = document.createElement("label");
  labelAlto.innerText = "Ingrese el alto";
  labelAlto.style.padding = "5px";
  labelAlto.style.color = "white";

  let inputAncho = document.createElement("input");
  inputAncho.type = "text";
  inputAncho.className = "inputAncho rounded-3";
  inputAncho.style.display = "block";
  inputAncho.style.marginBottom = "5px";

  let inputAlto = document.createElement("input");
  inputAlto.type = "text";
  inputAlto.className = "inputAlto rounded-3";
  inputAlto.style.display = "block";
  inputAlto.style.marginBottom = "5px";

  form.appendChild(labelAncho);
  form.appendChild(inputAncho);
  form.appendChild(labelAlto);
  form.appendChild(inputAlto);

  //creo el boton necesario para cambiar definitivamente las medidas
  let botonMedidas = document.createElement("button");
  botonMedidas.className = "btn btn-success cambiarMedidas";
  botonMedidas.innerText = "Cambiar";

  let container = document.querySelector(".container");
  container.appendChild(form);
  container.appendChild(botonMedidas);
}

let botonDimensiones = document.querySelector(".botonDimensiones");
botonDimensiones.addEventListener("click", () => {
  if (!botonDimensiones.disable) {
    armarInputs();
    //tomo los dos valores input que ingreso el usuario
    let ancho = document.querySelector(".inputAncho");
    let alto = document.querySelector(".inputAlto");

    let botonCambiar = document.querySelector(".cambiarMedidas");

    //registro el evento donde la carta deberia tomar las medidas establecidas en los inptus
    botonCambiar.addEventListener("click", () => {
      if (alto.value == "" || ancho.value == "") {
        alert("debe ingresar las medidas!");
      } else {
        let carta = document.querySelector(".mi-card");
        carta.style.setProperty("--ancho-carta", `${ancho.value}px`);
        carta.style.setProperty("--alto-carta", `${alto.value}px`);
        if (alto.value <= 218) {
          let cambiarFontSize = document.querySelector(".mi-numero");
          cambiarFontSize.style.setProperty("--fontSize", `1em`);
        } else {
          let cambiarFontSize = document.querySelector(".mi-numero");
          cambiarFontSize.style.setProperty("--fontSize", `3em`);
        }
      }
    });
    //bloque el boton para que al apretarlo nuevamente no me siga generando los inputs
    botonDimensiones.disable = true;
  }
});
