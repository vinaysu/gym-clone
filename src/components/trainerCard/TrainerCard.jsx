import React from 'react'
import TCS from './TrainerCard.module.css'
import { Trainer_details } from '../../utilities/Trainer_details'

export default function TrainerCard() { 
    return (
        <div className={TCS.card_main}>

            {
                Trainer_details.filter((elem, i)=> i<4).map((elem, i) => {
                    return (
                        <div className={TCS.main_box} key={i}>
                            <div
                                className={TCS.image_div}
                                style={{
                                    background: `url(${elem.url})`,
                                    backgroundSize: "cover",    
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                }}
                            >

                            </div>

                            <div className={TCS.box_content}>
                                <h3>{elem.name}</h3>
                                <p>{elem.coach}</p>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}
