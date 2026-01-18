import React from 'react'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import heroimage from './images/Hero_image.png'
import mount from './images/mount.png'
import './index.css'
import Footer from './components/Footer'
import Connectus from './components/Connectus'
import Mapp from './components/Mapp'
import Stone from './components/Stone'
import Carousel from './components/Carousel'
import Why from './components/Why'

const App = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <h1 id="home">Browse everything.</h1>
      <img src={heroimage} alt="Hero_img" />

      {/* TRUSTED BY */}
      <p>Trusted by</p>
      <Carousel />

      {/* BENEFITS */}
      <div id="benefits">
        <p>Benefits</p>
        <p>We've cracked the code.</p>
        <p>Area provides real insight without the data overload.</p>

        <div className="benefits-grid">
          <div>
            <p>Amplify Insights</p>
            <p> Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth </p>          </div>

          <div>
            <p>Control Your Global Presence</p>
            <p> Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere </p>          </div>

          <div>
            <p>Remove Language Barriers</p>
            <p> Adapt to diverse markets with built-in localization for clear communication and enhanced user experience </p>          </div>

          <div>
            <p>Visualize Growth</p>
            <p> Generate precise, visually compelling reports that illustrate your growth trajectories across all regions </p>          </div>
        </div>

        <div className="benefits-image">
          <img src={mount} alt="Mountain" />
        </div>
      </div>

      {/* DISCOVER */}
      <div id="discover">
        <Discover />
      </div>

      <div id="why">
        <Why/>
      </div>

      {/* STONE */}
      <div id="stone">
        <Stone />
      </div>

      {/* MAP */}
      <div id="map">
        <Mapp />
      </div>
      

      {/* CONTACT */}
      <div id="contact">
        <Connectus />
      </div>

      <Footer />
    </div>
  )
}

export default App
