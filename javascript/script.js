/**
 * /patron/ : fragmento de texto que se va a reemplazar
 * gi: en todo el texto y sin importar mayusculas o minusculas
 * "remplazo": texto que se va a poner en lugar del patron
 */
function encrypt(text) {
  const result = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  return result;
}

function decrypt(text) {
  const result = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  return result;
}

// valida si el texto esta vacio o solo tiene espacios
function validate(text) {
  return text.length > 0 && text.trim() !== "";
}

// cambia la vista de la seccion de resultados
function changeView(sw) {
  const result = document.querySelector("#result");
  const resultEmpty = document.querySelector("#result_empty");
  if (sw) {
    result.style.display = "flex";
    resultEmpty.style.display = "none";
  } else {
    result.style.display = "none";
    resultEmpty.style.display = "flex";
  }
}

// formulario
const form = document.querySelector("#form-text-input");
// vista de resultados
const textResultBox = document.querySelector("#result_message");

// Proceso para encriptar o desencriptar
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const typeSubmit = event.submitter.name;
  const textSubmit = form.querySelector("#text_input").value;
  const isValid = validate(textSubmit);
  switch (typeSubmit) {
    case "encrypt":
      changeView(isValid);
      if (isValid) {
        textResultBox.innerHTML = encrypt(textSubmit);
      } else {
        textResultBox.innerHTML = "";
      }
      break;
    case "decrypt":
      changeView(isValid);
      if (validate(textSubmit)) {
        textResultBox.innerHTML = decrypt(textSubmit);
      } else {
        textResultBox.innerHTML = "";
      }
      break;
    default:
      alert("Error");
      break;
  }
});

// Para copiar el texto de la vista de resultados
const copyButton = document.querySelector("#btn_copy");
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(textResultBox.textContent);
  alert("Texto copiado al portapapeles");
});
