import React, { Fragment, useState } from "react";
import "../../App.css";
import styles from "./TrainingProgram.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";

 const data = [
  {
    img: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    text: "Yoga",
  },
  {
    img: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Body Building",
  },
  {
    img: "https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Aerobic",
  },
  {
    img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: " Flexibility",
  },
  {
    img: "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Cardio",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lasha_Talakhadze_Rio_2016.jpg/1200px-Lasha_Talakhadze_Rio_2016.jpg",
    text: "Weightlifting",
  },
  {
    img: "https://images.unsplash.com/photo-1571726656333-2640ca759d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80",
    text: "Gymnastic",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0052/7043/7978/articles/bodyweight-squats-benefits-forms.jpg?v=1634856149",
    text: "Squat",
  },
  {
    img: "https://media.healthnews.com/images/featured/2022/09/running-woman-forest-day.jpg",
    text: "Jogging",
  }
];
export default function TrainingProgram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChangeLeft = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 3 : currentIndex - 1);
  };

  const handleSlideChangeRight = () => {
    setCurrentIndex(currentIndex === data.length - 3 ? 0 : currentIndex + 1);
  };
  console.log(currentIndex);

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h1>Training Program</h1>
        <div className={styles.carousal_div}>
          {window.screen.width > 840 ? 
         data.slice(currentIndex, currentIndex + 3).map((ele, index) => {
            return (
              <div
                key={index}
                className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
              >
                <b className={styles.imgText}>{ele.text}</b>
                <img src={ele.img} alt={`Slide${index}`} />
              </div>
            );
          })
          :
          data.map((ele, index) => {
            return (
              <div
                key={index}
                className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
              >
                <b className={styles.imgText}>{ele.text}</b>
                <img src={ele.img} alt={`Slide${index}`} />
              </div>
            );
          })
          }
        </div>
        <div className={styles.buttonContainer}>
            <MdArrowBackIosNew  className={styles.icon}
        onClick={handleSlideChangeLeft}

            />
            <MdArrowForwardIos className={styles.icon}
        onClick={handleSlideChangeRight}

            />
          
        </div>
      </div>
    </Fragment>
  );
}
