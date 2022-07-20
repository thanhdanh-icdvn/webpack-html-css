import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/a11y'
import 'swiper/scss/controller'

interface ImageSliderProps {
  images: CloudinaryResource[]
  imageHeight: number
}
export const ImageSlider: React.FC<ImageSliderProps> = (props: ImageSliderProps): JSX.Element => {
  const { images, imageHeight } = props
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images &&
        images.map((image) => {
          return (
            <SwiperSlide key={image.asset_id}>
              <img
                src={image.url}
                alt={image.public_id}
                height={imageHeight}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%'
                }}
              />
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}
