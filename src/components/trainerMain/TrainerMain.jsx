import React from 'react'
import { Link } from 'react-router-dom'
import TMS from './TrainerMain.module.css'
import TrainerCard from '../TrainerCard/TrainerCard'

export default function TrainerMain({ show }) {
  return (
    <div className={TMS.trainerMain_mainBackground}>
      <div className={TMS.trainer_container}>
 
        <div className={TMS.heading_part}>
          <h1>Meet <span>Our</span> Team </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius voluptatibus quo dignissimos quis voluptates, commodi culpa neque. Numquam dolor eos et fugiat, repellendus sint temporibus incidunt ullam nisi odio!</p>
        </div>

        <div className={TMS.card_container}>
          <TrainerCard />
        </div>

        {
          show ?
            <div className={TMS.button_part}>
              <Link to='/trainer' ><button>SEE THE WHOLE TEAM</button></Link>
            </div>
            : null
        }
      </div>
    </div>
  )
}
