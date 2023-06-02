import React, { Fragment, useEffect, useState } from "react";
import style from "./Home.module.css";

import Button from "../../components/button/Button";
import TrainingProgram from "../../components/trainingProgram/TrainingProgram";
import { slideData } from "../../utilities/HomePageSliderData";
import TrainerMain from "../../components/trainerMain/TrainerMain";
import TrainerBanner from "../../components/trainerBanner/TrainerBanner";
import { useNavigate } from "react-router";

export default function Home() {
  return (
    <Fragment>
      <div>
        <ImageSlider />
        <TrainingProgram />
        <TrainerBanner
          h1={"WORKOUT WITH"}
          h2={"PROFESSIONAL TRAINERS"}
          url={
            "https://preview.colorlib.com/theme/gym2/img/banner/offer.png.webp"
          }
        />
      </div>
      <TrainerMain show={true} />
    </Fragment>
  );
}

export function ImageSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlideIndex === slideData.length - 1) {
        setCurrentSlideIndex(0);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const bgImageStyle = {
    backgroundImage: `url(${slideData[currentSlideIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  // const goToNext = (currentSlideIndex) => {
  //   setCurrentSlideIndex(currentSlideIndex);
  // };
  // To be used for corausal

  const pageToJoin = () => {
    navigate("./joining");
  };

  return (
    <div className={style.containerStyles}>
      <div style={bgImageStyle} className={style.bgHome}></div>
      <div className={style.des_carousal}>
        <div className={style.description}>
          <h1>{slideData[currentSlideIndex].text}</h1>
          {/* <p>{slideData[currentSlideIndex].body}</p> */}
          <Button name="Join With Us" onClick={pageToJoin} />
        </div>
        {/* <div className={style.carousal}>
        {slideData.map((slideData, currentSlideIndex) => (
          <span
            key={currentSlideIndex}
            onClick={() => goToNext(currentSlideIndex)}
          ></span>
        ))}
      </div> */}
      </div>
    </div>
  );
}
