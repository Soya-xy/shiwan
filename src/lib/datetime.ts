import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(customParseFormat)
dayjs.extend(LocalizedFormat)

export enum DateFormat {
  'MMM DD YYYY',
  'HH:mm',
  'LLLL',
  'H:mm:ss A',
  'YYYY-MM-DD',
  'YYYY-MM-DD dddd',
  'YYYY-MM-DD ddd',
  'MM-DD ddd',
  'YYYY 年 M 月 D 日 dddd',
}

export const parseDate = (
  time: string | Date,
  format: keyof typeof DateFormat,
) => dayjs(time).format(format)

export const relativeTimeFromNow = (
  time: Date | string,
  current = new Date(),
) => {
  if (!time) {
    return ''
  }
  time = new Date(time)
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = +current - +time

  if (elapsed < msPerMinute) {
    const gap = Math.ceil(elapsed / 1000)
    return gap <= 0 ? '刚刚' : `${gap} 秒前`
  } else if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} 分钟前`
  } else if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} 小时前`
  } else if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} 天前`
  } else if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} 个月前`
  } else {
    return `${Math.round(elapsed / msPerYear)} 年前`
  }
}
export const dayOfYear = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  return day
}

export function daysOfYear(year?: number) {
  return isLeapYear(year ?? new Date().getFullYear()) ? 366 : 365
}

export function isLeapYear(year: number) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}

export const secondOfDay = () => {
  const dt = new Date()
  const secs = dt.getSeconds() + 60 * (dt.getMinutes() + 60 * dt.getHours())
  return secs
}

export const secondOfDays = 86400

export const calcTime = () => {
  // 获取当前日期
  const currentDate = dayjs()

  // 生成3年前到今天的月份
  const result: any = {}
  for (let i = 0; i < 4; i++) {
    const year = currentDate.subtract(i, 'year').year()
    const months = Array.from({ length: 12 }, (_, index) => index + 1).reverse()

    // 如果是当前年份，只获取到当前月份
    const endMonth = year === currentDate.year() ? currentDate.month() + 1 : 12

    result[year] = months.slice(0, endMonth).map((month) =>
      dayjs()
        .year(year)
        .month(month - 1)
        .format('M月'),
    )
  }
  return Object.entries(result).sort(
    (a, b) => parseInt(b[0], 10) - parseInt(a[0], 10),
  )
}
