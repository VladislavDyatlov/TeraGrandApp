import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import Button from "@mui/material/Button";
import "./Sliders.scss";
import { Link } from "react-router-dom";

export const Sliders = () => {
  const [info, setInfo] = useState();

  const SliderLeft = () => {
    const slider = document.getElementById("sliders");
    slider.scrollLeft = slider.scrollLeft - 690;
  };

  const SliderRight = () => {
    const slider = document.getElementById("sliders");
    slider.scrollLeft = slider.scrollLeft + 690;
  };

  useEffect(() => {
    onSnapshot(collection(db, "Posts"), (snapshot) => {
      let inf = [];
      snapshot.docs.forEach((doc) => {
        inf.push({ ...doc._document.data.value.mapValue.fields, id: doc.id });
      });
      setInfo(inf);
      console.log("Post", info);
    });
  }, []);

  return (
    <div>
      <h1 className="main-title" data-aos="zoom-in-up">
        Наши посты
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={() => SliderLeft()}
        />
        <div id="sliders">
          {info?.map((info, i) => (
            <div className="slider-card"> 
              <div
                className="slider-card-image"
                style={{ backgroundImage: `url(${info.Img.stringValue})` }}
              ></div>
              <div className="slider-card-text">
                <h4>{info.Title.stringValue}</h4>
                {info.Text.stringValue.slice(0, 60)}...
                <div className="slider-card-button">
                  <Link to={`/posts/${info.id}`}>
                    <Button variant="contained" color="success">
                      Читатать
                    </Button>
                  </Link>
                </div>
              </div> 
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={SliderRight}
        />
      </div>
    </div>
  );
};
