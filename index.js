const server = require('./server.js');

const PORT = process.env.PORT || 5200

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
})