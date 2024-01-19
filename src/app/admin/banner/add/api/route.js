import Banner from '~/modal/banner'

export async function POST(request) {
  const res = await request.json()
  try {
    await Banner.create(res)
    return Response.json({ code: 1, msg: '创建成功' })
  } catch (e) {
    return Response.json({
      code: 0,
      error: e?.error?.errors.message || '数据异常',
    })
  }
}
