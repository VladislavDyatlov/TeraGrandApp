import React from 'react';
import Slider from '../Slider/Slider';

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

export const NavSlide = () =>{
    return(
        <Slider dataSlider={dataSlider} />
    )
}