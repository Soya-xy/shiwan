import React from 'react'
import clsx from 'clsx'

import { useViewport } from '~/atoms'

export const TimeLine = () => {
  const md = useViewport((v) => v.md)
  const sm = useViewport((v) => v.sm)
  return (
    <div
      className={clsx(
        'game-content timeline active pt-[50px]',
        !sm ? 'one-col' : md ? '' : 'two-col',
      )}
    >
      <div className="game-timeline">
        <div className="comingsoon">
          <div className="comingsoon-bg">
            <img
              src="/images/99afcba3-2a68-4a50-86ad-4c4f791b0850.png"
              alt=""
            />
          </div>
          <div className="comingsoon-mobile-bg">
            <img
              src="/images/b3ce03d7-1422-441c-95f2-9b653e357cb9.png"
              alt=""
            />
          </div>
          <div className="comingsoon-text">
            <h1>Coming Soon</h1>
            <span className="dt">
              &lt; Gemstones Gold &gt; Obtain endless treasures in the Land of
              Gemstones!
            </span>
            <span className="mb">
              &lt; Gemstones Gold &gt; Obtain endless treasures in the Land of
              Gemstones!
            </span>
          </div>
        </div>
        <div className="timeline-cover">
          {[...Array(15)].map((_, index) => (
            <a href="/en/games/149/" className="timeline-col" key={index}>
              <div>
                <div className="timeline-line">
                  {[...Array(15)].map((_, index) => (
                    <div className="t-line" key={index}>
                      <div>
                        <span>
                          {index === 6 && (
                            <span
                              style={{
                                backgroundImage:
                                  "url('/images/72f8d537-77e5-4506-803a-63e7f58d4fec.png')",
                              }}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="v-line" />
                </div>
                <div className="col-cover">
                  <div className="timeleft">
                    <div
                      className="t-img"
                      style={{
                        backgroundImage:
                          "url('/images/72f8d537-77e5-4506-803a-63e7f58d4fec.png')",
                      }}
                    />
                  </div>
                  <div className="timeright">
                    <div className="t-summary">
                      <div className="summary-date">01.22</div>
                      <div className="summary-detail">
                        <div className="s-year">2024</div>
                        <div className="s-line">
                          <span />
                        </div>
                        <div className="s-desc description0">
                          Long ago, during a Lunar New Year, a kind-hearted
                          villager stumbled upon an injured dragon. He cared for
                          the dragon until it regained its health. In gratitude,
                          the dragon revealed itself as a deity of prosperity
                          and luck.
                        </div>
                      </div>
                      <div className="summary-description">
                        Long ago, during a Lunar New Year, a kind-hearted
                        villager stumbled upon an injured dragon. He cared for
                        the dragon until it regained its health. In gratitude,
                        the dragon revealed itself as a deity of prosperity and
                        luck.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="bottombar">
          <div className="barcover">
            <div className="loadmore">
              <div className="loadtext">Load More</div>
              <div className="loadarrow">
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
