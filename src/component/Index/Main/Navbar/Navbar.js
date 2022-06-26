import React from 'react'
import './Navbar.scss'

export function Navbar(){
    return (
      <header className="header" data-aos="flip-down">
        <div className="header__container">
          <div className="header__header-nav">
            <a href="" className="header__logo">
              <span className="header__logos">Tera</span>
              <span className="header__loge">Grand</span>
            </a>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Главная
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Запчасти
                  </a>
                </li> 
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Цена
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Грузоперевозки
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Диллерам
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="" className="header__link">
                    Статьи
                  </a>
                </li>
              </ul>
              <div className="header__photo">
                <img src="https://colinjonesattorney.com/wp-content/uploads/2018/10/hamburger-menu-grey.png" width="60" height="40" /> 
              </div>
            </nav>
            <a href="#" className="header__phone">
              +7 (902) 356 86 03
            </a>
          </div>
        </div>
      </header>
    );
}