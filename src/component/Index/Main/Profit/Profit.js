import React from "react";
import "./Profit.scss";
import i_truck from "../../../../i_truck.png";

export const Profit = () => {
  return (
    <div className="profit">
      <div className="profit__container" data-aos="zoom-in-up">
        <h2>Почему вам стоит выбрать TeraGrand?</h2>
        <div className="profit__text">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <p className="profit__p">Собственные водительские бригады</p>
          </div>
        </div>
        <div className="profit__text">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <p className="profit__p">Ежегодная аккредитация специалистов</p>
          </div>
        </div>
        <div className="profit__text">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <p className="profit__p">Соблюдение норм перевозок</p>
          </div>
        </div>
        <div className="profit__text">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <p className="profit__p">Выполнение перевозок в срок</p>
          </div>
        </div>
        <div className="profit__text">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <p className="profit__p">Опытные специалисты</p>
          </div>
        </div>
      </div>
      <div className="profit__photo">
        <img src={i_truck} />
      </div>
    </div>
  );
};
