import React from 'react'
import Map from '../images/Map.png'

const Mapp = () => {
  return (
    <div className="mapp">
      <h1>Map Your Success</h1>

      <div className="steps">
        <div className="step">
          <h2>01</h2>
          <h3>Get Started</h3>
          <p>With our intuitive setup, you're up and running in minutes.</p>
        </div>

        <div className="step">
          <h2>02</h2>
          <h3>Customize and Configure</h3>
          <p>Adapt Area to your specific requirements and preferences.</p>
        </div>

        <div className="step">
          <h2>03</h2>
          <h3>Grow Your Business</h3>
          <p>Make informed decisions to exceed your goals.</p>
        </div>
      </div>

      <img src={Map} alt="map" />
    </div>
  )
}

export default Mapp
