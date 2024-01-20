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
      v.name = JSON.parse(v.name)[locale]
      v.content = JSON.parse(v.content)[locale]
      v.volatility = JSON.parse(v.volatility)[locale]
      return v
    })
    return Response.json(game)
  } else {
    return Response.json([])
  }
}
