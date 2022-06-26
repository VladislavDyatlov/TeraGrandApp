import './Slider.scss'
import React, {useState} from 'react'
import BtnSlider from './BtnSlider'

const dataSlider = [
    {
      id: 1,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.gifer.com/D0F.gif",
      subTitle: "Lorem",
    },
    {
      id: 2,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.gifer.com/PRq.gif",
      subTitle: "Lorem"
    },
    {
      id: 3,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.gifer.com/AAOY.gif",
      subTitle: "Lorem",
    },
    {
      id: 4,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.gifer.com/7zBs.gif",
      subTitle: "Lorem",
    },
    {
      id: 5,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.gifer.com/2yn3.gif",
      subTitle: "Lorem",
    },
  ];

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                  <>
                    <div
                      key={obj.id}
                      className={
                        slideIndex === index + 1 ? "slide active-anim" : "slide"
                      }
                    >
                      <img src={obj.img} />                     
                    </div>
                  </>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}