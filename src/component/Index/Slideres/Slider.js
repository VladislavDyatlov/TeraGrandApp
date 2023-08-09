import './Slider.scss'
import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import Button from "@mui/material/Button";

const dataSlider = [
    {
      id: 1,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://media.1istochnik.ru/attachments/istochnik/publications/9/98227/large_1616677780-16906c1f51.jpeg",
      price: "2297 руб",
      size: "около 2 часов",
      length: "до 200кг",
      covern: "30 км",
      category: "one",
    },
    {
      id: 2,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://s1.1zoom.ru/big3/788/Kenworth_Trucks_2008-16_500207.jpg",
      price: "2298 руб",
      size: "около 2 часов",
      length: "до 200кг",
      covern: "30 км",
      category: "one",
    },
    {
      id: 3,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://mobimg.b-cdn.net/v3/fetch/9a/9a279f0c9aa6d1aecc559c0287dc9c2b.jpeg",
      price: "2299 руб",
      size: "около 2 часов",
      length: "до 200кг",
      covern: "30 км",
      category: "one",
    },
    {
      id: 4,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://media.1istochnik.ru/attachments/istochnik/publications/9/98227/large_1616677780-16906c1f51.jpeg",
      price: "2297 руб",
      size: "около 2 часов",
      length: "до 200кг",
      covern: "30 км",
      category: "one",
    },
    {
      id: 5,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://s1.1zoom.ru/big3/788/Kenworth_Trucks_2008-16_500207.jpg",
      price: "2298 руб",
      size: "около 2 часов",
      length: "до 200кг",
      covern: "30 км",
      category: "one",
    },
    {
      id: 6,
      title: "",
      img: "https://www.1zoom.ru/big2/12/142987-Burbon.jpg",
      price: "3750 руб",
      size: "около 3 часов",
      length: "до 500кг",
      covern: "100 км",
      category: "two",
    },
    {
      id: 7,
      title: "",
      img: "http://jvolosy.com/wp-content/uploads/2021/11/1323105362_truck-auto.info_kenworth-t600_1.jpg",
      price: "3750 руб",
      size: "около 3 часов",
      length: "до 500кг",
      covern: "100 км",
      category: "two",
    },
    {
      id: 8,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://proprikol.ru/wp-content/uploads/2021/09/tyagachi-krasivye-kartinki-38-1024x768.jpg",
      price: "3751 руб",
      size: "около 3 часов",
      length: "до 500кг",
      covern: "100 км",
      category: "two",
    },
    {
      id: 9,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://i.pinimg.com/originals/11/7e/db/117edb55361c3db43fac86b596470dd6.jpg",
      price: "3752 руб",
      size: "около 3 часов",
      length: "до 500кг",
      covern: "100 км",
      category: "two",
    },
    {
      id: 10,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://w-dog.ru/wallpapers/1/13/493536094435748/peterbilt-peterblit-gruzovik-tyagach-trak-peredok-doroga-nebo.jpg",
      price: "3753 руб",
      size: "около 3 часов",
      length: "до 500кг",
      covern: "100 км",
      category: "two",
    },
  ];

  const categoray = [
    {
      id: 1,
      key: "one",
      text: "Эконом",
      color: "error"
    },
    {
      id: 2,
      key: "two",
      text: "Премиум",
      color: "success"
    }
  ]

export default function Slideres() {

    const [slideIndex, setSlideIndex] = useState(1)
    const [current, setCurrent] = useState(dataSlider)


    const Filter = (categoray) =>{ 
      setCurrent( 
        dataSlider.filter(el => el.category === categoray)
      )
    } 

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
      <div className="containers-slider">
        <div className="containers-images">
        {categoray.map((item) =>(
          <div className="container-block" onClick={() => Filter(item.key)}>
            <Button variant="contained" color={`${item.color}`}>
              {item.text}
            </Button>         
          </div>          
        ))}
        </div>
      {current.map((obj, index) => {
          return (
              <div
              key={obj.id}
              className={slideIndex === index + 1 ? "slider mb-slide active-anim" : "slider mb-slide"}
              >
                <div className="container-img"> 
                  <img 
                  src={`${obj.img}`}
                  />                  
                </div>
              <div className="container-text">
                <div className="price-text">
                <h1>Цена: {obj.price}</h1>
                <p><strong>Время:</strong> {obj.size}</p>
                <p><strong>Груз:</strong> {obj.length}</p>
                <p><strong>Радиус:</strong> {obj.covern}</p>
                </div>
              </div>
              </div>
          )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

      <div className="container-dot mb-slide">
          {current.map((item, index) => (
              <img 
              onClick={() => moveDot(index + 1)}
              src={`${item.img}`}
              className={slideIndex === index + 1 ? "dots active" : "dots"}
              ></img>
          ))}
      </div>
  </div>
    )
}