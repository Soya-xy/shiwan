import Game from '~/modal/game'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  const game = await Game.findAll()
  game.map((v) => {
    v.name = JSON.parse(v.name)['zh']
    v.content = JSON.parse(v.content)['zh']
    v.volatility = JSON.parse(v.volatility)['zh']
    return v
  })
  return Response.json(game)
}
