import React, { useState } from 'react';

function Articles({ dataArticle }) {
   //variables para actualización del estado(para ordenar)
  const [discount, setDiscount] = useState(false);
  const [sortVotes, setSortVotes] = useState(false);

  // Filtrar los artículos que tienen descuento
  const filterArticles = discount
    ? dataArticle.filter((article) => article.specials)
    : dataArticle;

  // Ordenar los artículos por votos a favor utilizando un operador ternario, este nos retorna un booleano quien determina la acción de este filtro.
  const sortArticles = sortVotes
    ? [...filterArticles].sort((a, b) => b.upvotes - a.upvotes)
    : filterArticles;

  return (
    <div>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Ordenar por</label>
        <button
          data-testid="most-upvoted-link"className="small"
          onClick={() => setSortVotes(!sortVotes)}>
          Más votados
        </button>
        <button
          data-testid="most-recent-link"className="small"
          onClick={() => setDiscount(!discount)}//click:  distinto de su estado inicial
          >
          Con descuento
        </button>
      </div>

      <div className="card w-50 mx-auto">
        <table>
          <thead>
            <tr>
              <th> Articulo </th>
              <th> votos a favor</th>
              <th> fecha </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapear cada artículo en la tabla */}
            {sortArticles.map((article, index) => (
              <tr data-testid="article" key={index}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Articles;
