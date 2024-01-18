import { writeFileSync } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File
  const fileBuffer = await file.arrayBuffer()
  const filePath = path.join(process.cwd(), `/public/upload/${file.name}`)

  try {
    await writeFileSync(filePath, Buffer.from(fileBuffer))
    return Response.json({ url: `/upload/${file.name}` })
  } catch (e) {
    return Response.json({ error: e })
  }
}
