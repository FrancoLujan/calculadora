const calculadora = document.querySelector(".marco");
const resultado = document.querySelector(".resultado");
const botonesEspeciales = {
  reset: "C",
  borrar: "DEL",
  igual: "=",
};
const numeros = {
  "boton-0": "0",
  "boton-1": "1",
  "boton-2": "2",
  "boton-3": "3",
  "boton-4": "4",
  "boton-5": "5",
  "boton-6": "6",
  "boton-7": "7",
  "boton-8": "8",
  "boton-9": "9",
  suma: "+",
  resta: "-",
  multiplicacion: "*",
  divicion: "/",
  punto: ".",
  "parentesis-der": ")",
  "parentesis-izq": "(",
};

function r_operacion() {
  let r_texto = resultado.textContent;
  r_texto = r_texto.replace(/x/g, "*");
  r_texto = r_texto.replace(/\u00F7/g, "/");
  console.log(r_texto);
  try {
    if (r_texto.slice(-1) == "0" && r_texto.slice(-2) == "/") {
      r_texto = "SINTAXIS ERROR";
    } else {
      r_texto = eval(r_texto);
    }
  } catch (error) {
    r_texto = "SINTAXIS ERROR";
  }
  return r_texto;
}

function numeros_operaciones(e) {
  e.preventDefault();
  let clase = e.target.classList;
  if (clase[0] != "marco") {
    let tipo_boton = botonesEspeciales[clase[0]] || numeros[clase[0]];

    if (numeros[clase[0]]) {
      if (numeros[clase[0]] == "*") {
        tipo_boton = "x";
      } else if (numeros[clase[0]] == "/") {
        tipo_boton = "&#247";
      }
      if(resultado.textContent == "SINTAXIS ERROR"){
        resultado.textContent = ""
      }
      resultado.textContent += tipo_boton;
    } else {
      if (botonesEspeciales[clase[0]]) {
        if (tipo_boton == "C") {
          resultado.textContent = "";
        } else if (tipo_boton == "DEL") {
          let ultimo = resultado.textContent.slice(-1);
          resultado.textContent = resultado.textContent.replace(ultimo, "");
        } else if (tipo_boton == "=") {
          resultado.textContent = r_operacion();
        }
      }
    }
  }
}

calculadora.addEventListener("click", numeros_operaciones);
