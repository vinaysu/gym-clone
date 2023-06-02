import React from 'react'
import TS from './Trainer.module.css'
import Background from '../../components/background/Background'
import { Trainer_details } from '../../utilities/Trainer_details'
import TrainerBanner from '../../components/trainerBanner/TrainerBanner';

export default function Trainer() {
  const img = 'https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';

  const trainer_card = [
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/1.svg',
      heading: 'Weightlifting',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vel?',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/2.svg',
      heading: 'Specific Muscles',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vel?',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/3.svg',
      heading: 'Flex Your Muscles',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vel?',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/4.svg',
      heading: 'Cardio Exercises',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vel?',
    },
  ]


  return (
    <div className={TS.trainer_mainBackground}>
      <Background heading='OUR COACH' imgUrl={img} />

      {/* <TrainerMain show={false} /> */}
      <section className={TS.coach_section}>
        <h3>OUR TEAM</h3>
        <h1>TRAIN WITH EXPERTS</h1>

        <div className={TS.coach_div}>
          {
            Trainer_details.map((elem, index) => {
              return (
                <div
                  style={{
                    background: `url(${elem.url}) `,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                  }}
                  className={TS.coach_box}
                key={index}>
                  <div className={TS.coach_box_details} >
                    <h2> {elem.name} </h2>
                    <p> {elem.coach} </p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </section>

      <TrainerBanner h1={'A BIG OFFER FOR'} h2={'THIS SUMMER'} url={'https://preview.colorlib.com/theme/gym2/img/banner/big_offer.png.webp'} />

      <section className={TS.features_section}>
          <h1>PUSH YOUR LIMITS</h1>
          <p>Our trainers will help you to master all the different workouts and exercises, and push your limits. </p>

          <div className={TS.feature_container}>
            {
              trainer_card.map((elem, index)=>{
                return(
                  <div className={TS.feature_box} key={index}>
                    <img src={elem.img} alt="" />
                    <h3>{elem.heading}</h3>
                    <p>{elem.description}</p>
                  </div>
                )
              })
            }
          </div>
      </section> 

    </div>
  )
}
