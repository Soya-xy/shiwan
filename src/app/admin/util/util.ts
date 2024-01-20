import { tmt } from 'tencentcloud-sdk-nodejs-tmt'

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

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export async function translate(raw: string, type: string) {
  const client = new TmtClient(clientConfig)
  const params = {
    SourceText: raw,
    Source: 'auto',
    Target: type,
    ProjectId: 0,
  }
  await sleep(500)
  const res = await client.TextTranslate(params)
  if (res.TargetText) return res.TargetText
  else return 'translator error'
}
