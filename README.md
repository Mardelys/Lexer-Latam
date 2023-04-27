<!--## Project Specifications 

## 1- Crear una aplicación de presentación de diapositivas básica:

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
-->
# Ejercicios de Prueba Front-end React js

En el siguiente proyecto se diseñó una interfaz con tres vistas diferentes, cada una con un propósito distinto. En la vista 1, se muestran los pasos de la rutina en una serie de diapositivas que pueden ser navegadas hacia adelante, hacia atrás y reiniciadas si es necesario. De esta manera, el usuario puede seguir su progreso y asegurarse de que está en el camino correcto. En la vista 2, se presenta una tabla de artículos que el usuario puede ordenar por número de votos o por descuento. Esta funcionalidad permite a los usuarios ver rápidamente los productos más populares o las mejores ofertas disponibles. Por último, en la vista 3, se integra una API de gatitos para proporcionar un toque de diversión y entretenimiento. Cuando el usuario accede a esta vista puede observar un botón que permite cargar automáticamente una imagen de gatito aleatoria junto con un pequeño párrafo de texto y la primera palabra del parrafo sobre el gato en cuestión.

## Despligue e instrucciones de uso

### https://lexer-latam.vercel.app/

- Dar click en el enlace del despliegue.

- En la vista #1 que es la que tenemos por defecto podemos observar las diapositivas, se pueden leer haciendo click sobre los botones sig, Ant y Reiniciar.

- En la vista #2 se encuentra una tabla donde se pueden observar los articulos, sobre esta se encuentran 2 botones los cuales nos permiten ordenar por numero de Votos que tiene cada artículo o filtrarlos por los que tienen descuento especial

- En la vista #3 Se encuentra un botón el cual  trae un texto e imagen aleatorio sobre gatitos.

# Imágenes de apoyo "Producto Final"
<img src="https://user-images.githubusercontent.com/114613889/235000957-bc8fb9f3-1e14-4a9a-a7a6-f94f72a51336.png" width="600">


<img src="https://user-images.githubusercontent.com/114613889/235000983-79347c3f-66bf-4137-9762-18c3193339a6.png" width="600">


<img src="https://user-images.githubusercontent.com/114613889/235001019-6ffa014f-a05a-47f7-a1d6-37f665bebc56.png" width="600">

### Se hicieron correcciones en el responsive de la aplicación.

