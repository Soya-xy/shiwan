'use client'

import { useIsMobile } from '~/atoms'
import { GameTabbar } from '~/components/Game/Tabbar'
import { Top } from '~/components/News/top'

export default function Home() {
  return (
    <>
      <div className="bg-[#f7f7f7]">
        <Top />
      </div>
      <div className="game-mainpage">{useIsMobile() && <GameTabbar />}</div>
    </>
  )
}
