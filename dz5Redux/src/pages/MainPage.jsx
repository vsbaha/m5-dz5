import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function MainPage() {

  const date = useSelector((state ) => state.card.product)
  
  const dispatch = useDispatch()
  const buyClick = () => {
  dispatch({
    type: "INCRUISE" ,
    paylaod:+1  
  })
  }


  return (
    <div>
      {date.map((e, index) => <div key={index}><div>{e.name}</div><button onClick={buyClick}>buy</button></div>)}
    </div>
  )
}

export default MainPage