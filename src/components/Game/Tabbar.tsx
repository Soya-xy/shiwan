import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import { jotaiStore } from '~/lib/store'

import { searchShow } from './Search'

export const GameTabbar = () => {
  const [isClicked, setClicked] = useState(false)
  const states = {
    begin: { y: -10 },
    end: { y: 100 },
  }
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) setClicked(true)
    else setClicked(false)
  })
  return (
    <>
      <motion.div
        variants={states}
        transition={{
          ease: [],
        }}
        animate={isClicked ? 'begin' : 'end'}
        className="game-bottom-bar active"
      >
        <div
          className="menubox"
          onClick={() => {
            jotaiStore.set(searchShow, true)
          }}
        >
          <div>
            <div className="s_icon">
              <img src="/img/Icon20_Search.21bc271.svg" />
            </div>
          </div>
        </div>
        <div className="menubox active">
          <div>
            <div className="s_icon">
              <img src="/img/Icon20_HomePage.facb932.svg" />
            </div>
          </div>
        </div>
        <div className="menubox">
          <div>
            <div className="s_icon">
              <img src="/img/Icon20_TimeLinePage.5d075c0.svg" />
            </div>
          </div>
        </div>
        <div className="menubox">
          <div>
            <div className="s_icon">
              <img src="/img/Icon20_AllGame.a302cd6.svg" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
