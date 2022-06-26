import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import './Center.scss'

export function Center(){
  return (
    <div className="services"> 
      <div className="services__container">
        <div className="services__row">
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages1.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Собственное производство</h3>
            <p>
              Изготовим доску любого цвета и размера. Покупайте с завода -
              выгодная стоимость без посредников
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages2.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Гарантия</h3>
            <p>
              Базовая гарантия 2 года, как на доску, так и на монтажные работы.
              Срок службы более 35 лет
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages3.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Монтаж по ГОСТу и ICO</h3>
            <p>
              С соблюдением особенностей вашего проекта, обеспечит максимальный
              срок службы
            </p>
          </div>
        </div>
        <div className="services__row">
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages1.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Собственное производство</h3>
            <p>
              Изготовим доску любого цвета и размера. Покупайте с завода -
              выгодная стоимость без посредников
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages2.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Гарантия</h3>
            <p>
              Базовая гарантия 2 года, как на доску, так и на монтажные работы.
              Срок службы более 35 лет
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://teragrand.ru/wp-content/uploads/2020/05/advantages3.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Монтаж по ГОСТу и ICO</h3>
            <p>
              С соблюдением особенностей вашего проекта, обеспечит максимальный
              срок службы
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}