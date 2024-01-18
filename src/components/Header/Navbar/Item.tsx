import clsx from 'clsx'

import { useIsMobile } from '~/atoms'
import { useRouter } from '~/i18n'

export function Item({
  active = 0,
  menuList,
  onChange,
}: {
  active: number
  menuList: Record<string, any>[]
  onChange?: (e: any) => void
}) {
  const router = useRouter()
  const isMobile = useIsMobile()
  if (menuList.length <= 0) return undefined
  return (
    <>
      {menuList.map((item, idx) => {
        if (isMobile) {
          return (
            <div
              className={clsx(
                `mx-7 flex items-center justify-center gap-12 py-3 font-sans text-xl font-medium text-[#ffffff80] hover:text-white sm:gap-0`,
                active === idx && `text-white `,
              )}
              onClick={() => {
                onChange && onChange(item)
                router.replace(item.url)
              }}
              key={idx}
            >
              <button className="cursor-pointer">{item.name}</button>
            </div>
          )
        } else {
          return (
            <div
              className={clsx(
                `relative mx-7 flex h-[90px] items-center gap-12 font-sans text-xl  text-[#ffffff80] hover:text-white sm:gap-0`,
                active === idx && `nav-item-active text-white`,
                'nav-item',
              )}
              onClick={() => {
                onChange && onChange(item)
                router.replace(item.url)
              }}
              key={idx}
            >
              <button className="cursor-pointer">{item.name}</button>
            </div>
          )
        }
      })}
    </>
  )
}
