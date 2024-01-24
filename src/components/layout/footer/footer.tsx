import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { tabbarShow } from '~/components/Game/Games'
import { jotaiStore } from '~/lib/store'

import icon_1 from '/public/images/BMM@2x.108098f.png'
import icon_2 from '/public/images/GA@2x.c6a334d.png'
import logo from '/public/images/logo.png'

const Footer = () => {
  const ref = useRef(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const value = scrollYProgress.get()
    if (latest > 150) {
      if (value > 0) jotaiStore.set(tabbarShow, false)
      else jotaiStore.set(tabbarShow, true)
    } else {
      jotaiStore.set(tabbarShow, false)
    }
  })
  return (
    <footer className="relative z-10 bg-[#fff] pt-5" ref={ref}>
      <div className="footer__top-wrap">
        <div className="container mx-auto 2xl:max-w-[1300px]">
          <div className="flex w-full flex-col md:flex-row">
            <div className="">
              <div className="footer-widget">
                <div className="footer-logo logo flex justify-center text-center md:justify-start  md:text-start max-md:my-4 max-md:flex">
                  <Link href="#">
                    <Image src={logo} alt="Logo" width={177} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p className="desc my-4 text-[#bcbcbc] max-md:px-4">
                    PG Pocket Games Soft is the world`s leading video game
                    supplier and the first cross-line video game development.
                    With the exclusive license of esball, Asia`s largest
                    entertainment city, it is the first global pioneer:
                    “Integration of offline to online video games” Many games
                    have repeatedly achieved great achievements in the market,
                    attracting players from all walks of life to be addicted and
                    spending a lot of money. It has become the world`s leading
                    video game brand!
                  </p>
                  <div className="footer-social my-2 flex justify-start  max-md:my-4 max-md:flex max-md:justify-center">
                    <Link href="#">
                      <Image src={icon_1} alt="iocn" width={100} height={50} />
                    </Link>
                    <Link href="#" className="ml-2">
                      <Image src={icon_2} alt="iocn" width={100} height={50} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end gap-3 max-md:justify-center">
              <div className="ml-[1%]">
                <div className="footer-widget widget_nav_menu">
                  <h4 className=" qr-title !after:content-[unset] !md:after:content-[''] text-center  text-[#54595F]">
                    TELEGRAM
                  </h4>
                  <img
                    className="m-[0_auto] w-40"
                    src="/images/qr_kefu.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="footer-widget widget_nav_menu ">
                  <h4 className="qr-title !after:content-[unset] !md:after:content-[''] text-center  text-[#54595F]">
                    SKYPE
                  </h4>
                  <img
                    className="m-[0_auto] w-40"
                    src="/images/qr_group.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[20px]  border-t border-t-[#C0C0C0] pt-[20px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <p className="text-[12px] text-[#C0C0C0]">
              © 版权所有 2022 Pocket Games Soft 电子 亚洲区官方邮箱 :{' '}
              <span className="text-[#3366ff]">pgsoftgaming@163.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
