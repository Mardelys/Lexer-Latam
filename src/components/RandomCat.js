import React, { useState } from 'react';

function RandomCat() {
  const [catFact, setCatFact] = useState('');
  const [catImage, setCatImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {//función asíncrona
   setIsLoading(true)
   // Obtener el fact random
    const responseFact = await fetch('https://catfact.ninja/fact');
    const dataFact = await responseFact.json(); // Espera la respuesta de la petición
    const firstWord = dataFact.fact.split(' ')[0];
    setCatFact(dataFact.fact);

    // Obtener la imagen random
    const responseImage = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`);
    const dataImage = await responseImage.json();
    setCatImage(`https://cataas.com${dataImage.url}`);
    setIsLoading(false)
   };
 
  return (

   <div className='card w-50 mx-auto cat' >
      <button onClick={handleButtonClick}>Mostrar gato aleatorio</button>
      {isLoading && <div class="loader">loading...</div>

}
      <div >
         {catFact && <p>{catFact}</p>}
         {catImage && <img className='img-cat' src={catImage} alt="Random cat" />}
      </div>
    </div>
  );
}

export default RandomCat;
