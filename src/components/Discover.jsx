import React from 'react'
import discover from '../images/discover.png'

const Discover = () => {
  return (
    <section className="discover">
      <div className="discover-left">
        <h2>See the Big Picture</h2>
        <p className="discover-desc">
          Area turns your data into clear, vibrant visuals that show you exactly
          what's happening in each region.
        </p>

        <ul className="discover-list">
          <li><span>01</span> Spot Trends in Seconds: No more digging through numbers.</li>
          <li><span>02</span> Get Everyone on the Same Page: Share easy-to-understand reports.</li>
          <li><span>03</span> Make Presentations Pop: Interactive maps and dashboards.</li>
          <li><span>04</span> Your Global Snapshot: Clear overview of your entire operation.</li>
        </ul>

        <button className="discover-btn">Discover More</button>
      </div>

      <div className="discover-right">
        <img src={discover} alt="discover" />
      </div>
    </section>
  )
}

export default Discover
