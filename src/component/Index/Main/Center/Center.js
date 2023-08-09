import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import './Center.scss'
import SimpleTooltips from '../Toolpit/Toolpit';

export function Center(){
  return (
    <div className="services"> 
      <div className="services__container">
        <div className="services__row">
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/713/713311.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Собственные бригады</h3>
            <p>
              Работаем с заказами любой сложности независимо от обстоятельство и места действия.
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1341/1341916.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Безопастность</h3>
            <p>
              В распоряжении компании имеются современные автомобили которые обеспечат безопастность товара при перевозке
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/813/813966.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Грузчики</h3>
            <p>
              Главной фишкой компании является помощь клиентам с разгрузкой товара заказанного на любую сумму
            </p>
          </div>
        </div>
        <div className="services__row">
        <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1455/1455324.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Скоростные перевозки</h3>
            <p>
              Благодаря современным технология TeraGrand обгоняет конкурентов более чем в 2,5 раза по скорости перевозок
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7340/7340754.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Гарантия</h3>
            <p>
              Компания существует более 20 лет и обеспечит вам гарантию качества перевозок на 100%
            </p>
          </div>
          <div className="services__card" data-aos="zoom-in-down">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1548/1548205.png"
              width="60"
              height="60"
            />
            <h3 className="services__card--title">Перевозки легальны</h3>
            <p>
              TeraGrand занмает первое место по услугам в сфере грузоперевозок благадаря серцифицированности услуг
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}