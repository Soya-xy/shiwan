'use client'

import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { useState } from 'react'
import { Autoplay } from 'swiper/modules'

import { IMG_URL } from '~/constants/env'

export const SwiperTop = ({ banner_list = [] }: any) => {
  const [active, setActive] = useState(0)
  const [swiperRef, setSwiper] = useState<any>()

  if (banner_list.length <= 0) {
    return <></>
  }
  return (
    <>
      <div className=" fixed left-0 top-0 z-0 h-[100vh] w-full">
        <div className="swiper-container">
          <Swiper
            slidesPerView={1}
            onSlideChange={(e) => setActive(e.realIndex)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => setSwiper(swiper)}
            modules={[Autoplay]}
          >
            {banner_list.length > 0 &&
              banner_list.map((v: any, k: number) => {
                return (
                  <SwiperSlide key={k}>
                    <div className="swiper-slides bg-[#462818]" />
                    <div className="container mx-auto">
                      <img
                        src={IMG_URL + v.img.bg}
                        alt=""
                        className="swiper-slides_img h-[300px] w-[100vw] border-0 outline-none md:h-[576px]"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>

          <div className="slide-pag bottom-5 left-[50%] w-full translate-x-[-50%]">
            <div className="pag-cover">
              <div className="pag-bg" />
              {banner_list.length > 0 &&
                banner_list.map((v: any, k: number) => {
                  return (
                    <div
                      className={`pagbox ${
                        active === k ? 'active' : ''
                      } h-[30px] w-[30px] md:h-[56px] md:w-[56px]`}
                      key={k}
                      onClick={() => {
                        swiperRef && swiperRef.slideTo(k)
                      }}
                    >
                      <img src={IMG_URL + v.img.icon} />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
