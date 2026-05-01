import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
        <div className="card">
            <img src={props.image} alt=""/>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, beatae!</p>
            <button>View profile</button>
      </div>
  )
}

export default Card