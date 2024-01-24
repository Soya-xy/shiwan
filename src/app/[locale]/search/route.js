import { Op } from 'sequelize'

import Game from '~/modal/game'

export async function GET(e, { params: { locale } }) {
  const params = e.nextUrl.searchParams
  const name = params.get('name')
  if (name) {
    const game = await Game.findAll({
      where: {
        name: {
          [Op.substring]: name,
        },
      },
    })
    game.map((v) => {
      v.name = v.name[locale]
      v.content = v.content[locale]
      v.volatility = v.volatility[locale]
      return v
    })
    return Response.json(game)
  } else {
    return Response.json([])
  }
}
