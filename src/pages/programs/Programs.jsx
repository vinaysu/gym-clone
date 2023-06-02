import React, { Fragment } from 'react'
import TrainerBanner from '../../components/trainerBanner/TrainerBanner'
import Background from '../../components/background/Background'
import TrainingProgram from '../../components/trainingProgram/TrainingProgram'
import styles from './Programs.module.css'


export default function TrainingProgramPage() {
  return (
    <Fragment>
    {/* <div className={styles.transparentBackground}></div> */}
<Background
    heading={"Our Training Program"}
    imgUrl={'https://images.unsplash.com/photo-1584827386894-fc939dad6078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
/>

<TrainingProgram />
<TrainerBanner
    h1={'Wake up. Work out. Look hot.'}
    h2={'Kick ass. Your fears'}
    url={'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'}
/>

    </Fragment>
  )
}
