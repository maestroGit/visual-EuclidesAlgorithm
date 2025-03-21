## Euclid's Algorithm Visualization for GCD Calculation
This project is a visualization of Euclid's Algorithm for calculating the Greatest Common Divisor (GCD).
[Euclid's Algorithm](https://maestrogit.github.io/visual-EuclidesAlgorithm/)



# How to Use
Clone or download the repository.
Open the index.html file in any web browser.
Input two numbers in the provided fields and click "Calculate" to see the visualization.

# Technologies Used
HTML: Structure and layout.
CSS: Basic styling (optional enhancement for aesthetics).
JavaScript: Core logic and dynamic updates for the visualization.

# Visualización Geométrica del MCD
Tenemos dos segmentos 📏 de línea: uno de longitud 'a' y otro de longitud 'b'. El objetivo es encontrar el mayor segmento posible que pueda medir ambos segmentos sin dejar residuo.

## Ajustar el tamaño del canvas al tamaño del viewport
1. Ajustar el tamaño del canvas al tamaño del viewport.
2. Agregamos un evento que escucha cuando la ventana del navegador se redimensiona cuando esto ocurre.

## Validar valores
Divido la validación en pasos más pequeños y claros:
Verificar existencia de los inputs.
Verificar si están vacíos.
Convertirlos en números y validarlos.

## Capturar valores y manejar eventos
Verifica que ambos valores sean números, enteros y mayores que 0. Escucha cambios en los inputs y crea barras. Retorna los valores si se cumplen todas las condiciones.

## Función createBarProportional
// implementar función que teniendo en cuenta el 100% del view port devuelva la longitud de las barras
// proporcional al numeros que se le pasan como argumentos
// primero calcularemos la proporción de cada número respecto al número máximo.
// Luego, utilizaremos esta proporción para definir la longitud de cada barra.

## Mostrar mensaje en un modal
1. Mostrar mensaje en un modal.
2. Manejo de eventos para cerrar el modal.

## Cálculo del MCD
El máximo común divisor (MCD o m.c.d.) de dos o más números enteros es el mayor número entero que los divide sin dejar residuo alguno.
- Toma dos números enteros positivos `a` y `b` donde `a > b`.
- Si el número es menor o igual a 1, no es primo.
- Iterar desde 2 hasta la raíz cuadrada del número.
- Verificamos divisores hasta la raíz cuadrada de `n` para mayor eficiencia.
- Si `n` es divisible por cualquier número en este rango, no es primo.
- Si no se encuentra ningún divisor, el número es primo.


## Cálculo del MCD y Descomposición en Factores Primos
El máximo común divisor (MCD) de dos números puede calcularse determinando la descomposición en factores primos de los dos números y tomando los factores comunes elevados a la menor potencia. El producto de estos factores será el MCD.
Si no hay ningún factor primo común entre los dos números, significa que su máximo común divisor (MCD) es 1. Esto ocurre cuando los dos números son coprimos, es decir, no tienen factores primos en común aparte del 1.

## Es 'n' un número primo?
### Descomponer en factores primos
El concepto de "módulo" es una forma de encontrar el residuo de una división. Cuando trabajamos con el módulo 6 (es decir, `n % 6`), estamos interesados en el residuo de un número `n` cuando se divide por 6. El residuo de la división siempre estará en el rango de 0 a 5 porque estos son los únicos posibles residuos cuando se divide cualquier número por 6.

### Ejemplos para ilustrar el módulo 6
Aquí hay algunos ejemplos para ilustrarlo:
- Si `n = 10`: 10 ÷ 6 = 1 con un residuo de 4. Entonces, 10 % 6 = 4.
- Si `n = 20`: 20 ÷ 6 = 3 con un residuo de 2. Entonces, 20 % 6 = 2.
- Si `n = 15`: 15 ÷ 6 = 2 con un residuo de 3. Entonces, 15 % 6 = 3.

En cada caso, el residuo está siempre entre 0 y 5. Cualquier número entero positivo `n` cuando se divide por 6 dará un residuo (módulo) que será uno de los siguientes: 0, 1, 2, 3, 4, o 5. Esto es porque 6 tiene 6 posibles residuos al dividirse por cualquier número: 0, 1, 2, 3, 4 y 5.

### Algoritmo para verificar si un número es primo
El algoritmo para verificar si un número es primo, basado en iterar hasta la raíz cuadrada del número, es una técnica eficiente conocida en la teoría de números. La razón por la cual se itera hasta la raíz cuadrada de 𝑛 al verificar si un número es primo se debe a la eficiencia en el algoritmo y las propiedades matemáticas de los factores. 

Cuando buscamos factores de un número 𝑛, estamos interesados en encontrar dos números 𝑎 y 𝑏 tales que 𝑎×𝑏=𝑛. Si ambos factores fueran mayores que la raíz cuadrada de 𝑛, entonces su producto 𝑎×𝑏 sería mayor que 𝑛, lo cual es una contradicción. Por tanto, al menos uno de los factores debe ser menor o igual a 𝑛.

Cuando decimos que los factores de 𝑛 (en este caso, 36) comienzan a repetirse en pares después de su raíz cuadrada (6), estamos observando que por cada factor mayor que 6, hay un factor correspondiente menor que 6. Así, no necesitamos verificar factores mayores que la raíz cuadrada de 𝑛, ya que eso nos daría información redundante. Aquí tienes una tabla simplificada de los factores de 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 Factores de 36 < o = a 6 --> 1, 2, 3, 4, 6 Factores de 36 > a 6 --> 9, 12, 18, 36 Como ves, cada par de factores se puede agrupar de manera que multiplicados nos dan 36: 1 * 36 = 36 2 * 18 = 36 3 * 12 = 36 4 * 9 = 36 6 * 6 = 36 Al iterar solo hasta la raíz cuadrada de 𝑛, en este caso hasta 6, hemos cubierto todos los posibles factores sin necesidad de comprobar los valores repetidos, que se encuentran en los pares inversos. Este algoritmo para verificar si un número es primo, basado en iterar hasta la raíz cuadrada del número, es una técnica eficiente conocida en la teoría de números.