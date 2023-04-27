/*## Project Specifications 

### 1- Crear una aplicación de presentación de diapositivas básica:

- El componente 'Slides' toma una serie de diapositivas. Cada elemento de esta matriz denota una sola diapositiva y es un objeto con 2 propiedades: title y text.
- Al iniciar la aplicación, se debe renderizar la primera diapositiva.
- Al hacer clic en el botón "Sig." se muestra la siguiente diapositiva. Este botón está deshabilitado cuando la diapositiva actual es la última.
- Al hacer clic en el botón "Ant." se muestra la diapositiva anterior. Este botón está deshabilitado cuando la diapositiva actual es la primera.
- Al hacer clic en el botón "Reiniciar" se vuelve a la primera diapositiva. Este botón está deshabilitado cuando la diapositiva actual es la primera.
- Si no llegan datos mostar un texto diciendo: "No hay datos"

### 2- Crear una aplicación básica de clasificación de artículos:

- La lista de artículos se pasa al componente de la aplicación en forma de matriz de objetos.
- Cada artículo tiene las siguientes propiedades:
  - title: El título del artículo [STRING]
  - upvotes: el número de votos a favor para un artículo [NUMBER]
  - date: La fecha de publicación del artículo en el formato AAAA-MM-DD [STRING]
  - specials(opcional): llega true si el articulo tiene descuento [booleano]

- De forma predeterminada, los artículos deben mostrarse en la tabla ordenados por el número de votos positivos en orden descendente.
- Al hacer clic en el botón "Más votados" se deben reordenar y mostrar los artículos por el número de votos a favor en orden descendente.
- Al hacer clic en el botón "Con descuento" se deben mostrar solo los articulos que tienen descuento.
- Solo algunos articulos tiene la propiedad specials.

### 3- Imagenes Random, Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera palabra:

- Al darle click en el boton 3 habilitar la vista '/point_three', en esta se requiere la creacion de un componente en el cual se muestre la frase e una imagen de un gato, con el endpoint 'facts random' obtenga  el parametro fact que sera la frase a mostrar y  del cual debe extraer la primera palabra para enviarla al endpoint 'url Imagen random' y asi obtener la url de la imagen del gato a mostar 

- Facts Random: https://catfact.ninja/fact
- url Imagen random : https://cataas.com/cat/says/${PRIMERAPALABRA}?size=50&color=red&json=true
- mostrar imagen random (src): https://cataas.com${url} 
- documentacion: https://cataas.com/#/
*/