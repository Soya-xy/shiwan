'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import { Fragment, useRef, useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { atom } from 'jotai'
import { useParams } from 'next/navigation'

import { useIsMobile } from '~/atoms'
import { IMG_URL } from '~/constants/env'
import { usePathname, useRouter } from '~/i18n'
import { jotaiStore } from '~/lib/store'

import { language, languageDayjs } from '../Header/Navbar/Menu'
import { DialogOverlay } from '../ui/dialog'
import { FloatPopover } from '../ui/float-popover'
import { searchShow } from './Search'

const SortBy = ({ list, active, setActive }: any) => {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu.Root onOpenChange={(e) => setOpen(e)}>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center font-bold"
          aria-label="Customise options"
        >
          {list[active].name} {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {list.map((item: any, index: number) => {
            return (
              <Fragment key={index}>
                {!item.sub ? (
                  <DropdownMenu.Item
                    className={`DropdownMenuItem ${
                      active === index ? '!text-black' : ''
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <p>{item.name}</p>
                  </DropdownMenu.Item>
                ) : (
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="DropdownMenuItem !flex w-full !items-center !justify-between !pl-[20px] !pr-[5px]">
                      <p>{item.name}</p>
                      <div className="RightSlot">
                        <ChevronRightIcon />
                      </div>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="DropdownMenuContent"
                        sideOffset={2}
                        alignOffset={-5}
                      >
                        {item.sub &&
                          item.sub.map((subItem: any, subIndex: any) => {
                            return (
                              <Fragment key={subIndex}>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                  <p>{subItem.name}</p>
                                </DropdownMenu.Item>
                                {subIndex !== item.sub.length - 1 && (
                                  <DropdownMenu.Separator className="DropdownMenuSeparator" />
                                )}
                              </Fragment>
                            )
                          })}
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                )}
                {index !== list.length - 1 && (
                  <DropdownMenu.Separator className="DropdownMenuSeparator" />
                )}
              </Fragment>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const GamePlay = ({ url, onClose }: any) => {
  const isMobile = useIsMobile()
  return (
    <>
      <Dialog.Root open>
        <Dialog.Portal>
          <DialogOverlay zIndex={110} customClass="!bg-[#0000008c]" />
          <Dialog.Content className="fixed top-0 z-[120] flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden">
            <div
              className={clsx(
                'relative h-[87vh] w-[82vw]',
                isMobile && '!wh-full',
                'bg-[#F7F7F7] p-3 ',
              )}
            >
              <iframe src={url} className="wh-full" />
              <Dialog.Close
                aria-label="Close"
                className={clsx(
                  'absolute z-[130] text-2xl text-white',
                  isMobile
                    ? 'right-0 top-0 h-[40px] w-[40px] rounded-[10px] bg-[#0000008c] d-center'
                    : ' right-[-20px] top-[-16px]',
                )}
                onClick={() => onClose && onClose()}
              >
                <i className="icon-[mingcute--close-circle-fill]  text-[32px]" />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

const Grid = ({ info, onOpenGame }: any) => {
  const isMobile = useIsMobile()

  return (
    <>
      <div className="gamebox !mx-auto !mb-[20px] basis-[308px]">
        <div className="game-card trynow" style={{ display: 'block' }}>
          <div className="g-game">
            {info.isNew && (
              <div className="newgame">
                <img src="/images/tag_new_en@2x.0b1f502.png" />
              </div>
            )}
            <div
              className="g-cover"
              style={{ background: `url("${IMG_URL + info.imgUrl}")` }}
            />
            <div
              className="g-reflect"
              style={{ background: `url("${IMG_URL + info.imgUrl}")` }}
            />
            <div className="g-bg" style={{ background: info.color }} />
            <div className="g-detail">
              <div className="g-blur" style={{ background: info.color }}>
                <div
                  className="coverimg"
                  style={{ background: `url("${IMG_URL + info.imgUrl}")` }}
                />
              </div>
              <div className="detailtop">
                <div className="d-icon">
                  <div>
                    <img src={IMG_URL + info.icon} />
                  </div>
                </div>
                <div className="d-note">
                  <b>{info.name}</b>
                  <span className="description1">{info.content}</span>
                </div>
              </div>
              <div className="detailbottom">
                <div className="detailrow r1">
                  <div>
                    <div className="value">{info.volatility}</div>
                    <div className="title">Volatility</div>
                  </div>
                  <div>
                    <div className="value">{info.rtp}</div>
                    <div className="title">RTP</div>
                  </div>
                  <div>
                    <div className="value">x{info.maxwin}</div>
                    <div className="title">Maximum Win</div>
                  </div>
                </div>
                <div className="detailrow r2">
                  <div className="cert">
                    <div className="image">
                      <img src="/images/BMM@2x.108098f.png" />
                      <img src="/images/GA@2x.c6a334d.png" />
                    </div>
                    <div className="title">Certification</div>
                  </div>
                  <div className="lang">
                    <div className="image">
                      <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAMAAACVZWnNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADqUExURbi+0N3i7N3n7P///9jY2XZ/rt3i59bV193X10xpcc4QJwAkfc8UK9nZ2f34+NU0SAAbeM0LI9QtQv3z9JemygAge4SVwemOmR47i32PvdpJWtEdM//j5CNAjhk3iNAYL+3w9pKjye/2/OTo8dg9UfW5v+fx+urs842exuiGkQAVdPjZ3eV1grrH39MjOf/q6uh+iuyhqoiaxOFndswCG+6osf/9/cfR5eJufPbR1vrU10tjo/319tUyRvrq7CI5ivT1+D1XnAIjfCk/iqKrwu+xuPPDyN1ZaeqXoU1kpOTk5OTf309mpUZfoEPn2/8AAAAKdFJOU/M2Nv/+Njb+7ACdTPZoAAACE0lEQVRIx9XWa1eqQBQG4KmpNAIdQiAB80JeE000LbOO3bPO//897blgJGAmn3q/uWaexVrj3nsGHe6jjLJFMmj/EB3sPT3qR6shBawdSzJEOtZwgUQ26I9Pezso++4WT4n+O6yT02LjI4uUHMZRvhYz2m9bGaRgmlW+BgM1gPZUVUHKOdO4aZyEeCLWyYmgah6wfRXDEzBQv9G/YHSgAVbVL+4HPBYz6jB6NtAwBmxJlF9zXvFLjMdgnZRatRBleFynvDwMeIvyCOa0azM641sBLyYxvPMdd0ipGtBLQb0FYPJw463y6r9qGMPPJc0JevNAKCYdcu/NKR+pry98seKGsducDuXRSLIEnaN7QBQbkKIxweO6aZptUxw8DmPsvLVh8Vl8FU8AQBRRYTEJ4/gAziXkLsB3STsA5xNyW5ZZyrdJOwBLSZFFEjcAlrfO38WpDizVX5WqSFKVZ9AYPLln2h5vThw+N2l71MehxmAtieaCWhK03nDa/N6SFb768gpdK1n1uRe0JB0G4quXZ9DvdtepFSLDgHN8PSyrlI+9BRsGiwitxo2h1iqf/F8e2CxMEwZgwK9szgWeDSjtXTi11rrR6ws+5Zxh7Yv+NPSNpjh4ygFrgzyj/Ya/yXWz5F2blqegm190ruDsruq1gf7mii26osIyVpRucLkDh9rOfjS2e1a471m0u/2D5gCleUp9ApqQmczf4NMeAAAAAElFTkSuQmCC" />
                      </div>
                      <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAMAAACVZWnNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURdnW1t8hAN8eAP/jAOAmANnZ2eAkANrAvN2IdkxpceQ3AOErAOIxAOVDAPm/AOBIKdunnPOWAP7ZAP/sAOdOAPevAOxoAO9+AOhWAOlaAPanAP3SAPSdAN4ZAOphAPzLAO1yAPKQADBc1dsAAAAKdFJOU/7////////sNgBZVjbfAAABJUlEQVRIx+3W2W6EMAwF0DgJhskGhH2Zhf//ycmIAtV0pBraR/yAENLRxWCE2SWJWXSgWJxcWMKyVL4Vyt8rzQKNsx/XwWiCllnMWPqWh6oZDSmbsWg512oWaJyvKckyWjHaHL6S2wYlEhrfMH/4JRpCywo0FQPn1764XTnHuXvMR4skjLrJp9wLN015N+vS+RJoyWirohBCFKLRcx7cOoXU28bGB+xKvgqkPzA0Qwger3KHXTGvi3svhnU4QClOxtBXlte+5stLH6uW2jOahwbJbb2MqHGDRfKQAC6H0C6ibktFx9++R63LMGWwZzw3bHpncd+HsWFV3Vt5FBvTwVH8emDyMCbXiU984v/HLD1qw8/9w1pBrLBWfFpoSLmvheYvq9QTduktepqfotoAAAAASUVORK5CYII=" />
                      </div>
                    </div>
                    <div className="title">Languages</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="g-button onebutton">
              {isMobile ? (
                <a href={info.link} target="_self">
                  Try Now
                </a>
              ) : (
                <div
                  onClick={() => {
                    if (onOpenGame) onOpenGame(info)
                  }}
                >
                  Try Now
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const List = ({ data }: any) => {
  return (
    <>
      <div className="listed-list">
        <div className="listed-header">
          <div className="w-[28%]">
            <div className="pl-[10px] text-left">Game Name</div>
          </div>
          <div className="w-[10%]">
            <div>Volatility</div>
          </div>
          <div className="w-[13%]">
            <div>RTP</div>
          </div>
          <div className="w-[19%]">
            <div>Maximum Win</div>
          </div>
          <div className="w-[12%]">
            <div>Languages</div>
          </div>
          <div className="w-[18%]">
            <div>Certification</div>
          </div>
        </div>
        <div className="listed-content">
          {data.map((v: any, k: any) => {
            return (
              <div className={`listcol ${k % 2 === 0 ? 'even' : ''}`} key={k}>
                <div className="ripple" />
                <div className="gamelist normal list1">
                  <div className="game-cta">
                    <div className="gamecol game-name w-[28%]">
                      <div>
                        <div>
                          <div className="newgame">
                            <img src="/img/tag_newlist_en@2x.01602bc.png" />
                          </div>
                          <img src={IMG_URL + v.icon} />
                        </div>
                        <span>{v.name}</span>
                      </div>
                    </div>
                    <div className="gamecol volatility w-[10%]">
                      <div />
                      <div>
                        {k % 2 === 0 ? (
                          <div>
                            <span
                              className="en"
                              style={{
                                background: '#ff3f4acc',
                              }}
                            >
                              High
                            </span>
                            <img src="	/img/Volatility_HighNormal@2x.b19f5ce.png" />
                          </div>
                        ) : (
                          <div>
                            <span
                              className="en"
                              style={{
                                background: 'rgba(255, 112, 0, 0.8)',
                              }}
                            >
                              Medium
                            </span>
                            <img src="/img/Volatility_MediumNormal@2x.f166cdc.png" />
                          </div>
                        )}
                      </div>
                      <div />
                    </div>
                    <div className="gamecol rtp w-[13%]">
                      <div>
                        {v.volatility}
                        <span className="light">%</span>
                      </div>
                    </div>
                    <div className="gamecol maximum-win w-[19%]">
                      <div>
                        <span className="light">x</span>
                        {v.maxwin}
                      </div>
                    </div>
                    <div className="gamecol language w-[12%]">
                      <FloatPopover
                        TriggerComponent={() => (
                          <div className="lang-hover">
                            <span>2</span>
                            <span className="arrowdown" />
                          </div>
                        )}
                        wrapperClassName="h-full w-full flex items-center justify-center"
                        type="tooltip"
                        placement="bottom-end"
                        offset={-40}
                      >
                        <div className="flex items-center justify-between gap-10">
                          <div className="text-[12px] d-center">
                            <img
                              className="mr-2 h-5 w-5  rounded-full"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAMAAACVZWnNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADqUExURbi+0N3i7N3n7P///9jY2XZ/rt3i59bV193X10xpcc4QJwAkfc8UK9nZ2f34+NU0SAAbeM0LI9QtQv3z9JemygAge4SVwemOmR47i32PvdpJWtEdM//j5CNAjhk3iNAYL+3w9pKjye/2/OTo8dg9UfW5v+fx+urs842exuiGkQAVdPjZ3eV1grrH39MjOf/q6uh+iuyhqoiaxOFndswCG+6osf/9/cfR5eJufPbR1vrU10tjo/319tUyRvrq7CI5ivT1+D1XnAIjfCk/iqKrwu+xuPPDyN1ZaeqXoU1kpOTk5OTf309mpUZfoEPn2/8AAAAKdFJOU/M2Nv/+Njb+7ACdTPZoAAACE0lEQVRIx9XWa1eqQBQG4KmpNAIdQiAB80JeE000LbOO3bPO//897blgJGAmn3q/uWaexVrj3nsGHe6jjLJFMmj/EB3sPT3qR6shBawdSzJEOtZwgUQ26I9Pezso++4WT4n+O6yT02LjI4uUHMZRvhYz2m9bGaRgmlW+BgM1gPZUVUHKOdO4aZyEeCLWyYmgah6wfRXDEzBQv9G/YHSgAVbVL+4HPBYz6jB6NtAwBmxJlF9zXvFLjMdgnZRatRBleFynvDwMeIvyCOa0azM641sBLyYxvPMdd0ipGtBLQb0FYPJw463y6r9qGMPPJc0JevNAKCYdcu/NKR+pry98seKGsducDuXRSLIEnaN7QBQbkKIxweO6aZptUxw8DmPsvLVh8Vl8FU8AQBRRYTEJ4/gAziXkLsB3STsA5xNyW5ZZyrdJOwBLSZFFEjcAlrfO38WpDizVX5WqSFKVZ9AYPLln2h5vThw+N2l71MehxmAtieaCWhK03nDa/N6SFb768gpdK1n1uRe0JB0G4quXZ9DvdtepFSLDgHN8PSyrlI+9BRsGiwitxo2h1iqf/F8e2CxMEwZgwK9szgWeDSjtXTi11rrR6ws+5Zxh7Yv+NPSNpjh4ygFrgzyj/Ya/yXWz5F2blqegm190ruDsruq1gf7mii26osIyVpRucLkDh9rOfjS2e1a471m0u/2D5gCleUp9ApqQmczf4NMeAAAAAElFTkSuQmCC"
                            />
                            English
                          </div>
                          <div className="text-[12px] d-center">
                            <img
                              className="mr-2 h-5  w-5 rounded-full"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAMAAACVZWnNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURdnW1t8hAN8eAP/jAOAmANnZ2eAkANrAvN2IdkxpceQ3AOErAOIxAOVDAPm/AOBIKdunnPOWAP7ZAP/sAOdOAPevAOxoAO9+AOhWAOlaAPanAP3SAPSdAN4ZAOphAPzLAO1yAPKQADBc1dsAAAAKdFJOU/7////////sNgBZVjbfAAABJUlEQVRIx+3W2W6EMAwF0DgJhskGhH2Zhf//ycmIAtV0pBraR/yAENLRxWCE2SWJWXSgWJxcWMKyVL4Vyt8rzQKNsx/XwWiCllnMWPqWh6oZDSmbsWg512oWaJyvKckyWjHaHL6S2wYlEhrfMH/4JRpCywo0FQPn1764XTnHuXvMR4skjLrJp9wLN015N+vS+RJoyWirohBCFKLRcx7cOoXU28bGB+xKvgqkPzA0Qwger3KHXTGvi3svhnU4QClOxtBXlte+5stLH6uW2jOahwbJbb2MqHGDRfKQAC6H0C6ibktFx9++R63LMGWwZzw3bHpncd+HsWFV3Vt5FBvTwVH8emDyMCbXiU984v/HLD1qw8/9w1pBrLBWfFpoSLmvheYvq9QTduktepqfotoAAAAASUVORK5CYII="
                            />
                            Chinese
                          </div>
                        </div>
                      </FloatPopover>
                    </div>
                    <div className="gamecol certification w-[18%]">
                      <div>
                        <img src="/img/bmm.9f6a044.svg" />
                      </div>
                      <div>
                        <img src="/img/ga.ea45977.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="clear-row" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export const tabbarShow = atom(false)

export const Games = ({ data }: any) => {
  const [tab, setTab] = useState('grid')
  const [nowIndex, setNowIndex] = useState(1)

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const param = useParams()
  const ref = useRef(null)
  const [gameInfo, setGameInfo] = useState<any>(null)
  return (
    <>
      <div className="allgame">
        <div className="mb-5 flex justify-between max-md:ml-[20px] max-md:mt-[50px]">
          <h1 className="my-4 text-[30px] font-bold text-[#000]">ALL Games</h1>
          <div className="touch-dropdown mr-4 md:!hidden">
            <div className="dropdown">
              <div>
                <div
                  className="dropdown-main"
                  onClick={() => {
                    setOpen(!open)
                  }}
                >
                  {param.locale}
                  <div>
                    <div />
                  </div>
                </div>
                {open && (
                  <div
                    className="DialogOverlay"
                    onClick={() => setOpen(false)}
                  />
                )}
                <div
                  className={`options ${
                    open ? 'right-[20px] !h-auto !opacity-[1]' : ''
                  }`}
                >
                  {language.map((v: any, k: number) => {
                    return (
                      <div
                        key={k}
                        onClick={(e) => {
                          e.preventDefault()
                          setActive(k)
                          dayjs.locale(languageDayjs[v.value])
                          router.replace(pathname, { locale: v.value })
                        }}
                      >
                        <a
                          href=""
                          className={
                            v.value === param.locale
                              ? '!font-bold !text-[#ff2d55]'
                              : ''
                          }
                        >
                          {v.label}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            {/* <div className="sort relative d-center">
              <span className="mr-2">Sort By:</span>
              <SortBy
                list={data.setting_data}
                active={active}
                setActive={setActive}
              />
            </div> */}
            <div
              className="relative cursor-pointer d-center"
              onClick={() => {
                jotaiStore.set(searchShow, true)
              }}
            >
              <img src="/img/Icon20_Search.21bc271.svg" />
            </div>
            <div className="sort relative ml-4 flex items-center">
              <span className="mr-4">View :</span>
              <div className="gap-2 text-2xl text-[#B2B2B2] d-center ">
                <i
                  className={` icon-[mingcute--grid-fill] cursor-pointer ${
                    tab === 'grid' ? 'text-[#000]' : ''
                  } hover:text-[#000]`}
                  onClick={() => setTab('grid')}
                />
                <i
                  className={` icon-[mingcute--list-check-3-fill] cursor-pointer hover:text-[#000] ${
                    tab === 'list' ? 'text-[#000]' : ''
                  }`}
                  onClick={() => setTab('list')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-p-2 flex flex-wrap justify-between" ref={ref}>
          {tab === 'grid' &&
            data.map((v: any, k: number) => {
              return (
                <Grid
                  info={v}
                  key={k}
                  onOpenGame={(e: any) => {
                    setGameInfo(e)
                  }}
                />
              )
            })}
          {tab === 'list' && <List data={data} />}
        </div>
      </div>
      {data.length > 20 && (
        <div className="barcover">
          <div
            className="loadmore  !d-center"
            onClick={() => setNowIndex(nowIndex + 1)}
          >
            <div className="loadtext">Load More</div>
            <div className="loadarrow !d-center">
              <i className="icon-[mingcute--add-fill]" />
            </div>
          </div>
        </div>
      )}
      {gameInfo && (
        <GamePlay url={gameInfo.link} onClose={() => setGameInfo(null)} />
      )}
    </>
  )
}

export const TopNav = ({ active, onChange }: any) => {
  const isMobile = useIsMobile()

  return (
    <>
      <div className={isMobile ? 'top-nav' : 'top-nav'}>
        <div className="top-nav-holder w-full">
          <div
            className={clsx(active === 'games' && 'active', 'menubox')}
            onClick={() => onChange && onChange('games')}
          >
            <div>
              <div className="s_icon">
                <img src="/img/Icon20_AllGame.a302cd6.svg" />
              </div>
              <div>ALL GAMES</div>
            </div>
          </div>
          <div
            className={clsx(active === 'timeline' && 'active', 'menubox')}
            onClick={() => onChange && onChange('timeline')}
          >
            <div>
              <div className="s_icon">
                <img src="/img/Icon20_TimeLinePage.5d075c0.svg" />
              </div>
              <div>TIMELINE</div>
            </div>
          </div>
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
              <div>SEARCH</div>
            </div>
          </div>
          <div id="top-nav-space" className="top-nav-space">
            <div style={{ left: active === 'games' ? '0' : '33%' }} />
          </div>
        </div>
      </div>
    </>
  )
}
