import React from 'react';
import './legal.scss'

export const Legal = () =>{
  return (
    <div className="legals">
        <h1 className="legal-title">Наши перевозки сертифицированны</h1>
    <div className="legal">
      <div className="legal__betwen">
      <div className="legal__block">
        <a href="https://teragrand.ru/wp-content/uploads/2020/06/true_sertificate_1.pdf">
          <img src="https://teragrand.ru/wp-content/uploads/2020/06/sertif_newest_1-1.jpg" />
        </a>
      </div>
      <div className="legal__block">
      <a href="https://teragrand.ru/wp-content/uploads/2020/06/true_sertificate_2.pdf">
        <img src="https://teragrand.ru/wp-content/uploads/2020/06/sertif_newest_3.jpg" />
        </a>
      </div>        
      </div>
      <div className="legal__betwen">
      <div className="legal__block">
      <a href="https://teragrand.ru/wp-content/uploads/2020/06/true_sertificate_3.pdf">
        <img src="https://teragrand.ru/wp-content/uploads/2020/06/sertif_newest_4.jpg" />
        </a>
      </div>
      <div className="legal__block">
      <a href="https://teragrand.ru/wp-content/uploads/2020/06/true_sertificate_3.pdf">
        <img src="https://teragrand.ru/wp-content/uploads/2020/06/sertif_newest_4.jpg" />
        </a>
      </div>        
      </div>
    </div>
    </div>
  );
}