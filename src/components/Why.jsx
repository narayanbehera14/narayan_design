import React from 'react'

const Why = () => {
  return (
    <div>
        <div className="why-container">
  <p>Specs</p>
  <h1>Why Choose Area?</h1>
  <p className="why-desc">
    You need a solution that keeps up. That's why we developed Area.
    A developer-friendly approach to streamline your business.
  </p>
  <button className="why-btn">Discover More</button>

  <div className="compare-table">
    <div className="column area">
      <h2>Area</h2>
      <div className="feature"><span className="check">✓</span>Ultra-fast browsing</div>
      <div className="feature"><span className="check">✓</span>Advanced AI insights</div>
      <div className="feature"><span className="check">✓</span>Seamless integration</div>
      <div className="feature"><span className="check">✓</span>Advanced AI insights</div>
      <div className="feature"><span className="check">✓</span>Ultra-fast browsing</div>
      <div className="feature"><span className="check">✓</span>Full UTF-8 support</div>
    </div>

    <div className="column">
      <h2>WebSurge</h2>
      <div className="feature"><span className="check">✓</span>Fast browsing</div>
      <div className="feature"><span className="check">✓</span>Basic AI recommendation</div>
      <div className="feature"><span className="check">✓</span>Restricts customization</div>
      <div className="feature"><span className="cross">✕</span>Basic AI insights</div>
      <div className="feature"><span className="check">✓</span>Fast browsing</div>
      <div className="feature"><span className="cross">✕</span>Potential display errors</div>
    </div>

    <div className="column">
      <h2>HyperView</h2>
      <div className="feature"><span className="cross">✕</span>Moderate speeds</div>
      <div className="feature"><span className="cross">✕</span>No AI assistance</div>
      <div className="feature"><span className="cross">✕</span>Steep learning curve</div>
      <div className="feature"><span className="cross">✕</span>Moderate speeds</div>
      <div className="feature"><span className="cross">✕</span>Partial UTF-8 support</div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Why
