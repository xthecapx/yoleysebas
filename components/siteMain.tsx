import { CSSProperties } from 'react'

import { Scrollbar, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import slideOne from '../public/images/proposal/proposal1.jpeg'
import slideTwo from '../public/images/proposal/proposal2.jpeg'
import slideThree from '../public/images/proposal/proposal3.jpeg'
import slideFour from '../public/images/proposal/proposal4.jpeg'

export interface SwiperStyles extends CSSProperties {
  '--swiper-navigation-color': string
  '--swiper-pagination-color': string
}

export default function SiteMain(): JSX.Element {
  return (
    <Swiper
      modules={[Scrollbar, Navigation]}
      className="main-slider"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      style={
        {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as SwiperStyles
      }
      autoHeight={true}
    >
      <SwiperSlide>
        <Image
          src={slideOne}
          alt="proposal 1"
          placeholder="blur"
          quality="90"
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slideTwo}
          alt="proposal 2"
          placeholder="blur"
          quality="90"
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slideThree}
          alt="proposal 3"
          placeholder="blur"
          quality="90"
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slideFour}
          alt="proposal 4"
          placeholder="blur"
          quality="90"
          layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  )
}
