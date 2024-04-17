const
  app = require('express')(),
  PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.end('success'));
app.get('/captcha', (req, res) => {

  res.end('End point is working, Go further..')
})


app.listen(PORT, console.info(`Server is running on port ${PORT}`));

