import React from 'react'
import './title.css'


const Title = ({title,subtitle}) => {
  return (
    <div className='title'>
      <div className='title_text'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Title