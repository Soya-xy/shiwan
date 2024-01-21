'use client'

import './style.css'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import { useIsMobile } from '~/atoms'
import { usePathname, useRouter } from '~/i18n'

import { Menu } from './Menu'
import { Micro } from './Micro'
import { SlideMenu } from './SlideMenu'

export const menuList = [
  { name: 'HOME', url: '/' },
  { name: 'GAMES', url: '/game' },
  { name: 'NEWS', url: '/news' },
]

export const Navbar = () => {
  const [active, setActive] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const [isActived, setIsActived] = useState(false)
  const path = usePathname()
  useEffect(() => {
    menuList.forEach((v, k) => {
      if (v.url === path) {
        setActive(k)
        if (k !== 0) {
          setIsDark(true)
        } else {
          setIsDark(false)
        }
      }
    })
  }, [path])

  const { scrollYProgress } = useScroll()
  const isMobile = useIsMobile()
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [showMobMenu, setShowMobMenu] = useState(false)
  const [setDown, setSetDown] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.04 && document.body.offsetHeight > screen.availHeight) {
      setIsActived(true)
    } else {
      setIsActived(false)
    }
  })

  return (
    <div className="top-navigator nav-empty">
      <div
        className={clsx(isActived ? ' active' : '', 'main-navi')}
        style={{
          background: isDark
            ? '#ffff'
            : 'linear-gradient(180deg, rgba(0, 0, 0, .5) 10%, transparent)',
        }}
      >
        <div className="logo-left">
          <img
            src="/images/logo_white.png"
            className={isDark ? '!hidden' : 'white'}
          />
          <img
            src="/images/logo.png"
            className={!isDark ? '!hidden' : 'block'}
          />
        </div>
        <div className="menu-right cursor-pointer !d-center">
          <div className="menu">
            {menuList.map((v, k) => {
              return (
                <div
                  key={k}
                  className={active === k ? 'active' : ''}
                  onClick={() => {
                    router.replace(v.url)
                  }}
                >
                  <a className={isDark ? 'dark_a' : ''}>{v.name}</a>
                </div>
              )
            })}
          </div>
          <div className="h-[90px] border-b-1 border-b-[#ffffff33] d-center">
            <Menu dark={isDark} />
          </div>
          <div className="main-enquiry">
            <div
              className={clsx('button', showMenu && 'active')}
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="button-cover">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(isActived ? ' active ' : '', 'scroll-navi')}>
        <Micro
          hidden={isActived || isMobile}
          list={menuList}
          active={active}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
      <div className={`nav-enquiry ${showMenu ? 'active' : ''}`}>
        <div className="shadow-cover" />
        <div
          className="background-cover"
          onClick={() => setShowMenu(!showMenu)}
        />
        <SlideMenu />
      </div>

      {/* 移动端 上面的 */}
      <div
        className={clsx(isActived && !isMobile ? 'scrolled' : '', 'mob-nav')}
        style={{ background: isDark ? 'white !important' : '' }}
      >
        {!isDark && <div className="mob-overlay" />}
        <div className="mob-logo">
          {isDark ? (
            <img src="/img/nav_common_logo_black@2x.f6c2419.png" className="" />
          ) : (
            <img
              src="/img/nav_common_logo_white@2x.063bde3.png"
              className="white"
            />
          )}
        </div>
        <div
          className="mob-toggle"
          onClick={() => setShowMobMenu(!showMobMenu)}
        >
          <div className="toggle-cover">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* 移动端 滚动的 */}
      <div
        className={clsx(
          isActived && !isMobile ? 'scrolled' : '',
          'mobscroll-nav',
        )}
      >
        <div className="mob-cover">
          <div className="mob-logo">
            <img src="/img/Logo_small.23d0a2c.svg" className="black" />
            <img
              src="/img/nav_common_logo_white@2x.063bde3.png"
              className="white"
            />
          </div>
          <div
            className="mob-toggle"
            onClick={() => setShowMobMenu(!showMobMenu)}
          >
            <div className="toggle-cover">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="mob-overlay" />
      </div>
      {/* 移动端菜单 */}
      <div
        className={clsx(
          isActived ? 'scrolled' : '',
          showMobMenu ? 'active' : '',
          'nav-slide',
        )}
      >
        <div className="slide-bg">
          <div />
        </div>
        <div className="slide-banner">
          <div className="pg-logo">
            <img src="/img/nav_common_logo_black@2x.f6c2419.png" />
          </div>
          <div
            className="close-btn"
            onClick={() => setShowMobMenu(!showMobMenu)}
          >
            <div className="btn-bg" />
            <div className="btn-cover">
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className={`slide-col ${setDown ? 'up' : 'down'}`}>
          <div className="col-menu">
            <div>
              <a href="/en/" className="">
                HOME
              </a>
            </div>
            <div>
              <a href="/en/games/home" className="">
                GAMES
              </a>
            </div>
            <div>
              <a href="/en/news/" className="">
                NEWS
              </a>
            </div>
            <div>
              <a href="/en/math/" className="">
                MATH
              </a>
            </div>
            <div>
              <a href="/en/company/" className="">
                COMPANY
              </a>
            </div>
            <div>
              <a href="/en/events/2019/" className="">
                EVENTS
              </a>
            </div>
            <div>
              <a href="/en/partners/" className="">
                PARTNERS
              </a>
            </div>
            <div className="sub">GET IN TOUCH</div>
          </div>
          <div className={`col-scroll ${setDown ? 'active' : ''}`}>
            <div
              className={`col-arrow ${setDown ? 'up' : 'down'}`}
              onClick={() => setSetDown(!setDown)}
            >
              <div>
                <span />
                <span />
              </div>
            </div>
            <div className={`col-content ${setDown ? '' : '!hidden'}`}>
              <div className="colrow">
                <div className="cr-title">Licensing</div>
                <div className="cr-icon">
                  <div className="icon-box mga cursored">
                    <img src="/img/MGA@2x.68ec388.png" />
                  </div>
                  <div className="icon-box gambling cursored">
                    <img src="/img/Gambling@2x.089fddc.png" />
                  </div>
                  <div className="icon-box gibraltar">
                    <img src="/img/Gibraltar@2x.e3fd90d.png" />
                  </div>
                </div>
                <div className="cr-desc">
                  PG SOFT™ is licensed by UK (License: 45515), Malta (License:
                  C76195) and Gibraltar, and complies with European regulatory
                  requirements.
                </div>
              </div>
              <div className="colrow">
                <div className="cr-title">Certification</div>
                <div className="cr-icon">
                  <div className="icon-box bmm cursored">
                    <img src="/img/BMM@2x.108098f.png" />
                  </div>
                  <div className="icon-box ga cursored">
                    <img src="/img/GA@2x.c6a334d.png" />
                  </div>
                </div>
                <div className="cr-desc">
                  All PG SOFT™ products have been validated and certified by
                  international accreditation bodies BMM and GA.
                </div>
              </div>
              <div className="colrow">
                <div className="cr-title">Responsible Gaming</div>
                <div className="cr-icon">
                  <div className="icon-box undefined">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFVjQ0AAAAYdFJOUwDRI3PzFguBrlPA6fnZpTMEi2eYRmEb4TWL6EsAAAFMSURBVDjLlZXbdoQgDEWD3EHxbvn/Ly0Q2gU4VpoXHd2TTE4OGYAqBurMxNhkHB3gMbgkvggi+UdMSOabYFLcOW39h7C65aR/CFmXVf4xVFn+Dy6QHXWb6tq/RO5I2DfQip7Cv8U5ewcZLxLaVU7YJT23nd1T4nwtFajSeODcq7F7EvyCdxsccwJXuBQxGuY65QAUb3YTRFBJChfzCqi1oOnxj1oRPMBghvSD9TDiS4ePC3CDPbYpRCJmyKDBLxagWbgz5oDTV+AErAHzZGNJzfkCnKd22Q10izjpNkQD1GBTOrQbFRxRq7J008wX8CzH2jTjWvAqwUIeWoMWFoYf9kbwPEKi1AxUKTbDYQgJrU/NCLMptux2Qq50XdbWFNlmSmJYz/Zgs5XcbdZt3O6j0H+4uo9r/wLoXyn9S6p77f1jkfav5v5l//L38Q2lU2LSwAhGugAAAABJRU5ErkJggg==" />
                  </div>
                </div>
                <div className="cr-desc">
                  PG SOFT™ adheres strictly to social responsibility. To enter
                  PG SOFT™`s website, you must be within the legal age limit of
                  your country.
                </div>
              </div>
              <div className="colrow">
                <div className="cr-title">Exhibitions</div>
                <div className="cr-icon">
                  <div className="icon-box ice cursored">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAoCAMAAABJnB36AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVwZhl4Zhl4Zh2EZhlgahmAdimAch1cahmEbh2AZhlkah1oZhloahl4ah1wbiI5Vvlcahlkah2Unk1sbh1obiFcahlkah2QgjFoah2AZhlcahmAZhv/+//Pu9pRlrnExk8Gm0NC624RMobCNw9vL5GYii+ba7H9mzrMAAAAbdFJOUwDxa43DwBkj/V6/m9ivhjMD5HsKT0TKWRJj+uPff8MAAAHKSURBVEjH7dfZdqsgFAbgDUahAcUxmgJmTt//DYvJOk1wKMbouep/5cD6FgvYoAB/WTaEccSZWEDGn6rJZzq7/KHU/nDcGRzPLGdIqUt91CfT72Beemu6Wx9Ouun2iCGJAyJIFY+iPUOedX3c764qBN+K3bLKvQ2St1C0YVhkAMVqKGZ0Q6VOda3PZ31Va5DPoc+9zUMqW/FuEzUQ8zJS6lBfD7q+NLcDdIwT2Q1z0MLQency/VYqH6DFRsoJNDC1v2j9ddS7FfTTmPbKMnTRFTcLe29uOOmnUykn0pB5t+uwWdU9dDQkS99JAwQlzsntqksXdJDejKAf6dBVMihL3qZX5JHKSXstjobbIiBF6tMeev1bbbbpDLVmjvxrGUQo6fQ6+EnmpMtO/T0S/LauIyfN7HmLe3bkqbRvPfiAGWluPRDL0TksNiBsTtqeRlpYjYO36LxVMOXT4bDtrGuOfyKcdNyuc17ei0GkiURvVWPPjkoTP7yfkcl7dMZf2J7Q+pHQSYOYuKkiNw0lnXQUjKGhQIvRIPiEs3EcDXGKlqJN4aXJi98ho+nmy4xxa0KRn79EEyvtt1WxxRFjXopLcf9gzshg/t9fzTcXs7vDwsq/EAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className="icon-box igb cursored">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAoCAMAAACYexmKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcSUaFSMYFSclICMYFSQaGiMYFSMYFSMYFSMYFUorLSMYFSMYFe0AGSMYFecAEiQZFiMYFSMYFSMYFSQYFSQYFSMYFSMYFSMYFSMZFiYdFyMYFSMYFSUaFyMYFSMYFSkcGeYAEuYAEuYAE+YAEuYAEyMYFeYAEliGn44AAAAmdFJOUwAw6w2lHMeR+8IF47Mc3qM+16uBRl/Qc4tTIpn0Kmm8E71UePk1wsb3sgAAAg1JREFUSMfFldtigyAMhhGtB7SOaj1b252y93/DAYKGKl17tf+isxmfkPwJJcRSm+cH/ehXRZ3WUefr72VqFEY92SoA0GhFYRbt5kAEq+Jui0ZpOqOlWkFH+ac1aJorxSLmEZcG8d+CE8J4APRiUL2eicfrBjlPk8yNix0rE7qQO5SQE8RsP1dWA2yywehaknv0vHcghLLcuWu7sylC+0IUwmFOtp6nnN2obXNgvDjQK4D/GB1cLSEOZN5aJUkSAmQKrROlVLBnByq2mlCwUl2BytQAJA60B8hRBcWu3DZHRBwVlidul1ipUrXQwukr8USbtvN7WakzQ6ifwuicnE6wacN73uSCLLWv54MSTwAC99BV8epEsxk6oIcH89oHelXibec133YEqYbhZp77aQiiZrkQqsCo7Rj5P2VZi759vr8fWZAVvrVGRaYMSxbA7qm3n5+j7LPSQifZIVaFldM7qJjkERf/RoH6z6Gksy2P1DSIT+4vYg5UDixfYpd408OzdlEPIFxi+j1PovIeNpdppy+iZ9HbCOlsEBN3bv8KuhrUoB+O/LSIu1FpUG9t/5w5KMU1aYHSVQ921YX1ZmNeylXbiQx+AZVnLVBb/YV+f3ww1LqAmvkv1FIDeIT2UIiNKHn7+jquY3oyxmg0XjWbg+45K1f5O1tZ83Pna4h0VbcEOhKe+AavDMXZfwFkVVlB3jRsWQAAAABJRU5ErkJggg==" />
                  </div>
                </div>
                <div className="cr-desc">
                  PG SOFT™ participated in the London`s ICE exhibition and the
                  Netherlands` iGB Live! in 2017, 2018 and 2019. The exhibitions
                  were well received and partnerships with many of the Top 100
                  companies were formed.
                </div>
              </div>
              <div className="colrow">
                <div className="cr-title">Copyright Protection</div>
                <div className="cr-icon">
                  <div className="icon-box cms cursored">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAoCAMAAAB95dzmAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcTE3UB8oSh4nSB4nSB4nSR8oSWlhX0JFYztAVR4nSB4nSB4nSB4nSDI3UR4nSB4nSB4oSGpiYGhhYGhgYGhgX2hgX2hgX2hhX2hgXx4nSNN+RdQAAAAadFJOUwAoPqKUbFNjBhHXxIGzG+r5XjtOife/oG/f10I+3AAAAkFJREFUSMftldmS4yAMRVkdVgOxs7T+/0NHAuPYcdI1maqep9ZLjBDHupJwGHuy8zyyd2bn87OLz/wQdruYt4jpckDMF3sIu97eEtj8dQy/HlzmMr1HXOeD63I6uM7f6DBdhx17EF90COVSdl4WfL6jDunI5Ho04koQvuoQMQFAdgMtTk1HAPBlCLiB7Bvq4JqCoHeG04IO3ElHAZDcCg+hFr/q0Oir2XnApL7MQgXQCyJ0xA11jBl8FeUr4ko6bIbU9PA8srH1A7GuhaI5iA1BSQ8AqnoH+jHXJTp2zZxNU0fgu9vQCPCqIuzcdhrakM5z1SEfGVPnTUdgBWqqTIFuiOlcgchYp+lenzyAeCDurCOMB1efE4wN0SYA4yFpsw13W4SZHgjdNlAHW7JoM+Gouq2liyt1zbWi5oHAOqumY0EsYVYSAySGjvaYRRdJCBYhYV6ooyEe12moicQ1HBtWDqNcEYXgpGPJYjPp66gsBQf5GoFKJDasHBGYSN4cw1lJrxF4PNmU7SsEzUJck0rrYPBxj0C6rIEbhODr1KvtGzNVw4Ys9gii10JtEDorgoy7LlBOkLzLkPkeQUdJxw5BQxFj7rPb3fVuJ8WfakHTHNkeYbXPFO2fiyOGIrZfK2Nby601y3Kza7jglv3aT9l0+lc7/xbvv5h6WhfplfkMQVdTB1vYgH++5BgV42Ew2pRPELxoZVUYOsLyaHQUHyCE1EGEopoARMgS7eDGv0YoxaUKxtmiamUQoYLncpQ/14A/wuMnc+HnAnsAAAAASUVORK5CYII=" />
                  </div>
                  <div className="icon-box euipo cursored">
                    <img src="/img/EUIPO@2x.d5832ed.png" />
                  </div>
                </div>
                <div className="cr-desc">
                  PG SOFT™ is protected by 9 patent certificates issued by
                  European authorities and reserves the right to pursue legal
                  obligations for any infringement of intellectual property.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
