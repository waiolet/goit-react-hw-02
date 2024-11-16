import React from 'react'
import s from "./Description.module.css"

const Description = () => {
  return (
    <div className={s.wrapper}>
          <h1 className={s.name}>Sip Happens Café</h1>
          <p className={s.text}> Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  )
}

export default Description
