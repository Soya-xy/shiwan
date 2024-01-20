import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { atom, useAtomValue } from 'jotai'

import { IMG_URL } from '~/constants/env'
import { $axios } from '~/lib/request'
import { jotaiStore } from '~/lib/store'

export const searchShow = atom(false)

export const Search = () => {
  const show = useAtomValue(searchShow)
  const [isSearch, setIsSearch] = useState(false)
  const [searchResult, setSearchResult] = useState([]) as any[]
  const [value, setValue] = useState('')

  const { data, refetch, isFetched, isFetching } = useQuery({
    queryKey: ['noCache_Search'],
    queryFn: () => $axios.get('/search', { params: { name: value } }),
    enabled: false,
  })

  useEffect(() => {
    if (isFetching) {
      setIsSearch(true)
    }
    if (!isFetching && data) {
      setSearchResult(data.data)
    }
  }, [isFetching])

  useEffect(() => {
    if (!show) {
      setIsSearch(false)
      setSearchResult([])
      setValue('')
    }
  }, [show])
  return (
    <>
      <div className={clsx('game-search', show && 'active')}>
        <div
          className="search-bg"
          style={{ background: 'url(/img/search_blur.a09834e.jpg)' }}
        >
          <div />
        </div>
        <div className="search-cover">
          <div className="s-input">
            <div className="s-icon">
              <img src="/img/Icon20_Search.21bc271.svg" />
            </div>
            <input
              className="search-input"
              placeholder=" SEARCH"
              name="searchGame"
              title="searchGame"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  refetch()
                }
              }}
            />
            <div
              className="s-close"
              onClick={() => jotaiStore.set(searchShow, false)}
            >
              <img src="/img/Icon30_Close.8fc0309.svg" />
            </div>
          </div>
          <div className="s-result">
            {searchResult.length <= 0 && (
              <div className="result-default">
                <div className="default">
                  <img
                    src="/img/Boy_circle@2x.8ab120b.png"
                    className="default-bg"
                  />
                  {!isSearch && (
                    <img
                      src="/img/Boy_normal@2x.93f1447.png"
                      className="default-img"
                    />
                  )}
                  {isSearch && isFetched && (
                    <img
                      src="/img/Boy_nodata@2x.9b00cd8.png"
                      className="default-img"
                    />
                  )}
                  {isFetching && (
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUxpcQBZ7gBZ7gBZ7gBZ7pmvuWsAAAAFdFJOUwAdqEh5pgqJvgAAAZVJREFUeNrt2oGNnDAUBFDQXgE4NJAQCjjOFJCA+68p9iY1RGL0Xgej/8crL54mAAAAAAAAAAAAAAAAAAAAAAAAAID/a57njCBLykCmpQvIsZSMgZSylISJzKWUiLKXIWG73kECJvI61pHk+UHWOoIEVL3Wox4BQdbak6zP36z5rMPzB/K6R5KAqp+t9SSfz9+s1u77Dtisj9adR8Rm9ZkkbNa+9yDPH8jHtl2t/X5+kK/t6kkCNmvr9j1is7qIzRpCNmuL2awfzw/yLWSzpusdJOCynrJZfyvyK+XwnUIq8jOgIu8g3wMq0kaQ598N+51qj/hZn1q7roTDd24jScDh++pB9j2gIuv7b4eAitTzjLitz7XeLeC2PoL0kQRU5FX7SGpARcZnkRpQkakcPchnQpCMzzvvRwJrQkV6kOM4MoKUsiRUpDsSgiwpE1mWiFcb/5IkdH1YppCRLBkxUh7IxphNBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBUfwBvDC+COA1OnwAAAABJRU5ErkJggg=="
                      className="load-loop"
                      alt=""
                    />
                  )}

                  {isSearch && isFetched ? (
                    <span>
                      WHOOPS!
                      <br />
                      We couldn`t find the game you were looking for.
                    </span>
                  ) : (
                    <span>
                      {!isFetching ? 'SEARCH' : 'Just wait a moment，please'}
                    </span>
                  )}
                </div>
              </div>
            )}

            {isSearch && !isFetching && searchResult.length > 0 && (
              <>
                <div className="result-cover">
                  {searchResult.map((item: any, index: any) => (
                    <a href="/en/games/3/" className="gamedatabox" key={index}>
                      <div>
                        <i>
                          <img src={IMG_URL + item.icon} />
                        </i>
                        <p>{item.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
