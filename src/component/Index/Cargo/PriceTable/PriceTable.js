import React, {useState} from "react";
import './PriceTable.scss'
import {Modal} from "../../Modal/Modal";

export const PriceTable = () =>{
    const [active, setActive] = useState(false)
    return(
        <>
        <Modal active={active} setActive={setActive}/>
        <div>
            <h1 style={{textAlign: 'center'}}>Наши тарифы</h1>
        <div class="wrapper">
        <div class="pricing-table gprice-single">
            <div class="head">
                 <h4 class="title">Базовый</h4> 
            </div>
            <div class="content">
                <div class="price">
                    <h1>₽1тыс</h1>
                </div>
                <ul>
                    <li>Один перевоз</li>
                    <li>Перевозки по городу</li>
                    <li>Водительская бригада</li>
                    <li>Мелкая помощь</li>
                    <li>Услуги грузчика</li>
                    <li> <del>Машина Премиум</del></li>

                </ul>
                <div class="sign-up" onClick={() => (setActive(!active))}>
                    <a class="btn bordered radius">Заказать</a>
                </div>
            </div>
        </div>
            <div class="pricing-table gprice-single">
                <div class="head">
                    <h4 class="title">Стандарт</h4>
                </div>
                <div class="content">
                    <div class="price">
                        <h1>₽3тыс</h1>
                    </div>
                    <ul>
                    <li>3 рабочих часа</li>
                    <li>Перевозки по облости</li>
                    <li>Водительская бригада</li>
                    <li>Помощь в скборке товара</li>
                    <li>Услуги грузчика</li>
                    <li> <del>Машина Премиум</del></li>
            
                    </ul>
                    <div class="sign-up" onClick={() => (setActive(!active))}>
                        <a class="btn bordered radius">Заказать</a>
                    </div>
                </div>
            </div>
                <div class="pricing-table gprice-single">
                    <div class="head">
                        <h4 class="title">Премиум</h4>
                    </div>
                    <div class="content">
                        <div class="price">
                            <h1>₽7тыс</h1>
                        </div>
                        <ul>
                        <li>полный рабочий день</li>
                    <li>Перевозки по России</li>
                    <li>Водительская бригада</li>
                    <li>Помощь в скборке товара</li>
                            <li>Услуги грузчика</li>
                            <li>Машина Премиум</li>
                        </ul>
                        <div class="sign-up" onClick={() => (setActive(!active))}>
                            <a class="btn bordered radius">Заказать</a>
                        </div>
                    </div>
                </div>
    </div>
    </div>        
        </>

    )
}