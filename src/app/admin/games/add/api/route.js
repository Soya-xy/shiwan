import { translate } from '~/app/admin/util/util'
import { locales } from '~/i18n'
import Game from '~/modal/game'

export async function POST(request) {
  const res = await request.json()
  if (res?.name_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.name_lg || locales) {
      name[item] = await translate(res.name, item)
    }
    res.name = name
  }
  if (res?.volatility_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.volatility_lg || locales) {
      name[item] = await translate(res.volatility, item)
    }
    res.volatility = name
  }

  if (res?.content_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.content_lg || locales) {
      name[item] = await translate(res.content, item)
    }
    res.content = name
  }
  try {
    const data = res
    delete data.name_lg
    delete data.volatility_lg
    delete data.content_lg
    await Game.create(data)
    return Response.json({ code: 1, msg: '创建成功' })
  } catch (e) {
    return Response.json({
      code: 0,
      error: e?.error?.errors.message || '数据异常',
    })
  }
}
