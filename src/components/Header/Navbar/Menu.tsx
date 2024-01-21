'use client'

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { useParams } from 'next/navigation'

import { useAudioPlayer } from '~/hooks/shared/use-audio'
import { usePathname, useRouter } from '~/i18n'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import 'dayjs/locale/id'
import 'dayjs/locale/ko'
import 'dayjs/locale/ms'
import 'dayjs/locale/vi'
import 'dayjs/locale/ja'
import 'dayjs/locale/ru'

export const language = [
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '简中' },
  { value: 'id', label: 'Indonesia' },
  { value: 'ko', label: '한국어' },
  { value: 'ms', label: 'Melayu' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'ja', label: '日本語' },
  { value: 'ru', label: 'РУССКИЙ' },
]

const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={clsx('flex items-center justify-between', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)

export const languageDayjs: any = {
  zh: 'zh-cn',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  id: 'id',
  ms: 'ms',
  vi: 'vi',
  ru: 'ru',
}
export function Menu({ dark = false }: { dark: boolean }) {
  console.log('🚀 ~ Menu ~ dark:', dark)
  const containerRef = useRef(null)
  const [isOpen] = useState(false)
  const { play } = useAudioPlayer('/music/click.wav')
  const { play: removePlay } = useAudioPlayer('/music/remove.wav')

  const router = useRouter()
  const param = useParams()
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen && containerRef) {
      play()
    } else {
      removePlay()
    }
  }, [isOpen])

  if (param.locale) dayjs.locale(languageDayjs[param.locale as any] as any)

  return (
    <div className="flex items-center">
      {/* i18n */}
      <Select.Root
        defaultValue={param.locale as string}
        onValueChange={(e) => {
          dayjs.locale(languageDayjs[e])
          router.push(pathname, { locale: e })
        }}
        onOpenChange={(e) => {
          if (e) {
            play()
          } else {
            removePlay()
          }
        }}
      >
        <Select.Trigger
          className={clsx(
            'relative mr-10 flex items-center justify-between rounded border px-2 py-1',
            !dark ? 'text-white' : 'text-black',
          )}
          aria-label="Food"
        >
          <Select.Value placeholder="EN" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            align="center"
            sideOffset={5}
            className="rounded-xl border bg-[#ffffff3d] px-2"
          >
            <Select.Viewport className="">
              <Select.Group>
                {language.map((v, k) => {
                  return (
                    <SelectItem
                      value={v.value}
                      key={k}
                      className={clsx(
                        'cursor-pointer p-2  hover:bg-[#ffffff1f]',
                        !dark ? 'text-white' : 'text-black',
                      )}
                    >
                      {v.label}
                    </SelectItem>
                  )
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
