import React from 'react'
import style from './button.module.css'

function Button({name , onClick}) {
  return (
    <button onClick={onClick} className={style.button}>
        {name}
    </button>
  )
}

export default Button