import React from 'react'
import stonee from '../images/stonee.png'

const Stone = () => {
  return (
    <div className="stone-container">
      <div className="stone-image">
        <img src={stonee} alt="stone" />
      </div>

      <div className="stone-content">
        <h1>
          “I was skeptical, but Area has completely transformed the way I manage
          my business. The data visualizations are so clear and intuitive, and
          the platform is so easy to use. I can't imagine running my company
          without it.”
        </h1>
        <p className="stone-name">John Smith</p>
        <p className="stone-role">Head of Data</p>
      </div>
    </div>
  )
}

export default Stone
