import type { NextRequest } from 'next/server'

import Banner from '~/modal/banner'

export async function POST(request: Request) {
  const res = await request.json()
  try {
    await Banner.update(res, { where: { id: res.id } })
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
  const item = await Banner.findByPk(id)
  if (!item) {
    return Response.json({
      code: 0,
      msg: '未找到该数据',
    })
  } else {
    try {
      await Banner.destroy({ where: { id } })
      return Response.json({ code: 1, msg: '更新成功' })
    } catch (e: any) {
      console.log('🚀 ~ POST ~ e:', e)
      return Response.json({
        code: 0,
        error: e?.error?.errors.message || '数据异常',
      })
    }
  }
}
