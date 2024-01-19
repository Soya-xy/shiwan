import { DataTypes } from 'sequelize'

import { db } from '~/lib/db'

const Banner = db.define('Banner', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '轮播图名称',
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '轮播图内容',
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '轮播图链接',
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '轮播图图片',
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '轮播图图标',
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '颜色',
  },
})

export default Banner
