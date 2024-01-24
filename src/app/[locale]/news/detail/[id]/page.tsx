'use client'

import { useIsMobile } from '~/atoms'
import { GameTabbar } from '~/components/Game/Tabbar'

import './index.css'

export default function Home() {
  return (
    <>
      <div className="bg-[#f7f7f7]">
        <div className="news-detail pg-container container mx-auto pb-10">
          <div className="pg-row in-view">
            <div id="topbanner">
              <div
                className="image"
                style={{
                  backgroundImage:
                    'url("https://www.pgsoft.com/uploads/News/Images/b10d2c75-704e-4aec-a0ac-c5e23d7bcd7b.jpg")',
                }}
              />
              <div className="image-content">
                <div className="image-date">
                  <div className="date">31</div>
                  <div className="year-month">2023-12</div>
                </div>
                <div className="content">
                  <div className="title">
                    AWAKEN THE SEALED DRAGON QUEEN IN“DRAGON HATCH 2”!
                  </div>
                  <div className="desc">
                    COLLECT WINNING SYMBOLS TO TRIGGER VARIOUS FEATURES THAT
                    WILL INCREASE YOUR WINNING CHANCES!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pg-row paragraph in-view">
            <div id="news-paragraph">
              <p>
                Dragon Hatch has been receiving a lot of great responses from
                players all around the world since its release back in 2019. As
                an act to celebrate and thank the fans for supporting the game
                throughout these years, PG SOFT™ is pleased to announce Dragon
                Hatch 2, the sequel to Dragon Hatch is finally making its way to
                the crowd!{' '}
              </p>
              <p>
                Using the magnificent graphics and music of the game, PG SOFT™
                is going to lead you into a world of dragons that you have never
                seen before. This time, you will be given a new identity as a
                dragon master to protect the dragon eggs from getting stolen.
                Not only that, the dragon master is also responsible for lifting
                the dragon queen’s seal! Collect as many winning symbols as you
                can to save both the dragon eggs and the dragon queen! Let‘s
                enter the game and explore the world of dragons!
              </p>
              <p>
                Dragon Hatch 2 is a 5 by 5 arrangement of symbols video slot
                featuring various features that help in cascading more wins and
                sticky Wild symbols. Collect winning symbols to trigger Earth
                Dragon Feature, Water Dragon Feature, Fire Dragon Feature and
                Dragon Queen Feature! Win big with every feature now!
              </p>
              <p>
                This game platform supports iOS, Android, MacOS, Windows and Web
                HTML5.
              </p>
            </div>
          </div>
          <div className="pg-row in-view">
            <div id="news-button">
              <div className="filter-prev-next">
                <a className="btnPrev">
                  <p className=" !flex items-center !justify-end">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4xNiA2LjI3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6Izk1OTU5NTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPui1hOa6kCA0NDwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgNi4yNyA3LjUgMCA3LjgyIDAuMzggMS4zOSA1Ljc3IDQyLjE2IDUuNTggNDIuMTYgNi4wOCAwIDYuMjciLz48L2c+PC9nPjwvc3ZnPg=="
                      className="arrow mr-2"
                    />
                    Previous
                  </p>
                </a>
                <dl className="titlePrev">
                  <p className="text">
                    <span>
                      THE MOON RISES: `WEREWOLF`S HUNT` LAUNCHES FOR ACTION AND
                      WEALTH SEEKERS!
                    </span>
                  </p>
                </dl>
                <span className="line" />
                <a className="btnNext">
                  <p className="!flex items-center !justify-start">
                    Next
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4xNiA2LjI3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6Izk1OTU5NTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPui1hOa6kCA0NTwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQyLjE2IDYuMjcgMzQuNjYgMCAzNC4zNCAwLjM4IDQwLjc4IDUuNzcgMCA1LjU4IDAgNi4wOCA0Mi4xNiA2LjI3Ii8+PC9nPjwvZz48L3N2Zz4="
                      className="arrow ml-2"
                    />
                  </p>
                </a>
                <dl className="titleNext">
                  <p className="text">
                    <span>
                      FORTUNE DRAGON: UNLEASH LUCK AND FUN IN THE NEW YEAR`S
                      SLOT GAME!
                    </span>
                  </p>
                </dl>
                <a
                  className="imgPrev"
                  style={{
                    backgroundImage:
                      'url("https://www.pgsoft.com/uploads/News/Images/b10d2c75-704e-4aec-a0ac-c5e23d7bcd7b.jpg")',
                  }}
                />
                <a
                  className="imgNext"
                  style={{
                    backgroundImage:
                      'url("https://www.pgsoft.com/uploads/News/Images/b10d2c75-704e-4aec-a0ac-c5e23d7bcd7b.jpg")',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pg-row in-view mb-10">
            <div id="about-pg">
              <p className="title">
                <span>ABOUT PG SOFT™</span>
              </p>
              <p className="desc">
                <span>
                  PG SOFT™ is here to revolutionise mobile app gamification by
                  leveraging on our wide spectrum of bespoke gaming solutions.
                  Our games are the epitome of astounding, remarkable aesthetics
                  and captivating gameplay that deliver unrivalled gaming
                  entertainment for all mobile slot players.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="game-mainpage">{useIsMobile() && <GameTabbar />}</div>
    </>
  )
}
