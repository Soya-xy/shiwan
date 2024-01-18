'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { useRouter } from '~/i18n'

export const Micro = ({
  list,
  active,
  setActive,
  hidden,
  showMenu,
  setShowMenu,
}: any) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!hidden) {
      setOpen(false)
    }
  }, [hidden])
  return (
    <>
      <div className="logo">
        <div style={{ backgroundImage: 'url(/svg/logo.svg)' }}>
          <a />
        </div>
      </div>
      <div className="touch-dropdown">
        <div className="dropdown">
          <div>
            <div
              className="dropdown-main"
              onClick={() => {
                setOpen(!open)
              }}
            >
              GAMES
              <div>
                <div />
              </div>
            </div>
            {open && (
              <div className="DialogOverlay" onClick={() => setOpen(false)} />
            )}
            <div className={`options ${open ? '!h-auto !opacity-[1]' : ''}`}>
              {list.map((v: any, k: number) => {
                return (
                  <div
                    key={k}
                    onClick={() => {
                      setActive(k)
                      router.replace(v.url)
                    }}
                  >
                    <a
                      href=""
                      className={
                        active === k ? '!font-bold !text-[#ff2d55]' : ''
                      }
                    >
                      {v.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="menu-right">
        <div className="scroll-enquiry">
          <div
            className={clsx('button', showMenu && 'active')}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="button-cover">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="bg" />
    </>
  )
}
