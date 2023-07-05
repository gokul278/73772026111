import React from 'react'
import { useSelector } from 'react-redux'

export const Check = () => {
    console.log(useSelector(state =>state.check.value.id));
  return (
    <div className='container-fluid' style={{backgroundColor:"#3C486B",borderRadius:"10px"}}>
        <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>dfd</div>
        </div>
    </div>
  )
}
