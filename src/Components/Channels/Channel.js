import React from 'react'

const Channel = (el) => {

    const {name, type} = el;

  return (

    <div className='channel'>{name}</div>
  )
}

export default Channel
