import React from "react";
import styles from "./AboutUs.module.css";
import Button from "../../components/button/Button";
import Background from '../../components/background/Background'

export default function About() {
  const img = 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  function handleLearnMore() {
    alert("clicked from about us section");
  }
  return (
    <>
      <Background heading='ABOUT US' imgUrl={img} />
      <div className={styles.container}>
        <section className={styles.about}>
          <iframe
            src="https://www.youtube.com/embed/vei81-bZhG4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
          <div className={styles.content}>
            <h2>About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              recusandae nihil eius iusto quibusdam debitis rem ea! Veritatis
              placeat, possimus assumenda similique ipsum nulla aliquam magni
              cumque praesentium earum quisquam, fugiat quasi. Facilis cumque
              mollitia dolores nobis nesciunt quae libero?
            </p>
            <Button onClick={() => handleLearnMore()} name='Learn More' />
          </div>
        </section>
        <section className={styles.choose}>
          <iframe
            src="https://www.youtube.com/embed/Rd3XHPk5me4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
          <div className={styles.content}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <h3>Consultations With Expert</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  recusandae nihil eius iusto quibusdam debitis rem ea! Veritatis
                  placeat, possimus assumenda similique ipsum nulla aliquam magni
                  cumque praesentium earum quisquam, fugiat quasi. Facilis cumque
                  mollitia dolores nobis nesciunt quae libero?
                </p>
              </li>
              <li>
                <h3>Best Workout Facilities</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  recusandae nihil eius iusto quibusdam debitis rem ea! Veritatis
                  placeat, possimus assumenda similique ipsum nulla aliquam magni
                  cumque praesentium earum quisquam, fugiat quasi. Facilis cumque
                  mollitia dolores nobis nesciunt quae libero?
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>

  );
}
