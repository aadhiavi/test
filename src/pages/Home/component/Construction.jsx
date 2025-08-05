import React from 'react'

const Construction = ({video,title,description,handleClick}) => {
  return (
    <div className='construction'>
        <video autoPlay loop muted style={{filter:'blur(2px)'}}>
          <source src={video} type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
        <div className="construction-container">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Learn more</button>
        </div>
    </div>
  )
}

export default Construction