import { unser } from '~/lib/_'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(e, { params: { locale } }) {
  const res = await fetch('http://ps.xiaoyio.com/indexApi')
  const data = await res.json()
  const newDate = {}
  newDate['banner_list'] = data.banner_list.map((v) => {
    return {
      ...v,
      title: unser(v.title)[locale],
      img: unser(v.img),
      banner_info: unser(v.banner_info)[locale],
      sort: unser(v.sort)[locale],
    }
  })
  newDate['setting_data'] = data.setting_data.map((v) => {
    return {
      ...v,
      name: unser(v.name)[locale],
    }
  })

  newDate['game_list'] = data.game_list.map((v) => {
    return {
      ...v,
      name: unser(v.name)[locale],
      img_type: unser(v.img_type)[locale],
      content: unser(v.content)[locale],
    }
  })
  return Response.json({ data: newDate })
}
