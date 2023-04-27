import React,  { useState } from 'react';


function Slides({dataSlides}) {
   const [currentSlide, setCurrentSlide] = useState(0);

   const numSlides = dataSlides.length;
 
   const nextSlide = () => {
     if (currentSlide < numSlides - 1) {
       setCurrentSlide(currentSlide + 1);
     }
   };
 
   const prevSlide = () => {
     if (currentSlide > 0) {
       setCurrentSlide(currentSlide - 1);
     }
   };
 
   const restartSlides = () => {
     setCurrentSlide(0);
   };
 
   const disablePrev = currentSlide === 0;
   const disableNext = currentSlide === numSlides - 1;
   const disableRestart = currentSlide === 0;
 
  
   const renderSlide = () => {
      const slide = dataSlides[currentSlide];
      return (
        <div id="slide" className="card text-center card2">
          <h1 data-testid="title">{slide.title}</h1>
          <p data-testid="text">{slide.text}</p>
        </div>
      );
    };
    return (
        <div className='content_slides'>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restartSlides} disabled={disableRestart}>Reiniciar</button>
                <button data-testid="button-prev" className="small "onClick={prevSlide} disabled={disablePrev}>Ant.</button>
                <button data-testid="button-next" className="small" onClick={nextSlide} disabled={disableNext}>Sig.</button>
            </div>
            {renderSlide()}
        </div>
    );

}

export default Slides;
