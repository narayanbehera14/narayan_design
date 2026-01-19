import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import l1 from "../images/Logo-1.png"
import l2 from "../images/Logo-2.png"
import l3 from "../images/Logo.png"

const logos = [l1, l2, l3]

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={5}
      spaceBetween={40}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      className="mySwiper"
    >
      {[...logos, ...logos, ...logos].map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
