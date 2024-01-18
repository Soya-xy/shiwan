import { tmt } from 'tencentcloud-sdk-nodejs-tmt'

import { locales } from '~/i18n'
import Game from '~/modal/game'

const TmtClient = tmt.v20180321.Client

const clientConfig = {
  credential: {
    secretId: 'AKIDT4iaaqBUhvHXvSuR1y3GbAjTCKfN4scL',
    secretKey: 'tPBstDRhvMj4HNLTnVI2qc4WB70mdaij',
  },
  region: 'ap-beijing',
  profile: {
    httpProfile: {
      endpoint: 'tmt.tencentcloudapi.com',
    },
  },
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function translate_caiyun(raw, type) {
  const client = new TmtClient(clientConfig)
  const params = {
    SourceText: raw,
    Source: 'auto',
    Target: type,
    ProjectId: 0,
  }
  await sleep(500)
  console.log(raw, type)
  const res = await client.TextTranslate(params)
  if (res.TargetText) return res.TargetText
  else return 'translator error'
}

export async function POST(request) {
  const res = await request.json()
  if (res?.name_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.name_lg || locales) {
      name[item] = await translate_caiyun(res.name, item)
    }
    res.name = name
  }
  if (res?.volatility_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.volatility_lg || locales) {
      name[item] = await translate_caiyun(res.volatility, item)
    }
    res.volatility = name
  }

  if (res?.content_lg?.length > 0 || locales?.length > 0) {
    const name = {}
    for (const item of res?.content_lg || locales) {
      name[item] = await translate_caiyun(res.content, item)
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
