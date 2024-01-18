import { Sequelize } from 'sequelize'

const {
  DB_TYPE = 'mysql',
  DB_HOST = '127.0.0.1',
  DB_PORT = 3306,
  DB_NAME = 'test',
  DB_USER = 'root',
  DB_PASS = '123456',
}: any = process.env

export const db = new Sequelize({
  dialect: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  dialectModule: require('mysql2'),
})

;(async () => {
  try {
    await db.authenticate()
    await db.sync({
      alter: { drop: false },
      // logging: console.warn,
    })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()
