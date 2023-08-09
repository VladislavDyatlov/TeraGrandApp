import React from 'react';
import CountUp from 'react-countup';
import './CountUp.scss'

export const CountUps = () =>{
    return (
        <div class="wrappers">
        <div class="containers">
          <i class="fas fa-utensils"></i>
          <span class="num" data-val="400"><CountUp start={0} end={10} /></span>
          <span class="text">Лет опыта</span>
        </div>
        <div class="containers">
          <i class="fas fa-smile-beam"></i>
          <span class="num" data-val="340"><CountUp start={0} end={2500} /></span>
          <span class="text">Выполненныз заказов</span>
        </div>
        <div class="containers">
          <i class="fas fa-list"></i>
          <span class="num" data-val="225"><CountUp start={0} end={2500} /></span>
          <span class="text">Счастливых клиентов</span>
        </div>
        <div class="containers">
          <i class="fas fa-star"></i>
          <span class="num" data-val="280"><CountUp start={0} end={20} /></span>
          <span class="text">Водительских бригад</span>
        </div>
      </div>
    );
}