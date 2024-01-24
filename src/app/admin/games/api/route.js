import Game from '~/modal/game'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  let game
  if (id) {
    game = await Game.findByPk(id)
    game.name = game.name['zh']
    game.content = game.content['zh']
    game.volatility = game.volatility['zh']
  } else {
    game = await Game.findAll()
    game.map((v) => {
      v.name = v.name['zh']
      v.content = v.content['zh']
      v.volatility = v.volatility['zh']
      return v
    })
  }
  return Response.json(game)
}
