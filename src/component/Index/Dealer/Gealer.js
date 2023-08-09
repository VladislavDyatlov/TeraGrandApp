import React from 'react';
import { CountUps } from '../../CountUp/CountUp';
import { Center } from '../Main/Center/Center';
import { Footer } from '../Main/Footer/Footer';
import { Guase } from '../Main/Guase/Guase';
import { Map } from '../Main/Map/Map';
import { Navbar } from '../Main/Navbar/Navbar';
import { Profit } from '../Main/Profit/Profit';
import Slider from '../Main/Slider/Slider';
import { Legal } from './legal/legal';

const dataSlider = [
    {
      id: 1,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://a.d-cd.net/ZMAAAgNA-uA-1920.jpg",
      subTitle: "Lorem",
    },
    {
      id: 2,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://dgsteel.ru/upload/iblock/a86/a863d69c017df1f9754f2296ac22b854.jpg",
      subTitle: "Lorem"
    },
    {
      id: 3,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://zdirector.ru/wp-content/uploads/2019/11/kontrakt.jpg",
      subTitle: "Lorem",
    },
    {
      id: 4,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/10384921/pub_646af3694f57193770304847_646af3734f5719377030495d/scale_1200",
      subTitle: "Lorem",
    },
    {
      id: 5,
      title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
      img: "https://blog.oy-li.ru/wp-content/uploads/2021/06/1543755923_0x0_pokupka.jpg",
      subTitle: "Lorem",
    },
  ];

export const Dealer = () => {
    return(
        <div style={{pointerEvents: "inherit"}}>
        <Navbar />
        <Slider dataSlider={dataSlider}/>
        <Center />
        <Profit />
        <Map />
        <Guase />
        <Legal />
        <Footer />
        </div>
    )
}