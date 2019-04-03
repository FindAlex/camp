const mysql = require('mysql')
const config = {
  // 数据库配置
  db: {
    DATABASE: 'db_ty',
    USERNAME: 'root',
    PASSWORD: 'root',
    PORT: '8099',
    HOST: 'localhost'
  }
}

//连接
// export const db = mysql.createConnection({
//   ...config.db
// })

//连接池
const pool = mysql.createPool({
  host: config.db.HOST,
  user: config.db.USERNAME,
  password: config.db.PASSWORD,
  database: config.db.DATABASE
})

//执行sql
const query = async(sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        conn.release()
        reject(err)
      }
      conn.query(sql, values, (err, rows) => {
        conn.release()
        if (err) reject(err)
        else resolve(rows)
      })
    })
  })
}
module.exports = {
  pool,
  query
}
