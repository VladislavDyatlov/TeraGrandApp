import React from 'react';
import './Guase.scss'

export const Guase = () =>{
    return ( 
      <div className="guase">
        <h1>Наши клиенты</h1>
        <div className="guase__container">
          <div className="guase__betwen">
          <div className="guase__logo">
            <img style={{marginTop: `35px`}} src="https://teragrand.ru/wp-content/uploads/2020/05/brands1.png" />
          </div>
          <div className="guase__logo">
            <img style={{marginTop: `28px`}} src="https://teragrand.ru/wp-content/uploads/2020/05/brands2.png" />
          </div>            
          </div>
          <div className="guase__betwen">
          <div className="guase__logo">
            <img src="https://teragrand.ru/wp-content/uploads/2020/05/brands3.png" />
          </div>
          <div className="guase__logo">
            <img src="https://teragrand.ru/wp-content/uploads/2020/05/brands7.png" />
          </div>            
          </div>
        </div>
        <div className="guase__container">
          <div className="guase__betwen">
          <div className="guase__logo">
            <img src="https://teragrand.ru/wp-content/uploads/2020/05/brands6.png" />
          </div>
          <div className="guase__logo">
            <img style={{marginTop: `20px`}} src="https://teragrand.ru/wp-content/uploads/2020/05/brands5.png" />
          </div>            
          </div>
          <div className="guase__betwen">
          <div className="guase__logo">
            <img style={{marginTop: `35px`}} src="https://teragrand.ru/wp-content/uploads/2020/05/brands4.png" />
          </div>
          <div className="guase__logo">
            <img style={{marginTop: `45px`}} src="https://teragrand.ru/wp-content/uploads/2020/05/brands8.png" />
          </div>            
          </div>
        </div>
      </div>
    );
}