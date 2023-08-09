import * as React from 'react';
import {Navbar}  from '../Main/Navbar/Navbar'
import {Footer}  from '../Main/Footer/Footer'
import Slider from '../Main/Slider/Slider';
import Slideres from '../Slideres/Slider';
import {Map} from '../Main/Map/Map'
import { PriceTable } from './PriceTable/PriceTable';


const dataSlider = [
  {
    id: 1,
    title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://kremenki-gorod.ru/wp-content/uploads/1/4/5/145b0df165a38fdba4026a988e317b2c.jpeg",
    subTitle: "Lorem",
  },
  {
    id: 2,
    title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://dividend-center.com/wp-content/uploads/2020/02/20170404162818.png",
    subTitle: "Lorem"
  },
  {
    id: 3,
    title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://msp29.ru/upload/iblock/417/417172e302a600252eb44ca893efdb3d.jpg",
    subTitle: "Lorem",
  },
  {
    id: 4,
    title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "http://kakpravilino.com/wp-content/uploads/2021/04/pokupka-mashini-posle-lizinga.jpg",
    subTitle: "Lorem",
  },
  {
    id: 5,
    title: "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://sun9-17.userapi.com/impf/vaFDMVQQMz17iUfb-TQPRsq2GjAxc5qx36TbMQ/jTfKPi8Rx5w.jpg?size=1200x837&quality=96&sign=920e43822a6f59ef5666d93666352b5e&c_uniq_tag=hpVUudymkdOSi2RPx80511WBEi9CDH_wSr28t8eJWbM&type=album",
    subTitle: "Lorem",
  },
];


export const  Cargo = () =>{
    return(
      <div>
        <Navbar />
        <Slider dataSlider={dataSlider} />
        <Map />
        <Slideres />
        <PriceTable />
        <Footer />
      </div>
    )
}
