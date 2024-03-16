import type { NextRequest } from 'next/server'

import { translate } from '~/app/admin/util/util'
import { locales } from '~/i18n'
import Game from '~/modal/game'

export async function POST(request: Request) {
  const res = await request.json()
  console.log('🚀 ~ POST ~ res:', res)
  if (res?.name_lg?.length > 0 && locales?.length > 0) {
    const name: any = {}
    for (const item of res?.name_lg || locales) {
      name[item] = await translate(res.name, item)
    }
    res.name = name
  }
  if (res?.volatility_lg?.length > 0 && locales?.length > 0) {
    const name: any = {}
    for (const item of res?.volatility_lg || locales) {
      name[item] = await translate(res.volatility, item)
    }
    res.volatility = name
  }

  if (res?.content_lg?.length > 0 && locales?.length > 0) {
    const name: any = {}
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

    await Game.update(data, { where: { id: res.id } })
    return Response.json({ code: 1, msg: '更新成功' })
  } catch (e: any) {
    console.log('🚀 ~ POST ~ e:', e)
    return Response.json({
      code: 0,
      error: e?.error?.errors.message || '数据异常',
    })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const item = await Game.findByPk(id)
  if (!item) {
    return Response.json({
      code: 0,
      msg: '未找到该数据',
    })
  } else {
    try {
      await Game.destroy({ where: { id } })
      return Response.json({ code: 1, msg: '更新成功' })
    } catch (e: any) {
      return Response.json({
        code: 0,
        error: e?.error?.errors.message || '数据异常',
      })
    }
  }
}
