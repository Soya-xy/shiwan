import { DataTypes } from 'sequelize'

import { db } from '~/lib/db'

const Game = db.define('Game', {
  name: {
    type: DataTypes.JSON,
    allowNull: false,
    comment: '游戏名称',
  },
  content: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '游戏介绍',
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '游戏链接',
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '游戏图片',
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '游戏图标',
  },
  isNew: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: '是否新游戏',
    defaultValue: false,
  },
  isHot: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: '是否热门游戏',
    defaultValue: false,
  },
  volatility: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: '波动性',
  },
  rtp: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'RTP',
  },
  maxwin: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '最大赢取',
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '颜色',
  },
})

export default Game
