'use client'

import { useIsMobile } from '~/atoms'
import { About } from '~/components/About'
import { GameTabbar } from '~/components/Game/Tabbar'

export default function Home() {
  return (
    <>
      <div className="bg-[#f7f7f7] pt-[80px] md:pt-[90px]">
        <About />
      </div>
      <div className="game-mainpage">{useIsMobile() && <GameTabbar />}</div>
    </>
  )
}
