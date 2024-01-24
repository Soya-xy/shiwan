'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { jotaiStore } from '~/lib/store'

import './tabbar.css'

import { useAtomValue } from 'jotai'

import { tabbarShow } from './Games'
import { searchShow } from './Search'

export const GameTabbar = () => {
  const [isClicked, setClicked] = useState(false)
  const states = {
    begin: { y: -10 },
    end: { y: 100 },
  }
  const tabSHow = useAtomValue(tabbarShow)

  useEffect(() => {
    setClicked(tabSHow)
  }, [tabSHow])
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
