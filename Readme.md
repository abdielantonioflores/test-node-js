## 1. Explain the purpose of the module.exports object in Node.js.

### Explicacion funcion  doRequest 
que realiza una solicitud HTTP a "https://www.google.com" utilizando el módulo https de Node.js. 
function doRequest() {: Esto define la función doRequest().

https.request("https://www.google.com", res => {: Aquí se inicia una solicitud HTTP a "https://www.google.com" utilizando la función https.request. El resultado de esta solicitud se pasa como un argumento a una función de devolución de llamada (callback) que se ejecutará cuando se reciba una respuesta del servidor. La variable res representa la respuesta del servidor.

res.on(data, () => { });función res.on() se utiliza para configurar oyentes de eventos en el objeto de respuesta res
El código dentro de la función de devolución de llamada () => { } está vacío, lo que significa que no se hace nada cuando se recibe un evento "data" en la respuesta.

console.log("HTTPS:", Date.now() - start): Dentro de la función de devolución de llamada para el evento "end", se calcula y registra en la consola el tiempo transcurrido desde el valor de la variable start (que debería estar definida en otro lugar del código) hasta el momento en que se completó la solicitud HTTP. Esto mide el tiempo que tardó la solicitud en ejecutarse.

}).end(): Finalmente, se llama al método .end() en la solicitud HTTP, lo que significa que se envía la solicitud al servidor para que se procese.


```js
function doRequest() {
    https.request("https://www.google.com", res => {
        res.on(data, () => { });
        res.on(end, () => {
            console.log("HTTPS:", Date.now() - start)
        })
    }).end()
}

```





## Explicacion funcion  getHash:
 Cuando esta función se llama, ejecuta el código contenido en su bloque.

**crypto.pbkdf2("a", "b", 100000, 512, sha512, () => {:** Aquí se utiliza la función crypto.pbkdf2 para calcular un hash PBKDF2.  se pasan son los siguientes parametros :

1 -   "a": El primer argumento es la contraseña o clave que se va a hashear. En este caso, es simplemente una cadena de texto "a".
2 -   "b": El segundo argumento es el salt (sal), que es una cadena de texto "b". El salt es una cadena aleatoria que se utiliza para aumentar la seguridad del hash.
3 -   100000: El tercer argumento es el número de iteraciones. En este caso, se realizan 100,000 iteraciones para aumentar la seguridad del hash.
4 -   512: El cuarto argumento es la longitud del hash resultante en bytes. En este caso, se solicita un hash de 512 bytes.
5 -   sha512: El quinto argumento es el algoritmo de hash a utilizar, que en este caso es "sha512".

  Punto observativo:
**() => {:** Esto define una función anónima (una función sin nombre o funcion de flecha )  que se ejecutará cuando se complete el cálculo del hash.

console.log("Hash: ", Date.now() - start): Dentro de la función anónima, se imprime en la consola el tiempo transcurrido desde que se inició el cálculo del hash hasta ahora. Date.now() devuelve el tiempo actual en milisegundos, y mostrar el contenido de la variable task que es la  en las primeras lineas estas dandole el valor de las fecha actual 

En resumen, la función getHash calcula un hash PBKDF2 con una contraseña, un salt, un número específico de iteraciones y un algoritmo de hash específico. Luego, registra en la consola el tiempo que tomó realizar este cálculo. 

```js
function getHash() {
    crypto.pbkdf2("a", "b", 100000, 512, sha512, () => {
        console.log("Hash: ", Date.now() - start)
})
}
```




## Explicacion funcion  doRequest:

El fragmento de código es una funcion que ejecuta un  fs.readFile en Node.js para leer un archivo llamado "multitask.js" utilizando el encoding "utf8". A continuación.

fs.readFile(multitask.js, utf8, () => {: Aquí se utiliza la función fs.readFile del módulo fs en Node.js para leer el contenido del archivo "multitask.js".
El segundo argumento, que especifica el encoding, debería estar entre comillas también, como "utf8", para indicar que el archivo se debe leer como texto en formato UTF-8.
console.log("FS:", Date.now() - start): Dentro de la función anónima, se imprime en la consola el tiempo que tomó realizar la lectura del archivo. Date.now() devuelve el tiempo actual en milisegundos, mostrar el contenido de la variable start que es la  en las primeras lineas estas dandole el valor de las fecha actual 

En resumen, el código intenta leer el contenido del archivo "multitask.js" utilizando la función fs.readFile y registra en la consola el tiempo que tomó realizar esta operación. 

```js
doRequest()
fs.readFile("multitask.js", 'utf8', () =>{
    console.log( "FS:", Date.now() - start)
})

```


## Preguntas 


## 2. **What is a passport in Node.js?**
Es un middleware de autenticación popular llamado "Passport.js". Passport.js es una biblioteca de autenticación ligera y flexible que simplifica el proceso de autenticación de usuarios en una aplicación Node.js.

## 3. What is the purpose of the Buffer class in Node.js?
La Bufferclase en Node.js es una clase integrada que proporciona una forma de trabajar con datos binarios directamente en la memoria. Es una parte fundamental de Node.js y se utiliza para diversos fines, especialmente cuando se trata de operaciones de E/S, comunicación de red y manejo de archivos. Los propósitos principales de la Buffer son 
 - Almacenamiento eficiente de datos binarios 
 - Operaciones de E/S
 - Manipulación de datos binarios 
 -  Redes  
 - Rendimiento

## 4. Explain 0auth2.0 and its benefits

OAuth 2.0 (Open Authorization 2.0) es un marco de autorización estándar abierto que permite el acceso seguro y delegado a recursos en la web. Se utiliza ampliamente para otorgar a aplicaciones de terceros acceso limitado a los datos de un usuario, generalmente en un servicio web, sin exponer las credenciales del usuario (como el nombre de usuario y la contraseña)



## 5. Compare service-oriented architecture (SOA) and microservice architecture (MSA)

La Arquitectura Orientada a Servicios (SOA) y la Arquitectura de Microservicios (MSA) son enfoques arquitectónicos para construir sistemas de software distribuidos y escalables. Sin embargo, tienen diferentes filosofías y características. Aquí te comento algunas diferencia a comparación de SOA y MSA:

### Tamaño y granularidad :
SOA : SOA normalmente implica la creación de grandes servicios monolíticos que encapsulan múltiples funcionalidades. Los servicios en SOA suelen ser de grano grueso y pueden ser complejos.

MSA : MSA promueve la creación de servicios pequeños que se implementen de forma independiente y que se centren en una única funcionalidad. Los microservicios son detallados y siguen el "principio de responsabilidad única".


### Comunicación :

SOA : En SOA, los servicios a menudo se comunican entre sí mediante protocolos estandarizados como SOAP (Protocolo simple de acceso a objetos) o REST (Transferencia de estado representacional). La comunicación puede ser sincrónica o asincrónica.

MSA : los microservicios suelen utilizar protocolos ligeros como HTTP/HTTPS para la comunicación. La comunicación asincrónica también prevalece, a menudo utilizando intermediarios de mensajes o patrones controlados por eventos.

## 6. What does “low in coupling and high in cohesion” mean in backend development?
on conceptos fundamentales que son aplicables no sólo al desarrollo backend sino también al desarrollo de software en general. Describen características deseables de los componentes y módulos de software 

### low in coupling 

El coupling  se refiere al grado de interdependencia o conexión entre módulos o componentes de software. En el contexto del desarrollo backend, representa cuánto depende o sabe un módulo sobre los detalles internos de otro módulo.

### high in cohesion
La cohesion se refiere a qué tan estrechamente relacionadas y enfocadas están las responsabilidades o funcionalidades dentro de un módulo. En el desarrollo backend, representa qué tan bien se alinean las funciones o métodos de un módulo con un propósito único y bien definido.

## 7. How do you ensure the security of backend systems?
Se garantiza la  seguridad  en systemas backend realizando las siguientes actividades 
### Autenticación :
Implementar mecanismos sólidos de autenticación de usuarios. Utilice protocolos estándar de la industria como OAuth 2.0 u OpenID Connect para la gestión de identidades y acceso.
### Autorización :
Implemente un control de acceso detallado para impedir que los usuarios y servicios accedan a recursos que no deberían.
Utilizando  el control de acceso basado en roles (RBAC) o el control de acceso basado en atributos (ABAC) para administrar los permisos.

## 8. List pros and cons of using GraphQL vs REST API approaches

GraphQL:

Ventajas:
Flexibilidad: los clientes pueden solicitar exactamente los datos que necesitan, lo que reduce la recuperación excesiva o insuficiente de datos. Esto puede conducir a un uso más eficiente de los recursos de la red y a un mejor rendimiento.

Reducción de la recuperación excesiva: dado que los clientes especifican la forma de la respuesta que desean, no es necesario realizar múltiples solicitudes de recursos relacionados (lo que reduce el "problema de consulta N+1").


Contras:

Complejidad: la implementación de un servidor GraphQL puede ser más compleja y puede requerir un esfuerzo adicional en comparación con las API RESTful, especialmente para consultas más complejas.

Curva de aprendizaje: los desarrolladores nuevos en GraphQL pueden enfrentar una curva de aprendizaje al tratar con sus conceptos, incluida la definición de esquemas, los solucionadores y la ejecución de consultas.



## 9. Can you give an example of a project that required WebSocket communication?
La comunicación WebSocket se usa comúnmente en varios proyectos donde es necesario el intercambio de datos en tiempo real, bidireccional y de baja latencia entre clientes y servidores. A continuación se muestra un ejemplo de un proyecto que requirió comunicación WebSocket:

Aplicación de chat en tiempo real:

Una aplicación de chat en tiempo real es un ejemplo clásico de un proyecto que depende en gran medida de la comunicación WebSocket. En tal aplicación:

Servidor WebSocket : un servidor WebSocket está configurado para manejar conexiones WebSocket entrantes desde múltiples clientes. Mantiene una lista de clientes conectados y maneja el enrutamiento de mensajes.

Cliente WebSocket : cada usuario que se conecta a la aplicación de chat es un cliente WebSocket. El cliente establece una conexión WebSocket con el servidor cuando se une al chat.

## 10. Comment with your words the most challenging work you have done on backend with Node.js. (In english)

En lo personal siento que este reto toca partes inportantes que tener en cuenta al momento de iniciar un proyecto, tocamos buenas practicas y el reto te  toca puntos  para analizar los pros y contra de cada  herramienta que se usara.

El reto esta interesante y los puntos colocados estan tocando todo lo necesario.

Observacion: ubiera sido chevere que  el reto tambien se enfocara un poco mas en la generacion de apis y buenas practicas  de como manejarlos con los diferntes framework o  con modulos nativos del lenguaje.

English 

Personally, I feel that this challenge touches important parts to consider when starting a project, we touch good practices and the challenge reaches points to analyze the pros and cons of each tool that is used.

The challenge is interesting and the points placed are playing everything necessary.

Note: it would have been chevere that the challenge also focused a little more on the generation of apis and good practices of how to handle them with the different frameworks or with native modules of the language.


## Pruebas unitarias 
Para las pruebas unitarias se esta usando mocha con chai  a continuacion te explico como podrias ejecutarla o revisarlas:

Antes debes clonarte el insumo y poder  descargar las dependencias usadas en este caso  con el comando 

```js
npm install 

```

las dependencias usadas son las siguientes


```js
 "devDependencies": {
    "chai": "^4.3.10",
    "mocha": "^10.2.0"
  },
  "dependencies": {
    "crypto": "^1.0.1",
    "sinon": "^16.0.0"
  }

```

Para ejecutar las pruebas unitarias de la prueba se debe  ejecutar el comando 

```js
npm test

```

Aqui se ejecutaran 2 pruebas unitarias la de la funcion dorequest  y el file reading 



##  Create a new function similar to getHash() but encrypt string “b” and “c”, and then compare output hash with the output of getHash() they need to be different.

Se levanto una especie de ejemplo de codigo en el insumo inde.js el miso puedes ejecutar para saber el resultado de la siguiente manera 

```js
npm run start 

```





