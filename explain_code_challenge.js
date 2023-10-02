// Definimos  los modulos en node que vamos a usar 
const https = require(https);   // Modulo https  hacer peticiones https a apis etc 
const fs = require(fs); //modulo de filesystem  en node js
const crypto = require(crypto); //modulo utilizado para encryptar 
const start = Date.now();  // fracion de codigio para  obtener el dia 



//  Definimos una funcion llamada doRequest 
function doRequest() {
    https.request("https://www.google.com", res => {
        res.on(data, () => { });
        res.on(end, () => {
            console.log("HTTPS:", Date.now() - start)
        })
    }).end()
}



function getHash() {
    crypto.pbkdf2("a", "b", 100000, 512, sha512, () => {
        console.log("Hash: ", Date.now() - start)
})
}

/**
 * 
    function getHash() {: . Cuando esta función se llama, ejecuta el código contenido en su bloque.

    crypto.pbkdf2("a", "b", 100000, 512, sha512, () => {: Aquí se utiliza la función crypto.pbkdf2 para calcular un hash PBKDF2.  se pasan son los siguientes parametros :

  1 -   "a": El primer argumento es la contraseña o clave que se va a hashear. En este caso, es simplemente una cadena de texto "a".
  2 -  "b": El segundo argumento es el salt (sal), que es una cadena de texto "b". El salt es una cadena aleatoria que se utiliza para aumentar la seguridad del hash.
  3 -  100000: El tercer argumento es el número de iteraciones. En este caso, se realizan 100,000 iteraciones para aumentar la seguridad del hash.
  4 -   512: El cuarto argumento es la longitud del hash resultante en bytes. En este caso, se solicita un hash de 512 bytes.
  5 -   sha512: El quinto argumento es el algoritmo de hash a utilizar, que en este caso es "sha512".

  Punto observativo:
    () => {: Esto define una función anónima (una función sin nombre o funcion de flecha )  que se ejecutará cuando se complete el cálculo del hash.

    console.log("Hash: ", Date.now() - start): Dentro de la función anónima, se imprime en la consola el tiempo transcurrido desde que se inició el cálculo del hash hasta ahora. Date.now() devuelve el tiempo actual en milisegundos, y mostrar el contenido de la variable task que es la  en las primeras lineas estas dandole el valor de las fecha actual 

    En resumen, la función getHash calcula un hash PBKDF2 con una contraseña, un salt, un número específico de iteraciones y un algoritmo de hash específico. Luego, registra en la consola el tiempo que tomó realizar este cálculo.
 * 
 * 
 * 
 *
 */


doRequest()
fs.readFile("multitask.js", 'utf8', () =>{
    console.log( "FS:", Date.now() - start)
})


/**
 * 
El fragmento de código es una funcion que ejecuta un  fs.readFile en Node.js para leer un archivo llamado "multitask.js" utilizando el encoding "utf8". A continuación.

fs.readFile(multitask.js, utf8, () => {: Aquí se utiliza la función fs.readFile del módulo fs en Node.js para leer el contenido del archivo "multitask.js".
El segundo argumento, que especifica el encoding, debería estar entre comillas también, como "utf8", para indicar que el archivo se debe leer como texto en formato UTF-8.
console.log("FS:", Date.now() - start): Dentro de la función anónima, se imprime en la consola el tiempo que tomó realizar la lectura del archivo. Date.now() devuelve el tiempo actual en milisegundos, mostrar el contenido de la variable start que es la  en las primeras lineas estas dandole el valor de las fecha actual 

En resumen, el código intenta leer el contenido del archivo "multitask.js" utilizando la función fs.readFile y registra en la consola el tiempo que tomó realizar esta operación. 
 * 
 */