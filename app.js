const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// TODO: for deployment purposes
app.get('/health', (req, res) => {
  // eslint-disable-next-line
  if (true) throw "error... ";

  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`);
})
