'use client'

import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'

import { useIsMobile } from '~/atoms'
import { Games, TopNav } from '~/components/Game/Games'
import { Search } from '~/components/Game/Search'
// import { motion } from 'framer-motion'
import { SwiperTop } from '~/components/Game/Swiper'
import { GameTabbar } from '~/components/Game/Tabbar'

export default function Home() {
  const { isPending, data } = useQuery({
    queryKey: ['indexData'],
    queryFn: () => fetch('/api').then((res) => res.json()),
    staleTime: 1,
  })

  const isMobile = useIsMobile()
  return (
    <>
      {isPending || (Array.isArray(data) && <div>Loading...</div>)}
      {!isPending && data && (
        <Fragment>
          <SwiperTop banner_list={data?.banner || []} />
          <div className="md:!hidden">
            <TopNav />
          </div>

          <div className="bg-blur bg-[#1F1F1D] pt-[50px] md:pt-10">
            <div className="container  mx-auto 2xl:max-w-[1300px]">
              <Games data={data.game} />
            </div>
          </div>
          <div className="game-mainpage">
            {isMobile && <GameTabbar />}
            <Search />
          </div>
        </Fragment>
      )}
    </>
  )
}
