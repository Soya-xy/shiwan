'use client'

import './index.css'

import { Swiper as Sw, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import { useState } from 'react'
import { EffectFade, Pagination } from 'swiper/modules'

import NewsList from './List'
import NewsSelection from './Select'

export const Top = () => {
  const [nowSwiper, setNowSwiper] = useState('')
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [mainSwiper, setMainSwiper] = useState<any>(null)

  return (
    <div className="container mx-auto">
      <div className="news123" id="news">
        <div className="pg-container">
          <div id="featured-news" className="in-view">
            <div className="gallery-top">
              <div className="gallery-top-container">
                <div
                  className="gallery-images "
                  onMouseEnter={() => {
                    setNowSwiper('main')
                  }}
                >
                  <Sw
                    effect="fade"
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    modules={[EffectFade]}
                    className="w-full"
                    onSwiper={setMainSwiper}
                    onProgress={(e) => {
                      if (mainSwiper && nowSwiper === 'main')
                        thumbsSwiper.setProgress(e.progress)
                    }}
                    onRealIndexChange={(e) => {
                      console.log('🚀 ~ Top ~ e:', e)
                      // 这里设置日期
                    }}
                  >
                    {[1, 2, 23, 3, 4, 5, 6].map((v) => (
                      <SwiperSlide key={v}>
                        <a
                          href="/en/news/173/"
                          className="gallery-images-link w-full"
                          title="AWAKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH 2”!"
                        >
                          <div
                            className="gallery-cover-image w-full"
                            style={{
                              backgroundImage: `url(${
                                v > 1
                                  ? 'https://www.pgsoft.com/uploads/News/Images/d0084b8a-b9b2-4dec-a517-23212e27b8cd.jpg'
                                  : 'https://www.pgsoft.com/uploads/News/Images/cd7b68fc-5d28-4bb8-b999-6a14b87cfc2f.jpg'
                              })`,
                            }}
                          />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Sw>
                </div>
              </div>
            </div>
            <div className="gallery-bottom">
              <div className="gallery-date">
                <div className="date">26</div>
                <div className="year-month">2023-12</div>
              </div>
              <div className="gallery-content">
                <div
                  className="swiper-container swiper-container-horizontal"
                  onMouseEnter={() => {
                    setNowSwiper('thumb')
                  }}
                >
                  <Sw
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="wh-full"
                    onSwiper={setThumbsSwiper}
                    onClick={() => {
                      setNowSwiper('thumb')
                    }}
                    onProgress={(e) => {
                      if (mainSwiper && nowSwiper === 'thumb')
                        mainSwiper.setProgress(e.progress)
                    }}
                  >
                    {[1, 2, 69, 3, 4, 5, 6].map((v) => (
                      <SwiperSlide key={v}>
                        <div className="gallery-content-wrapper">
                          <a href="" className="gallery-content-title">
                            A{v}AKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH {v}
                            !
                          </a>
                          <div className="gallery-content-desc desc173">
                            COLLECT WINNING SYMBOLS TO TRIGGER VARIOUS FEATURES
                            THAT WILL INCREASE YOUR WINNING CHANCES!
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Sw>
                </div>
              </div>
            </div>
          </div>
          <NewsSelection />
          <NewsList />
        </div>
      </div>
    </div>
  )
}
