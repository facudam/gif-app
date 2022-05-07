import React from 'react'

export const GifGridItem = ({ url, title }) => {

  return (
    <div className='card animate__backInDown'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
