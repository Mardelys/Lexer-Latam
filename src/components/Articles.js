import React from 'react';

function Articles() {

    return (
        <div>

            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Ordenar por</label>
                <button data-testid="most-upvoted-link" className="small">Más votados</button>
                <button data-testid="most-recent-link" className="small">Con descuento</button>
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
                        <tr data-testid="article" key="article-index">
                            <td data-testid="article-title">data</td>
                            <td data-testid="article-upvotes">data</td>
                            <td data-testid="article-date">data</td>
                        </tr>
                    </tbody>
                </table>
            </div>      
        </div>
    );
}

export default Articles;
