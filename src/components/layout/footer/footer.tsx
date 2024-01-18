import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import icon_1 from '/public/images/icons/social_icon01.png'
import icon_2 from '/public/images/icons/social_icon02.png'
import icon_3 from '/public/images/icons/social_icon03.png'
import icon_4 from '/public/images/icons/social_icon04.png'
import logo from '/public/images/logo.png'

const Footer = () => {
  return (
    <footer className="relative bg-[#fff]">
      <div className="footer__top-wrap">
        <div className="container mx-auto">
          <div className="flex w-full flex-col md:flex-row">
            <div className="">
              <div className="footer-widget">
                <div className="footer-logo logo text-center md:text-start">
                  <Link href="/contact">
                    <Image src={logo} alt="Logo" width={177} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p className="desc my-4 text-[#bcbcbc]">
                    PG电子(Pocket Games Soft
                    )全球首屈一指的电子游戏供货商，首位跨足线下线上电子游戏开发。拥有亚洲最大娱乐城esball独家授权，首开全球先锋：「整合线下到线上电子游戏」多款游戏屡屡创下市场傲人佳绩，吸引各方玩家一指上瘾，豪掷千金，已成为全球首屈一指的电子游戏品牌！
                  </p>
                  <div className="footer-social my-2 flex justify-start">
                    <Link href="#">
                      <Image src={icon_1} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_2} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_3} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_4} alt="iocn" width={30} height={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end gap-3">
              <div className="ml-[1%]">
                <div className="footer-widget widget_nav_menu">
                  <h4 className=" qr-title text-center text-[#54595F] after:!content-[unset]  md:after:!content-['']">
                    TELEGRAM
                  </h4>
                  <img
                    className="m-[0_auto]"
                    src="https://gstatic.clewm.net/caoliao-resource/231117/a44fa42f_4b16ec36_1666157560.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="footer-widget widget_nav_menu ">
                  <h4 className="qr-title text-center text-[#54595F] after:!content-[unset]  md:after:!content-['']">
                    SKYPE
                  </h4>
                  <img
                    className="m-[0_auto]"
                    src="https://gstatic.clewm.net/caoliao-resource/231117/a44fa42f_4b16ec36_1666157560.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t  border-t-[#C0C0C0] pt-[20px]">
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
