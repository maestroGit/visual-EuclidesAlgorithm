const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ajustarTamanoCanvas = (factorAncho = 1, factorAlto = 1) => {
  const canvas = document.getElementById("myCanvas");
  canvas.width = window.innerWidth * factorAncho;
  canvas.height = window.innerHeight * factorAlto;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
};

// Detecta si el viewport es menor a 768px (como la media query)
const aplicarParaDispositivosMoviles = () => {
  if (window.innerWidth <= 768) {
    ajustarTamanoCanvas(1, 1 / 5); // Llama con parámetros específicos
  } else {
    ajustarTamanoCanvas(1, 0.3); // Valores normales para pantallas grandes
  }
};

// Función para crear barras proporcionales en el canvas
const createBarProportional = (valor1, valor2, factor) => {
  // Determinar la longitud máxima de las barras en función del ancho del viewport
  const maxBarLength = window.innerWidth * 0.98; // 98% del ancho del viewport
  // Encontrar el valor máximo entre los dos valores para calcular la proporción
  const maxValue = Math.max(valor1, valor2);
  // Calcular la longitud de cada barra en función de la proporción
  const barLength1 = (valor1 / maxValue) * maxBarLength;
  const barLength2 = (valor2 / maxValue) * maxBarLength;
  // Dibujar las barras en el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  // // Calcula las alturas de las barras proporcionalmente
  // const altura1 = valor1 * factor;
  // const altura2 = valor2 * factor;
  ctx.fillStyle = "#90EE90";
  ctx.fillRect(window.innerWidth * 0.01, 15, barLength1, factor); // Barra 1
  createsText(valor1, 14, 35); // Texto 1
  ctx.fillStyle = "#FF6961";
  ctx.fillRect(window.innerWidth * 0.01, 65, barLength2, factor); // Barra 2
  createsText(valor2, 14, 85); // Texto 2
  // Calcular y dibujar la barra del MCD
  const mcdValue = mcdAlgorithm(valor1, valor2);
  if (mcdValue === 1) {
    mostrarMensaje(`If there is no common prime factor, the GCD is 1. 
    They are coprime. They have no prime factors in common.`);
  } // Si el MCD es 1, no se dibuja la barra
  const barLengthMCD = (mcdValue / maxValue) * maxBarLength;
  ctx.fillStyle = "orange";
  ctx.fillRect(window.innerWidth * 0.01, 120, barLengthMCD, factor); // Barra MCD
  createsText(
    `Greatest Comun Divisor of ${valor1} and ${valor2}: ${mcdValue}`,
    14,
    140
  ); // Texto MCD
};

// Calcular el tamaño de la fuente basado en el viewport
const calculateFontSize = () => {
  const fontSizeVW = window.innerWidth * 0.02; // 12% del ancho del viewport
  const fontSizeVH = window.innerHeight * 0.02; // 2% de la altura del viewport
  const font = Math.min(fontSizeVW, fontSizeVH); // Elige el menor valor entre vw y vh
  return `bold ${font}px Verdana`; // Devuelve la fuente con el tamaño calculado
};

const createsText = (texto, x, y) => {
  ctx.fillStyle = "black"; // Color del texto
  //ctx.font = "bold 18px Verdana";
  ctx.font = calculateFontSize(); // Establecer el tamaño de la fuente
  ctx.textAlign = "start"; // El texto se alinea al inicio del punto x
  ctx.textBaseline = "middle"; // Línea base del texto
  ctx.fillText(texto, x, y);
};

const validarInputs = (input1, input2) => {
  // Verificar si los inputs existen y no están vacíos
  if (!input1 || !input2) {
    return "Both inputs are required.";
  }
  if (input1.value.trim() === "" || input2.value.trim() === "") {
    return "Inputs cannot be empty.";
  }
  // Convertir valores a números
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  // Validar condiciones específicas para los valores
  if (isNaN(valor1) || valor1 <= 1) {
    return "Input1 must be a number greater than 1.";
  }
  if (isNaN(valor2) || valor2 <= 0) {
    return "Input2 must be a number greater than 0.";
  }
  // Si todo está correcto, retorna null
  return null;
};

const capturarValores = (input1, input2) => {
  // Validar los inputs utilizando la función personalizada
  const mensajeError = validarInputs(input1, input2);
  if (mensajeError) {
    mostrarMensaje(mensajeError); // Mostrar el mensaje adecuado
    return null; // Salir si hay un error
  }
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  const factors = document.getElementById("factors");
  // Generar la salida para los dos contenedores
  const salida1 = `<p class="description">Factors prime of ${valor1}: <br> ${descomponerEnFactoresPrimos(
    valor1
  ).join(",<br> ")}</p>`;
  let salida2 = "";
  if (valor2 === 1) {
    salida2 = `<p>The value is ${valor2}. It has no prime factors because it is 1.</p>`;
  } else if (valor2 > 1) {
    salida2 = `<p class="description">Factors prime of ${valor2}: <br> ${descomponerEnFactoresPrimos(
      valor2
    ).join(",<br> ")}</p>`;
  } else {
    salida2 = `<p>No prime factors for ${valor2}: It must be greater than 1.</p>`;
  }
  // Crear el contenido HTML con dos divs uno al lado del otro
  factors.innerHTML = `
  <div class="factors" id="container1">${salida1}</div>
  <div class="factors" id="container2">${salida2}</div>`;
  // Función para manejar eventos de input
  // Otra opción es utilizar funciones anónimas o arrow functions: input1.addEventListener("input", (event) => { ... });
  const handleInputEvent = (event) => {
    containers.forEach((container, index) => {
      // Por ejemplo, oculta el tercer y el cuarto contenedor
      if (index === 2 || index === 3) {
        container.style.display = ""; // Muestra el contenedor
      }
    });
    createBarProportional(valor1, valor2, 30);
  };
  // Verifica que ambos valores sean números, enteros y mayores que 0
  if (
    Number.isInteger(valor1) &&
    valor1 > 0 &&
    Number.isInteger(valor2) &&
    valor2 > 0
  ) {
    if (valor1 > valor2) {
      // Escuchar cambios en los inputs y crear barras
      input1.addEventListener("input", handleInputEvent(valor1));
      input2.addEventListener("input", handleInputEvent(valor2));
      // Retorna los valores si se cumplen todas las condiciones
      return { valor1, valor2 };
    } else {
      mostrarMensaje("The dividend must be greater than the divisor");
      return null;
    }
  } else {
    mostrarMensaje(
      "Asegúrate de que ambos valores sean enteros positivos y mayores que 0."
    );
    return null;
  }
};

// Ajusta el canvas al cargar la página
window.addEventListener("load", aplicarParaDispositivosMoviles);
// Ajusta el canvas cuando se redimensiona la ventana
window.addEventListener("resize", aplicarParaDispositivosMoviles);
// Selecciona todos los elementos con la clase "container"
const containers = document.querySelectorAll(".container");
// Oculta algunos contenedores específicos
containers.forEach((container, index) => {
  // Por ejemplo, oculta el tercer y el cuarto contenedor
  if (index === 2 || index === 3) {
    container.style.display = "none"; // Oculta el contenedor
  }
});

// Manejo de eventos para cerrar el modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
document.getElementById("validar").addEventListener("click", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const valores = capturarValores(input1, input2);
});

document.getElementById("validar").addEventListener("click", () => {
  capturarValores(input1, input2);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    capturarValores(input1, input2);
  }
});

const mostrarMensaje = (mensaje) => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerText = mensaje;
  modal.style.display = "block";
};

// El máximo común divisor (mcd o m. c. d.) de dos o más números enteros, es mayor número entero que los divide sin dejar residuo alguno.
const mcdAlgorithm = (a, b) => {
  // Toma dos números enteros positivos a y b donde a > b.
  if (!(a > 0 && b > 0) || !(a > b)) {
    console.log(a, " y ", b, "Deben ser positivos y a > b");
  }
  let resto = a % b;
  if (resto === 0) {
    return b;
  } else {
    return mcdAlgorithm(b, resto);
  }
};

const esPrimo = (n) => {
  // Si el número es menor o igual a 1, no es primo
  if (n <= 1) {
    return false;
  }
  // Iterar desde 2 hasta la raíz cuadrada del número
  // Verificamos divisores hasta la raíz cuadrada de n para mayor eficiencia
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    // Si n es divisible por cualquier número en este rango, no es primo
    if (n % i === 0) {
      return false;
    }
  }
  // Si no se encuentra ningún divisor, el número es primo
  return true;
};

const descomponerEnFactoresPrimos = (numero) => {
  if (numero <= 1 || !Number.isInteger(numero)) {
    return "Introduce un número entero positivo mayor que 1.";
  }
  // Se inicializa un array vacío para almacenar los factores primos y un divisor que empieza en 2 (el primer número primo).
  const factores = [];
  let divisor = 2;
  // Bucle para Encontrar Factores Primos
  while (numero >= 2) {
    // Verifica si el divisor cumple dos condiciones: ser primo y si ser un divisor (resto = 0) del número.
    if (esPrimo(divisor) && numero % divisor === 0) {
      factores.push(divisor);
      numero = numero / divisor;
    } else {
      divisor++;
    }
  }
  return factores;
};
