import React from 'react'
import './Popup.css'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
      <div className='popup-inner'>
        <button onClick={() => props.setTrigger(false)} type="button" className='rounded-md close-btn text-red-300 border shadow-lg'>Close</button>
        {props.children}
      </div>
    </div>
 ) :  "";
}

export default Popup
