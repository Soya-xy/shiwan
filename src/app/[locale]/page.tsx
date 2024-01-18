'use client'

import { useQuery } from '@tanstack/react-query'
import { Fragment, useEffect } from 'react'

import { Games, TopNav } from '~/components/Game/Games'
// import { motion } from 'framer-motion'
import { SwiperTop } from '~/components/Game/Swiper'

export default function Home() {
  const { isPending, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('/api').then((res) => res.json()),
    staleTime: 1
  })
  useEffect(() => {
    fetch('/api').then((res) => res.json()).then((data) => {
      console.log('🚀 ~ Home ~ data:', data)
    })
  })
  return (
    <>
      {isPending && <div>Loading...</div>}
      {!isPending && data?.data && (
        <Fragment>
          <SwiperTop banner_list={data?.data?.banner_list || []} />
          <div className="md:!hidden">
            <TopNav />
          </div>

          <div className="bg-blur bg-[#1F1F1D] py-10">
            <div className="container  mx-auto">
              <Games data={data.data} />
            </div>
          </div>
        </Fragment>
      )}
    </>
  )
}
