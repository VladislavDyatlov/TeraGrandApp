import React from "react";
import { Footer } from "../Main/Footer/Footer";
import { Form } from "../Main/Form/Form";
import { Navbar } from "../Main/Navbar/Navbar";
import Slider from "../Main/Slider/Slider";
import Slideres from "../Slideres/Slider";
import "./Price.scss";

const dataSlider = [
  {
    id: 1,
    title:
      "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://ofigeno.ru/wp-content/uploads/2022/04/0.jpg",
    subTitle: "Lorem",
  },
  {
    id: 2,
    title:
      "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://www.classifieds24.ru/images/7056/7055605/thumb_1.jpg",
    subTitle: "Lorem",
  },
  {
    id: 3,
    title:
      "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://med-pro-ves.ru/wp-content/uploads/2023/01/AdobeStock_186250267-scaled.jpeg",
    subTitle: "Lorem",
  },
  {
    id: 4,
    title:
      "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://kartinkin.net/uploads/posts/2023-02/thumbs/1675776038_kartinkin-net-p-vidi-gruzovikh-avtomobilei-krasivo-19.jpg",
    subTitle: "Lorem",
  },
  {
    id: 5,
    title:
      "Изготовим доску любого цвета и размера. Покупайте с завода - выгодная стоимость без посредников",
    img: "https://rev-transs.ru/uploadedFiles/catalogimages/big/gruzoperevozki-po-rossii-servis-poputnyh-gruzov.jpg",
    subTitle: "Lorem",
  },
];

export const Price = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: "40px" }}>
        <Slider dataSlider={dataSlider} />
      </div>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
          Оставьте заявку и мы вам перезвоним
        </h1>
        <Form />
      </div>
      <div className="prices">
        <Slideres />
      </div>
      <Footer />
    </div>
  );
};
