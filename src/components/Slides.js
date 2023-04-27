import React,  { useState } from 'react';

//le pasamos el parámetro de la data de diapositivas
function Slides({dataSlides}) {

   const [currentSlide, setCurrentSlide] = useState(0);//variable currenSlide  y funcion setCurrentSlide para actualización en el estad

   const numSlides = dataSlides.length;//numSlides: longitud del arreglo de diapositivas

   const nextSlide = () => { //Siguiente diapo: aumenta el valor de currentSlide solo si es menor que el índice de la ultima diapositiva
     if (currentSlide < numSlides - 1) {
       setCurrentSlide(currentSlide + 1);
     }
   };
 
   const prevSlide = () => { //Disminuye el valor de currentSlide si el indice es mayor al de la primer diapositiva
     if (currentSlide > 0) {
       setCurrentSlide(currentSlide - 1);
     }
   };
 
   const restartSlides = () => { //resetea el valor de currentSlide a 0
     setCurrentSlide(0);
   };
 
   const disablePrev = currentSlide === 0;//deshabilitar el botón prev cuando no hay diapositiva previa
   const disableNext = currentSlide === numSlides - 1; //deshabilitar el botón sig cuando se acaban las diapositivas
   const disableRestart = currentSlide === 0;//deshabilitar el boton reinicio cuando esta en su estado inicial
 
  // defino una función flecha en la cual al arreglo de diapositivas le paso la variable que determina la posición de la que debe renderizarse segun el estado(0)
   const renderSlide = () => {
      const slide = dataSlides[currentSlide];
      return (//retorna el titulo y el texto de la diapo correspondiente
        <div id="slide" className="card text-center card2">
          <h1 data-testid="title">{slide.title}</h1>
          <p data-testid="text">{slide.text}</p>
        </div>
      );
    };
    return (//finalmente el retorno de nuestro componente, botónes prev, sig y restart
        <div className='content_slides'>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restartSlides} disabled={disableRestart}>Reiniciar</button>
                <button data-testid="button-prev" className="small "onClick={prevSlide} disabled={disablePrev}>Ant.</button>
                <button data-testid="button-next" className="small" onClick={nextSlide} disabled={disableNext}>Sig.</button>{/*a cada botón se le asigna el evento onclick para cumplir su función y se deshabilida si las funcuiones disable se cumplen retornando un booleano true*/}
            </div>{/*despues de los botones renderizamos nuestras diapositivas*/}
            {renderSlide()}
        </div>
    );

}

export default Slides;
