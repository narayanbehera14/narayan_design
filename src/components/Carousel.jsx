import heroimage from '../images/Hero_image.png'
import mount from '../images/mount.png'
import stonee from '../images/stonee.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Carousel = () => {
  const images = [heroimage, mount, stonee]

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} width="300" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
