
const mongoose = require('mongoose')

const DB_PASSWORD = 'kodemia123'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://charles:${DB_PASSWORD}@sexta-gen-bctjg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
