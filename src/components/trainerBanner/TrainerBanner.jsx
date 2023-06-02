import React from 'react'
import TB from './TrainerBanner.module.css'
import Button from '../button/Button'
import {Link} from 'react-router-dom'

export default function TrainerBanner(props) {
    return (
        <section style={{
            background: `url(${props.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }} height="100vh" width='100vw'
        className={TB.trainer_banner_main}
        >
            <div>
                <h1> {props.h1} </h1>

                <h1> {props.h2} </h1>
                <Link to={'/joining'}><Button name= 'JOIN NOW'/></Link>

            </div>
        </section>
    )
}
