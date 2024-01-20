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
  console.log('🚀 ~ Home ~ data:', isPending, data)

  const isMobile = useIsMobile()
  return (
    <>
      {isPending && (
        <div className="h-[100vh] w-[100vw] d-center">
          <div className="absolute  !left-[50%] !top-[50%]   h-[200px] w-[200px] -translate-x-[50%] -translate-y-[50%]">
            <img
              src="/img/Boy_normal@2x.93f1447.png"
              className="default-img inset-0"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUxpcQBZ7gBZ7gBZ7gBZ7pmvuWsAAAAFdFJOUwAdqEh5pgqJvgAAAZVJREFUeNrt2oGNnDAUBFDQXgE4NJAQCjjOFJCA+68p9iY1RGL0Xgej/8crL54mAAAAAAAAAAAAAAAAAAAAAAAAAID/a57njCBLykCmpQvIsZSMgZSylISJzKWUiLKXIWG73kECJvI61pHk+UHWOoIEVL3Wox4BQdbak6zP36z5rMPzB/K6R5KAqp+t9SSfz9+s1u77Dtisj9adR8Rm9ZkkbNa+9yDPH8jHtl2t/X5+kK/t6kkCNmvr9j1is7qIzRpCNmuL2awfzw/yLWSzpusdJOCynrJZfyvyK+XwnUIq8jOgIu8g3wMq0kaQ598N+51qj/hZn1q7roTDd24jScDh++pB9j2gIuv7b4eAitTzjLitz7XeLeC2PoL0kQRU5FX7SGpARcZnkRpQkakcPchnQpCMzzvvRwJrQkV6kOM4MoKUsiRUpDsSgiwpE1mWiFcb/5IkdH1YppCRLBkxUh7IxphNBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBUfwBvDC+COA1OnwAAAABJRU5ErkJggg=="
              className="load-loop"
              alt=""
            />
          </div>
        </div>
      )}
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
