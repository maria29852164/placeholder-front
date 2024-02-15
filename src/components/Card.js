import React from 'react'
import image1 from '../assets/image1.jpg'
function Card({item}){
    console.log(item)
  return(
    <div className='card'>
      <img src={item.image} alt=''/>
      <div className='card-body'>
      <h4 className='card-title'>{item.name}</h4>
      <p className='card-text text-secondary'>Phone {item.phone}</p>
          <p className='card-text text-secondary'>Age {item.age}</p>

      </div>

    </div>
  )
}
export default  Card