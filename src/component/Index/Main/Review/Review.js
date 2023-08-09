import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import './Review.scss'

export const Review = () =>{

    const SliderLeft = () =>{
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 690
    }

    const SliderRight = () =>{
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 690
    } 

    const Reviews = [
        {
            id: 1,
            img: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-18.jpg",
            name: "Виктор",
            mark: "Отлично",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 2,
            img: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-9.jpg",
            name: "Павел",
            mark: "Хорошо",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 3,
            img: "https://img4.goodfon.ru/wallpaper/nbig/8/89/raian-reinolds-ryan-reynolds-muzhchina-akter-litso-portret.jpg",
            name: "Николай",
            mark: "Отлично",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 4,
            img: "https://almode.ru/uploads/posts/2021-03/1617027603_50-p-tobi-maguair-50.jpg",
            name: "Марк",
            mark: "Хорошо",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 5,
            img: "https://femmie.ru/wp-content/uploads/2019/03/photo-1480455624313-e29b44bbfde1-1.jpeg",
            name: "Эльдар",
            mark: "Отлично",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 6,
            img: "https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-6.jpg",
            name: "Виктор",
            mark: "Хорошо",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        },
        {
            id: 8,
            img: "http://st.gde-fon.com/wallpapers_original/70405_dzherard-batler_or_gerard-butler_1600x1200_www.Gde-Fon.com.jpg",
            name: "Николай",
            mark: "Отлично",
            texts: "Остро встал вопрос с перевозкой мебели из Кемерово в Омск, пришла идея обратиться в компанию TeraGrand. Понравился весьма приемлемый ценник и обещенная скорость доставки. Об услугах не пожалели, всем очень советую.",
        }
    ]


    return (
      <div className="main">
        <h1 className="main-title">Отзывы клиентов</h1>
        <div id="main-slider-container" data-aos="zoom-in-left">
          <MdChevronLeft
            size={40}
            className="slider-icon left"
            onClick={() => SliderLeft()}
          />
          <div id="slider">
            {Reviews.map((inf) => (
              <div className="slider-cards">
                <div className="slider-contr">
                  <div
                    className="slider-card-images"
                    style={{ backgroundImage: `url(${inf.img})` }}
                  ></div>

                  <div className="slider-review">
                    <h4>{inf.name}</h4>
                    <p>Оценка: {inf.mark}</p>
                  </div>
                </div>
                <div className="slider-card-texts">
                  <p>{inf.texts}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <MdChevronRight
            size={40}
            className="slider-icon right"
            onClick={SliderRight}
          />
        </div>
        <div className="slider-button">
            <div className="slider-buttons" onClick={SliderLeft}></div>
            <div className="slider-buttons" onClick={SliderRight}></div>
        </div>
      </div>
    );
}