
const express = require('express')
const app = express()
const port = 3001
//Cái '/' sau get là trỏ địa chỉ để trình duyệt duyệt, VD thay / bằng /trang-chu
// thì phai duyệt địa chỉ localhost:3001/trang-chu thì mới lấy được dòng text Hello World!
app.get('/du-cha-may', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})