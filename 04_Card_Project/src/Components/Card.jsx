import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
        <div>
        <div className="top">
          <img src={props.brandLogo} alt="" className="image" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>{props.tag}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
            <div className='bottom_price'>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card