import Game from '~/modal/game'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  console.log('🚀 ~ GET ~ id:', id)
  let game
  if (id) {
    game = await Game.findByPk(id)
    game.name = JSON.parse(game.name)['zh']
    game.content = JSON.parse(game.content)['zh']
    game.volatility = JSON.parse(game.volatility)['zh']
  } else {
    game = await Game.findAll()
    game.map((v) => {
      v.name = JSON.parse(v.name)['zh']
      v.content = JSON.parse(v.content)['zh']
      v.volatility = JSON.parse(v.volatility)['zh']
      return v
    })
  }
  return Response.json(game)
}
