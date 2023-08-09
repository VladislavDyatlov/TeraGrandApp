import React from 'react'
import './Map.scss'

export const Map = () =>{
    return (
      <div className="map">
        <div className="map__iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.644198266345!2d37.90893931587971!3d55.66039718052884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab7b647aeb089%3A0x6966d29f5a4515d0!2z0YPQuy4g0JzQuNGA0LAsIDjQsSwg0JvRjtCx0LXRgNGG0YssINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MDAwNg!5e0!3m2!1sru!2sru!4v1656336805492!5m2!1sru!2sru"
          width="100%"
          height="100vh"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>            
        </div>
        <div className="map__container">
        <h1>Где нас найти?</h1>
        <div className="map__container--title" data-aos="flip-up">
            <div className="map__containers">
                <h2>Контакты</h2>
            </div>
            <ul>
                <li><strong>Главный офис:</strong> г. Люберцы, ул. Мира 8а.</li>
                <li>Также у нас есть выставочные стенды в Москве и в других городах — +7 (499) 705-49-33</li>
                <li><strong>Мобильный офис</strong> – вам не обязательно тратить время и ехать в офис, вы можете подписать договор на дому.</li>
                <li><strong>Доставка и самовывоз</strong> — бесплатный самовывоз со склада. Доставка от 2000 руб : +7 (499) 705-49-33</li>
            </ul>
            <hr className="map__hr" />
        </div>
        </div>
      </div>
    );
}