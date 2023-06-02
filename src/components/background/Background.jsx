import React from 'react'
import BG from './Background.module.css'

export default function Background({ imgUrl, heading }) {
    return (
        <section style={{
            background: `url(${imgUrl}) ` ,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',

        }}  height="100vh" width='100%'

            className={BG.trainer_coverPic}
        >
            <h1> {heading} </h1>
        </section >
    )
}
