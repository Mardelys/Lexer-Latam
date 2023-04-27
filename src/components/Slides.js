import React,  { useState } from 'react';

//le pasamos el parámetro de la data de diapositivas
function Slides({dataSlides}) {

   const [currentSlide, setCurrentSlide] = useState(0);//actualización en el estado

   const numSlides = dataSlides.length;//longitud del arreglo 

   const nextSlide = () => { // aumenta el valor de currentSlide solo si es menor que el índice de la ultima diapositiva
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
 
  // defino una función y renderiza la diapositiva dependiendo de su posición en el arreglo.inicial (0)
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
                <button data-testid="button-next" className="small" onClick={nextSlide} disabled={disableNext}>Sig.</button>
            </div>{/*despues de los botones renderizamos nuestras diapositivas*/}
            {renderSlide()}
        </div>
    );

}

export default Slides;
