'use client'

import clsx from 'clsx'

import './index.css'

import { useMount, useUnmount } from 'ahooks'
import { Bounce, Power1, Power2 } from 'gsap'
import { gsap as TweenMax } from 'gsap/dist/gsap'

import { useIsMobile } from '~/atoms'

export const Event = () => {
  function isElementInViewport(e: any) {
    const el = document.querySelector(e)
    if (!el) {
      return null
    }
    const t = el.getBoundingClientRect()

    const a = window.innerHeight || document.documentElement.clientHeight
    return {
      el: e,
      show: t.top <= a - 0 && t.top >= 0 - t.height,
      per: 1 - t.top / t.height,
    }
  }

  const animationRow = {
    row1() {
      console.log(123)

      TweenMax.to('.event-row1 .text-title', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row1 .content', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.row1-left-img1 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.1,
        }),
        TweenMax.to('.row1-right-text1', 0.9, {
          x: 0,
          opacity: 1,
          delay: 0.3,
        }),
        TweenMax.to('.row1-right-img1 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.4,
        }),
        TweenMax.to('.row1-right-text2', 0.9, {
          x: 0,
          opacity: 1,
          delay: 0.7,
        })
    },
    row2() {
      TweenMax.to('.event-row2 .bg-img', 0.8, {
        scale: 1,
        ease: Power1.easeOut,
      })
    },
    row3() {
      TweenMax.to('.event-row3 .text-title', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row3 .content', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.row3-right-img1 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.1,
        }),
        TweenMax.to('.row3-left-text1', 0.9, {
          x: 0,
          opacity: 1,
          delay: 0.8,
        }),
        TweenMax.to('.row3-left-img1 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.7,
        }),
        TweenMax.to('.row3-left-text2', 0.9, {
          x: 0,
          opacity: 1,
          delay: 1,
        }),
        TweenMax.to('.row3-right-img2 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 1,
        })
    },
    row4() {
      TweenMax.to('.event-row4 .bg-img', 0.8, {
        scale: 1,
        ease: Power1.easeOut,
      })
    },
    row5() {
      TweenMax.to('.event-row5 .text-title', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row5 .icon-cover', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.event-row5 .content', 0.6, {
          y: 0,
          delay: 0.2,
        }),
        TweenMax.to('.event-row5 .bg-cover', 0.6, {
          y: 0,
          delay: 0.3,
        }),
        TweenMax.to('.event-row5 .i4', 1, {
          x: '0%',
        }),
        TweenMax.to('.event-row5 .i3', 1, {
          x: '0%',
          delay: 0.1,
        }),
        TweenMax.to('.event-row5 .i2', 1, {
          x: '0%',
          delay: 0.2,
        }),
        TweenMax.to('.event-row5 .i1', 1, {
          x: '0%',
          delay: 0.3,
        }),
        TweenMax.to('.event-row5 .i6', 1, {
          x: '0%',
        }),
        TweenMax.to('.event-row5 .i7', 1, {
          x: '0%',
          delay: 0.1,
        }),
        TweenMax.to('.event-row5 .i8', 1, {
          x: '0%',
          delay: 0.2,
        }),
        TweenMax.to('.event-row5 .i9', 1, {
          x: '0%',
          delay: 0.3,
        }),
        TweenMax.to('.event-row5 .icon-cover span img', 0.6, {
          opacity: 1,
          delay: 0.3,
        })
    },
    row5BackgroundImg() {
      TweenMax.to('.event-row5 .bg-cover .bg-img', 0.8, {
        scale: 1,
        ease: Power1.easeOut,
      })
    },
    row6() {
      TweenMax.to('.event-row6 .text-title', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row6 .jackpot-game', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.row6-left-text1', 0.6, {
          y: 0,
          opacity: 1,
          delay: 0.2,
        }),
        TweenMax.to('.event-row6 .jackpot-game span', 0.6, {
          scale: 1,
          delay: 0.1,
        }),
        TweenMax.to('.event-row6 .jackpot-game span img', 0.6, {
          opacity: 1,
          delay: 0.2,
        }),
        TweenMax.to('.row6-right-img1', 0.8, {
          y: 1,
          opacity: 1,
          delay: 0.2,
        })
    },
    row7() {
      TweenMax.to('.event-row7 .bg-img', 0.8, {
        scale: 1,
        ease: Power1.easeOut,
      })
    },
    row8Section1() {
      TweenMax.to('.event-row8 .title-1', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row8 .left-1', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.event-row8 .right-1', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.tournament-img1 div', 1, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.1,
        }),
        TweenMax.to('.award-text1', 1.2, {
          x: 0,
          opacity: 1,
          delay: 0.3,
        }),
        TweenMax.to('.tournament-img2 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.5,
        })
    },
    row8Section2() {
      TweenMax.to('.event-row8 .title-2', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row8 .left-2', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.event-row8 .right-2', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.tournament-img3 div', 0.8, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.1,
        }),
        TweenMax.to('.award-text2', 1.2, {
          x: 0,
          opacity: 1,
          delay: 0.3,
        }),
        TweenMax.to('.tournament-img4 div', 1, {
          width: 0,
          ease: Power2.easeOut,
          delay: 0.5,
        })
    },
    row9() {
      TweenMax.to('.event-row9 .text-title', 0.6, {
        y: 0,
      })
      TweenMax.to('.event-row9 .content', 0.6, {
        y: 0,
        delay: 0.1,
      })
      TweenMax.to('.event-row9 .button', 0.6, {
        y: 0,
        delay: 0.2,
      })
      TweenMax.to('.event-row9 .bg-img', 0.8, {
        scale: 1,
        ease: Power1.easeOut,
      })
    },
    row10() {
      TweenMax.to('.event-row10 .text-title', 0.6, {
        y: 0,
      }),
        TweenMax.to('.event-row10 .content', 0.6, {
          y: 0,
          delay: 0.1,
        }),
        TweenMax.to('.event-row10 .button', 0.6, {
          y: 0,
          delay: 0.2,
        })
    },
  }

  function displayViewBox() {
    let animation1 = !1
    let animation2 = !1
    let animation3 = !1
    let animation4 = !1
    let animation5 = !1
    let animation6 = !1
    let animation7 = !1
    let animation8 = !1
    let animation9 = !1
    let animation10 = !1

    if ((window.innerWidth || document.documentElement.clientWidth) >= 1200) {
      const t = isElementInViewport('.event-row1'),
        a = isElementInViewport('.event-row2'),
        i = isElementInViewport('.event-row3'),
        n = isElementInViewport('.event-row4'),
        o = isElementInViewport('.event-row5'),
        r = isElementInViewport('.event-row6'),
        l = isElementInViewport('.event-row7'),
        s = isElementInViewport('.event-row8'),
        g = isElementInViewport('.event-row9'),
        p = isElementInViewport('.event-row10')

      t &&
        t.per > 0.7 &&
        !animation1 &&
        ((animation1 = !0), animationRow['row1']())
      a &&
        a.per > -0.8 &&
        !animation2 &&
        ((animation2 = !0), animationRow['row2']())
      i &&
        i.per > 0.6 &&
        !animation3 &&
        ((animation3 = !0), animationRow['row3']())
      n &&
        n.per > -0.8 &&
        !animation4 &&
        ((animation4 = !0), animationRow['row4']())
      o &&
        o.per > 0.35 &&
        !animation5 &&
        ((animation5 = !0), animationRow['row5']())

      o &&
        o.per > 1 &&
        animation5 &&
        TweenMax.to('.event-row5 .bg-cover .bg-img', 0.8, {
          scale: 1,
          ease: Power1.easeOut,
        })

      r &&
        r.per > 0.35 &&
        !animation6 &&
        ((animation6 = !0), animationRow['row6']())
      l &&
        l.per > 0.6 &&
        !animation7 &&
        ((animation7 = !0), animationRow['row7']())
      s &&
        s.per > 0.8 &&
        !animation8 &&
        ((animation8 = !0), animationRow.row8Section1())
      s && s.per > 1.35 && animation8 && animationRow.row8Section2()

      g &&
        g.per > -0.1 &&
        !animation9 &&
        ((animation9 = !0), animationRow['row9']())
      p &&
        p.per > -0.2 &&
        !animation10 &&
        ((animation10 = !0), animationRow.row10())
    } else {
    }
  }

  const isMobile = useIsMobile()

  useUnmount(() => {
    window.removeEventListener('resize', displayViewBox)
    window.removeEventListener('scroll', displayViewBox)
  })

  useMount(() => {
    TweenMax.set('.cover .cover-img', {
      opacity: 0,
      scale: 1.2,
    }),
      TweenMax.set('.cover .cover-title .year', {
        y: 60,
        opacity: 0,
      }),
      TweenMax.set('.cover .cover-title .text-title', {
        y: 60,
        opacity: 0,
      }),
      TweenMax.set('.cover .cover-title .desc', {
        y: 60,
        opacity: 0,
      }),
      TweenMax.set('.cover .ice .ice-cover', {
        width: 0,
      }),
      TweenMax.set('.cover .mouse', {
        opacity: 0,
      }),
      TweenMax.set('.cover .play-video-button', {
        opacity: 0,
      }),
      TweenMax.set('.event-row1 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row1 .content', {
        y: 30,
      }),
      TweenMax.set('.row1-left-img1 div', {
        width: '100%',
      }),
      TweenMax.set('.row1-right-text1', {
        x: 70,
        opacity: 0,
      }),
      TweenMax.set('.row1-right-img1 div', {
        width: '100%',
      }),
      TweenMax.set('.row1-right-text2', {
        x: 70,
        opacity: 0,
      }),
      TweenMax.set('.event-row2 .bg-img', {
        scale: 1.25,
      }),
      TweenMax.set('.event-row3 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row3 .content', {
        y: 30,
      }),
      TweenMax.set('.row3-right-img1 div', {
        width: '100%',
      }),
      TweenMax.set('.row3-left-text1', {
        x: -70,
        opacity: 0,
      }),
      TweenMax.set('.row3-left-img1 div', {
        width: '100%',
      }),
      TweenMax.set('.row3-left-text2', {
        x: -70,
        opacity: 0,
      }),
      TweenMax.set('.row3-right-img2 div', {
        width: '100%',
      }),
      TweenMax.set('.event-row4 .bg-img', {
        scale: 1.25,
      }),
      TweenMax.set('.event-row5 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row5 .icon-cover', {
        y: 30,
      }),
      TweenMax.set('.event-row5 .content', {
        y: 30,
      }),
      TweenMax.set('.event-row5 .bg-cover', {
        y: 30,
      }),
      TweenMax.set('.event-row5 .icon-cover span img', {
        opacity: 0,
      }),
      TweenMax.set('.event-row5 .i4', {
        x: '40%',
      }),
      TweenMax.set('.event-row5 .i3', {
        x: '90%',
      }),
      TweenMax.set('.event-row5 .i2', {
        x: '140%',
      }),
      TweenMax.set('.event-row5 .i1', {
        x: '190%',
      }),
      TweenMax.set('.event-row5 .i6', {
        x: '-40%',
      }),
      TweenMax.set('.event-row5 .i7', {
        x: '-90%',
      }),
      TweenMax.set('.event-row5 .i8', {
        x: '-140%',
      }),
      TweenMax.set('.event-row5 .i9', {
        x: '-190%',
      }),
      TweenMax.set('.event-row5 .bg-cover .bg-img', {
        scale: 1.25,
      }),
      TweenMax.set('.event-row6 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row6 .jackpot-game', {
        y: 30,
      }),
      TweenMax.set('.row6-left-text1', {
        y: 30,
        opacity: 0,
      }),
      TweenMax.set('.event-row6 .jackpot-game span', {
        scale: 0,
        transformOrigin: '50% 50%',
      }),
      TweenMax.set('.event-row6 .jackpot-game span img', {
        opacity: 0,
      }),
      TweenMax.set('.row6-right-img1', {
        y: 100,
        opacity: 0,
      }),
      TweenMax.set('.event-row7 .bg-img', {
        scale: 1.25,
      }),
      TweenMax.set('.event-row8 .title-1', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .left-1', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .right-1', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .title-2', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .left-2', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .left-2', {
        y: 30,
      }),
      TweenMax.set('.event-row8 .award-text1', {
        x: -200,
        opacity: 0,
      }),
      TweenMax.set('.event-row8 .award-text2', {
        x: -200,
        opacity: 0,
      }),
      TweenMax.set('.tournament-img1 div', {
        width: '100%',
      }),
      TweenMax.set('.tournament-img2 div', {
        width: '100%',
      }),
      TweenMax.set('.tournament-img3 div', {
        width: '100%',
      }),
      TweenMax.set('.tournament-img4 div', {
        width: '100%',
      }),
      TweenMax.set('.event-row9 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row9 .content', {
        y: 30,
      }),
      TweenMax.set('.event-row9 .button', {
        y: 30,
      }),
      TweenMax.set('.event-row9 .bg-img', {
        scale: 1.25,
      }),
      TweenMax.set('.event-row10 .text-title', {
        y: 30,
      }),
      TweenMax.set('.event-row10 .content', {
        y: 30,
      }),
      TweenMax.set('.event-row10 .button', {
        y: 30,
      }),
      TweenMax.set('#GalleryLightbox', {
        top: '100%',
      }),
      setTimeout(function () {
        window.addEventListener('resize', displayViewBox)
        window.addEventListener('scroll', displayViewBox)
        displayViewBox()

        TweenMax.to('.cover .cover-img', 0.8, {
          scale: 1,
          opacity: 1,
        })
        TweenMax.to('.cover .cover-title .year', 0.6, {
          y: 0,
          opacity: 1,
          delay: 0.6,
        })
        TweenMax.to('.cover .cover-title .text-title', 0.6, {
          y: 0,
          opacity: 1,
          delay: 0.75,
        })
        TweenMax.to('.cover .cover-title .desc', 0.6, {
          y: 0,
          opacity: 1,
          delay: 0.9,
        })
        TweenMax.to('.cover .ice .ice-cover', 0.4, {
          width: 250,
          delay: 1.5,
        })
        TweenMax.to('.cover .mouse', 0.6, {
          opacity: 1,
          delay: 1.5,
        })
        TweenMax.to('.cover .mouse img', 1, {
          y: '+=20',
          repeat: -1,
          yoyo: !0,
          ease: Bounce.easeOut,
        })
        TweenMax.to('.cover .play-video-button', 0.6, {
          opacity: 1,
          delay: 1.5,
        })
      }, 500)
  })

  return (
    <>
      <div className="topContent fluid">
        <div id="events2019" className="en">
          <div className="parallax">
            <div
              className="cover"
              style={{
                height: `${innerHeight}px`,
              }}
            >
              <div className={clsx('cover-div', !isMobile, 'fixed')}>
                <div className="full-bg">
                  <div
                    className="cover-img"
                    style={{
                      backgroundImage:
                        "url('/img/2019_events_bg@2x.b78443b.jpg')",
                      opacity: 1,
                      transform: 'matrix(1, 0, 0, 1, 0, 0)',
                    }}
                  />
                  <div className="pg-container">
                    <div className="cover-title">
                      <div
                        className="year"
                        style={{
                          opacity: 1,
                          transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        }}
                      >
                        <img
                          width="316px"
                          height="151px"
                          src="/img/2019.a16d8af.png"
                          alt="2019"
                        />
                      </div>
                      <div
                        className="text-title"
                        style={{
                          opacity: 1,
                          transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        }}
                      >
                        Dare to be different!
                      </div>
                      <div
                        className="desc"
                        style={{
                          opacity: 1,
                          transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        }}
                      >
                        PG SOFT™ strongly believes in its slogan, ‘Difference
                        makes the Difference’. As a pioneer of mobile app
                        gamification, we take pride in anticipating customers’
                        demands by applying the latest technologies to improve
                        user experience significantly.
                      </div>
                    </div>
                    <div className="ice">
                      <div className="ice-cover" style={{ width: '250px' }}>
                        <div className="ice-animation">
                          <div style={{ width: '30%' }}>
                            <img
                              width="100%"
                              height="50%"
                              src="/img/events_video_ice_@2x.0e113a1.png"
                              alt="Ice"
                              style={{ marginLeft: '5%' }}
                            />
                          </div>
                          <div className="line" />
                          <div className="loc">
                            <img
                              width="50%"
                              src="/img/events_video_locationicon_@2x.a2717c4.png"
                              alt="Location"
                            />
                          </div>
                          <div className="london">LONDON</div>
                        </div>
                      </div>
                    </div>
                    <div className="mouse" style={{ opacity: 1 }}>
                      <img
                        width="36"
                        height="51"
                        src="/img/events_video_mouse_@2x.effa03d.png"
                        alt="Mouse"
                        style={{
                          transform: 'translate3d(0px, 16.0035px, 0px)',
                        }}
                      />
                    </div>
                    <div className="play-video-button" style={{ opacity: 1 }}>
                      <span className="pv-bg" />
                      <span className="pv-fg" />
                      <span className="pv-line" />
                      <span className="pv-arrow" />
                      <span className="pv-text">PLAY VIDEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1 */}
            <div className="event-row1 row">
              <div className="row-cover">
                <div className="animation-container">
                  <div
                    className="text-title"
                    style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                  >
                    Shining at 2019 ICE Exhibition
                  </div>
                  <div
                    className="content"
                    style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                  >
                    <div className="left">
                      <div className="row1-left-img1">
                        <div style={{ width: '0%' }} />
                        <img
                          width="100%"
                          height="100%"
                          src="/img/2019_pic_1.fb18e0b.jpg"
                          alt="Event Image 1"
                        />
                      </div>
                    </div>
                    <div className="right">
                      <div
                        className="row1-right-text1 text"
                        style={{
                          opacity: 1,
                          transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        }}
                      >
                        <span>
                          PG SOFT™ ‘s state-of-the-art games feature splendid
                          storylines, sensational sound effects and magnificent
                          animation that never cease to impress.
                        </span>
                      </div>
                      <div className="row1-right-img1">
                        <div style={{ width: '0%' }} />
                        <img
                          width="100%"
                          height="100%"
                          src="/img/2019_pic12.a0fafec.jpg"
                          alt="Event Image 2"
                        />
                      </div>
                      <div
                        className="row1-right-text2 text"
                        style={{
                          opacity: 1,
                          transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        }}
                      >
                        <span>
                          A large HD screen was set up in the center of PG
                          SOFT™ ‘s sleek and sophisticated booth to showcase
                          their games as well as a massive poster wall
                          displaying their game characters, captivating a long
                          queue of visitors.
                        </span>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            {/* 1 end */}
            {/* 2 */}
            <div className="event-row2 row">
              <div className="bg-cover">
                <div className="bg-img" />
              </div>
            </div>
            {/* 3 */}
            <div className="event-row3 row">
              <div className="row-cover">
                <div className="animation-container">
                  <div className="text-title">
                    ICE Exhibition’s main sponsor
                  </div>
                  <div className="content">
                    <div className="left">
                      <div className="res-left-img1">
                        <img
                          src="/img/2019_pic_4.6bba0ac.jpg"
                          height="100%"
                          width="100%"
                          alt="2019 Pic"
                        />
                      </div>
                      <div className="row3-left-text1 text">
                        <span>
                          2019`s ICE Exhibition saw tens of thousands of people
                          through its doors. Realizing the great potential for
                          brand exposure, PG SOFT™ had joined the sponsorship
                          program in 2018 to become one of the main sponsors.
                        </span>
                      </div>
                      <div className="row3-left-img1">
                        <div style={{ width: '100%' }} />
                        <img
                          src="/img/events2019_small_image_3@2x.3938ebe.jpg"
                          height="100%"
                          width="100%"
                          alt="Event Image"
                        />
                      </div>
                      <div className="row3-left-text2 text">
                        <span>
                          This year, PG SOFT™ had sponsored the capacious
                          cloakroom, generous goodies, official website
                          advertisements and brochures for the ICE Exhibition.
                        </span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="row3-right-img1">
                        <div style={{ width: '100%' }} />
                        <img
                          src="/img/2019_pic_4.6bba0ac.jpg"
                          height="100%"
                          width="100%"
                          alt="2019 Pic"
                        />
                      </div>
                      <div className="row3-right-img2">
                        <div style={{ width: '100%' }} />
                        <img
                          src="/img/events2019_small_image_5@2x.b9bbf5f.jpg"
                          height="100%"
                          width="100%"
                          alt="Event Small Image"
                        />
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
            <div className="event-row4 row">
              <div className="bg-cover">
                <div className="bg-img" />
              </div>
            </div>

            <div className="event-row5 row">
              <div className="row-cover">
                <div className="animation-container">
                  <div className="text-title">
                    Wooing the crowd with myriads of games
                  </div>
                  <div className="icon-cover">
                    <div className="icon-container">
                      <span className="i1">
                        <img
                          src="/img/restaurant.556b58b.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i2">
                        <img
                          src="/img/jungle_delight.c801d8b.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i3">
                        <img
                          src="/img/emperor.a507e1e.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i4">
                        <img
                          src="/img/west.d9d9176.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i5">
                        <img
                          src="/img/tomb.decba7d.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i6">
                        <img
                          src="/img/3monkeys.08777b1.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i7">
                        <img
                          src="/img/Ganesha.d9d2fa2.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i8">
                        <img
                          src="/img/baccarare.1737232.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="i9">
                        <img
                          src="/img/sword.98cffda.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="text">
                      Curiosity was at an all time high as attendees mingled to
                      experience PG SOFT™ ‘s latest games on display, such as
                      the adorable ‘Jungle Delight’, oriental game ‘Emperor’s
                      Favour’, ‘Journey to the Wealth’, action-packed ‘Tomb of
                      Treasure’, sexy ‘Three Monkeys’, ‘Ganesha Gold’, and a
                      brand-new card game Baccarat. PG SOFT™ `s games are
                      frequently praised as they help drive customer acquisition
                      and retention for operators across the globe with
                      innovative gaming experience.
                    </div>
                  </div>
                  <div className="bg-cover">
                    <div
                      className="bg-img"
                      style={{ transform: 'matrix(1.25, 0, 0, 1.25, 0, 0)' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="event-row6 row">
              <div className="row-cover">
                <div className="animation-container">
                  <div className="left">
                    <div className="text-title">
                      `Mythical Treasure Jackpot` unveiled!
                    </div>
                    <div className="jackpot-game">
                      <span className="j1">
                        <img
                          src="/img/dragon_legend.088fecd.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="j2">
                        <img
                          src="/img/FG.af8463c.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="j3">
                        <img
                          src="/img/DC.31fdb8f.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                      <span className="j4">
                        <img
                          src="/img/Lion.8e2361e.png"
                          height="88px"
                          width="88px"
                        />
                      </span>
                    </div>
                    <div className="row6-left-text1 text">
                      <span>
                        PG SOFT™ ‘s newly launched “Dragon Legend - Mythical
                        Treasure Jackpot”, “Fortune Gods - Mythical Treasure
                        Jackpot” and “Prosperity Lion - Mythical Treasure
                        Jackpot” had created a wave of excitement during the
                        exhibition. Wonderful winning chances and fabulous
                        features had the players jumping into the mythical
                        gaming worlds eagerly, resolved to win huge prizes.
                      </span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="row6-right-img1">
                      <img
                        src="/img/2019_phone.a6ea826.png"
                        height="635px"
                        width="556px"
                      />
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
            <div className="event-row7 row">
              <div className="bg-cover">
                <div className="bg-img" />
              </div>
            </div>
            <div className="event-row8 row">
              <div className="row-cover">
                <div className="animation-container">
                  <div className="text-title title-1">
                    Thrilling Tournaments
                  </div>
                  <div className="res-tournament-img1">
                    <img
                      src="/img/2019_pic8.6cfb1f9.jpg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="clear" />
                  <div className="left left-1">
                    <div className="award-icon1">
                      <img
                        src="/img/icon_tournament.35a9a3e.png"
                        height="168px"
                        width="168px"
                      />
                    </div>
                    <div className="award-text1 text">
                      <span>
                        It was widely agreed that PG SOFT™ ‘s tournament was a
                        stunning success during the exhibition. Tournaments were
                        held at different times throughout the exhibition, with
                        a long queue of contestants and surrounded by
                        high-spirited spectators who were just as curious as to
                        who would walk away with an iPhone X Max 256GB, iPhone X
                        R 128GB or AirPods.
                      </span>
                    </div>
                  </div>
                  <div className="right right-1">
                    <div className="tournament-img1">
                      <div />
                      <img
                        src="/img/2019_pic8.6cfb1f9.jpg"
                        height="448px"
                        width="1164px"
                      />
                    </div>
                    <div className="tournament-img2">
                      <div />
                      <img
                        src="/img/2019_pic9.35f8af0.jpg"
                        height="368px"
                        width="575px"
                      />
                    </div>
                  </div>
                  <div className="clear" />
                  <div className="text-title title-2">Claw Crane Craze</div>
                  <div className="clear" />
                  <div className="res-tournament-img3">
                    <img
                      src="/img/2019_pic10.558eb2f.jpg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="left left-2">
                    <div className="award-icon2">
                      <img
                        src="/img/icon_crane_machine.7083f16.png"
                        height="168px"
                        width="168px"
                      />
                    </div>
                    <div className="award-text2 text">
                      <span>
                        The thrill of watching a prize falling into the chute,
                        coupled with the joy of winning highly anticipated
                        prizes such as an Apple Watch or a Mi Band 3 was so
                        exhilarating that numerous visitors lined up to play PG
                        SOFT™ ‘s immensely addictive claw machine during the
                        exhibition.
                      </span>
                    </div>
                  </div>
                  <div className="right right-2">
                    <div className="tournament-img3">
                      <div />
                      <img
                        src="/img/2019_pic10.558eb2f.jpg"
                        height="424px"
                        width="575px"
                      />
                    </div>
                    <div className="tournament-img4">
                      <div />
                      <img
                        src="/img/2019_pic11.d63a986.jpg"
                        height="400px"
                        width="1332px"
                      />
                    </div>
                  </div>
                  <div className="clear" />
                  <div className="res-tournament-img4">
                    <img
                      src="/img/2019_pic11.d63a986.jpg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
            <div className="event-row9 row">
              <div className="row-cover">
                <div className="bg-cover">
                  <div className="bg-overlay" />
                  <div className="bg-img" />
                </div>
                <div className="animation-container">
                  <div className="text-title">Exhibition Highlights</div>
                  <div className="content text">
                    <span>
                      The annual gaming industry event has left us with an even
                      stronger resolution to reinvent gaming experience and
                      entertainment values to deliver only the very best for our
                      clients. Stay tuned for our updates and new games!
                    </span>
                  </div>
                  <div className="button">See More</div>
                </div>
              </div>
            </div>
            <div className="event-row10 row ">
              <div className="row-cover !bg-[#F7F7F7]">
                <div className="animation-container">
                  <div className="text-title">
                    Business Cooperation Negotiation
                  </div>
                  <div className="content text">
                    <span>
                      PG SOFT™ ‘s top notch game products in the exhibition had
                      received overwhelmingly positive reception from conference
                      delegates. Besides the numerous meetings scheduled in
                      advance, PG SOFT™ had also received multiple visits from
                      significant operators who were extremely interested in PG
                      SOFT™ ‘s entertainment products and services.
                    </span>
                  </div>
                  <div className="button">Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
