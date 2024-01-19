import Banner from '~/modal/banner'
import Game from '~/modal/game'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(_e, { params: { locale } }) {
  const game = await Game.findAll()
  game.map((v) => {
    v.name = JSON.parse(v.name)[locale]
    v.content = JSON.parse(v.content)[locale]
    v.volatility = JSON.parse(v.volatility)[locale]
    return v
  })

  const banner = await Banner.findAll()
  return Response.json({ game, banner })
}
