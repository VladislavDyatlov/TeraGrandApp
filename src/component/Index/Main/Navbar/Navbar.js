import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

export function Navbar(){

  const [active, setActive] = useState(false)
 
    return (
      <header className={`header`} data-aos="flip-down">
        <div className="header__container">
          <div className="header__header-nav">
            <Link to="/" className={`header__${active ? "remove" : "logo"}`}>
              <span className="header__logos">Tera</span>
              <span className="header__loge">Grand</span>
            </Link>
            <nav className="header__nav">
              <ul className={`header__${active ? 'open' : 'nav-list'}`}>
                <li className="header__nav-item">
                  <Link to="/gallaria" className="header__link">
                    Галерея
                  </Link>
                </li>
                <li className="header__nav-item">
                <Link to="/price" className="header__link">
                    Цена
                  </Link>
                </li>
                <li className="header__nav-item">
                <Link to="/cargo" className="header__link">
                    Грузоперевозки
                  </Link>
                </li>
                <li className="header__nav-item">
                <Link to="/dealer" className="header__link">
                    Дилерам
                  </Link>
                </li>
                <li className="header__nav-item">
                <Link to="/story" className="header__link">
                    Статьи
                  </Link>
                </li>
              </ul>
              <div
                className="header__photo"
              >
                {active
                ?
                <img
                  src="https://portal-systems.ru/img/colseic.png"
                  width="40"
                  height="40"
                  onClick={() => setActive(!active)}
                />
                :
                <img
                  src=" "
                  width="60"
                  height="40"
                  onClick={() => setActive(!active)}
                />                
                }

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