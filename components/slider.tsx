import { CSSProperties } from 'react'
import { Scrollbar, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

export interface SwiperStyles extends CSSProperties {
  '--swiper-navigation-color': string
  '--swiper-pagination-color': string
}

export default function Slider({
  images,
  index,
}: {
  images: string[]
  index: number
}): JSX.Element {
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
      initialSlide={index}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`proposal ${index}`}
            placeholder="blur"
            quality="90"
            layout="responsive"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
