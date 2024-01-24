'use client'

import { useIsMobile } from '~/atoms'
import { Event } from '~/components/Event'
import { GameTabbar } from '~/components/Game/Tabbar'

export default function Home() {
  return (
    <>
      <div className="bg-[#f7f7f7] pt-[80px] md:pt-[90px]">
        <Event />
      </div>
      <div className="game-mainpage">{useIsMobile() && <GameTabbar />}</div>
    </>
  )
}
