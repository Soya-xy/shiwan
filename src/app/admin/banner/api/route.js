import Banner from '~/modal/banner'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  let game
  if (id) {
    game = await Banner.findByPk(id)
  } else {
    game = await Banner.findAll()
  }
  return Response.json(game)
}
