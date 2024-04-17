const app = require('express')();

app.get('/', (req, res)=> res.end('success'));
app.get('captcha', (req, res)=> {

  res.end('End point is working, Go further..')
})


app.listen(PORT, console.info(`Server is running on port ${PORT}`));

